"use client";

import { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

type ItemType = "all" | "circular" | "notice";

type PressItem = {
  id: number;
  type: "circular" | "notice";
  title: string;
  sizeLabel: string;
  fileName: string;
};

const ITEMS: PressItem[] = [
  {
    id: 1,
    type: "circular",
    title: "NICSI Mandate",
    sizeLabel: "234.21 KB",
    fileName: "NICSI_Mandate.pdf",
  },
  {
    id: 2,
    type: "circular",
    title: "Complaints of sexual harassment of women employees in NICSI",
    sizeLabel: "366 KB",
    fileName: "Circular.pdf",
  },
  {
    id: 3,
    type: "notice",
    title: "NeVA, MPVS- Expression of Interest / Pre RFP Stakeholder Consultation",
    sizeLabel: "508 KB",
    fileName: "mpvseoineva080825.pdf",
  },
  {
    id: 4,
    type: "notice",
    title: "Internship Scheme has been duly approved by the Competent Authority MD, NICSI",
    sizeLabel: "174 KB",
    fileName: "NICSI_DOCS.pdf",
  },
];

export default function Page() {
  const [filter, setFilter] = useState<ItemType>("all");

  const visibleItems = useMemo(() => {
    if (filter === "all") return ITEMS;
    return ITEMS.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <main className="pb-12">
      <PageTitle title="Press Releases" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A]">Circular & Notices</h2>
              <p className="mt-2 text-sm text-gray-600">
                Updated using currently available official NICSI circular/notice records.
              </p>
            </div>
            <div className="inline-flex overflow-hidden rounded-lg border border-blue-200 bg-white">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  filter === "all" ? "bg-[#003A8C] text-white" : "text-[#0F172A] hover:bg-blue-50"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setFilter("circular")}
                className={`border-l border-blue-200 px-4 py-2 text-sm font-semibold transition ${
                  filter === "circular" ? "bg-[#003A8C] text-white" : "text-[#0F172A] hover:bg-blue-50"
                }`}
              >
                Circular
              </button>
              <button
                type="button"
                onClick={() => setFilter("notice")}
                className={`border-l border-blue-200 px-4 py-2 text-sm font-semibold transition ${
                  filter === "notice" ? "bg-[#003A8C] text-white" : "text-[#0F172A] hover:bg-blue-50"
                }`}
              >
                Notice
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-blue-100">
            <table className="nic-table min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Sr.No.</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Download</th>
                </tr>
              </thead>
              <tbody>
                {visibleItems.map((item, index) => (
                  <tr key={item.id} className="border-t align-top">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          item.type === "circular"
                            ? "bg-blue-100 text-[#003A8C]"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {item.type === "circular" ? "Circular" : "Notice"}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-[#0F172A]">{item.title}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`/pdfs/press-releases/${item.fileName}`}
                        download
                        className="inline-flex w-40 justify-center rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                      >
                        Download ({item.sizeLabel})
                      </a>
                    </td>
                  </tr>
                ))}
                {visibleItems.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                      No records available.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
