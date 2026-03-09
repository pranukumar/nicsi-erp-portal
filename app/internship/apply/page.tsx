"use client";

import { useMemo } from "react";
import Link from "next/link";
import PageTitle from "@/components/layout/PageTitle";

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

function isWindowOpenClient() {
  const forceOpen = process.env.NEXT_PUBLIC_FORCE_OPEN_INTERNSHIP_WINDOW === "true";
  if (forceOpen) {
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

export default function InternshipApplyPage() {
  const isWindowOpen = useMemo(() => isWindowOpenClient(), []);
  const monthRange = useMemo(() => getAllowedMonthRange(), []);

  return (
    <main className="pb-12">
      <PageTitle title="Internship Application Form" />
      <section className="mx-auto max-w-4xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-[#F7FAFF] to-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-[#0F172A]">Internship Application Archive</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            This route is preserved as a static reference page. Live submission workflow has been removed from the portal.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Window: 1st to 10th
            </span>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Duration: 6 to 24 Weeks
            </span>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Mode: Static Archive
            </span>
          </div>
          <p className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
            {isWindowOpen
              ? "Application window date range is currently open, but online submission is disabled in this static portal."
              : "Application window is currently closed, and online submission is disabled in this static portal."}
          </p>
        </div>

        <div className="mt-6 grid gap-6">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Reference Application Fields</h3>
            <p className="mt-2 text-sm text-gray-600">
              The following fields are retained for reference so the archived page stays informative without using any live backend.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Full Name",
                "Date of Birth",
                "Gender",
                "Email",
                "Mobile Number",
                "Institute Name",
                "Course Name",
                "Current Semester/Year",
                "Address",
                "PIN Code",
                "Preferred Start Month",
                "Duration (Weeks)",
              ].map((field) => (
                <div key={field} className="rounded-md border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-sm text-[#0F172A]">
                  {field}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Indicative Domains</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {INTERNSHIP_DOMAINS.map((domain) => (
                <div key={domain} className="rounded-md border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-sm text-[#0F172A]">
                  {domain}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Allowed Planning Window</h3>
            <p className="mt-2 text-sm text-gray-600">
              Preferred start month in the archived workflow ranges from {toReadableMonth(monthRange.min)} to {toReadableMonth(monthRange.max)}.
            </p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-600">
                For policy details, eligibility, required documents, and programme conditions, use the internship information page.
              </p>
              <Link href="/internship" className="rounded-md bg-[#003A8C] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0052CC]">
                Back to Internship
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
