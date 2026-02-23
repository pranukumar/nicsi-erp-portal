import { Fragment } from "react";
import PageTitle from "../../components/layout/PageTitle";

export default function WorkAllocationPage() {
  const rows = [
    { group: "GROUP 1", srNo: "1", name: "Shri Naveen Agrawal", designation: "Chief General Manager", stateCoordinator: "Uttar Pradesh and Uttarakhand", projectsMinistry: "M/o Rural Development, M/o Cooperation, M/o Finance, President Secretariat, Vice President Secretariat, Prime Minister Office, Cabinet Secretariat, Lok Sabha and Rajya Sabha, M/o Parliamentary Affairs" },
    { group: "GROUP 1", srNo: "1.1", name: "Shri Mahesh Kumar", designation: "Deputy Manager", stateCoordinator: "", projectsMinistry: "" },
    { group: "GROUP 2", srNo: "2", name: "Shri Jitender Kumar", designation: "Chief General Manager", stateCoordinator: "West Bengal and all North East states including Sikkim", projectsMinistry: "M/o Heavy Industries & Public Enterprises, M/o Development of NE-Region" },
    { group: "GROUP 3", srNo: "3", name: "Shri Prasanna Pandey", designation: "General Manager", stateCoordinator: "", projectsMinistry: "M/o Fisheries, Animal Husbandry & Dairying, NIC budget Projects" },
    { group: "GROUP 3", srNo: "3.1", name: "Shri Kumar Jyoti", designation: "Senior Manager", stateCoordinator: "", projectsMinistry: "M/o Education" },
    { group: "GROUP 4", srNo: "4", name: "Shri Atul Rastogi", designation: "General Manager", stateCoordinator: "Andhra Pradesh, Telangana, Lakshadweep, Puducherry", projectsMinistry: "M/o Food Processing Industries, M/o Civil Aviation, M/o Skill Development & Entrepreneurship, M/o Textiles, M/o Steels, Election Commission of India" },
    { group: "GROUP 5", srNo: "5", name: "Md. Ziya Ur Rehman Badar", designation: "Sr. General Manager", stateCoordinator: "Bihar, Jharkhand", projectsMinistry: "M/o Chemicals and Fertilizers, M/o Coal, M/o Jal Shakti, M/o Earth Sciences, M/o Panchayati Raj, M/o Shipping, M/o Law & Justice, M/o Social Justice and Empowerment" },
    { group: "GROUP 5", srNo: "5.1", name: "Shri Vikas Dixit", designation: "Manager", stateCoordinator: "Maharashtra", projectsMinistry: "" },
    { group: "GROUP 5", srNo: "5.2", name: "Shri Jeevan Nath", designation: "Assistant Manager", stateCoordinator: "", projectsMinistry: "" },
    { group: "GROUP 6", srNo: "6", name: "Shri Rahul Sharma", designation: "General Manager", stateCoordinator: "J&K and Ladakh", projectsMinistry: "M/o Electronics & Information Technology (MeitY), M/o Road Transport & Highways" },
    { group: "GROUP 7", srNo: "7", name: "Shri Bhupendra Kumar Sharma", designation: "General Manager", stateCoordinator: "", projectsMinistry: "IVFRT MMP" },
    { group: "GROUP 8", srNo: "8", name: "Shri Gyan Prakash Singh", designation: "General Manager", stateCoordinator: "CAG, M/o Communications", projectsMinistry: "NITI Aayog, M/o Information & Broadcasting, M/o Science & Technology, M/o Agriculture and Farmers Welfare, M/o Commerce and Industry, M/o Corporate Affairs, M/o Micro, Small & Medium Enterprises, M/o Home Affairs (other than IVFRT & Data Centre/Cloud Infrastructure)" },
    { group: "GROUP 9", srNo: "9", name: "Shri Ramdatt Updhyay", designation: "General Manager", stateCoordinator: "Madhya Pradesh, Chhattisgarh, Gujarat, Odisha", projectsMinistry: "M/o Environment, Forest & Climate Change, D/o Space, D/o Atomic Energy, M/o Women & Child Development" },
    { group: "GROUP 10", srNo: "10", name: "Shri Shailendra Saxena", designation: "Deputy General Manager", stateCoordinator: "Himachal Pradesh", projectsMinistry: "M/o Defence, M/o AYUSH, M/o Health & Family Welfare, eHospital, All AIIMS, M/o Labour & Employment, M/o Power, M/o New & Renewal Energy (MNRE), M/o External Affairs including all projects" },
    { group: "GROUP 11", srNo: "11", name: "Shri Neeraj Chawla", designation: "Deputy General Manager", stateCoordinator: "Tamil Nadu, Kerala, Punjab, Haryana, Chandigarh", projectsMinistry: "M/o Minority Affairs, M/o Youth Affairs and Sports, M/o Tribal Affairs, M/o Tourism, M/o Culture, M/o Housing & Urban Affairs" },
    { group: "GROUP 12", srNo: "12", name: "Shri Lalit Kumar Bhatia", designation: "General Manager", stateCoordinator: "Karnataka, Dadar & Nagar Haveli, Andaman & Nicobar, Rajasthan", projectsMinistry: "M/o Statistics & Planning Implementation (MoSPI), M/o Railways" },
    { group: "GROUP 13", srNo: "13", name: "Shri Ajay Kumar Gupta", designation: "General Manager", stateCoordinator: "Goa, Daman & Diu and Delhi", projectsMinistry: "M/o Personnel, Public Grievances & Pensions, M/o Petroleum & Natural Gas, M/o Mines, M/o Consumer Affairs, Food & Public Distribution" },
    { group: "GROUP 14", srNo: "14", name: "Shri Mahesh Kumar (Additional Charge)", designation: "Company Secretary", stateCoordinator: "", projectsMinistry: "" },
    { group: "GROUP 15", srNo: "15", name: "Shri Ravi Kumar", designation: "Consultant", stateCoordinator: "", projectsMinistry: "Accounts, unidentified funds settlement, MSME vendors payments settlement, Project Section (TA/DA claims of Projects officers/coordinators)" },
  ] as const;

  const groupedRows = rows.reduce<Record<string, (typeof rows)[number][]>>((acc, row) => {
    if (!acc[row.group]) {
      acc[row.group] = [];
    }
    acc[row.group].push(row);
    return acc;
  }, {});

  return (
    <main className="pb-12">
      <PageTitle title="Work Allocation" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <p>Work Allocation Details</p>
        <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3">Sr.No.</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Designation</th>
                <th className="px-4 py-3">State Coordinator</th>
                <th className="px-4 py-3">Projects/Ministry</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedRows).map(([group, items]) => (
                <Fragment key={group}>
                  <tr key={`${group}-header`} className="border-t bg-[#EAF2FF]">
                    <td colSpan={5} className="px-4 py-2 text-sm font-semibold tracking-wide text-[#003A8C]">
                      {group}
                    </td>
                  </tr>
                  {items.map((row) => {
                    const isSubHead = row.srNo.includes(".");
                    return (
                      <tr key={`${row.group}-${row.srNo}-${row.name}`} className={`border-t align-top ${isSubHead ? "bg-[#FAFCFF]" : ""}`}>
                        <td className="px-4 py-3">{row.srNo}</td>
                        <td className="px-4 py-3">
                          <div className={`${isSubHead ? "pl-4" : ""}`}>
                            <span className="font-medium text-gray-900">{row.name}</span>
                            <span className={`ml-2 inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${isSubHead ? "bg-blue-100 text-blue-700" : "bg-[#003A8C] text-white"}`}>
                              {isSubHead ? "Sub Head" : "Group Head"}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">{row.designation}</td>
                        <td className="px-4 py-3">{row.stateCoordinator || "-"}</td>
                        <td className="px-4 py-3">{row.projectsMinistry || "-"}</td>
                      </tr>
                    );
                  })}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </main>
  );
}
