"use client";

import { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

type WorkAllocationRow = {
  srNo: string;
  name: string;
  designation: string;
  stateCoordinator: string;
  projectsMinistry: string;
};

const rows: WorkAllocationRow[] = [
  { srNo: "1", name: "Shri Naveen Agrawal", designation: "Chief General Manager", stateCoordinator: "Uttar Pradesh and Uttarakhand", projectsMinistry: "M/o Rural Development, M/o Cooperation, M/o Finance, President Secretariat, Vice President Secretariat, Prime Minister Office, Cabinet Secretariat, Lok Sabha and Rajya Sabha, M/o Parliamentary Affairs" },
  { srNo: "1.1", name: "Shri Mahesh Kumar", designation: "Deputy Manager", stateCoordinator: "", projectsMinistry: "" },
  { srNo: "2", name: "Shri Jitender Kumar", designation: "Chief General Manager", stateCoordinator: "West Bengal and all North East states including Sikkim", projectsMinistry: "M/o Heavy Industries & Public Enterprises, M/o Development of NE-Region" },
  { srNo: "3", name: "Shri Prasanna Pandey", designation: "General Manager", stateCoordinator: "", projectsMinistry: "M/o Fisheries, Animal Husbandry & Dairying, NIC budget Projects" },
  { srNo: "3.1", name: "Shri Kumar Jyoti", designation: "Senior Manager", stateCoordinator: "", projectsMinistry: "M/o Education" },
  { srNo: "4", name: "Shri Atul Rastogi", designation: "General Manager", stateCoordinator: "Andhra Pradesh, Telangana, Lakshadweep, Puducherry", projectsMinistry: "M/o Food Processing Industries, M/o Civil Aviation, M/o Skill Development & Entrepreneurship, M/o Textiles, M/o Steels, Election Commission of India" },
  { srNo: "5", name: "Md. Ziya Ur Rehman Badar", designation: "Sr. General Manager", stateCoordinator: "Bihar, Jharkhand", projectsMinistry: "M/o Chemicals and Fertilizers, M/o Coal, M/o Jal Shakti, M/o Earth Sciences, M/o Panchayati Raj, M/o Shipping, M/o Law & Justice, M/o Social Justice and Empowerment" },
  { srNo: "5.1", name: "Shri Vikas Dixit", designation: "Manager", stateCoordinator: "Maharashtra", projectsMinistry: "" },
  { srNo: "5.2", name: "Shri Jeevan Nath", designation: "Assistant Manager", stateCoordinator: "", projectsMinistry: "" },
  { srNo: "6", name: "Shri Rahul Sharma", designation: "General Manager", stateCoordinator: "J&K and Ladakh", projectsMinistry: "M/o Electronics & Information Technology (MeitY), M/o Road Transport & Highways" },
  { srNo: "7", name: "Shri Bhupendra Kumar Sharma", designation: "General Manager", stateCoordinator: "", projectsMinistry: "IVFRT MMP" },
  { srNo: "8", name: "Shri Gyan Prakash Singh", designation: "General Manager", stateCoordinator: "CAG, M/o Communications", projectsMinistry: "NITI Aayog, M/o Information & Broadcasting, M/o Science & Technology, M/o Agriculture and Farmers Welfare, M/o Commerce and Industry, M/o Corporate Affairs, M/o Micro, Small & Medium Enterprises, M/o Home Affairs (other than IVFRT & Data Centre/Cloud Infrastructure)" },
  { srNo: "9", name: "Shri Ramdatt Updhyay", designation: "General Manager", stateCoordinator: "Madhya Pradesh, Chhattisgarh, Gujarat, Odisha", projectsMinistry: "M/o Environment, Forest & Climate Change, D/o Space, D/o Atomic Energy, M/o Women & Child Development" },
  { srNo: "10", name: "Shri Shailendra Saxena", designation: "Deputy General Manager", stateCoordinator: "Himachal Pradesh", projectsMinistry: "M/o Defence, M/o AYUSH, M/o Health & Family Welfare, eHospital, All AIIMS, M/o Labour & Employment, M/o Power, M/o New & Renewal Energy (MNRE), M/o External Affairs including all projects" },
  { srNo: "11", name: "Shri Neeraj Chawla", designation: "Deputy General Manager", stateCoordinator: "Tamil Nadu, Kerala, Punjab, Haryana, Chandigarh", projectsMinistry: "M/o Minority Affairs, M/o Youth Affairs and Sports, M/o Tribal Affairs, M/o Tourism, M/o Culture, M/o Housing & Urban Affairs" },
  { srNo: "12", name: "Shri Lalit Kumar Bhatia", designation: "General Manager", stateCoordinator: "Karnataka, Dadar & Nagar Haveli, Andaman & Nicobar, Rajasthan", projectsMinistry: "M/o Statistics & Planning Implementation (MoSPI), M/o Railways" },
  { srNo: "13", name: "Shri Ajay Kumar Gupta", designation: "General Manager", stateCoordinator: "Goa, Daman & Diu and Delhi", projectsMinistry: "M/o Personnel, Public Grievances & Pensions, M/o Petroleum & Natural Gas, M/o Mines, M/o Consumer Affairs, Food & Public Distribution" },
  { srNo: "14", name: "Shri Mahesh Kumar (Additional Charge)", designation: "Company Secretary", stateCoordinator: "", projectsMinistry: "" },
  { srNo: "15", name: "Shri Ravi Kumar", designation: "Consultant", stateCoordinator: "", projectsMinistry: "Accounts, unidentified funds settlement, MSME vendors payments settlement, Project Section (TA/DA claims of Projects officers/coordinators)" },
];

const designationPriority: Record<string, number> = {
  "chief general manager": 1,
  "sr. general manager": 2,
  "senior general manager": 2,
  "general manager": 3,
  "deputy general manager": 4,
  "senior manager": 5,
  manager: 6,
  "deputy manager": 7,
  "assistant manager": 8,
  "company secretary": 9,
  consultant: 10,
};

function getDesignationRank(designation: string): number {
  const normalized = designation.trim().toLowerCase();
  return designationPriority[normalized] ?? 99;
}

function getSrNoRank(srNo: string): number {
  const value = Number(srNo);
  return Number.isFinite(value) ? value : 9999;
}

export default function WorkAllocationPage() {
  const [query, setQuery] = useState("");

  const orderedRows = useMemo(() => {
    return [...rows].sort((a, b) => {
      const designationDiff = getDesignationRank(a.designation) - getDesignationRank(b.designation);
      if (designationDiff !== 0) {
        return designationDiff;
      }
      const srNoDiff = getSrNoRank(a.srNo) - getSrNoRank(b.srNo);
      if (srNoDiff !== 0) {
        return srNoDiff;
      }
      return a.name.localeCompare(b.name);
    });
  }, []);

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return orderedRows;
    }
    return orderedRows.filter((row) =>
      row.name.toLowerCase().includes(q) ||
      row.designation.toLowerCase().includes(q) ||
      row.stateCoordinator.toLowerCase().includes(q) ||
      row.projectsMinistry.toLowerCase().includes(q),
    );
  }, [query, orderedRows]);

  return (
    <main className="pb-12">
      <PageTitle title="Work Allocation" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-lg border border-gray-200 bg-white p-3 md:ml-auto md:w-[30rem]">
          <form
            className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center"
            onSubmit={(event) => {
              event.preventDefault();
              setQuery((prev) => prev.trim());
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, designation, state or ministry"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="justify-self-end rounded-md bg-[#003A8C] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#0052CC]"
            >
              Search
            </button>
          </form>
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="nic-table min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3">S.No.</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Designation</th>
                <th className="px-4 py-3">State Coordinator</th>
                <th className="px-4 py-3">Projects/Ministry</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-center text-gray-500" colSpan={5}>
                    No records found.
                  </td>
                </tr>
              ) : (
                filteredRows.map((row, index) => (
                  <tr key={`${row.srNo}-${row.name}`} className="border-t align-top">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                    <td className="px-4 py-3">{row.designation}</td>
                    <td className="px-4 py-3">{row.stateCoordinator || "-"}</td>
                    <td className="px-4 py-3">{row.projectsMinistry || "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-600">Total records: {filteredRows.length}</p>
      </section>
    </main>
  );
}
