import { Pool } from "pg";

let pool: Pool | null = null;

export function getPool(): Pool | null {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }

  if (!pool) {
    pool = new Pool({
      connectionString,
      ssl: process.env.PG_SSL === "true" ? { rejectUnauthorized: false } : undefined,
    });
  }

  return pool;
}
