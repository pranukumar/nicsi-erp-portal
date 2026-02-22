import { getActorFromHeaders, isAllowedRole, unauthorizedResponse } from "@/lib/rbac";
import { approveHomeTrackRequest } from "@/services/workflow";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ requestId: string }> },
) {
  const actor = getActorFromHeaders(request.headers);
  if (!actor) {
    return unauthorizedResponse("Missing x-user-id or x-user-role.");
  }

  if (!isAllowedRole(actor.role, ["approver", "publisher", "admin"])) {
    return unauthorizedResponse("Role is not allowed to approve requests.");
  }

  const { requestId } = await context.params;
  const parsedRequestId = Number(requestId);
  if (!Number.isInteger(parsedRequestId) || parsedRequestId <= 0) {
    return NextResponse.json({ error: "Invalid request id." }, { status: 400 });
  }

  let reviewNote: string | null = null;
  try {
    const body = await request.json();
    if (body && typeof body.reviewNote === "string" && body.reviewNote.trim().length > 0) {
      reviewNote = body.reviewNote.trim();
    }
  } catch {
    // Body is optional.
  }

  try {
    const result = await approveHomeTrackRequest(actor, parsedRequestId, reviewNote);
    return NextResponse.json({ success: true, requestId: result.requestId, trackId: result.trackId });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to approve request." },
      { status: 400 },
    );
  }
}
