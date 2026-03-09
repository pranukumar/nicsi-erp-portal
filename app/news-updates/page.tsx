import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";
import { withSiteBasePath } from "@/lib/staticAudit";

type NewsItem = {
  title: string;
  category: "Announcement" | "Circular" | "Notice";
  href: string;
  dateLabel: string;
};

const newsItems: NewsItem[] = [
  {
    title: "Advertisement for the position of Chief Human Resource Officer (CHRO) on contract basis in NICSI",
    category: "Announcement",
    href: "/vacancies",
    dateLabel: "As listed on NICSI homepage announcements",
  },
  {
    title: "NeVA, MPVS- Expression of Interest / Pre RFP Stakeholder Consultation",
    category: "Notice",
    href: "/pdfs/press-releases/mpvseoineva080825.pdf",
    dateLabel: "From NICSI Circular & Notices",
  },
  {
    title: "Internship Scheme has been duly approved by the Competent Authority MD, NICSI",
    category: "Notice",
    href: "/pdfs/press-releases/NICSI_DOCS.pdf",
    dateLabel: "From NICSI Circular & Notices",
  },
  {
    title: "NICSI Mandate",
    category: "Circular",
    href: "/pdfs/press-releases/NICSI_Mandate.pdf",
    dateLabel: "From NICSI Circular & Notices",
  },
];

export default function Page() {
  const normalizedNewsItems = newsItems.map((item) => ({
    ...item,
    href: item.href.endsWith(".pdf") ? withSiteBasePath(item.href) : item.href,
  }));

  return (
    <main className="pb-12">
      <PageTitle title="News & Updates" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-[#0F172A]">Latest News & Updates</h2>
            <Link
              href="/press-releases"
              className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
            >
              View Circular & Notices
            </Link>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Updated with currently available official NICSI announcements and notices.
          </p>

          <div className="mt-6 grid gap-4">
            {normalizedNewsItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      item.category === "Announcement"
                        ? "bg-emerald-100 text-emerald-800"
                        : item.category === "Circular"
                          ? "bg-blue-100 text-[#003A8C]"
                          : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.dateLabel}</span>
                </div>
                <h3 className="text-base font-semibold leading-7 text-[#0F172A]">{item.title}</h3>
                <div className="mt-3">
                  <Link
                    href={item.href}
                    target={item.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={item.href.endsWith(".pdf") ? "noreferrer" : undefined}
                    className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                  >
                    Open
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
