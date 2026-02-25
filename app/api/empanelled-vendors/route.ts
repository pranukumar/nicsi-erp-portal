import { getEmpanelledVendorFilterOptions, getEmpanelledVendors } from "@/services/empanelledVendors";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const page = Math.max(1, Number(request.nextUrl.searchParams.get("page") ?? "1") || 1);
    const limit = Math.min(200, Math.max(10, Number(request.nextUrl.searchParams.get("limit") ?? "100") || 100));
    const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";
    const vendorCategory = request.nextUrl.searchParams.get("vendorCategory")?.trim() ?? "";
    const empanelmentCategory = request.nextUrl.searchParams.get("empanelmentCategory")?.trim() ?? "";
    const agreementType = request.nextUrl.searchParams.get("agreementType")?.trim() ?? "";
    const scopeType = request.nextUrl.searchParams.get("scopeType")?.trim() ?? "";
    const validityRaw = request.nextUrl.searchParams.get("validity")?.trim() ?? "all";
    const validity = (["all", "active", "expired", "expiring"].includes(validityRaw) ? validityRaw : "all") as "all" | "active" | "expired" | "expiring";

    const [result, filters] = await Promise.all([
      getEmpanelledVendors({
        page,
        limit,
        q,
        vendorCategory,
        empanelmentCategory,
        agreementType,
        scopeType,
        validity,
      }),
      getEmpanelledVendorFilterOptions(),
    ]);

    return NextResponse.json({
      rows: result.rows,
      total: result.total,
      page,
      limit,
      filters,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch empanelled vendors." },
      { status: 500 },
    );
  }
}
