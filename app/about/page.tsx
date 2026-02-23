import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function AboutPage() {
  const visionPoints = [
    "Aim for a leadership position in technology enablement.",
    "Broaden enablement beyond only ICT implementation.",
    "Focus on India as well as other developing countries.",
    "Balance business leadership with socioeconomic growth.",
  ];

  const missionPoints = [
    "Drive the adoption of ICT across Central Government, State Governments, and Public Sector Undertakings.",
    "Promote ICT procurement services and business solutions to customers.",
    "Provide transparent and value-added services to customers.",
    "Offer competitive prices for ICT products and services.",
  ];
  const advantageCards = [
    {
      title: "Proven Reliability",
      points: [
        "30+ years of public-sector ICT delivery",
        "30,000+ projects executed in India and abroad",
        "Trusted partner for mission-critical e-Governance",
        "Consistent and dependable program outcomes",
      ],
    },
    {
      title: "Compliance with Best Practices",
      points: [
        "Aligned with GFR procurement norms",
        "Transparent and open tendering process",
        "Strong internal and external audit readiness",
        "High standards of governance and quality",
      ],
    },
    {
      title: "Quality Products",
      points: [
        "Empanelled high-quality vendors via NICSI and GeM",
        "Standardized and customized IT solutions",
        "Secure, scalable, and reliable technology stack",
        "Cost-effective delivery with long-term value",
      ],
    },
    {
      title: "High Market Penetration",
      points: [
        "Strong footprint across ministries, states, and PSUs",
        "Demonstrated capability in Digital India programs",
        "Nationwide experience in complex ICT initiatives",
        "Recognized contributor to digital transformation",
      ],
    },
  ] as const;

  return (
    <main className="pb-12">
      <PageTitle title="About NICSI" />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052CC]">About NICSI</p>
          <h2 className="mt-2 text-2xl font-bold text-[#0F172A] md:text-3xl">National Informatics Centre Services Inc.</h2>
          <p className="mt-4 leading-7 text-gray-700">
            National Informatics Centre Services Inc. (NICSI) was established in 1995 as a Section 8 company under the
            Companies Act, 2013, erstwhile Section 25 company, under National Informatics Centre, Ministry
            of Electronics & Information Technology, Government of India for providing and procuring IT solutions for
            multiple e-governance projects undertaken by NIC, MeitY, Governments and Government Organizations (like Public Sector Undertakings).
          </p>
          <p className="mt-4 leading-7 text-gray-700">
            With a turnover of more than Rs.3100 crores (FY-2024-25), NICSI is a leading IT company
            with a government facing focus and in the last 30 years NICSI has successfully executed
            more than 30,000 projects in India and other developing nations by providing state of
            art and cost-effective solutions for all their growing ICT needs. These solutions are
            delivered through purchase of products and services from high quality vendors,
            empanelled with NICSI/GeM.
          </p>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <p className="text-xs uppercase tracking-wide text-[#0052CC]">Established</p>
              <p className="mt-1 text-lg font-bold text-[#0F172A]">1995</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <p className="text-xs uppercase tracking-wide text-[#0052CC]">Entity Type</p>
              <p className="mt-1 text-lg font-bold text-[#0F172A]">Section 8</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <p className="text-xs uppercase tracking-wide text-[#0052CC]">Turnover</p>
              <p className="mt-1 text-lg font-bold text-[#0F172A]">Rs. 3100+ Cr</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <p className="text-xs uppercase tracking-wide text-[#0052CC]">Projects Delivered</p>
              <p className="mt-1 text-lg font-bold text-[#0F172A]">30,000+</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Vision</p>
          <p className="mt-3 rounded-lg bg-blue-50 p-4 text-sm italic leading-6 text-[#0F172A]">
            &quot;Achieve leadership position in the technology enablement of India and other developing countries thereby contributing
            effectively to accelerate socioeconomic growth&quot;
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {visionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Mission</p>
          <p className="mt-3 rounded-lg bg-blue-50 p-4 text-sm italic leading-6 text-[#0F172A]">
            &quot;To promote and provide transparent value added Information and Communication Technology procurement services and
            business solutions at competitive prices with a focus on socioeconomic development&quot;
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {missionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052CC]">NICSI Operating Model</p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            Integrated operating model focused on requirement assessment, compliant procurement, partner-driven execution, and
            accountable governance for public digital programs.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Value Proposition</p>
          <h3 className="mt-1 text-2xl font-bold text-[#0F172A]">NICSI Advantage</h3>
          <div className="mt-5 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
            {advantageCards.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-xl border border-blue-100 bg-[#F8FAFF] p-4">
                <h4 className="flex h-16 items-center rounded-md bg-[#0A2A72] px-4 text-base font-semibold leading-6 text-white">
                  {card.title}
                </h4>
                <ul className="mt-3 flex-1 space-y-2 text-sm text-gray-700">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 leading-6">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-sm bg-[#0A2A72] rotate-45" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Related Profile Pages</p>
          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/organization-chart" className="rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] hover:bg-blue-50">Organization Chart</Link>
            <Link href="/headquarters-personnel" className="rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] hover:bg-blue-50">Headquarters Personnel</Link>
            <Link href="/state-personnel" className="rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] hover:bg-blue-50">State Personnel</Link>
            <Link href="/work-allocation" className="rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] hover:bg-blue-50">Work Allocation</Link>
            <Link href="/board-of-directors" className="rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] hover:bg-blue-50">Board of Directors</Link>
            <Link href="/list-of-chairpersons" className="rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] hover:bg-blue-50">List of Chairpersons</Link>
            <Link href="/list-of-managing-directors" className="rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] hover:bg-blue-50">List of Managing Directors</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
