import { getActorFromHeaders, isAllowedRole, unauthorizedResponse } from "@/lib/rbac";
import { rejectHomeTrackRequest } from "@/services/workflow";
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
    return unauthorizedResponse("Role is not allowed to reject requests.");
  }

  const { requestId } = await context.params;
  const parsedRequestId = Number(requestId);
  if (!Number.isInteger(parsedRequestId) || parsedRequestId <= 0) {
    return NextResponse.json({ error: "Invalid request id." }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  const reviewNote = typeof body?.reviewNote === "string" ? body.reviewNote.trim() : "";
  if (!reviewNote) {
    return NextResponse.json({ error: "reviewNote is required for rejection." }, { status: 400 });
  }

  try {
    const result = await rejectHomeTrackRequest(actor, parsedRequestId, reviewNote);
    return NextResponse.json({ success: true, requestId: result.requestId });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to reject request." },
      { status: 400 },
    );
  }
}
