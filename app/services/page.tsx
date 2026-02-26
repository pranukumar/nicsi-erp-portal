import PageTitle from "../../components/layout/PageTitle";

export default function ServicesPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Services" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Services</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Vendor empanelment and onboarding workflows</li>
            <li>Tender publication and evaluation support</li>
            <li>Project progress and compliance monitoring</li>
            <li>Consolidated reporting and analytics</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
