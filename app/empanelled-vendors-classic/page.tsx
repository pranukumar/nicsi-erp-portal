"use client";

import { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { getEmpanelledVendorSnapshot } from "@/lib/empanelledVendorSnapshot";

type VendorRow = {
  id: string;
  vendor_address: string;
  agreement_empanelment: string;
  contact_email_id: string;
  contact_person_name: string;
  description: string;
  effective_from: string;
  empanelment_category: string;
  empanelment_no: string;
  empanelment_scope_type: string;
  valid_up_to: string;
  vendor_category: string;
  vendor_name: string;
};

export default function EmpanelledVendorsClassicPage() {
  const snapshot = useMemo(() => getEmpanelledVendorSnapshot(), []);
  const [rows] = useState<VendorRow[]>(snapshot.rows);
  const [vendorCategory, setVendorCategory] = useState("");
  const [empanelmentCategory, setEmpanelmentCategory] = useState("");
  const [search, setSearch] = useState("");

  const vendorCategories = useMemo(
    () => Array.from(new Set(rows.map((row) => row.vendor_category))).sort((a, b) => a.localeCompare(b)),
    [rows],
  );
  const empanelmentCategories = useMemo(
    () => Array.from(new Set(rows.map((row) => row.empanelment_category))).sort((a, b) => a.localeCompare(b)),
    [rows],
  );

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((row) => {
      if (vendorCategory && row.vendor_category !== vendorCategory) return false;
      if (empanelmentCategory && row.empanelment_category !== empanelmentCategory) return false;
      if (!q) return true;
      return (
        row.vendor_name.toLowerCase().includes(q) ||
        row.empanelment_no.toLowerCase().includes(q) ||
        row.contact_email_id.toLowerCase().includes(q)
      );
    });
  }, [rows, vendorCategory, empanelmentCategory, search]);

  return (
    <main className="pb-12">
      <PageTitle title="Empanelled Vendors (Classic)" />
      <section className="mx-auto max-w-7xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Empanelled Vendors (Classic)</h2>
          <p className="mt-2 text-sm text-gray-600">Basic filter view with official vendor listing.</p>

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <select
              value={vendorCategory}
              onChange={(event) => setVendorCategory(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select Vendor Category</option>
              {vendorCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={empanelmentCategory}
              onChange={(event) => setEmpanelmentCategory(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select Empanelment Category</option>
              {empanelmentCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search vendor / empanelment no. / email"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => {
                setVendorCategory("");
                setEmpanelmentCategory("");
                setSearch("");
              }}
              className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-[#003A8C] hover:bg-blue-100"
            >
              Reset Filters
            </button>
          </div>

          <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="nic-table min-w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3">S.No.</th>
                  <th className="px-4 py-3">Vendor Name</th>
                  <th className="px-4 py-3">Vendor Category</th>
                  <th className="px-4 py-3">Empanelment Category</th>
                  <th className="px-4 py-3">Empanelment No.</th>
                  <th className="px-4 py-3">Effective From</th>
                  <th className="px-4 py-3">Valid Upto</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.length === 0 ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-gray-500" colSpan={7}>
                      No vendor records found for selected filters.
                    </td>
                  </tr>
                ) : (
                  filteredRows.map((row, index) => (
                    <tr key={row.id}>
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3 font-medium text-[#0F172A]">{row.vendor_name}</td>
                      <td className="px-4 py-3">{row.vendor_category}</td>
                      <td className="px-4 py-3">{row.empanelment_category}</td>
                      <td className="px-4 py-3">{row.empanelment_no}</td>
                      <td className="px-4 py-3">{row.effective_from}</td>
                      <td className="px-4 py-3">{row.valid_up_to}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
