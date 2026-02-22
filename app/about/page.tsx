import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pb-12">
      <PageTitle title="About" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>
          NICSI ERP Portal supports transparent, secure, and scalable digital service delivery
          for public sector programs. The platform unifies vendor onboarding, tender lifecycle,
          and project monitoring into one governance-ready workflow.
        </p>
        <div className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          <Link href="/organization-chart" className="text-[#003A8C] font-semibold">Organization Chart</Link>
          <Link href="/headquarters-personnel" className="text-[#003A8C] font-semibold">Headquarters Personnel</Link>
          <Link href="/state-personnel" className="text-[#003A8C] font-semibold">State Personnel</Link>
          <Link href="/work-allocation" className="text-[#003A8C] font-semibold">Work Allocation</Link>
          <Link href="/board-of-directors" className="text-[#003A8C] font-semibold">Board of Directors</Link>
          <Link href="/list-of-chairpersons" className="text-[#003A8C] font-semibold">List of Chairpersons</Link>
          <Link href="/list-of-managing-directors" className="text-[#003A8C] font-semibold">List of Managing Directors</Link>
        </div>
      </section>
    </main>
  );
}
