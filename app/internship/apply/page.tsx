"use client";

import { FormEvent, useMemo, useState } from "react";
import PageTitle from "@/components/layout/PageTitle";

type FormState = {
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
  durationWeeks: string;
  statementOfPurpose: string;
  nocAvailable: boolean;
};

const INTERNSHIP_DOMAINS = [
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
] as const;

const INITIAL_STATE: FormState = {
  fullName: "",
  dateOfBirth: "",
  gender: "",
  email: "",
  mobileNumber: "",
  instituteName: "",
  courseName: "",
  currentSemester: "",
  addressLine: "",
  pinCode: "",
  internshipDomain: "",
  preferredStartMonth: "",
  durationWeeks: "6",
  statementOfPurpose: "",
  nocAvailable: false,
};
const MIN_AGE = 16;
const MAX_AGE = 45;

function isWindowOpenClient() {
  const FORCE_OPEN_FOR_TESTING = process.env.NEXT_PUBLIC_FORCE_OPEN_INTERNSHIP_WINDOW === "true";
  if (FORCE_OPEN_FOR_TESTING) {
    return true;
  }
  const day = new Date().getDate();
  return day >= 1 && day <= 10;
}

function toYearMonth(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function toReadableMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  const date = new Date(year, month - 1, 1);
  return date.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
}

function getAllowedMonthRange() {
  const now = new Date();
  const min = new Date(now.getFullYear(), now.getMonth() + 2, 1);
  const decemberThisYear = new Date(now.getFullYear(), 11, 1);
  const max = min > decemberThisYear ? min : decemberThisYear;
  return { min: toYearMonth(min), max: toYearMonth(max) };
}

function getAllowedMonthOptions(min: string, max: string): string[] {
  const [minYear, minMonth] = min.split("-").map(Number);
  const [maxYear, maxMonth] = max.split("-").map(Number);
  const current = new Date(minYear, minMonth - 1, 1);
  const end = new Date(maxYear, maxMonth - 1, 1);
  const options: string[] = [];

  while (current <= end) {
    options.push(toYearMonth(current));
    current.setMonth(current.getMonth() + 1);
  }

  return options;
}

function formatDateInput(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDobBounds() {
  const now = new Date();
  const latestDob = new Date(now.getFullYear() - MIN_AGE, now.getMonth(), now.getDate());
  const earliestDob = new Date(now.getFullYear() - MAX_AGE, now.getMonth(), now.getDate());
  return {
    min: formatDateInput(earliestDob),
    max: formatDateInput(latestDob),
    today: formatDateInput(now),
  };
}

function validateClientForm(form: FormState, monthOptions: string[]): string | null {
  const fullName = form.fullName.trim().replace(/\s+/g, " ");
  const dateOfBirth = form.dateOfBirth.trim();
  const gender = form.gender.trim();
  const email = form.email.trim().toLowerCase();
  const mobile = form.mobileNumber.replace(/\D/g, "");
  const instituteName = form.instituteName.trim();
  const courseName = form.courseName.trim();
  const currentSemester = form.currentSemester.trim();
  const addressLine = form.addressLine.trim();
  const pinCode = form.pinCode.trim();
  const preferredStartMonth = form.preferredStartMonth.trim();
  const sop = form.statementOfPurpose.trim();
  const duration = Number(form.durationWeeks);
  const dobDate = new Date(`${dateOfBirth}T00:00:00`);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const monthDiff = today.getMonth() - dobDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age -= 1;
  }

  if (!/^[A-Za-z][A-Za-z\s.'-]{2,99}$/.test(fullName)) return "Enter valid full name (3-100 characters).";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth)) return "Select valid Date of Birth.";
  if (Number.isNaN(dobDate.getTime())) return "Select valid Date of Birth.";
  if (dobDate > today) return "Date of Birth cannot be a future date.";
  if (age < MIN_AGE || age > MAX_AGE) return `Only candidates aged ${MIN_AGE} to ${MAX_AGE} years can apply.`;
  if (!["Male", "Female", "Other", "Prefer not to say"].includes(gender)) return "Select valid gender.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter valid email address.";
  if (!(mobile.length === 10 || (mobile.length === 12 && mobile.startsWith("91")))) return "Enter valid mobile number.";
  if (instituteName.length < 3 || instituteName.length > 200) return "Institute name must be 3-200 characters.";
  if (courseName.length < 2 || courseName.length > 120) return "Course name must be 2-120 characters.";
  if (currentSemester.length < 2 || currentSemester.length > 40) return "Current semester/year is invalid.";
  if (addressLine.length < 15 || addressLine.length > 300) return "Address must be 15-300 characters.";
  if (!/^\d{6}$/.test(pinCode)) return "PIN Code must be 6 digits.";
  if (!INTERNSHIP_DOMAINS.includes(form.internshipDomain as (typeof INTERNSHIP_DOMAINS)[number])) return "Select internship domain.";
  if (!/^\d{4}-\d{2}$/.test(preferredStartMonth)) {
    return "Preferred start month is required.";
  }
  if (!monthOptions.includes(preferredStartMonth)) return "Preferred start month is outside allowed window.";
  if (!Number.isInteger(duration) || duration < 6 || duration > 24) return "Duration must be 6 to 24 weeks.";
  if (sop.length < 100 || sop.length > 2000) return "Statement of purpose must be 100-2000 characters.";
  if (!form.nocAvailable) return "NOC declaration is mandatory.";
  return null;
}

export default function InternshipApplyPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isWindowOpen = useMemo(() => isWindowOpenClient(), []);
  const monthRange = useMemo(() => getAllowedMonthRange(), []);
  const monthOptions = useMemo(() => getAllowedMonthOptions(monthRange.min, monthRange.max), [monthRange.max, monthRange.min]);
  const dobBounds = useMemo(() => getDobBounds(), []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!isWindowOpen) {
      setErrorMessage("Applications are accepted online from 1st to 10th of every month only.");
      return;
    }
    const clientValidation = validateClientForm(form, monthOptions);
    if (clientValidation) {
      setErrorMessage(clientValidation);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/internship/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
          ...form,
          durationWeeks: Number(form.durationWeeks),
        }),
      });

      const data = (await response.json()) as { error?: string; message?: string; applicationId?: number };
      if (!response.ok) {
        setErrorMessage(data.error ?? "Failed to submit application.");
        return;
      }

      setSuccessMessage(`${data.message ?? "Application submitted."} Reference ID: ${data.applicationId ?? "-"}`);
      setForm({ ...INITIAL_STATE });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unexpected submission error.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pb-12">
      <PageTitle title="Internship Application Form" />
      <section className="mx-auto max-w-4xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-[#F7FAFF] to-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-[#0F172A]">Apply Online</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Submit your internship request through the official NICSI online application process. Applications are accepted
            from 1st to 10th of every month.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Window: 1st to 10th
            </span>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Duration: 6 to 24 Weeks
            </span>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Mode: Online Submission
            </span>
          </div>
          {!isWindowOpen ? (
            <p className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
              Application window is currently closed.
            </p>
          ) : null}
        </div>

        <form className="mt-6 grid gap-6" onSubmit={onSubmit}>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Applicant Details</h3>
            <div className="mt-4 grid items-start gap-4 lg:grid-cols-2">
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Full Name</span>
                <input
                  required
                  maxLength={100}
                  minLength={3}
                  pattern="[A-Za-z][A-Za-z\s.'-]{2,99}"
                  title="Use alphabets only (3-100 characters)."
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={form.fullName ?? ""}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      fullName: e.target.value.replace(/[^A-Za-z\s.'-]/g, ""),
                    }))
                  }
                />
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Date of Birth</span>
                <input
                  type="date"
                  required
                  min={dobBounds.min}
                  max={dobBounds.max}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={form.dateOfBirth ?? ""}
                  onChange={(e) => setForm((p) => ({ ...p, dateOfBirth: e.target.value }))}
                />
                <span className="text-xs text-gray-500">
                  Allowed DOB range: {dobBounds.min} to {dobBounds.max} (Age {MIN_AGE}-{MAX_AGE})
                </span>
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Gender</span>
                <select
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={form.gender ?? ""}
                  onChange={(e) => setForm((p) => ({ ...p, gender: e.target.value }))}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Email</span>
                <input type="email" maxLength={254} required className="w-full rounded-md border border-gray-300 px-3 py-2" value={form.email ?? ""} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Mobile Number</span>
                <input
                  required
                  maxLength={15}
                  inputMode="numeric"
                  pattern="([0-9]{10}|91[0-9]{10})"
                  title="Enter 10 digit mobile number or 91XXXXXXXXXX."
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={form.mobileNumber ?? ""}
                  onChange={(e) => setForm((p) => ({ ...p, mobileNumber: e.target.value.replace(/[^\d]/g, "") }))}
                />
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Institute Name</span>
                <input required maxLength={200} className="w-full rounded-md border border-gray-300 px-3 py-2" value={form.instituteName ?? ""} onChange={(e) => setForm((p) => ({ ...p, instituteName: e.target.value }))} />
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Course Name</span>
                <input required maxLength={120} className="w-full rounded-md border border-gray-300 px-3 py-2" value={form.courseName ?? ""} onChange={(e) => setForm((p) => ({ ...p, courseName: e.target.value }))} />
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Current Semester/Year</span>
                <input required maxLength={40} className="w-full rounded-md border border-gray-300 px-3 py-2" value={form.currentSemester ?? ""} onChange={(e) => setForm((p) => ({ ...p, currentSemester: e.target.value }))} />
              </label>
              <label className="grid min-w-0 gap-1 text-sm lg:col-span-2">
                <span className="font-semibold">Address</span>
                <input required maxLength={300} className="w-full rounded-md border border-gray-300 px-3 py-2" value={form.addressLine ?? ""} onChange={(e) => setForm((p) => ({ ...p, addressLine: e.target.value }))} />
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">PIN Code</span>
                <input
                  required
                  maxLength={6}
                  inputMode="numeric"
                  pattern="\d{6}"
                  title="Enter valid 6 digit PIN code."
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={form.pinCode ?? ""}
                  onChange={(e) => setForm((p) => ({ ...p, pinCode: e.target.value.replace(/[^\d]/g, "").slice(0, 6) }))}
                />
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Internship Domain</span>
                <select
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={form.internshipDomain ?? ""}
                  onChange={(e) => setForm((p) => ({ ...p, internshipDomain: e.target.value }))}
                >
                  <option value="">Select domain</option>
                  {INTERNSHIP_DOMAINS.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Preferred Start Month</span>
                <select
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={form.preferredStartMonth ?? ""}
                  onChange={(e) => setForm((p) => ({ ...p, preferredStartMonth: e.target.value }))}
                >
                  <option value="">Select month</option>
                  {monthOptions.map((value) => (
                    <option key={value} value={value}>
                      {toReadableMonth(value)}
                    </option>
                  ))}
                </select>
                <span className="text-xs text-gray-500">
                  Allowed: {toReadableMonth(monthRange.min)} to {toReadableMonth(monthRange.max)}
                </span>
              </label>
              <label className="grid min-w-0 gap-1 text-sm">
                <span className="font-semibold">Duration (Weeks)</span>
                <input type="number" min={6} max={24} required className="w-full rounded-md border border-gray-300 px-3 py-2" value={form.durationWeeks ?? ""} onChange={(e) => setForm((p) => ({ ...p, durationWeeks: e.target.value }))} />
              </label>
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Purpose & Declaration</h3>
            <label className="grid gap-1 text-sm">
              <span className="font-semibold">Statement of Purpose (100-2000 characters)</span>
              <textarea required minLength={100} maxLength={2000} rows={5} className="w-full rounded-md border border-gray-300 px-3 py-2" value={form.statementOfPurpose ?? ""} onChange={(e) => setForm((p) => ({ ...p, statementOfPurpose: e.target.value }))} />
            </label>
            <p className="mt-1 text-xs text-gray-500">
              Mention your motivation, relevant skills, and expected learning outcomes from NICSI internship.
            </p>

            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!form.nocAvailable} onChange={(e) => setForm((p) => ({ ...p, nocAvailable: e.target.checked }))} />
              <span>I confirm that NOC from University/College will be produced at joining.</span>
            </label>
          </div>

          {errorMessage ? <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</p> : null}
          {successMessage ? <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{successMessage}</p> : null}

          <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-600">Please verify details before final submission.</p>
              <button
                type="submit"
                disabled={submitting || !isWindowOpen}
                className="rounded-md bg-[#003A8C] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0052CC] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
