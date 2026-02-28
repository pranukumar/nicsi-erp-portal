import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function CapacityBuildingTrainingPage() {
  const focusAreas = [
    "Capacity building and sensitization support for departments implementing Digital India and e-Governance programmes.",
    "General computer training and application-specific training aligned to project roles.",
    "Handholding for adoption of standards, platforms and operational processes.",
    "Technology update programmes for evolving ICT tools and delivery models.",
    "Customized training programmes for sector-specific implementation needs.",
  ] as const;

  const programmeTypes = [
    "Government Informatics Training Programs",
    "Technology Update Programs",
    "Customized Programs for Various Sectors",
  ] as const;

  return (
    <main className="pb-12">
      <PageTitle title="Capacity Building Training" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Training Services for Capacity Building</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            NICSI, in coordination with NIC, positions capacity building as a core enabler for effective implementation of
            e-Governance initiatives. Current NICSI website content highlights that departments are supported through structured
            training, handholding and sensitization programmes to improve adoption and execution readiness.
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            The training approach includes both general computer programmes and application-specific learning tracks, with
            professionally managed courses on ICT topics and technology use in key sectoral areas.
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Current Focus Areas</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
              {focusAreas.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Types of Programmes</h3>
            <div className="mt-3 grid gap-2">
              {programmeTypes.map((type) => (
                <div key={type} className="rounded-md border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-sm font-medium text-[#0F172A]">
                  {type}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#0F172A]">Official Source Reference</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            This page content is aligned with currently published NICSI website information under Training Services and Services
            offerings. Detailed programme schedules, nominations and batch notifications may be published by NICSI as and when issued.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <Link href="https://nicsi.nic.in/home" target="_blank" rel="noreferrer" className="rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 font-semibold text-[#003A8C] hover:bg-blue-100">
              NICSI Home
            </Link>
            <Link href="https://nicsi.nic.in/services" target="_blank" rel="noreferrer" className="rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 font-semibold text-[#003A8C] hover:bg-blue-100">
              NICSI Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
