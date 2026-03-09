import PageTitle from "../../components/layout/PageTitle";
import { getInternshipContent } from "@/services/internship";
import OnlineApplicationProcess from "@/components/internship/OnlineApplicationProcess";
import Link from "next/link";
import { isHiddenInStaticAudit, withSiteBasePath } from "@/lib/staticAudit";

export default async function InternshipPage() {
  const content = await getInternshipContent();

  return (
    <main className="pb-12">
      <PageTitle title="Internship" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-[#F7FAFF] to-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-[#0F172A]">NICSI Internship Programme</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            Structured internship framework for practical exposure in Government IT systems, e-Governance delivery, cloud,
            cybersecurity and digital transformation programmes.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Source Notice Date: {content.sourceFileDate}
            </span>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Last Updated: {content.lastUpdated}
            </span>
            <a
              href={withSiteBasePath(content.sourceNoticeUrl)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
            >
              View Official PDF
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A]">Objective</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
              {content.objective.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A]">Policy Snapshot</h3>
            <div className="mt-3 grid gap-2">
              {content.policy.map((item) => (
                <div key={item.label} className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-[#0F172A]">{item.value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-[#0F172A]">Key Benefits</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.benefits.map((benefit) => (
              <article key={benefit} className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
                <p className="text-sm leading-6 text-gray-700">{benefit}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-[#0F172A]">Eligibility</h3>
          <div className="mt-4 grid gap-3">
            {content.eligibility.map((category) => (
              <article key={category.title} className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
                <p className="text-sm font-semibold text-[#0F172A]">{category.title}</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-gray-700">
                  {category.criteria.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A]">Documents Required</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
              {content.documentsRequired.map((doc) => (
                <li key={doc} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A]">Compliance</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
              {content.compliance.map((rule) => (
                <li key={rule} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6">
          <OnlineApplicationProcess steps={content.process} />
        </div>

        {!isHiddenInStaticAudit("/internship/apply") ? (
          <div className="mt-4 rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm leading-7 text-gray-700">
              Applications are accepted online on NICSI website from 1st to 10th of every month.
              <Link href="/internship/apply" className="ml-1 font-semibold text-[#003A8C] underline hover:text-[#0052CC]">
                Click here
              </Link>
              {" "}to submit the Internship Application Form.
            </p>
          </div>
        ) : null}

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-[#0F172A]">Indicative Internship Domains</h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {content.domains.map((domain) => (
              <div key={domain} className="rounded-md border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-sm text-[#0F172A]">
                {domain}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
