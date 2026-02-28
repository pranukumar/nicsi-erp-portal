import { getPool } from "@/lib/postgres";

export type StateProjectInput = {
  stateCode: string;
  projectTitle: string;
  department: string;
  category: string;
  status: string;
  startDate: string;
  endDate?: string;
  projectCostCr?: string;
};

function assertPool() {
  const pool = getPool();
  if (!pool) {
    throw new Error("DATABASE_URL is not configured.");
  }
  return pool;
}

function sanitize(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function optionalSanitize(value?: string): string | null {
  if (!value) return null;
  const cleaned = sanitize(value);
  return cleaned.length > 0 ? cleaned : null;
}

function validateDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime());
}

const allowedStatuses = new Set(["Planned", "Active", "Completed", "On Hold"]);
const allowedCategories = new Set([
  "e-Governance",
  "Infrastructure",
  "Cloud",
  "Cyber Security",
  "Capacity Building",
]);

const validStateCodes = new Set([
  "AP", "AR", "AS", "BR", "CG", "GA", "GJ", "HR", "HP", "JH", "KA", "KL", "MP", "MH", "MN", "ML", "MZ", "NL",
  "OD", "PB", "RJ", "SK", "TN", "TG", "TR", "UP", "UK", "WB", "AN", "CH", "DN", "DL", "JK", "LA", "LD", "PY",
]);

export function validateStateProjectInput(input: StateProjectInput): string | null {
  const stateCode = sanitize(input.stateCode).toUpperCase();
  const projectTitle = sanitize(input.projectTitle);
  const department = sanitize(input.department);
  const category = sanitize(input.category);
  const status = sanitize(input.status);
  const startDate = sanitize(input.startDate);
  const endDate = optionalSanitize(input.endDate);
  const projectCostCr = optionalSanitize(input.projectCostCr);

  if (!validStateCodes.has(stateCode)) return "Invalid State/UT code.";
  if (projectTitle.length < 3 || projectTitle.length > 220) return "Project title must be 3-220 characters.";
  if (department.length < 2 || department.length > 180) return "Department must be 2-180 characters.";
  if (!allowedCategories.has(category)) return "Invalid category selected.";
  if (!allowedStatuses.has(status)) return "Invalid status selected.";
  if (!validateDate(startDate)) return "Start date is invalid.";
  if (endDate && !validateDate(endDate)) return "End date is invalid.";
  if (endDate && endDate < startDate) return "End date cannot be earlier than start date.";
  if (projectCostCr && !/^\d+(\.\d{1,2})?$/.test(projectCostCr)) return "Project cost must be a valid numeric value.";
  return null;
}

async function ensureSchema() {
  const pool = assertPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS state_projects (
      id BIGSERIAL PRIMARY KEY,
      state_code TEXT NOT NULL,
      project_title TEXT NOT NULL,
      department TEXT NOT NULL,
      category TEXT NOT NULL,
      status TEXT NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE,
      project_cost_cr NUMERIC(14,2),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_state_projects_state_code
    ON state_projects (state_code)
  `);
}

export async function createStateProject(input: StateProjectInput): Promise<{ id: number }> {
  const pool = assertPool();
  await ensureSchema();

  const result = await pool.query<{ id: number }>(
    `
      INSERT INTO state_projects (
        state_code,
        project_title,
        department,
        category,
        status,
        start_date,
        end_date,
        project_cost_cr
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING id
    `,
    [
      sanitize(input.stateCode).toUpperCase(),
      sanitize(input.projectTitle),
      sanitize(input.department),
      sanitize(input.category),
      sanitize(input.status),
      sanitize(input.startDate),
      optionalSanitize(input.endDate),
      optionalSanitize(input.projectCostCr),
    ],
  );

  return { id: result.rows[0].id };
}

export async function getStateProjectCounts(): Promise<Record<string, number>> {
  const pool = getPool();
  if (!pool) {
    return {};
  }
  await ensureSchema();
  const result = await pool.query<{ state_code: string; total: string }>(`
    SELECT state_code, COUNT(*)::text AS total
    FROM state_projects
    GROUP BY state_code
  `);
  const counts: Record<string, number> = {};
  for (const row of result.rows) {
    counts[row.state_code.toUpperCase()] = Number(row.total);
  }
  return counts;
}
