import { NextResponse } from "next/server";

export type UserRole = "content_editor" | "approver" | "publisher" | "admin";

export type WorkflowActor = {
  userId: string;
  role: UserRole;
};

export function getActorFromHeaders(headers: Headers): WorkflowActor | null {
  const userId = headers.get("x-user-id");
  const role = headers.get("x-user-role") as UserRole | null;

  if (!userId || !role) {
    return null;
  }

  if (!["content_editor", "approver", "publisher", "admin"].includes(role)) {
    return null;
  }

  return { userId, role };
}

export function isAllowedRole(role: UserRole, allowed: UserRole[]): boolean {
  return allowed.includes(role);
}

export function unauthorizedResponse(message: string) {
  return NextResponse.json({ error: message }, { status: 403 });
}
