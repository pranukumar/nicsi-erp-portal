import { getHeadquarterPersonnelList } from "@/services/headquarterPersonnel";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  const page = Math.max(1, Number(request.nextUrl.searchParams.get("page") ?? "1") || 1);
  const limit = Math.min(500, Math.max(5, Number(request.nextUrl.searchParams.get("limit") ?? "500") || 500));

  try {
    const result = await getHeadquarterPersonnelList({ page, limit, query: q });
    return NextResponse.json({
      rows: result.rows,
      total: result.total,
      managingDirector: result.managingDirector ?? null,
      page,
      limit,
      query: q,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch personnel data." },
      { status: 500 },
    );
  }
}
