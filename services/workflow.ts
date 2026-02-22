import type { PoolClient } from "pg";

import { getPool } from "@/lib/postgres";
import type { WorkflowActor } from "@/lib/rbac";

export type HomeTrackActionType = "create" | "update" | "deactivate";

export type HomeTrackProposalInput = {
  targetTrackId?: number;
  actionType: HomeTrackActionType;
  title: string;
  description: string;
  href: string;
  iconKey: "building" | "globe" | "cloud" | "file";
  displayOrder: number;
  isActive: boolean;
  reason: string;
};

export type PendingRequest = {
  id: number;
  targetTrackId: number | null;
  actionType: HomeTrackActionType;
  title: string;
  description: string;
  href: string;
  iconKey: "building" | "globe" | "cloud" | "file";
  displayOrder: number;
  isActive: boolean;
  reason: string;
  requestedBy: string;
  requestedAt: string;
};

function assertPool() {
  const pool = getPool();
  if (!pool) {
    throw new Error("DATABASE_URL is not configured.");
  }
  return pool;
}

async function logAction(
  client: PoolClient,
  actor: WorkflowActor,
  action: string,
  entityType: string,
  entityId: number,
  details: string,
) {
  await client.query(
    `
      INSERT INTO workflow_audit_logs (actor_user_id, actor_role, action, entity_type, entity_id, details)
      VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [actor.userId, actor.role, action, entityType, entityId, details],
  );
}

export async function createHomeTrackProposal(actor: WorkflowActor, input: HomeTrackProposalInput) {
  const pool = assertPool();
  const result = await pool.query<{ id: number }>(
    `
      INSERT INTO home_track_change_requests (
        target_track_id,
        action_type,
        title,
        description,
        href,
        icon_key,
        display_order,
        is_active,
        reason,
        status,
        requested_by
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'pending',$10)
      RETURNING id
    `,
    [
      input.targetTrackId ?? null,
      input.actionType,
      input.title,
      input.description,
      input.href,
      input.iconKey,
      input.displayOrder,
      input.isActive,
      input.reason,
      actor.userId,
    ],
  );

  const requestId = result.rows[0].id;
  const client = await pool.connect();
  try {
    await logAction(client, actor, "create_request", "home_track_change_request", requestId, input.reason);
  } finally {
    client.release();
  }

  return { requestId };
}

export async function listPendingHomeTrackRequests(): Promise<PendingRequest[]> {
  const pool = assertPool();
  const result = await pool.query<{
    id: number;
    target_track_id: number | null;
    action_type: HomeTrackActionType;
    title: string;
    description: string;
    href: string;
    icon_key: "building" | "globe" | "cloud" | "file";
    display_order: number;
    is_active: boolean;
    reason: string;
    requested_by: string;
    requested_at: string;
  }>(
    `
      SELECT
        id,
        target_track_id,
        action_type,
        title,
        description,
        href,
        icon_key,
        display_order,
        is_active,
        reason,
        requested_by,
        requested_at
      FROM home_track_change_requests
      WHERE status = 'pending'
      ORDER BY requested_at ASC
    `,
  );

  return result.rows.map((row) => ({
    id: row.id,
    targetTrackId: row.target_track_id,
    actionType: row.action_type,
    title: row.title,
    description: row.description,
    href: row.href,
    iconKey: row.icon_key,
    displayOrder: row.display_order,
    isActive: row.is_active,
    reason: row.reason,
    requestedBy: row.requested_by,
    requestedAt: row.requested_at,
  }));
}

export async function approveHomeTrackRequest(actor: WorkflowActor, requestId: number, reviewNote: string | null) {
  const pool = assertPool();
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const requestResult = await client.query<{
      id: number;
      target_track_id: number | null;
      action_type: HomeTrackActionType;
      title: string;
      description: string;
      href: string;
      icon_key: "building" | "globe" | "cloud" | "file";
      display_order: number;
      is_active: boolean;
      status: string;
    }>(
      `
        SELECT id, target_track_id, action_type, title, description, href, icon_key, display_order, is_active, status
        FROM home_track_change_requests
        WHERE id = $1
        FOR UPDATE
      `,
      [requestId],
    );

    const request = requestResult.rows[0];
    if (!request) {
      throw new Error("Request not found.");
    }

    if (request.status !== "pending") {
      throw new Error("Only pending requests can be approved.");
    }

    let trackId = request.target_track_id;
    if (request.action_type === "create") {
      const insertResult = await client.query<{ id: number }>(
        `
          INSERT INTO home_key_tracks (title, description, href, icon_key, display_order, is_active)
          VALUES ($1,$2,$3,$4,$5,$6)
          RETURNING id
        `,
        [
          request.title,
          request.description,
          request.href,
          request.icon_key,
          request.display_order,
          request.is_active,
        ],
      );
      trackId = insertResult.rows[0].id;
    } else if (request.action_type === "update") {
      if (!trackId) {
        throw new Error("Target track id is required for update requests.");
      }

      await client.query(
        `
          UPDATE home_key_tracks
          SET
            title = $1,
            description = $2,
            href = $3,
            icon_key = $4,
            display_order = $5,
            is_active = $6,
            updated_at = NOW()
          WHERE id = $7
        `,
        [
          request.title,
          request.description,
          request.href,
          request.icon_key,
          request.display_order,
          request.is_active,
          trackId,
        ],
      );
    } else if (request.action_type === "deactivate") {
      if (!trackId) {
        throw new Error("Target track id is required for deactivate requests.");
      }

      await client.query(
        `
          UPDATE home_key_tracks
          SET is_active = false, updated_at = NOW()
          WHERE id = $1
        `,
        [trackId],
      );
    }

    await client.query(
      `
        UPDATE home_track_change_requests
        SET status = 'approved', approved_by = $1, reviewed_at = NOW(), review_note = $2, target_track_id = COALESCE(target_track_id, $3)
        WHERE id = $4
      `,
      [actor.userId, reviewNote, trackId, requestId],
    );

    await logAction(
      client,
      actor,
      "approve_request",
      "home_track_change_request",
      requestId,
      reviewNote ?? "Approved",
    );

    await client.query("COMMIT");
    return { requestId, trackId };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

export async function rejectHomeTrackRequest(actor: WorkflowActor, requestId: number, reviewNote: string) {
  const pool = assertPool();
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const requestResult = await client.query<{ id: number; status: string }>(
      `
        SELECT id, status
        FROM home_track_change_requests
        WHERE id = $1
        FOR UPDATE
      `,
      [requestId],
    );

    const request = requestResult.rows[0];
    if (!request) {
      throw new Error("Request not found.");
    }

    if (request.status !== "pending") {
      throw new Error("Only pending requests can be rejected.");
    }

    await client.query(
      `
        UPDATE home_track_change_requests
        SET status = 'rejected', approved_by = $1, reviewed_at = NOW(), review_note = $2
        WHERE id = $3
      `,
      [actor.userId, reviewNote, requestId],
    );

    await logAction(client, actor, "reject_request", "home_track_change_request", requestId, reviewNote);
    await client.query("COMMIT");
    return { requestId };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}
