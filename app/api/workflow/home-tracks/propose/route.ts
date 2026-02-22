import { getActorFromHeaders, isAllowedRole, unauthorizedResponse } from "@/lib/rbac";
import { createHomeTrackProposal } from "@/services/workflow";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function validateBody(body: unknown) {
  if (!body || typeof body !== "object") {
    return "Invalid request body.";
  }

  const payload = body as Record<string, unknown>;
  const requiredStrings = ["actionType", "title", "description", "href", "iconKey", "reason"];
  for (const key of requiredStrings) {
    if (typeof payload[key] !== "string" || String(payload[key]).trim().length === 0) {
      return `Invalid ${key}.`;
    }
  }

  if (typeof payload.displayOrder !== "number") {
    return "Invalid displayOrder.";
  }

  if (typeof payload.isActive !== "boolean") {
    return "Invalid isActive.";
  }

  const actionType = String(payload.actionType);
  if (!["create", "update", "deactivate"].includes(actionType)) {
    return "Invalid actionType.";
  }

  const iconKey = String(payload.iconKey);
  if (!["building", "globe", "cloud", "file"].includes(iconKey)) {
    return "Invalid iconKey.";
  }

  return null;
}

export async function POST(request: NextRequest) {
  const actor = getActorFromHeaders(request.headers);
  if (!actor) {
    return unauthorizedResponse("Missing x-user-id or x-user-role.");
  }

  if (!isAllowedRole(actor.role, ["content_editor", "approver", "publisher", "admin"])) {
    return unauthorizedResponse("Role is not allowed to create proposals.");
  }

  const body = await request.json();
  const validationError = validateBody(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
    const payload = body as {
      targetTrackId?: number;
      actionType: "create" | "update" | "deactivate";
      title: string;
      description: string;
      href: string;
      iconKey: "building" | "globe" | "cloud" | "file";
      displayOrder: number;
      isActive: boolean;
      reason: string;
    };

    const result = await createHomeTrackProposal(actor, payload);
    return NextResponse.json({ success: true, requestId: result.requestId }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create proposal." },
      { status: 500 },
    );
  }
}
