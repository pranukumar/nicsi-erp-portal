import { getPool } from "@/lib/postgres";

export type StatePersonnel = {
  id: number;
  serialNo: number;
  name: string;
  designation: string;
  phoneNumber: string;
  email: string;
  stateName: string;
  additionalAssignedStateUt: string;
};

export type StatePersonnelListResult = {
  rows: StatePersonnel[];
  total: number;
};

const fallbackRows: StatePersonnel[] = [
  {
    id: 1,
    serialNo: 1,
    name: "Shri Sudhir Kumar Sharma",
    designation: "General Manager",
    phoneNumber: "09419220325",
    email: "sudhir[dot]sharma[at]nic[dot]in",
    stateName: "Jammu & Kashmir",
    additionalAssignedStateUt: "Ladakh UT, Himachal Pradesh",
  },
  {
    id: 2,
    serialNo: 2,
    name: "Shri Y. Siva Sankara Reddy",
    designation: "General Manager",
    phoneNumber: "08022863218",
    email: "yss[dot]reddy[at]nic[dot]gov[dot]in",
    stateName: "Karnataka",
    additionalAssignedStateUt: "Goa",
  },
  {
    id: 3,
    serialNo: 3,
    name: "Shri Manu Mohan B",
    designation: "Dy. General Manager",
    phoneNumber: "04712729894",
    email: "manu[at]nic[dot]in",
    stateName: "Kerala",
    additionalAssignedStateUt: "Lakshadweep UT",
  },
  {
    id: 4,
    serialNo: 4,
    name: "Shri Swadesh Kumar Shrivastava",
    designation: "General Manager",
    phoneNumber: "07552554600",
    email: "swadesh[dot]sh[at]nic[dot]in",
    stateName: "Madhya Pradesh",
    additionalAssignedStateUt: "Chhattisgarh",
  },
  {
    id: 5,
    serialNo: 5,
    name: "Shri Gangaram Devaba Kumbhar",
    designation: "Manager",
    phoneNumber: "09096138063",
    email: "gd[dot]kumbhar[at]nic[dot]in",
    stateName: "Maharashtra",
    additionalAssignedStateUt: "Dadra and Nagar Haveli & Daman & Diu UT",
  },
  {
    id: 6,
    serialNo: 6,
    name: "Shri Jayanta Kumar Mishra",
    designation: "General Manager",
    phoneNumber: "09810392310",
    email: "jkmishra[at]nic[dot]in",
    stateName: "Orissa",
    additionalAssignedStateUt: "West Bengal",
  },
  {
    id: 7,
    serialNo: 7,
    name: "Shri Tarminder Singh",
    designation: "General Manager",
    phoneNumber: "01722740708",
    email: "gm17-nicsi[at]nic[dot]in",
    stateName: "Punjab",
    additionalAssignedStateUt: "Haryana, Chandigarh UT",
  },
  {
    id: 8,
    serialNo: 8,
    name: "Shri Manoj Prakash",
    designation: "Deputy General Manager",
    phoneNumber: "09829434526",
    email: "manoj[dot]prakash[at]gov[dot]in",
    stateName: "Rajasthan",
    additionalAssignedStateUt: "Gujarat",
  },
  {
    id: 9,
    serialNo: 9,
    name: "Shri V. Sivaramakrishnan",
    designation: "Sr. General Manager",
    phoneNumber: "04425672555",
    email: "siva[dot]tn[at]nic[dot]in",
    stateName: "Tamil Nadu",
    additionalAssignedStateUt: "Puducherry UT, Andaman and Nicobar UT",
  },
  {
    id: 10,
    serialNo: 10,
    name: "Shri A. Maruthi Kumar",
    designation: "General Manager",
    phoneNumber: "04023221904",
    email: "kumar[dot]maruthi[at]nic[dot]in",
    stateName: "Telangana",
    additionalAssignedStateUt: "Andhra Pradesh",
  },
  {
    id: 11,
    serialNo: 11,
    name: "Shri Deep Kumar",
    designation: "General Manager",
    phoneNumber: "05222239087",
    email: "gm-nicsi[at]nic[dot]in",
    stateName: "Uttar Pradesh",
    additionalAssignedStateUt: "Uttarakhand",
  },
];

export async function getStatePersonnelList(options: {
  page: number;
  limit: number;
  query: string;
}): Promise<StatePersonnelListResult> {
  const { page, limit, query } = options;
  const pool = getPool();

  const filterRows = (rows: StatePersonnel[]) => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) =>
      row.name.toLowerCase().includes(q) ||
      row.designation.toLowerCase().includes(q) ||
      row.phoneNumber.toLowerCase().includes(q) ||
      row.email.toLowerCase().includes(q) ||
      row.stateName.toLowerCase().includes(q) ||
      row.additionalAssignedStateUt.toLowerCase().includes(q),
    );
  };

  if (!pool) {
    const filtered = filterRows(fallbackRows).sort((a, b) => a.serialNo - b.serialNo);
    const start = (page - 1) * limit;
    return { rows: filtered.slice(start, start + limit), total: filtered.length };
  }

  try {
    const q = query.trim();
    const searchTerm = `%${q}%`;
    const whereClause = q
      ? `WHERE is_active = true AND (name ILIKE $1 OR designation ILIKE $1 OR phone_number ILIKE $1 OR email ILIKE $1 OR state_name ILIKE $1 OR additional_assigned_state_ut ILIKE $1)`
      : "WHERE is_active = true";
    const countParams = q ? [searchTerm] : [];
    const dataParams = q
      ? [searchTerm, limit, (page - 1) * limit]
      : [limit, (page - 1) * limit];

    const countResult = await pool.query<{ total: string }>(
      `SELECT COUNT(*)::text as total FROM state_personnel ${whereClause}`,
      countParams,
    );

    const rowsResult = await pool.query<{
      id: number;
      serial_no: number;
      name: string;
      designation: string;
      phone_number: string;
      email: string;
      state_name: string;
      additional_assigned_state_ut: string;
    }>(
      `
        SELECT id, serial_no, name, designation, phone_number, email, state_name, additional_assigned_state_ut
        FROM state_personnel
        ${whereClause}
        ORDER BY sort_order ASC, id ASC
        LIMIT $${q ? "2" : "1"}
        OFFSET $${q ? "3" : "2"}
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
        email: row.email,
        stateName: row.state_name,
        additionalAssignedStateUt: row.additional_assigned_state_ut,
      })),
      total: Number(countResult.rows[0]?.total ?? 0),
    };
  } catch {
    const filtered = filterRows(fallbackRows).sort((a, b) => a.serialNo - b.serialNo);
    const start = (page - 1) * limit;
    return { rows: filtered.slice(start, start + limit), total: filtered.length };
  }
}

