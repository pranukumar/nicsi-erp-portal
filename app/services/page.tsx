import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import { isStaticAuditMode } from "@/lib/staticAudit";

export default function ServicesPage() {
  if (!isStaticAuditMode) {
    return (
      <main className="pb-12">
        <PageTitle title="Services" />
        <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-[#0F172A]">Services Overview</h2>
            <p className="mt-2 text-sm text-gray-600">
              Explore NICSI cloud, procurement, forms, and project delivery references from the service portfolio.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/nicsi-cloud" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 font-semibold text-[#003A8C] shadow-sm hover:bg-blue-50">
                NICSI Cloud
              </Link>
              <Link href="/nicsi-gem-bids" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 font-semibold text-[#003A8C] shadow-sm hover:bg-blue-50">
                GeM Bids
              </Link>
              <Link href="/active-tenders" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 font-semibold text-[#003A8C] shadow-sm hover:bg-blue-50">
                CPP Tenders
              </Link>
              <Link href="/forms" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 font-semibold text-[#003A8C] shadow-sm hover:bg-blue-50">
                Download Forms
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pb-12">
      <PageTitle title="Services" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Services Overview</h2>
          <p className="mt-2 text-sm text-gray-600">
            Static package me service-related pages ko quick access form me preserve kiya gaya hai.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/nicsi-cloud" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 font-semibold text-[#003A8C] shadow-sm hover:bg-blue-50">
              NICSI Cloud
            </Link>
            <Link href="/nicsi-gem-bids" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 font-semibold text-[#003A8C] shadow-sm hover:bg-blue-50">
              GeM Bids
            </Link>
            <Link href="/active-tenders" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 font-semibold text-[#003A8C] shadow-sm hover:bg-blue-50">
              CPP Tenders
            </Link>
            <Link href="/forms" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 font-semibold text-[#003A8C] shadow-sm hover:bg-blue-50">
              Download Forms
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
