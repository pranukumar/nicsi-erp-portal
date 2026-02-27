import PageTitle from "../../components/layout/PageTitle";

type Report = {
  srNo: number;
  reportName: string;
  publishDate: string;
  financialYear: string;
  fileName: string;
  sizeLabel: string;
  category: "annual";
};

const REPORTS: Report[] = [
  {
    srNo: 1,
    reportName: "Annual Report 2023-24",
    publishDate: "02/02/2026",
    financialYear: "2023-2024",
    fileName: "Annual_Report_2023-24.pdf",
    sizeLabel: "29.9 MB",
    category: "annual",
  },
  {
    srNo: 2,
    reportName: "Annual Report 2022-23",
    publishDate: "02/02/2026",
    financialYear: "2022-2023",
    fileName: "Annual_Report_2022-23.pdf",
    sizeLabel: "1.52 MB",
    category: "annual",
  },
  {
    srNo: 3,
    reportName: "Annual Report 2021-22",
    publishDate: "02/02/2026",
    financialYear: "2021-2022",
    fileName: "Annual_Report_2021-22.pdf",
    sizeLabel: "2.64 MB",
    category: "annual",
  },
  {
    srNo: 4,
    reportName: "Annual Report 2020-21",
    publishDate: "03/03/2021",
    financialYear: "2020 - 2021",
    fileName: "NICSIAnnualReport2020-21.pdf",
    sizeLabel: "1,679.36 KB",
    category: "annual",
  },
  {
    srNo: 5,
    reportName: "Annual Report 2019-20",
    publishDate: "21/05/2021",
    financialYear: "2019 - 2020",
    fileName: "NICSIAnnualReport2019-20.pdf",
    sizeLabel: "1,300.48 KB",
    category: "annual",
  },
  {
    srNo: 6,
    reportName: "Annual Report 2018-19",
    publishDate: "24/02/2020",
    financialYear: "2018 - 2019",
    fileName: "NICSIAnnualReport2018-19.pdf",
    sizeLabel: "1,618.08 KB",
    category: "annual",
  },
  {
    srNo: 7,
    reportName: "Annual Report 2017-18",
    publishDate: "24/02/2020",
    financialYear: "2017 - 2018",
    fileName: "NICSIAnnualReport2017-18.pdf",
    sizeLabel: "5,871.08 KB",
    category: "annual",
  },
  {
    srNo: 8,
    reportName: "Annual Report 2016-17",
    publishDate: "01/08/2018",
    financialYear: "2016 - 2017",
    fileName: "NICSIAnnualReport2016-17.pdf",
    sizeLabel: "6,497.67 KB",
    category: "annual",
  },
  {
    srNo: 9,
    reportName: "Annual Report 2015-16",
    publishDate: "22/03/2017",
    financialYear: "2015 - 2016",
    fileName: "NICSI_Annual_Report_2015_16_0.pdf",
    sizeLabel: "3,589.99 KB",
    category: "annual",
  },
  {
    srNo: 10,
    reportName: "Annual Report 2014-15",
    publishDate: "08/07/2016",
    financialYear: "2014 - 2015",
    fileName: "File357.pdf",
    sizeLabel: "401.44 KB",
    category: "annual",
  },
  {
    srNo: 11,
    reportName: "Annual Report 2013-14",
    publishDate: "08/07/2016",
    financialYear: "2013 - 2014",
    fileName: "File356.pdf",
    sizeLabel: "564.01 KB",
    category: "annual",
  },
];

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="Reports" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Reports</h2>
          <div className="mt-3 h-[2px] w-24 bg-[#003A8C]" />

          <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200">
            <table className="nic-table min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Sr.No.</th>
                  <th className="px-4 py-3">Report Name</th>
                  <th className="px-4 py-3">Publish Date</th>
                  <th className="px-4 py-3">Financial Year</th>
                  <th className="px-4 py-3">Download</th>
                </tr>
              </thead>
              <tbody>
                {REPORTS.length > 0 ? (
                  REPORTS.map((report) => (
                    <tr key={`${report.srNo}-${report.fileName}`} className="border-t align-top">
                      <td className="px-4 py-3">{report.srNo}</td>
                      <td className="px-4 py-3">{report.reportName}</td>
                      <td className="px-4 py-3">{report.publishDate}</td>
                      <td className="px-4 py-3">{report.financialYear}</td>
                      <td className="px-4 py-3">
                        <a
                          href={`/pdfs/reports/${report.fileName}`}
                          download
                          className="inline-flex w-44 justify-center rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                        >
                          Download PDF ({report.sizeLabel})
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                      No reports available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
