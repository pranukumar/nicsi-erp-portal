"use client";

import type { HeadquarterPersonnel } from "@/services/headquarterPersonnel";

type Props = {
  initialRows: HeadquarterPersonnel[];
  initialTotal: number;
  initialManagingDirector?: HeadquarterPersonnel;
};

export default function HeadquarterPersonnelTable({
  initialRows,
  initialTotal,
  initialManagingDirector,
}: Props) {
  const rows = initialRows;
  const total = initialTotal;
  const managingDirector = initialManagingDirector;

  return (
    <>
      {managingDirector && (
        <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-4 shadow-sm md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="mt-1 text-lg font-bold text-[#0A2A72]">{managingDirector.name}</h3>
              <p className="text-sm text-gray-700">{managingDirector.designation}</p>
            </div>
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
                  No records found.
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
