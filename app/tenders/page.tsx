import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

const tenderLinks = [
  {
    href: "/nicsi-gem-bids",
    title: "GeM Bids",
    description: "Current and archive bid snapshots aligned to NICSI procurement listings.",
  },
  {
    href: "/active-tenders",
    title: "CPP Tenders",
    description: "Active and archive CPP tenders with snapshot-backed static export support.",
  },
];

export default function TendersPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Tenders" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Tender Access</h2>
          <p className="mt-2 text-sm text-gray-600">
            Browse NICSI procurement pages available in the static package.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {tenderLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-5 shadow-sm transition hover:bg-blue-50"
              >
                <div className="font-semibold text-[#003A8C]">{item.title}</div>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
