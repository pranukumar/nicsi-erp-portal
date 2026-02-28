import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import CppTendersTabs from "@/components/tenders/CppTendersTabs";
import { getCppTendersContent } from "@/services/cppTenders";

export default async function Page() {
  const { active, archive, fallbackUsed } = await getCppTendersContent();

  return (
    <main className="pb-12">
      <PageTitle title="NICSI CPP Tenders" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI CPP Tenders</h2>
          <p className="mt-2 text-sm text-gray-600">
            Current and archive tenders aligned with official NICSI CPP tenders listing.
          </p>
          {fallbackUsed ? (
            <p className="mt-1 text-xs font-medium text-amber-700">
              Live source temporarily unavailable for one or more lists. Showing latest available verified snapshot data.
            </p>
          ) : null}

          <CppTendersTabs active={active} archive={archive} />

          <p className="mt-5 text-sm text-gray-700">
            For Advance Search and Latest Corrigendum List, please visit eTenders Search.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="https://etenders.gov.in/eprocure/app?page=FrontEndLatestActiveTendersOrgwise&service=page&org=National%20Informatics%20Centre%20Services%20Incorporated"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md bg-[#003A8C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0052CC]"
            >
              Open eTender Search
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
