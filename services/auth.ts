import { getPool } from "@/lib/postgres";

export type PortalRole = "admin" | "department_user" | "pm_vendor";

export type AuthResult = {
  userId: string;
  role: PortalRole;
  redirectPath: string;
};

type GenericRecord = Record<string, unknown>;

const USER_IDENTIFIER_COLUMNS = ["user_id", "username", "email", "login_id"] as const;
const USER_PASSWORD_COLUMNS = ["password", "password_hash", "passwd", "passcode"] as const;
const USER_ROLE_COLUMNS = ["role", "user_role", "role_name"] as const;
const USER_ACTIVE_COLUMNS = ["is_active", "active", "enabled", "status"] as const;

function resolvePortalRole(rawRole: unknown): PortalRole {
  const value = String(rawRole ?? "").trim().toLowerCase();

  if (value === "admin" || value === "administrator" || value === "super_admin") {
    return "admin";
  }

  if (value.includes("vendor") || value.includes("pm_vendor") || value.includes("pm vendor")) {
    return "pm_vendor";
  }

  if (value.includes("department") || value.includes("pi")) {
    return "department_user";
  }

  // Workflow fallback roles
  if (value === "content_editor" || value === "approver" || value === "publisher") {
    return "department_user";
  }

  return "department_user";
}

function redirectByRole(role: PortalRole): string {
  if (role === "admin") {
    return "/admin/dashboard";
  }
  if (role === "pm_vendor") {
    return "/vendor/dashboard";
  }
  return "/department/dashboard";
}

function isActiveValue(value: unknown): boolean {
  if (typeof value === "boolean") {
    return value;
  }
  const text = String(value ?? "").trim().toLowerCase();
  return !["0", "false", "inactive", "disabled", "blocked"].includes(text);
}

function isPasswordValid(stored: unknown, incoming: string): boolean {
  if (stored == null) {
    return false;
  }
  return String(stored) === incoming;
}

async function authenticateFromUsersTable(identifier: string, password: string): Promise<AuthResult | null> {
  const pool = getPool();
  if (!pool) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const tableCheck = await pool.query<{ table_name: string }>(
    `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = 'users'
      LIMIT 1
    `,
  );
  if (tableCheck.rowCount === 0) {
    return null;
  }

  const columnsResult = await pool.query<{ column_name: string }>(
    `
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'users'
    `,
  );
  const existingColumns = new Set(columnsResult.rows.map((row) => row.column_name));
  const idColumns = USER_IDENTIFIER_COLUMNS.filter((column) => existingColumns.has(column));
  const passwordColumn = USER_PASSWORD_COLUMNS.find((column) => existingColumns.has(column));
  const roleColumn = USER_ROLE_COLUMNS.find((column) => existingColumns.has(column));
  const activeColumn = USER_ACTIVE_COLUMNS.find((column) => existingColumns.has(column));

  if (idColumns.length === 0 || !roleColumn) {
    return null;
  }

  const whereClause = idColumns.map((column) => `"${column}" = $1`).join(" OR ");
  const userResult = await pool.query<GenericRecord>(
    `SELECT * FROM users WHERE (${whereClause}) LIMIT 1`,
    [identifier],
  );

  if (userResult.rowCount === 0) {
    return null;
  }

  const row = userResult.rows[0];
  if (activeColumn && !isActiveValue(row[activeColumn])) {
    throw new Error("User account is inactive.");
  }

  if (!passwordColumn) {
    throw new Error("Users table password column is missing.");
  }

  if (!isPasswordValid(row[passwordColumn], password)) {
    return null;
  }

  const userId = String(
    row.user_id ??
      row.username ??
      row.email ??
      row.login_id ??
      identifier,
  );
  const role = resolvePortalRole(row[roleColumn]);

  return {
    userId,
    role,
    redirectPath: redirectByRole(role),
  };
}

async function authenticateFromWorkflowUsers(identifier: string, password: string): Promise<AuthResult | null> {
  const pool = getPool();
  if (!pool) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const expectedPassword = process.env.WORKFLOW_USER_PASSWORD ?? "ChangeMe@123";
  if (password !== expectedPassword) {
    return null;
  }

  const result = await pool.query<{ user_id: string; role: string; is_active: boolean }>(
    `
      SELECT user_id, role, is_active
      FROM workflow_users
      WHERE user_id = $1
      LIMIT 1
    `,
    [identifier],
  );

  if (result.rowCount === 0) {
    return null;
  }

  const row = result.rows[0];
  if (!row.is_active) {
    throw new Error("User account is inactive.");
  }

  const role = resolvePortalRole(row.role);
  return {
    userId: row.user_id,
    role,
    redirectPath: redirectByRole(role),
  };
}

export async function authenticatePortalUser(identifier: string, password: string): Promise<AuthResult | null> {
  const normalizedIdentifier = identifier.trim();
  if (!normalizedIdentifier) {
    return null;
  }

  const usersAuth = await authenticateFromUsersTable(normalizedIdentifier, password);
  if (usersAuth) {
    return usersAuth;
  }

  return authenticateFromWorkflowUsers(normalizedIdentifier, password);
}
