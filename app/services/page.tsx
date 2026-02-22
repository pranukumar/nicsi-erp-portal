import PageTitle from "../../components/layout/PageTitle";

export default function ServicesPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Services" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <ul className="list-disc space-y-2 pl-5">
          <li>Vendor empanelment and onboarding workflows</li>
          <li>Tender publication and evaluation support</li>
          <li>Project progress and compliance monitoring</li>
          <li>Consolidated reporting and analytics</li>
        </ul>
      </section>
    </main>
  );
}
