import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function WorkAllocationPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Work Allocation" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>Work allocation categories aligned to NICSI profile references:</p>
        <div className="mt-5 rounded-lg border border-gray-200 bg-white p-5">
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Management</li>
            <li>Administration</li>
            <li>Finance</li>
            <li>Projects / Technical</li>
            <li>Procurement and Vendor Coordination</li>
            <li>Regional and State Coordination</li>
          </ul>
        </div>
        <p className="mt-4 text-sm">
          Official source:
          {" "}
          <Link className="font-semibold text-[#003A8C]" href="https://nicsi.nic.in/workAllocation" target="_blank">
            NICSI Work Allocation
          </Link>
        </p>
      </section>
    </main>
  );
}
