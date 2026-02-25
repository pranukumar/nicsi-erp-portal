"use client";

import { useEffect, useState } from "react";

import type { HeadquarterPersonnel } from "@/services/headquarterPersonnel";

type Props = {
  initialRows: HeadquarterPersonnel[];
  initialTotal: number;
  initialManagingDirector?: HeadquarterPersonnel;
  initialQuery: string;
};

export default function HeadquarterPersonnelTable({
  initialRows,
  initialTotal,
  initialManagingDirector,
  initialQuery,
}: Props) {
  const [rows, setRows] = useState(initialRows);
  const [total, setTotal] = useState(initialTotal);
  const [managingDirector, setManagingDirector] = useState<HeadquarterPersonnel | undefined>(initialManagingDirector);
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 350);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRows = async () => {
      setLoading(true);
      try {
        const search = new URLSearchParams();
        search.set("page", "1");
        search.set("limit", "500");
        if (debouncedQuery) {
          search.set("q", debouncedQuery);
        }

        const response = await fetch(`/api/headquarters-personnel?${search.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as {
          rows: HeadquarterPersonnel[];
          total: number;
          managingDirector?: HeadquarterPersonnel | null;
        };
        setRows(data.rows);
        setTotal(data.total);
        setManagingDirector(data.managingDirector ?? undefined);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Failed to fetch personnel rows:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRows();
    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <>
      {managingDirector && (
        <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-4 shadow-sm md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-[#0052CC]">Managing Director</p>
              <h3 className="mt-1 text-lg font-bold text-[#0A2A72]">{managingDirector.name}</h3>
              <p className="text-sm text-gray-700">{managingDirector.designation}</p>
            </div>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              HQ Leadership
            </span>
          </div>
          <div className="mt-4 grid gap-2 text-sm text-gray-800 sm:grid-cols-2">
            <p className="rounded-md border border-blue-100 bg-white px-3 py-2">
              <span className="font-semibold text-[#0F172A]">Phone:</span> {managingDirector.phoneNumber}
            </p>
            <p className="rounded-md border border-blue-100 bg-white px-3 py-2">
              <span className="font-semibold text-[#0F172A]">Email:</span> {managingDirector.email}
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <div className="w-full rounded-lg border border-gray-200 bg-white p-3 md:w-[28rem]">
          <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, designation, phone or email"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => setDebouncedQuery(query.trim())}
              className="justify-self-end rounded-md bg-[#003A8C] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#0052CC]"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="nic-table min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3">S.No.</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Designation</th>
              <th className="px-4 py-3">Phone Number</th>
              <th className="px-4 py-3">Ext./IP</th>
              <th className="px-4 py-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan={6}>
                  {loading ? "Loading..." : "No records found."}
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={row.id} className="border-t">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.designation}</td>
                  <td className="px-4 py-3">{row.phoneNumber}</td>
                  <td className="px-4 py-3">{row.extensionIp}</td>
                  <td className="px-4 py-3">{row.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">Total records: {total}</p>
      </div>
    </>
  );
}
