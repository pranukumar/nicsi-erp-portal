import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function OrganizationChartPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Organization Chart" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>Profile structure aligned to NICSI organization chart (verified on February 21, 2026).</p>
        <div className="mt-5 rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-[#003A8C]">Leadership Snapshot</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
            <li>Chairperson, NICSI: Shri Abhishek Singh (Additional Secretary, MeitY)</li>
            <li>Managing Director: Shri Alok Tiwari</li>
            <li>HQ function heads are listed under dedicated personnel pages</li>
          </ul>
        </div>
        <p className="mt-4 text-sm">
          Official source:
          {" "}
          <Link className="font-semibold text-[#003A8C]" href="https://nicsi.nic.in/organizationChart" target="_blank">
            NICSI Organization Chart
          </Link>
        </p>
      </section>
    </main>
  );
}
