import { NextResponse } from "next/server";

import { authenticatePortalUser } from "@/services/auth";

export const runtime = "nodejs";

type LoginRequestBody = {
  identifier?: string;
  password?: string;
};

export async function POST(request: Request) {
  let body: LoginRequestBody;

  try {
    body = (await request.json()) as LoginRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const identifier = (body.identifier ?? "").trim();
  const password = body.password ?? "";

  if (!identifier) {
    return NextResponse.json({ error: "User ID or official email is required." }, { status: 400 });
  }

  if (!password || password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  try {
    const auth = await authenticatePortalUser(identifier, password);
    if (!auth) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const response = NextResponse.json({
      ok: true,
      role: auth.role,
      redirectPath: auth.redirectPath,
    });

    response.cookies.set("portal_user_id", auth.userId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    response.cookies.set("portal_user_role", auth.role, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to process login." },
      { status: 500 },
    );
  }
}
