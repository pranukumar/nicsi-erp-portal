"use client";

import { useMemo, useState } from "react";

type WorkAllocationRow = {
  srNo: string;
  name: string;
  designation: string;
  stateCoordinator: string;
  projectsMinistry: string;
};

const rows: WorkAllocationRow[] = [
  { srNo: "1", name: "Shri Jitender Kumar", designation: "Chief General Manager", stateCoordinator: "West Bengal and all North East states including Sikkim", projectsMinistry: "M/o Heavy Industries & Public Enterprises, M/o Development of NE-Region, Financial Adviser and Controller of Accounts, Audit Division, iRAD Project, e-Counseling Debt Recovery Cell" },
  { srNo: "2", name: "Shri Naveen Agrawal", designation: "Chief General Manager", stateCoordinator: "Uttar Pradesh and Uttarakhand", projectsMinistry: "M/o Rural Development, M/o Cooperation, M/o Finance. President Secretariat, Vice resident Sed President Secretariat, Prime Minister Office, Cabinet Secretariat, Lok Sabha and Rajya Sabha, M/o Parliamentary Affairs, Administration, Physical Infrastructure, Stores, Travel Help Desk and e-Way Bill Appellate Authority for RTI" },
  { srNo: "3", name: "Md. Ziya Ur Rehman Badar", designation: "Sr. General Manager", stateCoordinator: "Bihar, Jharkhand", projectsMinistry: "M/o Chemicals and Fertilizers, M/o Coal, M/o Jal Shakti, M/o Ear M/o Earth Sciences, M/o Panchayati Raj, M/o Shipping M/o Law & Justice, M/o Social Justice and Empowerment, e-Court, Cloud Services & Data Centre Business Division, Enhancement of NIC Cloud Services at National Data Centre-Shastri Park, Hyderabad & Pune, Bhubaneswar -do- Project of MHA ICR-ER, e- Shield North East-National Data Centre, Human Resources (HR), Aadhaar Data Vault (ADV) Legal Division, Vigilance Division" },
  { srNo: "4", name: "Shri Rahul Sharma", designation: "General Manager", stateCoordinator: "J&K and Ladakh", projectsMinistry: "M/o Electronics & Information Technology (MeitY), M/o Road Transport & Highways, NKN, PRAGATI, My Gov, OGD, W3C, India Portal Projects, Coordination of NIC and MeitY, SWAN (States), PMU- Transports, Smart Card Based Driving License and Registrauon Registration Certification Projects/ e-Transport, IVRS-NIC eHRM" },
  { srNo: "5", name: "Shri Bhupendra Kumar Sharma", designation: "General Manager", stateCoordinator: "-", projectsMinistry: "IVFRT MMP, Accounts Division, DrFrojec Project Division, ERP Implementation in NICSI, UC Cell" },
  { srNo: "6", name: "Shri Gyan Prakash Singh", designation: "General Manager", stateCoordinator: "CAG, M/o Communications", projectsMinistry: "NITI Aayog, M/o Information & Broadcasting, M/o Science & Technology, M/o Agriculture and Farmers Welfare, M/o Commerce and Industry, M/o Corporate Affairs, M/o Micro, Small & Medium Enterprises, M/o Home Affairs (other than IVFRT & Data Centre/Cloud Infrastructure), ePrison (Mauritius), NDMA, NCRB, CCTNS, ICJS," },
  { srNo: "7", name: "Shri Ramdatt Updhyay", designation: "General Manager", stateCoordinator: "Madhya Pradesh, Chhattisgarh, Gujarat, Odisha", projectsMinistry: "M/o Environment, Forest & Climate Change, D/o Space, D/o Atomic Energy, M/o Women & Child Development, ICDS, CPC-Env Project, STOC, Collab files, NSP, e-Taal, ALN, XLN, E-Distict, e-District, Tender Division, GeM Division" },
  { srNo: "8", name: "Shri Prasanna Pandey", designation: "General Manager", stateCoordinator: "-", projectsMinistry: "M/o Fisheries, Animal Husbandry & Dairying, NIC budget Projects, CEDA, Products Business Division, AI-MEDHA" },
  { srNo: "9", name: "Shri Atul Rastogi", designation: "General Manager", stateCoordinator: "Andhra Pradesh, Telangana, Lakshadweep, Puducherry", projectsMinistry: "M/o Food Processing Industries, M/o Civil Aviation, M/o Skill Development & Entrepreneurship, M/o Textiles, M/o Steels, Election Commission of India, e-Granthalaya, SwaaS Project App Store, Webcast (NIC), NDH, Jeevan Pramaan Aadhar Enabled Biometrics Attendance nce Systems Systems (AEBAS) E-Mail/Email Solution" },
  { srNo: "10", name: "Shri Lalit Kumar Bhatia", designation: "General Manager", stateCoordinator: "Karnataka, Dadar & Nagar Haveli, Andaman & Nicobar, Rajasthan", projectsMinistry: "M/o Statistics & Planning Implementation (MoSPI), M/o Railways, I Division Technology Division New Vertical with roles: (i) Consulting of large NICSI projects; (ii) Supporting PMs for Monitoring of NICSI projects in Project mode; (iii) Other activities assigned by Competent Authority from time to time." },
  { srNo: "11", name: "Shri Ajay Kumar Gupta", designation: "General Manager", stateCoordinator: "Goa, Daman & Diu and Delhi", projectsMinistry: "M/o Personnel, Public Grievances & Pensions, M/o Petroleum & Natural Gas, M/o Mines, M/o Consumer Affairs, Food & Public Distribution, DCPCR-Grievance Management Project of Delhi Government, CPIO for RTI in NICSI Sub Appellate Authority for Public Grievance" },
  { srNo: "12", name: "Shri Shailendra Saxena", designation: "Deputy General Manager", stateCoordinator: "Himachal Pradesh", projectsMinistry: "M/o Defence, M/o AYUSH, M/o Health & Family Welfare, eHospital, All AIIMS, M/o Labour & Employment, M/o Power, M/o New & Renewal Energy (MNRE), M/o External Affairs including all projects" },
  { srNo: "13", name: "Shri Neeraj Chawla", designation: "Deputy General Manager", stateCoordinator: "Tamil Nadu, Kerala, Punjab, Haryana, Chandigarh", projectsMinistry: "M/o Minority Affairs, M/o Youth Affairs and Sports, M/o Tribal Affairs, M/o Tourism, M/o Culture, M/o Housing & Urban Affairs, Districts Augmentation, CSCV-SAT, Geo-Spatial Technology & Services Division, Chief Information Security Officer (CISO) for NICSI, Supreme Court Data Centre" },
  { srNo: "14", name: "Shri Kumar Jyoti", designation: "Senior Manager", stateCoordinator: "-", projectsMinistry: "M/o Education, Centre of Excellence for Data Analytics (CEDA), Products Business Division, Training Division and IT-Division, TechnicaL Technical rechica Support in ERP Division" },
  { srNo: "15", name: "Shri Vikas Dixit", designation: "Manager", stateCoordinator: "Maharashtra", projectsMinistry: "Media & Public Relation, Coordination User-Public Relation, eOffice, eProcurement, Lokpal, UIDAI, Messaging Division, Rajbhasha Adhikari, Data Centre Business Division, GPU Data Centre, Development Centres of NICSI, Public Grievance Officer" },
  { srNo: "16", name: "Shri Mahesh Kumar", designation: "Deputy Manager", stateCoordinator: "-", projectsMinistry: "Administration, Personnel, Travel Help Desk, TA/DA Claims processing of NICSI Officers" },
  { srNo: "17", name: "Shri Jeevan Nath", designation: "Assistant Manager", stateCoordinator: "-", projectsMinistry: "HR Division, Tender Divisio" },
  { srNo: "18", name: "Shri Mahesh Kumar (Additional Charge)", designation: "Company Secretary", stateCoordinator: "-", projectsMinistry: "Company Secretary, SubPublic Grievance Officer" },
  { srNo: "19", name: "Shri Ravi Kumar", designation: "Consultant", stateCoordinator: "-", projectsMinistry: "Accounts, unidentified funds settlement, MSME vendors payments settlement, Project Section (TA/DA claims of Projects officers/coordinators)" },
];

export default function WorkAllocationTable() {
  const [query, setQuery] = useState("");

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return rows;
    }
    return rows.filter((row) =>
      row.name.toLowerCase().includes(q) ||
      row.designation.toLowerCase().includes(q) ||
      row.stateCoordinator.toLowerCase().includes(q) ||
      row.projectsMinistry.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
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
              placeholder="Search by name, designation, state or work allocation"
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
              <th className="px-4 py-3">Work Allocation</th>
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
              filteredRows.map((row) => (
                <tr key={`${row.srNo}-${row.name}`} className="border-t align-top">
                  <td className="px-4 py-3">{row.srNo}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                  <td className="px-4 py-3">{row.designation}</td>
                  <td className="px-4 py-3">{row.stateCoordinator || "-"}</td>
                  <td className="px-4 py-3 text-justify">{row.projectsMinistry || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-600">Total records: {filteredRows.length}</p>
    </>
  );
}
