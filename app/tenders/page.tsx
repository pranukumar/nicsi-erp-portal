import PageTitle from "../../components/layout/PageTitle";

export default function TendersPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Tenders" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>
          View active tenders, key dates, and eligibility criteria. Procurement notices are updated
          regularly to ensure transparent participation.
        </p>
      </section>
    </main>
  );
}
