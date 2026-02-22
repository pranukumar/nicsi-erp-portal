import { getHeaderAnnouncements } from "@/services/siteContent";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const announcements = await getHeaderAnnouncements();
  return NextResponse.json({ announcements });
}
