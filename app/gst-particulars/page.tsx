import PageTitle from "../../components/layout/PageTitle";

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="GST Particulars" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">GST Particulars</h2>
          <div className="mt-3 h-[2px] w-28 bg-[#003A8C]" />

          <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
            <table className="nic-table min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Sr. No.</th>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3">PAN No.</th>
                  <th className="px-4 py-3">GSTIN No. (Provisional)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t align-top">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">
                    Hall No. 2 & 3, 6th Floor, NBCC Tower, 15, Bhikaji Cama Place, New Delhi-110066
                  </td>
                  <td className="px-4 py-3">AAACN2185J</td>
                  <td className="px-4 py-3">07AAACN2185J1ZE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
