import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import { getAwardsRecognitionContent } from "@/services/awardsRecognition";

export default async function Page() {
  const content = await getAwardsRecognitionContent();

  return (
    <main className="pb-12">
      <PageTitle title="Awards & Recognition" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Awards & Recognition</h2>
          <p className="mt-2 text-sm text-gray-600">
            Highlights of institutional awards, recognitions, and appreciation received by NICSI.
          </p>
          <p className="mt-1 text-xs text-gray-500">Data last updated: {content.lastUpdated}</p>
          <p className="mt-1 text-xs text-gray-500">
            Proof policy: Only official document references are shown. Photograph/graph evidence is not included.
          </p>

          <div className="mt-6 grid gap-4">
            {content.items.map((item) => (
              <article key={item.id} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#003A8C]">
                    {item.year}
                  </span>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      item.evidence.status === "available"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {item.evidence.status === "available" ? "Proof Available" : "Proof Pending"}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-7 text-[#0F172A]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                <p className="mt-2 text-xs text-gray-500">Source: {item.source}</p>
                <div className="mt-3">
                  {item.evidence.status === "available" ? (
                    <Link
                      href={item.evidence.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                    >
                      {item.evidence.label}
                    </Link>
                  ) : (
                    <span className="inline-flex rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      {item.evidence.label}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
