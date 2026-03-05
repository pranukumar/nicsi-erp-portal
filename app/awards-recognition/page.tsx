import PageTitle from "../../components/layout/PageTitle";
import { getAwardsRecognitionContent } from "@/services/awardsRecognition";
import AwardsRecognitionCards from "@/components/awards/AwardsRecognitionCards";

export default async function Page() {
  const content = await getAwardsRecognitionContent();
  const orderedItems = [...content.items].sort((a, b) => a.id - b.id);

  return (
    <main className="pb-12">
      <PageTitle title="Awards & Recognition" />
      <section className="mx-auto max-w-7xl px-6 py-8 text-gray-700">
        <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
          <AwardsRecognitionCards items={orderedItems} />
        </div>
      </section>
    </main>
  );
}
