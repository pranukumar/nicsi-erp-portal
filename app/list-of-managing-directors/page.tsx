import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

const managingDirectors = [
  { srNo: 1, name: "Shri Kamlkar Kaul", from: "01-04-1997", to: "15-02-2001" },
  { srNo: 2, name: "Dr. Y. K. Sharma (Addl. Charge)", from: "16-02-2001", to: "08-03-2001" },
  { srNo: 3, name: "Shri S. P. Rastogi", from: "09-03-2001", to: "26-03-2002" },
  { srNo: 4, name: "Shri K. C. Dwivedi", from: "27-03-2002", to: "31-05-2005" },
  { srNo: 5, name: "Dr. Mahesh Chandra", from: "01-06-2005", to: "04-09-2006" },
  { srNo: 6, name: "Shri A. K. Singh", from: "05-09-2006", to: "30-09-2008" },
  { srNo: 7, name: "Smt. J. R. D. Kailay", from: "01-10-2008", to: "04-09-2011" },
  { srNo: 8, name: "Shri Rajesh Bahadur", from: "05-09-2011", to: "26-12-2016" },
  { srNo: 9, name: "Dr. Ranjna Nagpal (Addl. Charge)", from: "27-12-2016", to: "13-02-2017" },
  { srNo: 10, name: "Shri Manoj Kumar Mishra", from: "14-02-2017", to: "13-02-2020" },
  { srNo: 11, name: "Shri Parshant Kumar Mittal", from: "14-02-2020", to: "03-06-2022" },
  { srNo: 12, name: "Shri I. P. S. Sethi (Addl. Charge)", from: "04-06-2022", to: "12-08-2022" },
  { srNo: 13, name: "Dr. Vinay Thakur", from: "13-08-2022", to: "30-04-2024" },
  { srNo: 14, name: "Shri V. T. V. Ramana (Addl. Charge)", from: "01-05-2024", to: "10-06-2024" },
  { srNo: 15, name: "Dr. R. K. Mishra", from: "11-06-2024", to: "01-12-2025" },
  { srNo: 16, name: "Shri Alok Tiwari", from: "02-12-2025", to: "" },
] as const;

function parseDdMmYyyy(value: string): number {
  const [dd, mm, yyyy] = value.split("-").map(Number);
  return new Date(yyyy, mm - 1, dd).getTime();
}

export default function ListOfManagingDirectorsPage() {
  const sortedManagingDirectors = [...managingDirectors].sort((a, b) => {
    if (!a.to && b.to) return -1;
    if (a.to && !b.to) return 1;

    const fromDiff = parseDdMmYyyy(b.from) - parseDdMmYyyy(a.from);
    if (fromDiff !== 0) return fromDiff;

    if (!a.to && !b.to) return 0;
    if (!a.to) return -1;
    if (!b.to) return 1;

    return parseDdMmYyyy(b.to) - parseDdMmYyyy(a.to);
  });

  return (
    <main className="pb-12">
      <PageTitle title="List of Managing Directors" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Managing Directors</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="nic-table min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Sr. No.</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">From</th>
                  <th className="px-4 py-3">To</th>
                </tr>
              </thead>
              <tbody>
                {sortedManagingDirectors.map((row, index) => (
                  <tr key={`${row.srNo}-${row.name}`} className="border-t">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-semibold text-[#0F172A]">{row.name}</td>
                    <td className="px-4 py-3">{row.from}</td>
                    <td className="px-4 py-3">{row.to || "At Present"}</td>
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
