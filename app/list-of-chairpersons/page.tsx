import PageTitle from "../../components/layout/PageTitle";

const chairpersons = [
  { srNo: 1, name: "Dr. N. Seshagiri", from: "25-09-1995", to: "20-12-2001" },
  { srNo: 2, name: "Dr. N. Vijayditya", from: "20-12-2001", to: "18-10-2002" },
  { srNo: 3, name: "Shri. R. Chandrashekhar, IAS", from: "18-10-2002", to: "16-02-2009" },
  { srNo: 4, name: "Shri. S. R. Rao, IAS", from: "16-02-2009", to: "14-03-2011" },
  { srNo: 5, name: "Shri. Shankar Aggarwal, IAS", from: "14-03-2011", to: "16-08-2012" },
  { srNo: 6, name: "Smt. Rita Teaotia, IAS", from: "16-08-2012", to: "27-11-2012" },
  { srNo: 7, name: "Shri. Rajiv Gauba, IAS", from: "27-11-2012", to: "05-09-2014" },
  { srNo: 8, name: "Dr. Ajay Kumar, IAS", from: "05-09-2014", to: "07-11-2014" },
  { srNo: 9, name: "Shri. Tapan Ray, IAS", from: "07-11-2014", to: "02-11-2015" },
  { srNo: 10, name: "Dr. Ajay Kumar, IAS", from: "02-11-2015", to: "28-02-2018" },
  { srNo: 11, name: "Shri. Sanjay Goel, IRTS", from: "28-02-2018", to: "14-06-2018" },
  { srNo: 12, name: "Shri. Pankaj Kumar, IAS", from: "14-06-2018", to: "10-12-2019" },
  { srNo: 13, name: "Shri. S. Gopalakrishnan, IAS", from: "10-12-2019", to: "28-07-2020" },
  { srNo: 14, name: "Dr. Rajendra Kumar, IAS", from: "28-07-2020", to: "25-11-2022" },
  { srNo: 15, name: "Shri. Amit Agrawal, IAS", from: "25-11-2022", to: "17-07-2023" },
  { srNo: 16, name: "Shri. Bhuvnesh Kumar, IAS", from: "17-07-2023", to: "28-04-2025" },
  { srNo: 17, name: "Shri Abhishek Singh, IAS", from: "28-04-2025", to: "" },
] as const;

function parseDdMmYyyy(value: string): number {
  const [dd, mm, yyyy] = value.split("-").map(Number);
  return new Date(yyyy, mm - 1, dd).getTime();
}

export default function ListOfChairpersonsPage() {
  const sortedChairpersons = [...chairpersons].sort((a, b) => {
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
      <PageTitle title="List of Chairpersons" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Chairpersons</h2>
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
                {sortedChairpersons.map((row, index) => (
                  <tr key={row.srNo} className="border-t">
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
