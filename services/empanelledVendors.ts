import { getPool } from "@/lib/postgres";
import fallbackData from "@/data/empanelled-vendors.json";

export type EmpanelledVendor = {
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

export type EmpanelledVendorQuery = {
  page: number;
  limit: number;
  q: string;
  vendorCategory: string;
  empanelmentCategory: string;
  agreementType: string;
  scopeType: string;
  validity: "all" | "active" | "expired" | "expiring";
};

export type EmpanelledVendorFilterOptions = {
  vendorCategories: string[];
  empanelmentCategories: string[];
  agreementTypes: string[];
  scopeTypes: string[];
  scopeTypesByEmpanelment: Record<string, string[]>;
};

export type EmpanelledVendorListResult = {
  rows: EmpanelledVendor[];
  total: number;
};

type DbRow = {
  id: number;
  vendor_address: string | null;
  agreement_empanelment: string | null;
  contact_email_id: string | null;
  contact_person_name: string | null;
  description: string | null;
  effective_from: string | null;
  empanelment_category: string | null;
  empanelment_no: string | null;
  empanelment_scope_type: string | null;
  valid_up_to: string | null;
  vendor_category: string | null;
  vendor_name: string | null;
};

const fallbackRows = (fallbackData as EmpanelledVendor[]).map((row) => ({
  ...row,
  id: String(row.id),
}));

function toVendor(row: DbRow): EmpanelledVendor {
  return {
    id: String(row.id),
    vendor_address: row.vendor_address ?? "",
    agreement_empanelment: row.agreement_empanelment ?? "",
    contact_email_id: row.contact_email_id ?? "",
    contact_person_name: row.contact_person_name ?? "",
    description: row.description ?? "",
    effective_from: row.effective_from ?? "",
    empanelment_category: row.empanelment_category ?? "",
    empanelment_no: row.empanelment_no ?? "",
    empanelment_scope_type: row.empanelment_scope_type ?? "",
    valid_up_to: row.valid_up_to ?? "",
    vendor_category: row.vendor_category ?? "",
    vendor_name: row.vendor_name ?? "",
  };
}

function getFallbackFilterOptions(rows: EmpanelledVendor[]): EmpanelledVendorFilterOptions {
  const unique = (items: string[]) => Array.from(new Set(items.filter(Boolean))).sort((a, b) => a.localeCompare(b));
  const scopeByEmpanelmentMap = rows.reduce<Record<string, Set<string>>>((acc, row) => {
    if (!row.empanelment_category || !row.empanelment_scope_type) return acc;
    if (!acc[row.empanelment_category]) {
      acc[row.empanelment_category] = new Set<string>();
    }
    acc[row.empanelment_category].add(row.empanelment_scope_type);
    return acc;
  }, {});

  const scopeTypesByEmpanelment = Object.fromEntries(
    Object.entries(scopeByEmpanelmentMap)
      .map(([key, valueSet]) => [key, Array.from(valueSet).sort((a, b) => a.localeCompare(b))]),
  );

  return {
    vendorCategories: unique(rows.map((r) => r.vendor_category)),
    empanelmentCategories: unique(rows.map((r) => r.empanelment_category)),
    agreementTypes: unique(rows.map((r) => r.agreement_empanelment)),
    scopeTypes: unique(rows.map((r) => r.empanelment_scope_type)),
    scopeTypesByEmpanelment,
  };
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

export async function getEmpanelledVendorFilterOptions(): Promise<EmpanelledVendorFilterOptions> {
  const pool = getPool();
  if (!pool) {
    return getFallbackFilterOptions(fallbackRows);
  }

  const [vendorCategoryResult, empanelmentCategoryResult, agreementTypeResult, scopeTypeResult, scopeByEmpanelmentResult] = await Promise.all([
    pool.query<{ value: string }>(
      `SELECT DISTINCT vendor_category as value FROM empanelled_vendors WHERE is_active = true AND vendor_category IS NOT NULL ORDER BY value ASC`,
    ),
    pool.query<{ value: string }>(
      `SELECT DISTINCT empanelment_category as value FROM empanelled_vendors WHERE is_active = true AND empanelment_category IS NOT NULL ORDER BY value ASC`,
    ),
    pool.query<{ value: string }>(
      `SELECT DISTINCT agreement_empanelment as value FROM empanelled_vendors WHERE is_active = true AND agreement_empanelment IS NOT NULL ORDER BY value ASC`,
    ),
    pool.query<{ value: string }>(
      `SELECT DISTINCT empanelment_scope_type as value FROM empanelled_vendors WHERE is_active = true AND empanelment_scope_type IS NOT NULL ORDER BY value ASC`,
    ),
    pool.query<{ empanelment_category: string; empanelment_scope_type: string }>(
      `SELECT DISTINCT empanelment_category, empanelment_scope_type
       FROM empanelled_vendors
       WHERE is_active = true
         AND empanelment_category IS NOT NULL
         AND empanelment_scope_type IS NOT NULL`,
    ),
  ]);

  const scopeByEmpanelmentMap = scopeByEmpanelmentResult.rows.reduce<Record<string, Set<string>>>((acc, row) => {
    if (!acc[row.empanelment_category]) {
      acc[row.empanelment_category] = new Set<string>();
    }
    acc[row.empanelment_category].add(row.empanelment_scope_type);
    return acc;
  }, {});

  const scopeTypesByEmpanelment = Object.fromEntries(
    Object.entries(scopeByEmpanelmentMap)
      .map(([key, valueSet]) => [key, Array.from(valueSet).sort((a, b) => a.localeCompare(b))]),
  );

  return {
    vendorCategories: vendorCategoryResult.rows.map((r) => r.value),
    empanelmentCategories: empanelmentCategoryResult.rows.map((r) => r.value),
    agreementTypes: agreementTypeResult.rows.map((r) => r.value),
    scopeTypes: scopeTypeResult.rows.map((r) => r.value),
    scopeTypesByEmpanelment,
  };
}

export async function getEmpanelledVendors(query: EmpanelledVendorQuery): Promise<EmpanelledVendorListResult> {
  const { page, limit, q, vendorCategory, empanelmentCategory, agreementType, scopeType, validity } = query;
  const pool = getPool();
  if (!pool) {
    const today = new Date();
    const filtered = fallbackRows.filter((row) => {
      if (vendorCategory && row.vendor_category !== vendorCategory) return false;
      if (empanelmentCategory && row.empanelment_category !== empanelmentCategory) return false;
      if (agreementType && row.agreement_empanelment !== agreementType) return false;
      if (scopeType && row.empanelment_scope_type !== scopeType) return false;

      if (validity !== "all") {
        const validTo = parseDdMonYy(row.valid_up_to);
        if (!validTo) return false;
        const days = Math.floor((validTo.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        if (validity === "active" && days < 0) return false;
        if (validity === "expired" && days >= 0) return false;
        if (validity === "expiring" && (days < 0 || days > 60)) return false;
      }

      if (!q.trim()) return true;
      const text = `${row.vendor_name} ${row.empanelment_no} ${row.contact_person_name} ${row.contact_email_id} ${row.vendor_address} ${row.description}`.toLowerCase();
      return text.includes(q.toLowerCase());
    });

    const start = (page - 1) * limit;
    return {
      rows: filtered.slice(start, start + limit),
      total: filtered.length,
    };
  }

  const whereParts: string[] = ["is_active = true"];
  const params: Array<string | number> = [];
  let idx = 1;

  if (vendorCategory) {
    whereParts.push(`vendor_category = $${idx++}`);
    params.push(vendorCategory);
  }
  if (empanelmentCategory) {
    whereParts.push(`empanelment_category = $${idx++}`);
    params.push(empanelmentCategory);
  }
  if (agreementType) {
    whereParts.push(`agreement_empanelment = $${idx++}`);
    params.push(agreementType);
  }
  if (scopeType) {
    whereParts.push(`empanelment_scope_type = $${idx++}`);
    params.push(scopeType);
  }

  if (validity !== "all") {
    const dateExpr = `to_date(valid_up_to, 'DD-Mon-YY')`;
    if (validity === "active") {
      whereParts.push(`${dateExpr} >= CURRENT_DATE`);
    } else if (validity === "expired") {
      whereParts.push(`${dateExpr} < CURRENT_DATE`);
    } else if (validity === "expiring") {
      whereParts.push(`${dateExpr} >= CURRENT_DATE AND ${dateExpr} <= CURRENT_DATE + INTERVAL '60 days'`);
    }
  }

  let orderBy = "sort_order ASC, id ASC";
  if (q.trim()) {
    const searchTerm = `%${q.trim()}%`;
    whereParts.push(`(
      vendor_name ILIKE $${idx}
      OR empanelment_no ILIKE $${idx}
      OR contact_person_name ILIKE $${idx}
      OR contact_email_id ILIKE $${idx}
      OR vendor_address ILIKE $${idx}
      OR description ILIKE $${idx}
    )`);
    params.push(searchTerm);
    idx += 1;
    orderBy = `
      CASE WHEN vendor_name ILIKE $${idx - 1} THEN 0 ELSE 1 END,
      sort_order ASC,
      id ASC
    `;
  }

  const whereClause = whereParts.join(" AND ");
  const countResult = await pool.query<{ total: string }>(
    `SELECT COUNT(*)::text as total FROM empanelled_vendors WHERE ${whereClause}`,
    params,
  );

  const dataParams = [...params, limit, (page - 1) * limit];
  const limitParam = `$${params.length + 1}`;
  const offsetParam = `$${params.length + 2}`;

  const result = await pool.query<DbRow>(
    `
      SELECT
        id,
        vendor_address,
        agreement_empanelment,
        contact_email_id,
        contact_person_name,
        description,
        effective_from,
        empanelment_category,
        empanelment_no,
        empanelment_scope_type,
        valid_up_to,
        vendor_category,
        vendor_name
      FROM empanelled_vendors
      WHERE ${whereClause}
      ORDER BY ${orderBy}
      LIMIT ${limitParam}
      OFFSET ${offsetParam}
    `,
    dataParams,
  );

  return {
    rows: result.rows.map(toVendor),
    total: Number(countResult.rows[0]?.total ?? 0),
  };
}
