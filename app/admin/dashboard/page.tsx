import PageTitle from "@/components/layout/PageTitle";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Admin Dashboard" />
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">Logged in as Admin user.</p>
          <h2 className="mt-2 text-2xl font-bold text-[#0F172A]">Administrative Controls</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/headquarters-personnel" className="rounded-lg border border-blue-100 bg-[#FCFDFF] px-4 py-3 font-semibold text-[#0A2A72]">
              Manage Headquarters Personnel
            </Link>
            <Link href="/state-personnel" className="rounded-lg border border-blue-100 bg-[#FCFDFF] px-4 py-3 font-semibold text-[#0A2A72]">
              Review State Personnel
            </Link>
            <Link href="/work-allocation" className="rounded-lg border border-blue-100 bg-[#FCFDFF] px-4 py-3 font-semibold text-[#0A2A72]">
              Work Allocation Oversight
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
