import PageTitle from "../../components/layout/PageTitle";

const csrCommittee = [
  {
    name: "Joint Secretary (Digital Governance Division), MeitY",
    role: "Chairperson",
  },
  {
    name: "Shri V. T. V. Ramana DDG, NIC",
    role: "Member",
  },
];

const csrProjects = [
  { srNo: 1, year: "2019-20", contribution: "PM Cares Fund" },
  { srNo: 2, year: "2020-21", contribution: "PM Cares Fund" },
  { srNo: 3, year: "2021-22", contribution: "PM Cares Fund" },
  { srNo: 4, year: "2022-23", contribution: "Health and Nutrition & PM Cares Fund" },
  { srNo: 5, year: "2023-24", contribution: "Health and Nutrition" },
  { srNo: 6, year: "2024-25", contribution: "Health and Nutrition" },
];

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="CSR" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">
            Corporate Social Responsibility <span className="text-orange-600">(CSR)</span>
          </h2>
          <div className="mt-3 h-[2px] w-28 bg-[#003A8C]" />

          <p className="mt-5 text-justify leading-7 text-gray-700">
            The Corporate Social Responsibility (CSR) was introduced as section 135 in the Companies Act, 2013. With
            time, the importance of CSR is not just limited to compliance of this section. CSR is now more about
            giving back to the environment and society through corporate efforts. Companies are doing their best to
            achieve their desired goals in CSR. National Informatics Centre Services Inc. (NICSI) is also doing their
            bit in the development of the same.
          </p>

          <div className="mt-8 rounded-xl border border-blue-100 p-5">
            <h3 className="text-lg font-semibold text-[#0F172A]">CSR Committee</h3>
            <p className="mt-2 text-sm text-gray-600">NICSI CSR Committee consists of the following members:</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {csrCommittee.map((member) => (
                <article key={member.name} className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                  <p className="font-semibold leading-6 text-[#0F172A]">{member.name}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.role}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-blue-100 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-[#0F172A]">CSR Policy</h3>
              <a
                href="/pdfs/csr/NICSI_CSR_Policy.pdf"
                download
                className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
              >
                Download PDF
              </a>
            </div>
            <p className="mt-3 text-justify leading-7 text-gray-700">
              The Ministry of Corporate Affairs, Government of India has notified Section 135 of the Companies Act,
              2013 along with the Companies (Corporate Social Responsibility Policy) Rules, 2014 with effect from 1st
              April, 2014 for certain companies who fulfill the criteria as mentioned under Sub Section 1 of Section
              135. NICSI also falls under section 135 of the Companies Act, 2013, which requires NICSI to make its
              own CSR policy according to the Act.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-blue-100 p-5">
            <h3 className="text-lg font-semibold text-[#0F172A]">CSR Projects approved by the Board</h3>
            <p className="mt-2 text-sm text-gray-600">NICSI year wise CSR contribution</p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
              <table className="nic-table min-w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3">Sr.No.</th>
                    <th className="px-4 py-3">Financial Year</th>
                    <th className="px-4 py-3">Projects/Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {csrProjects.map((project) => (
                    <tr key={project.srNo} className="border-t align-top">
                      <td className="px-4 py-3">{project.srNo}</td>
                      <td className="px-4 py-3">{project.year}</td>
                      <td className="px-4 py-3">{project.contribution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
