import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function Page() {
  const gemAdvanceSearchUrl =
    "https://bidplus.gem.gov.in/advance-search?searchType=ministry-search&ministry=MINISTRY%20OF%20ELECTRONICS%20AND%20INFORMATION%20TECHNOLOGY&organization=NATIONAL%20INFORMATICS%20CENTRE%20SERVICES%20INCORPORATED%20(NICSI)&department=DEPARTMENT%20OF%20ELECTRONICS%20AND%20INFORMATION%20TECHNOLOGY#tab1";

  const filters = [
    { label: "Search Tab", value: "Search by Ministry / Organization" },
    { label: "Ministry", value: "MINISTRY OF ELECTRONICS AND INFORMATION TECHNOLOGY" },
    { label: "Organization", value: "NATIONAL INFORMATICS CENTRE SERVICES INCORPORATED (NICSI)" },
    { label: "Department", value: "DEPARTMENT OF ELECTRONICS AND INFORMATION TECHNOLOGY" },
  ] as const;

  return (
    <main className="pb-12">
      <PageTitle title="NICSI GeM Bids" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Open GeM Advanced Search with NICSI Filters</h2>
          <p className="mt-2 text-sm text-gray-600">
            Use the button below to open GeM BidPlus Advanced Search based on configured NICSI ministry/organization filters.
          </p>

          <div className="mt-5 grid gap-3 rounded-xl border border-blue-100 bg-[#F8FAFF] p-4">
            {filters.map((item) => (
              <div key={item.label} className="rounded-lg border border-blue-100 bg-white px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-[#0F172A]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href={gemAdvanceSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-[#003A8C] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0052CC]"
            >
              Open GeM Advanced Search
            </Link>
            <Link
              href="https://bidplus.gem.gov.in/advance-search"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Open GeM (Manual Search)
            </Link>
          </div>
        </div>

        <p className="mt-4 text-sm">
          Official references:{" "}
          <Link href="https://nicsi.nic.in/tenders" target="_blank" rel="noreferrer" className="font-semibold text-[#003A8C]">
            NICSI Tenders
          </Link>
          {" | "}
          <Link href="https://bidplus.gem.gov.in/advance-search" target="_blank" rel="noreferrer" className="font-semibold text-[#003A8C]">
            GeM BidPlus Advanced Search
          </Link>
        </p>
      </section>
    </main>
  );
}
