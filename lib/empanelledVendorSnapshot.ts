import fallbackData from "@/data/empanelled-vendors.json";

export type EmpanelledVendorSnapshotRow = {
  id: string;
  vendor_address: string;
  agreement_empanelment: string;
  contact_email_id: string;
  contact_person_name: string;
  description: string;
  effective_from: string;
  empanelment_category: string;
  empanelment_no: string;
  empanelment_scope_type: string;
  valid_up_to: string;
  vendor_category: string;
  vendor_name: string;
};

export type EmpanelledVendorSnapshotFilters = {
  vendorCategory: string;
  empanelmentCategory: string;
  agreementType: string;
  scopeType: string;
  validity: "all" | "active" | "expired" | "expiring";
};

export type EmpanelledVendorSnapshotOptions = {
  vendorCategories: string[];
  empanelmentCategories: string[];
  agreementTypes: string[];
  scopeTypes: string[];
  scopeTypesByEmpanelment: Record<string, string[]>;
};

const snapshotRows = (fallbackData as EmpanelledVendorSnapshotRow[]).map((row) => ({
  ...row,
  id: String(row.id),
}));

function unique(items: string[]) {
  return Array.from(new Set(items.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function parseDdMonYy(value: string): Date | null {
  const parts = value.trim().split("-");
  if (parts.length !== 3) return null;
  const day = Number(parts[0]);
  const monthMap: Record<string, number> = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  const month = monthMap[parts[1].toLowerCase()];
  const yearShort = Number(parts[2]);
  if (!Number.isFinite(day) || month === undefined || !Number.isFinite(yearShort)) return null;
  return new Date(2000 + yearShort, month, day);
}

const scopeByEmpanelmentMap = snapshotRows.reduce<Record<string, Set<string>>>((acc, row) => {
  if (!row.empanelment_category || !row.empanelment_scope_type) return acc;
  if (!acc[row.empanelment_category]) {
    acc[row.empanelment_category] = new Set<string>();
  }
  acc[row.empanelment_category].add(row.empanelment_scope_type);
  return acc;
}, {});

const snapshotFilters: EmpanelledVendorSnapshotOptions = {
  vendorCategories: unique(snapshotRows.map((row) => row.vendor_category)),
  empanelmentCategories: unique(snapshotRows.map((row) => row.empanelment_category)),
  agreementTypes: unique(snapshotRows.map((row) => row.agreement_empanelment)),
  scopeTypes: unique(snapshotRows.map((row) => row.empanelment_scope_type)),
  scopeTypesByEmpanelment: Object.fromEntries(
    Object.entries(scopeByEmpanelmentMap).map(([key, valueSet]) => [
      key,
      Array.from(valueSet).sort((a, b) => a.localeCompare(b)),
    ]),
  ),
};

export function getEmpanelledVendorSnapshot() {
  return {
    rows: snapshotRows,
    total: snapshotRows.length,
    filters: snapshotFilters,
  };
}

export function matchesEmpanelledVendorFilters(
  row: EmpanelledVendorSnapshotRow,
  filters: EmpanelledVendorSnapshotFilters,
): boolean {
  const { vendorCategory, empanelmentCategory, agreementType, scopeType, validity } = filters;
  if (vendorCategory && row.vendor_category !== vendorCategory) return false;
  if (empanelmentCategory && row.empanelment_category !== empanelmentCategory) return false;
  if (agreementType && row.agreement_empanelment !== agreementType) return false;
  if (scopeType && row.empanelment_scope_type !== scopeType) return false;

  if (validity !== "all") {
    const validTo = parseDdMonYy(row.valid_up_to);
    if (!validTo) return false;
    const today = new Date();
    const days = Math.floor((validTo.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (validity === "active" && days < 0) return false;
    if (validity === "expired" && days >= 0) return false;
    if (validity === "expiring" && (days < 0 || days > 60)) return false;
  }

  return true;
}
