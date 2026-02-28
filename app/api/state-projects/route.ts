import { NextRequest, NextResponse } from "next/server";
import {
  createStateProject,
  StateProjectInput,
  validateStateProjectInput,
} from "@/services/stateProjects";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: StateProjectInput;
  try {
    body = (await request.json()) as StateProjectInput;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const validationError = validateStateProjectInput(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
    const result = await createStateProject(body);
    return NextResponse.json(
      {
        success: true,
        id: result.id,
        message: "State project entry submitted successfully.",
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to submit project entry.";
    const knownMessage = message.includes("DATABASE_URL");
    if (knownMessage) {
      return NextResponse.json({ error: message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Project entry submission failed due to a server issue." },
      { status: 500 },
    );
  }
}
