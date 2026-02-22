import { getActorFromHeaders, isAllowedRole, unauthorizedResponse } from "@/lib/rbac";
import { listPendingHomeTrackRequests } from "@/services/workflow";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const actor = getActorFromHeaders(request.headers);
  if (!actor) {
    return unauthorizedResponse("Missing x-user-id or x-user-role.");
  }

  if (!isAllowedRole(actor.role, ["approver", "publisher", "admin"])) {
    return unauthorizedResponse("Role is not allowed to review pending requests.");
  }

  try {
    const pending = await listPendingHomeTrackRequests();
    return NextResponse.json({ pending });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load pending requests." },
      { status: 500 },
    );
  }
}
