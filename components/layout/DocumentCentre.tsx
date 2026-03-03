"use client";

import Link from "next/link";
import { FileBadge2, FileText, Megaphone, ScrollText } from "lucide-react";
import { useMemo, useState } from "react";

type DocumentType = "All" | "Tender" | "Circular" | "Notice" | "Press Release" | "Vendor Forms";

type DocumentItem = {
  type: Exclude<DocumentType, "All">;
  title: string;
  description: string;
  href: string;
};

const filters: DocumentType[] = ["All", "Tender", "Circular", "Notice", "Press Release", "Vendor Forms"];

const documents: DocumentItem[] = [
  {
    type: "Tender",
    title: "NICSI GeM Bids",
    description: "View current GeM bid opportunities and procurement references.",
    href: "/nicsi-gem-bids",
  },
  {
    type: "Tender",
    title: "NICSI CPP Tenders",
    description: "Track current and archived CPP tenders with official references.",
    href: "/active-tenders",
  },
  {
    type: "Circular",
    title: "Circulars and Policy Updates",
    description: "Explore circulars and policy-related update notices.",
    href: "/news-updates",
  },
  {
    type: "Notice",
    title: "Public Notices",
    description: "Important announcements and public information notices.",
    href: "/news-updates",
  },
  {
    type: "Press Release",
    title: "Official Press Releases",
    description: "Read official NICSI press communications and media releases.",
    href: "/press-releases",
  },
  {
    type: "Vendor Forms",
    title: "Download Form Repository",
    description: "Access official vendor and procurement-related forms.",
    href: "/forms",
  },
];

function getTypeIcon(type: DocumentItem["type"]) {
  if (type === "Tender") return FileBadge2;
  if (type === "Press Release") return Megaphone;
  if (type === "Vendor Forms") return ScrollText;
  return FileText;
}

export default function DocumentCentre() {
  const [activeFilter, setActiveFilter] = useState<DocumentType>("All");

  const filteredDocuments = useMemo(() => {
    if (activeFilter === "All") return documents;
    return documents.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Document Centre</p>
        <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Quick Access to Public Documents</h2>

        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveFilter(chip)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeFilter === chip
                  ? "border-[#0F4BB8] bg-[#0F4BB8] text-white"
                  : "border-blue-200 text-[#003A8C] hover:bg-blue-50"
              }`}
              aria-pressed={activeFilter === chip}
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {filteredDocuments.map((item) => {
            const Icon = getTypeIcon(item.type);
            return (
              <article key={`${item.type}-${item.title}`} className="rounded-xl border border-gray-200 bg-[#FCFDFF] p-5">
                <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C]">
                  {item.type}
                </p>
                <h3 className="mt-3 text-base font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#003A8C] hover:text-[#0F4BB8]">
                  <Icon size={15} />
                  Open
                </Link>
              </article>
            );
          })}
        </div>

        {filteredDocuments.length === 0 ? (
          <div className="mt-5 rounded-xl border border-gray-200 p-5 text-sm text-gray-700">
            No documents found for this filter.
          </div>
        ) : null}
      </div>
    </section>
  );
}
