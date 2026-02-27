import { NextResponse } from "next/server";
import { getInternshipContent } from "@/services/internship";

export async function GET() {
  const content = await getInternshipContent();
  return NextResponse.json(content);
}

