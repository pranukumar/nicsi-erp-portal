import PageTitle from "../../components/layout/PageTitle";

type DownloadForm = {
  srNo: number;
  formName: string;
  fileName: string;
  sizeLabel: string;
};

const FORMS: DownloadForm[] = [
  { srNo: 1, formName: "Proforma Invoice Request Form", fileName: "PIRF.pdf", sizeLabel: "625 KB" },
  { srNo: 2, formName: "Project Execution Form", fileName: "ProjectExecutionForm.pdf", sizeLabel: "916 KB" },
  { srNo: 3, formName: "Proposal Acceptance Form", fileName: "Proposal_Acceptance_Form.pdf", sizeLabel: "1007 KB" },
  {
    srNo: 4,
    formName: "Network Proposal Acceptance Form",
    fileName: "ModifiedNetworkProposalAcceptanceForm(NAF)_circular.pdf",
    sizeLabel: "290 KB",
  },
  {
    srNo: 5,
    formName: "Procurement Requisition Form - Direct Purchase",
    fileName: "GeM_Requisition_Form_Direct.pdf",
    sizeLabel: "653 KB",
  },
  {
    srNo: 6,
    formName: "Procurement Requisition Form - L1 Purchase",
    fileName: "GeM_Requisition_Form_L1.pdf",
    sizeLabel: "654 KB",
  },
  { srNo: 7, formName: "Procurement Requisition Form - Bid", fileName: "GeMRequisitionForm-Bid.pdf", sizeLabel: "121 KB" },
  { srNo: 8, formName: "Consignee Form", fileName: "ConsigneeAdditionFormGeM.pdf", sizeLabel: "652 KB" },
];

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="Download Form" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Download Form</h2>
          <div className="mt-3 h-[2px] w-24 bg-[#003A8C]" />

          <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
            <table className="nic-table min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Sr.No.</th>
                  <th className="px-4 py-3">Form Name</th>
                  <th className="px-4 py-3">Download</th>
                </tr>
              </thead>
              <tbody>
                {FORMS.map((form) => (
                  <tr key={form.srNo} className="border-t align-top">
                    <td className="px-4 py-3">{form.srNo}</td>
                    <td className="px-4 py-3">{form.formName}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`/pdfs/forms/${form.fileName}`}
                        download
                        className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                      >
                        Download PDF ({form.sizeLabel})
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
