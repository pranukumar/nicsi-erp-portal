import { NextRequest, NextResponse } from "next/server";
import {
  createInternshipApplication,
  InternshipApplicationInput,
  isApplicationWindowOpen,
  validateInternshipApplication,
} from "@/services/internshipApplications";

export const runtime = "nodejs";

function extractClientIp(request: NextRequest): string | undefined {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip") ?? undefined;
}

export async function POST(request: NextRequest) {
  if (!isApplicationWindowOpen()) {
    return NextResponse.json(
      { error: "Applications are accepted online from 1st to 10th of every month only." },
      { status: 403 },
    );
  }

  let body: InternshipApplicationInput;
  try {
    body = (await request.json()) as InternshipApplicationInput;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const validationError = validateInternshipApplication(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
    const result = await createInternshipApplication(body, {
      ipAddress: extractClientIp(request),
      userAgent: request.headers.get("user-agent") ?? undefined,
    });
    return NextResponse.json(
      {
        success: true,
        applicationId: result.id,
        message: "Application submitted successfully.",
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to submit application.";
    const knownMessage =
      message.includes("already exists") ||
      message.includes("Too many submissions") ||
      message.includes("DATABASE_URL");
    if (knownMessage) {
      return NextResponse.json({ error: message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Application submission failed due to a server issue." },
      { status: 500 },
    );
  }
}
