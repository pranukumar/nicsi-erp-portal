import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="NICSI Cloud Services" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Cloud Services</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            National Informatics Centre Services Inc. (NICSI) enables Ministries, Departments and Government Organizations (MDOs) to access secure,
            scalable and high-performance cloud services for digital transformation, hosting, data management and mission-critical operations.
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            Detailed service categories, provisioning flow and platform capabilities are available on the NGC Cloud page.
          </p>
          <Link href="/ngc-cloud" className="mt-4 inline-flex rounded-md bg-[#003A8C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0052CC]">
            Open NGC Cloud Details
          </Link>
        </div>
      </section>
    </main>
  );
}
