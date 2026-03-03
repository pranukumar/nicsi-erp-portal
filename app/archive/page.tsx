import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

type ArchiveBlock = {
  title: string;
  description: string;
  href: string;
  countLabel: string;
};

const archiveBlocks: ArchiveBlock[] = [
  {
    title: "Circular & Notices Archive",
    description: "Previously published circulars, notices and official downloadable communications.",
    href: "/press-releases",
    countLabel: "4 records",
  },
  {
    title: "News & Updates Archive",
    description: "Archived announcements and update references from official NICSI published entries.",
    href: "/news-updates",
    countLabel: "4 records",
  },
  {
    title: "Events Archive",
    description: "Historical events and activity entries maintained through official media records.",
    href: "/events",
    countLabel: "20 records",
  },
  {
    title: "Photo Archive",
    description: "Photo-based archival collection of activities, programmes and observances.",
    href: "/media-gallery?tab=photos",
    countLabel: "21 records",
  },
  {
    title: "Video Archive",
    description: "Official video messages and awareness clips available in NICSI media records.",
    href: "/media-gallery?tab=videos",
    countLabel: "4 records",
  },
  {
    title: "Reports Archive",
    description: "Annual reports and historic publication downloads arranged year-wise.",
    href: "/reports",
    countLabel: "11 records",
  },
];

export default function ArchivePage() {
  return (
    <main className="pb-12">
      <PageTitle title="Archive" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Archive</h2>
          <p className="mt-2 text-sm text-gray-600">
            Central archive access for previously published NICSI content across media, notices, reports and updates.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {archiveBlocks.map((block) => (
              <article key={block.title} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#0F172A]">{block.title}</h3>
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#003A8C]">
                    {block.countLabel}
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-600">{block.description}</p>
                <Link
                  href={block.href}
                  className="mt-4 inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                >
                  Open Archive
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
