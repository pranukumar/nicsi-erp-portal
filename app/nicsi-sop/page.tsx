import PageTitle from "../../components/layout/PageTitle";
import { CheckCircle2, FileText, Scale, ShieldCheck } from "lucide-react";

const sopSteps = [
  {
    title: "Empanelment Procedure",
    trigger: "Before any assignment",
    action:
      "NICSI follows an open and transparent empanelment process for consulting agencies in line with General Financial Rules (GFR).",
    output: "Only duly empanelled agencies become eligible for consideration.",
  },
  {
    title: "Information to User Department",
    trigger: "On receipt of a User Department request",
    action:
      "NICSI informs the User Department about available empanelled agencies and the GFR-compliant selection approach.",
    output: "User Department gets complete process visibility before selection.",
  },
  {
    title: "Specific Agency Requested",
    trigger: "When department nominates a specific agency in writing",
    action:
      "NICSI may assign work to the named agency as requested by the department.",
    output:
      "Financial/procurement compliance responsibility remains with the concerned User Department.",
  },
  {
    title: "No Specific Agency Indicated",
    trigger: "When no agency is explicitly nominated",
    action:
      "Work allocation is based on recommendations of a committee constituted by the User Department, with mandatory representation of the department.",
    output: "Recommendation-led, committee-driven agency selection.",
  },
  {
    title: "Presentation and Evaluation",
    trigger: "During selection stage",
    action:
      "Relevant empanelled agencies are invited for presentation and evaluated objectively as per committee process.",
    output: "Most suitable agency is recommended for assignment.",
  },
  {
    title: "User Department Participation",
    trigger: "Across all stages",
    action:
      "Full involvement of the User Department is mandatory through evaluation, recommendation, and finalization.",
    output: "Department ownership and accountability are ensured end-to-end.",
  },
] as const;

const scopeItems = [
  "ICT Solutions",
  "Procurement of Hardware and Software",
  "Networking and Integration",
  "Consulting Services",
  "Web Services and Training",
  "Technical Manpower Support Services",
  "Roll-out and Deployment Services",
  "Data Centre Services",
  "Turnkey Projects",
] as const;

export default function Page() {
  return (
    <main className="pb-14">
      <PageTitle title="Standard Operating Procedure (SOP)" />

      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-4 rounded-xl border border-blue-100 bg-[#F8FAFF] p-4 md:grid-cols-2">
            <div className="rounded-lg border border-blue-100 bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Reference Number</p>
              <p className="mt-1 text-sm font-semibold text-[#0F172A]">120th BM/NICSI-CS/26112021</p>
            </div>
            <div className="rounded-lg border border-blue-100 bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Issue Date</p>
              <p className="mt-1 text-sm font-semibold text-[#0F172A]">24 December 2021</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-blue-100 bg-white p-5">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#003A8C]" />
              <h2 className="text-xl font-bold text-[#0F172A]">Background</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              The Board of Directors, in its 120th meeting held on 26 November 2021, approved the process for assignment of
              work to empanelled consulting agencies.
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <Scale size={18} className="text-[#003A8C]" />
              <h2 className="text-xl font-bold text-[#0F172A]">Approved SOP Process</h2>
            </div>
            <div className="grid gap-3">
              {sopSteps.map((step, index) => (
                <article key={step.title} className="rounded-xl border border-blue-100 bg-white shadow-sm">
                  <div className="rounded-t-xl border-b border-blue-100 bg-[#F8FAFF] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#003A8C] px-2 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <h3 className="text-base font-semibold text-[#0F172A]">{step.title}</h3>
                    </div>
                  </div>
                  <div className="grid gap-3 p-4 md:grid-cols-3">
                    <div className="rounded-lg border border-blue-100 bg-[#FCFDFF] px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0052CC]">When</p>
                      <p className="mt-1 text-sm leading-6 text-gray-700">{step.trigger}</p>
                    </div>
                    <div className="rounded-lg border border-blue-100 bg-[#FCFDFF] px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0052CC]">What NICSI Does</p>
                      <p className="mt-1 text-sm leading-6 text-gray-700">{step.action}</p>
                    </div>
                    <div className="rounded-lg border border-blue-100 bg-[#FCFDFF] px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0052CC]">Result for Department</p>
                      <p className="mt-1 text-sm leading-6 text-gray-700">{step.output}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-blue-100 bg-white p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#003A8C]" />
              <h2 className="text-xl font-bold text-[#0F172A]">Strategic Alliances</h2>
            </div>
            <p className="mt-2 text-sm font-semibold text-[#0F172A]">96th Board Meeting - 18 March 2016</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              Where a User Department is unable to select one partner among multiple channel partners (besides mandatory PAC
              provisions), the channel partner(s) may be selected by OEM(s) for each transaction.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-blue-100 bg-white p-5">
            <h2 className="text-xl font-bold text-[#0F172A]">Scope of Applicability</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {scopeItems.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-lg border border-blue-100 bg-[#FCFDFF] px-3 py-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#0052CC]" />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-blue-100 bg-[#F8FAFF] p-5">
            <h2 className="text-xl font-bold text-[#0F172A]">Approval</h2>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              This SOP is issued with the approval of the Competent Authority.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#0F172A]">
              Company Secretary
              <br />
              National Informatics Centre Services Inc. (NICSI)
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
