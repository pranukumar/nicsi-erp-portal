import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import GemBidsTabs from "@/components/gem-bids/GemBidsTabs";
import { getGemBidsContent } from "@/services/gemBids";
export default async function Page() {
  const { currentBids, archiveBids, fallbackUsed } = await getGemBidsContent();

  return (
    <main className="pb-12">
      <PageTitle title="NICSI GeM Bids" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">GeM Bids</h2>
          {fallbackUsed ? (
            <p className="mt-1 text-xs font-medium text-amber-700">
              Live source temporarily unavailable for one or more lists. Showing latest verified snapshot data.
            </p>
          ) : null}

          <GemBidsTabs currentBids={currentBids} archiveBids={archiveBids} />

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="https://bidplus.gem.gov.in/advance-search"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              GeM BidPlus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
