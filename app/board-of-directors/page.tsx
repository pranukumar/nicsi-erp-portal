import PageTitle from "../../components/layout/PageTitle";

const boardRows = [
  {
    srNo: 1,
    name: "Shri Abhishek Singh",
    officeAddress: "Ministry of Electronics & Information Technology, Electronics Niketan, 6, CGO Complex, New Delhi-110003",
    phone: "01124369222",
    email: "as[at]meity[dot]gov[dot]in",
  },
  {
    srNo: 2,
    name: "Shri Nand Kumarum",
    officeAddress: "Ministry of Electronics & Information Technology, Electronics Niketan, 6, CGO Complex, New Delhi-110003.",
    phone: "01124363114",
    email: "js[dot]digigov[at]gov[dot]in",
  },
  {
    srNo: 3,
    name: "Shri Rajesh Singh",
    officeAddress: "Ministry of Electronics & Information Technology, Electronics Niketan, 6, CGO Complex, New Delhi-110003",
    phone: "01124363097",
    email: "faoffice[dot]deity[at]nic[dot]in",
  },
  {
    srNo: 4,
    name: "Smt. Sunita Verma",
    officeAddress: "Ministry of Electronics & Information Technology, Electronics Niketan, 6, CGO Complex, New Delhi-110003",
    phone: "01124364810",
    email: "sunita[at]meity[dot]gov[dot]in",
  },
  {
    srNo: 5,
    name: "Shri Sandeep Kumar Singhal",
    officeAddress: "National Informatics Centre, A- Block CGO Complex, Lodhi Road, New Delhi-110003",
    phone: "01124305350",
    email: "hog-cgg[at]nic[dot]in",
  },
  {
    srNo: 6,
    name: "Shri Deepak Saxena",
    officeAddress: "National Informatics Centre, A- Block CGO Complex, Lodhi Road, New Delhi-110003",
    phone: "01124305388",
    email: "afa-nichq[at]nic[dot]in",
  },
  {
    srNo: 7,
    name: "Shri G. Mayil Muthu Kumaran",
    officeAddress: "National Informatics Centre, A- Block CGO Complex, Lodhi Road, New Delhi-110003",
    phone: "011-24305748",
    email: "hog-pmd[at]nic[dot]in",
  },
  {
    srNo: 8,
    name: "Shri Rajesh Mishra",
    officeAddress: "National Informatics Centre, A- Block CGO Complex, Lodhi Road, New Delhi-110003",
    phone: "01124305117",
    email: "mrajesh[at]nic[dot]in",
  },
  {
    srNo: 9,
    name: "Shri V.T.V. Ramana",
    officeAddress: "National Informatics Centre, A- Block CGO Complex, Lodhi Road, New Delhi-110003",
    phone: "01124305516",
    email: "hog-csag[at]nic[dot]in",
  },
  {
    srNo: 10,
    name: "Shri Alok Tiwari",
    officeAddress: "National Informatics Centre Services Incorporated, Hall no. 2 & 3, 6th Floor, NBCC Tower 15, Bhikaji Cama Place, New Delhi-110066",
    phone: "01126105291",
    email: "mdnicsi[at]nic[dot]in",
  },
] as const;

export default function BoardOfDirectorsPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Board of Directors" />

      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Board of Directors</h2>

          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="nic-table min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Sr.No.</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Office Address</th>
                  <th className="px-4 py-3">Phone Number</th>
                  <th className="px-4 py-3">E-mail ID</th>
                </tr>
              </thead>
              <tbody>
                {boardRows.map((row) => (
                  <tr key={row.srNo} className="border-t align-top">
                    <td className="px-4 py-3">{row.srNo}</td>
                    <td className="px-4 py-3 font-semibold text-[#0F172A]">{row.name}</td>
                    <td className="px-4 py-3">{row.officeAddress}</td>
                    <td className="px-4 py-3">{row.phone}</td>
                    <td className="px-4 py-3">{row.email}</td>
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
