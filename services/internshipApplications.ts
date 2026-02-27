import { getPool } from "@/lib/postgres";

export type InternshipApplicationInput = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  mobileNumber: string;
  instituteName: string;
  courseName: string;
  currentSemester: string;
  addressLine: string;
  pinCode: string;
  internshipDomain: string;
  preferredStartMonth: string;
  durationWeeks: number;
  statementOfPurpose: string;
  nocAvailable: boolean;
};

export type InternshipApplicationContext = {
  ipAddress?: string;
  userAgent?: string;
};

function assertPool() {
  const pool = getPool();
  if (!pool) {
    throw new Error("DATABASE_URL is not configured.");
  }
  return pool;
}

export function isApplicationWindowOpen(date = new Date()): boolean {
  const forceOpen = process.env.FORCE_OPEN_INTERNSHIP_WINDOW === "true";
  if (forceOpen) {
    return true;
  }
  const day = date.getDate();
  return day >= 1 && day <= 10;
}

function sanitize(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function hasUnsafeChars(value: string): boolean {
  return /[<>]/.test(value);
}

function normalizeEmail(value: string): string {
  return sanitize(value).toLowerCase();
}

function normalizeMobile(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }
  return digits;
}

function parsePreferredMonth(value: string): Date | null {
  const normalized = sanitize(value);
  const isoMatch = normalized.match(/^(\d{4})-(\d{2})$/);
  if (isoMatch) {
    const year = Number(isoMatch[1]);
    const month = Number(isoMatch[2]);
    if (month >= 1 && month <= 12) {
      return new Date(Date.UTC(year, month - 1, 1));
    }
    return null;
  }

  const numericMatch = normalized.match(/^(\d{1,2})[-/](\d{4})$/);
  if (numericMatch) {
    const month = Number(numericMatch[1]);
    const year = Number(numericMatch[2]);
    if (month >= 1 && month <= 12) {
      return new Date(Date.UTC(year, month - 1, 1));
    }
    return null;
  }

  const textualMatch = normalized.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!textualMatch) {
    return null;
  }
  const monthIndex = new Date(`${textualMatch[1]} 1, ${textualMatch[2]}`).getMonth();
  if (Number.isNaN(monthIndex)) {
    return null;
  }
  return new Date(Date.UTC(Number(textualMatch[2]), monthIndex, 1));
}

function validatePreferredMonthWindow(value: string): boolean {
  const preferred = parsePreferredMonth(value);
  if (!preferred) {
    return false;
  }

  const now = new Date();
  const currentMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const minMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 2, 1));
  const maxMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 6, 1));

  if (preferred < currentMonth) {
    return false;
  }
  return preferred >= minMonth && preferred <= maxMonth;
}

function requiredLength(value: string, min: number, max: number): boolean {
  return value.length >= min && value.length <= max;
}

function calculateAge(dobIso: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dobIso)) return null;
  const dob = new Date(`${dobIso}T00:00:00Z`);
  if (Number.isNaN(dob.getTime())) return null;
  const now = new Date();
  let age = now.getUTCFullYear() - dob.getUTCFullYear();
  const monthDiff = now.getUTCMonth() - dob.getUTCMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getUTCDate() < dob.getUTCDate())) {
    age -= 1;
  }
  return age;
}

const allowedGenders = new Set(["Male", "Female", "Other", "Prefer not to say"]);

const allowedDomains = new Set([
  "Artificial Intelligence & Machine Learning (AI/ML)",
  "Blockchain Technology",
  "Cyber Security & Threat Analysis",
  "Quantum Computing & Cryptography",
  "Cloud Computing & Infrastructure",
  "Data Analytics & Big Data Solutions",
  "Internet of Things (IoT)",
  "DevOps & Automation",
  "Web & Mobile App Development (React / Angular / PHP / .NET / Java)",
  "Micro Services Architecture",
  "Open APIs & Backend Integrations",
  "Software Documentation & Testing",
  "UI/UX and Frontend Development",
  "Networking & Infrastructure Technologies",
  "Chatbots & Intelligent Interfaces",
  "GIS Technologies",
  "Cloud Data Management",
  "Scanning & Digitalisation",
  "Social Media",
  "Legal / HR",
  "e-Governance Consultancy",
]);

export function validateInternshipApplication(input: InternshipApplicationInput): string | null {
  const fullName = sanitize(input.fullName);
  const dateOfBirth = sanitize(input.dateOfBirth);
  const gender = sanitize(input.gender);
  const email = normalizeEmail(input.email);
  const mobile = normalizeMobile(input.mobileNumber);
  const institute = sanitize(input.instituteName);
  const course = sanitize(input.courseName);
  const semester = sanitize(input.currentSemester);
  const addressLine = sanitize(input.addressLine);
  const pinCode = sanitize(input.pinCode);
  const domain = sanitize(input.internshipDomain);
  const preferredStartMonth = sanitize(input.preferredStartMonth);
  const sop = sanitize(input.statementOfPurpose);

  if (!fullName || !requiredLength(fullName, 3, 100) || !/^[A-Za-z][A-Za-z\s.'-]{2,99}$/.test(fullName)) {
    return "Full name is invalid. Use alphabets only (3-100 characters).";
  }
  const age = calculateAge(dateOfBirth);
  if (age === null) {
    return "Date of Birth is required in valid format.";
  }
  if (age < 16 || age > 45) {
    return "Age must be between 16 and 45 years for internship application.";
  }
  if (!gender || !allowedGenders.has(gender)) {
    return "Please select a valid gender.";
  }
  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Valid email is required.";
  }
  if (!mobile || !/^\d{10}$/.test(mobile)) {
    return "Valid mobile number is required (10 digits).";
  }
  if (!institute || !requiredLength(institute, 3, 200) || hasUnsafeChars(institute)) {
    return "Institute name is invalid.";
  }
  if (!course || !requiredLength(course, 2, 120) || hasUnsafeChars(course)) {
    return "Course name is invalid.";
  }
  if (!semester || !requiredLength(semester, 2, 40) || hasUnsafeChars(semester)) {
    return "Current semester/year is invalid.";
  }
  if (!addressLine || !requiredLength(addressLine, 15, 300) || hasUnsafeChars(addressLine)) {
    return "Address is invalid. Use 15-300 characters.";
  }
  if (!/^\d{6}$/.test(pinCode)) {
    return "PIN Code must be a valid 6-digit value.";
  }
  if (!domain || !allowedDomains.has(domain)) {
    return "Please select a valid internship domain.";
  }
  if (!preferredStartMonth || !validatePreferredMonthWindow(preferredStartMonth)) {
    return "Preferred start month is invalid. Allowed range: 2 to 6 months in advance.";
  }
  if (!Number.isInteger(input.durationWeeks) || input.durationWeeks < 6 || input.durationWeeks > 24) {
    return "Duration must be between 6 and 24 weeks.";
  }
  if (!sop || !requiredLength(sop, 100, 2000) || hasUnsafeChars(sop)) {
    return "Statement of purpose must be 100-2000 characters and must not contain invalid symbols.";
  }
  if (!input.nocAvailable) return "NOC confirmation is required.";
  return null;
}

async function ensureSchema() {
  const pool = assertPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS internship_applications (
      id BIGSERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      date_of_birth DATE NOT NULL,
      gender TEXT NOT NULL,
      email TEXT NOT NULL,
      mobile_number TEXT NOT NULL,
      institute_name TEXT NOT NULL,
      course_name TEXT NOT NULL,
      current_semester TEXT NOT NULL,
      address_line TEXT NOT NULL,
      pin_code TEXT NOT NULL,
      internship_domain TEXT NOT NULL,
      preferred_start_month TEXT NOT NULL,
      duration_weeks INTEGER NOT NULL,
      statement_of_purpose TEXT NOT NULL,
      noc_available BOOLEAN NOT NULL,
      ip_address TEXT,
      user_agent TEXT,
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await pool.query(`ALTER TABLE internship_applications ADD COLUMN IF NOT EXISTS date_of_birth DATE`);
  await pool.query(`ALTER TABLE internship_applications ADD COLUMN IF NOT EXISTS gender TEXT`);
  await pool.query(`ALTER TABLE internship_applications ADD COLUMN IF NOT EXISTS address_line TEXT`);
  await pool.query(`ALTER TABLE internship_applications ADD COLUMN IF NOT EXISTS pin_code TEXT`);
  await pool.query(`ALTER TABLE internship_applications ADD COLUMN IF NOT EXISTS ip_address TEXT`);
  await pool.query(`ALTER TABLE internship_applications ADD COLUMN IF NOT EXISTS user_agent TEXT`);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_internship_applications_email_month
    ON internship_applications (email, preferred_start_month)
  `);
}

async function enforceRateLimit(context: InternshipApplicationContext) {
  const pool = assertPool();
  if (!context.ipAddress) {
    return;
  }
  const rateResult = await pool.query<{ total: string }>(
    `
      SELECT COUNT(*)::text AS total
      FROM internship_applications
      WHERE ip_address = $1
        AND submitted_at >= NOW() - INTERVAL '1 day'
    `,
    [context.ipAddress],
  );
  if (Number(rateResult.rows[0]?.total ?? 0) >= 5) {
    throw new Error("Too many submissions from this network. Please try again after 24 hours.");
  }
}

async function enforceDuplicateGuard(input: InternshipApplicationInput) {
  const pool = assertPool();
  const email = normalizeEmail(input.email);
  const preferredStartMonth = sanitize(input.preferredStartMonth);
  const duplicateResult = await pool.query<{ total: string }>(
    `
      SELECT COUNT(*)::text AS total
      FROM internship_applications
      WHERE email = $1
        AND preferred_start_month = $2
        AND submitted_at >= NOW() - INTERVAL '30 days'
    `,
    [email, preferredStartMonth],
  );
  if (Number(duplicateResult.rows[0]?.total ?? 0) > 0) {
    throw new Error("An application already exists for this email and preferred start month.");
  }
}

export async function createInternshipApplication(
  input: InternshipApplicationInput,
  context: InternshipApplicationContext = {},
): Promise<{ id: number }> {
  const pool = assertPool();

  await ensureSchema();
  await enforceRateLimit(context);
  await enforceDuplicateGuard(input);

  const result = await pool.query<{ id: number }>(
    `
      INSERT INTO internship_applications (
        full_name,
        date_of_birth,
        gender,
        email,
        mobile_number,
        institute_name,
        course_name,
        current_semester,
        address_line,
        pin_code,
        internship_domain,
        preferred_start_month,
        duration_weeks,
        statement_of_purpose,
        noc_available,
        ip_address,
        user_agent
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
      RETURNING id
    `,
    [
      sanitize(input.fullName),
      sanitize(input.dateOfBirth),
      sanitize(input.gender),
      normalizeEmail(input.email),
      normalizeMobile(input.mobileNumber),
      sanitize(input.instituteName),
      sanitize(input.courseName),
      sanitize(input.currentSemester),
      sanitize(input.addressLine),
      sanitize(input.pinCode),
      sanitize(input.internshipDomain),
      sanitize(input.preferredStartMonth),
      input.durationWeeks,
      sanitize(input.statementOfPurpose),
      input.nocAvailable,
      context.ipAddress ? sanitize(context.ipAddress) : null,
      context.userAgent ? sanitize(context.userAgent).slice(0, 500) : null,
    ],
  );

  return { id: result.rows[0].id };
}
