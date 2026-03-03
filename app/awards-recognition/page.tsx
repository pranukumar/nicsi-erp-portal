import Link from "next/link";
import Image from "next/image";
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

          <div className="mt-6 grid gap-4">
            {content.items.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-xl border border-blue-100 bg-[#FCFDFF] shadow-sm">
                {item.imageUrl ? (
                  <div className="relative h-52 w-full bg-[#F3F7FF]">
                    <Image src={item.imageUrl} alt={item.title} fill className="object-contain p-2" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                ) : null}
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#003A8C]">
                      {item.year}
                    </span>
                  </div>
                <h3 className="text-base font-semibold leading-7 text-[#0F172A]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                <p className="mt-2 text-xs text-gray-500">Source: {item.source}</p>
                {item.evidence?.href ? (
                  <div className="mt-3">
                    <Link
                      href={item.evidence.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                    >
                      {item.evidence.label}
                    </Link>
                  </div>
                ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
