import { getPool } from "@/lib/postgres";

export type HeadquarterPersonnel = {
  id: number;
  serialNo: number;
  name: string;
  designation: string;
  phoneNumber: string;
  extensionIp: string;
  email: string;
  createdAt: string;
};

export type PersonnelListResult = {
  rows: HeadquarterPersonnel[];
  total: number;
  managingDirector?: HeadquarterPersonnel;
};

const fallbackRows: HeadquarterPersonnel[] = [
  { id: 18, serialNo: 18, name: "Shri Mahesh Kumar", designation: "Company Secretary", phoneNumber: "01122900522", extensionIp: "69022", email: "nicsi-cs@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 17, serialNo: 17, name: "Shree Jeevan Nath", designation: "Assistant Manager", phoneNumber: "01122900584", extensionIp: "69084", email: "jeevan.nath@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 16, serialNo: 16, name: "Shri Vikas Dixit", designation: "Manager", phoneNumber: "01122900503", extensionIp: "69003", email: "vikas.dixit@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 15, serialNo: 15, name: "Shri Kumar Jyoti", designation: "Senior Manager", phoneNumber: "01122900517", extensionIp: "69017", email: "kumar.jyoti@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 14, serialNo: 14, name: "Shri Neeraj Chawla", designation: "Deputy General Manager", phoneNumber: "01122900507", extensionIp: "69007", email: "neerajc@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 13, serialNo: 13, name: "Shri Shailendra Saxena", designation: "Deputy General Manager", phoneNumber: "01122900562", extensionIp: "69062", email: "shailendra.saxena@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 12, serialNo: 12, name: "Shri Ajay Kumar Gupta", designation: "General Manager", phoneNumber: "01122900556", extensionIp: "69056", email: "ajayg@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 11, serialNo: 11, name: "Shri Lalit Kumar Bhatia", designation: "General Manager", phoneNumber: "01122900516", extensionIp: "69016", email: "lalit.b@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 10, serialNo: 10, name: "Shri Atul Rastogi", designation: "General Manager", phoneNumber: "01122900511", extensionIp: "69011", email: "atul.r@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 9, serialNo: 9, name: "Shri Ramdatt Upadhyay", designation: "General Manager", phoneNumber: "01122900512", extensionIp: "69012", email: "upadhyay.rd@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 8, serialNo: 8, name: "Shri Gyan Prakash Singh", designation: "General Manager", phoneNumber: "01122900506", extensionIp: "69006", email: "gm@nicsi.nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 7, serialNo: 7, name: "Shri Bhupendra Kumar Sharma", designation: "General Manager", phoneNumber: "01122900510", extensionIp: "69010", email: "bks@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 6, serialNo: 6, name: "Shri Prasanna Pandey", designation: "General Manager", phoneNumber: "01122900524", extensionIp: "69024", email: "prasanna.pandey@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 5, serialNo: 5, name: "Shri Rahul Sharma", designation: "General Manager", phoneNumber: "01122900586", extensionIp: "69086", email: "rahul.sh@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 4, serialNo: 4, name: "Md. Ziya Ur Rehman Badar", designation: "Sr. General Manager", phoneNumber: "01122900553", extensionIp: "69053", email: "mzr.badar@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 3, serialNo: 3, name: "Shri Naveen Agrawal", designation: "Chief General Manager", phoneNumber: "01122900547", extensionIp: "69047", email: "srgm-na@nicsi.nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 2, serialNo: 2, name: "Shri Jitender Kumar", designation: "Chief General Manager", phoneNumber: "01122900582", extensionIp: "69082", email: "kundalji@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
  { id: 1, serialNo: 1, name: "Shri Alok Tiwari", designation: "Managing Director", phoneNumber: "01126105291", extensionIp: "69001", email: "mdnicsi@nic.in", createdAt: "2026-02-21T00:00:00.000Z" },
];

export async function getHeadquarterPersonnelList(options: {
  page: number;
  limit: number;
  query: string;
}): Promise<PersonnelListResult> {
  const { page, limit, query } = options;
  const pool = getPool();
  const isSearchMode = Boolean(query.trim());

  if (!pool) {
    const managingDirector = fallbackRows.find((row) => row.designation.toLowerCase().includes("managing director"));

    const filtered = fallbackRows.filter((row) => {
      const q = query.toLowerCase();
      if (!q) return true;
      return (
        row.name.toLowerCase().includes(q) ||
        row.designation.toLowerCase().includes(q) ||
        row.email.toLowerCase().includes(q) ||
        row.phoneNumber.toLowerCase().includes(q)
      );
    });
    const ordered = [...filtered]
      .filter((row) => (managingDirector ? row.id !== managingDirector.id : true))
      .sort((a, b) => a.serialNo - b.serialNo);
    const start = (page - 1) * limit;
    return {
      rows: ordered.slice(start, start + limit),
      total: ordered.length,
      managingDirector,
    };
  }

  let managingDirector: HeadquarterPersonnel | undefined;
  let excludeId: number | null = null;

  const managingDirectorResult = await pool.query<{
    id: number;
    serial_no: number;
    name: string;
    designation: string;
    phone_number: string;
    extension_ip: string;
    email: string;
    created_at: string;
  }>(
    `
      SELECT id, serial_no, name, designation, phone_number, extension_ip, email, created_at
      FROM headquarter_personnel
      WHERE is_active = true AND designation ILIKE '%Managing Director%'
      ORDER BY sort_order ASC, id ASC
      LIMIT 1
    `,
  );

  const mdRow = managingDirectorResult.rows[0];
  if (mdRow) {
    excludeId = mdRow.id;
    managingDirector = {
      id: mdRow.id,
      serialNo: mdRow.serial_no,
      name: mdRow.name,
      designation: mdRow.designation,
      phoneNumber: mdRow.phone_number,
      extensionIp: mdRow.extension_ip,
      email: mdRow.email,
      createdAt: mdRow.created_at,
    };
  }

  const searchTerm = `%${query.trim()}%`;
  const whereClause = isSearchMode
    ? `WHERE is_active = true AND id <> $1 AND (name ILIKE $2 OR designation ILIKE $2 OR phone_number ILIKE $2 OR email ILIKE $2)`
    : `WHERE is_active = true ${excludeId !== null ? "AND id <> $1" : ""}`;
  const countParams = isSearchMode
    ? [excludeId ?? -1, searchTerm]
    : (excludeId !== null ? [excludeId] : []);
  const dataParams = isSearchMode
    ? [excludeId ?? -1, searchTerm, limit, (page - 1) * limit]
    : (excludeId !== null
      ? [excludeId, limit, (page - 1) * limit]
      : [limit, (page - 1) * limit]);

  const countResult = await pool.query<{ total: string }>(`SELECT COUNT(*)::text as total FROM headquarter_personnel ${whereClause}`, countParams);

  const rowsResult = await pool.query<{
    id: number;
    serial_no: number;
    name: string;
    designation: string;
    phone_number: string;
    extension_ip: string;
    email: string;
    created_at: string;
  }>(
    `
      SELECT id, serial_no, name, designation, phone_number, extension_ip, email, created_at
      FROM headquarter_personnel
      ${whereClause}
      ORDER BY sort_order ASC, id ASC
      LIMIT $${isSearchMode ? "3" : (excludeId !== null ? "2" : "1")}
      OFFSET $${isSearchMode ? "4" : (excludeId !== null ? "3" : "2")}
    `,
    dataParams,
  );

  return {
    rows: rowsResult.rows.map((row) => ({
      id: row.id,
      serialNo: row.serial_no,
      name: row.name,
      designation: row.designation,
      phoneNumber: row.phone_number,
      extensionIp: row.extension_ip,
      email: row.email,
      createdAt: row.created_at,
    })),
    total: Number(countResult.rows[0]?.total ?? 0),
    managingDirector,
  };
}
