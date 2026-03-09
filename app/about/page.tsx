import PageTitle from "../../components/layout/PageTitle";
import Image from "next/image";
import { withSiteBasePath } from "@/lib/staticAudit";

export default function AboutPage() {
  const visionPoints = [
    "Aim for a leadership position in technology enablement.",
    "Broaden enablement beyond only ICT implementation.",
    "Focus on India as well as other developing countries.",
    "Balance business leadership with socioeconomic growth.",
  ];

  const missionPoints = [
    "Promote ICT procurement services and Business solutions to customers.",
    "Provide transparent and value-added services to customers",
    "Offer competitive prices of ICT products / services",
     "Drive the adoption of ICT across Governments and Public Sector Undertakings.",
  ];
  const advantageCards = [
    {
      title: "Proven Reliability",
      points: [
        "30+ years delivering ICT solutions for Government clients",
        "Successfully executed 30,000+ projects in India and abroad",
        "Trusted partner for mission-critical e-Governance programs",
        "Strong, reliable vendor ecosystem",
        "Consistent, dependable project outcomes",
      ],
    },
    {
      title: "Compliance with Best Practices",
      points: [
        "Fully compliant with Government of India’s GFR procurement norms",
        "Transparent, open tendering for vendor selection",
        "Solutions integrate seamlessly with existing systems",
        "Meets stringent internal and external audit requirements",
        "Domain expertise ensuring best-in-class service quality",
      ],
    },
    {
      title: "Assured Quality & Standards",
      points: [
        "High-quality vendors empanelled via NICSI & GeM",
        "Standardized & customized IT solutions",
        "Competitive pricing ensuring cost-effective delivery",
        "Reliable, scalable, and secure technologies",
        "Focus on long-term value and performance",
      ],
    },
    {
      title: "High Market Penetration",
      points: [
        "30,000+ ICT projects delivered across sectors",
        "Strong presence across Central Ministries, States & PSUs",
        "Proven capability in Digital India mission-mode projects",
        "Experience delivering nationwide, complex ICT initiatives",
        "Recognized for enabling digital transformation",
      ],
    },
  ] as const;

  return (
    <main className="pb-12">
      <PageTitle title="About NICSI" />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0052CC]">About NICSI</p> */}
          <h2 className="mt-2 text-xl font-bold text-[#0F172A] md:text-2xl">National Informatics Centre Services Inc.</h2>
          <p className="mt-4 text-left leading-7 text-gray-700">
            National Informatics Centre Services Inc. (NICSI), established in 1995, is a Section 8 company under the Companies Act, 2013 under National Informatics Centre (NIC), Ministry of Electronics & Information Technology (MeitY), Government of India for providing and procuring IT solutions for multiple e-governance projects undertaken by NIC, MeitY, Governments and Government Organizations (like Public Sector Undertakings).
          </p>
          <p className="mt-4 text-left leading-7 text-gray-700">
            With a turnover of more than Rs.3100 crores (FY-2024-25), NICSI has emerged as a leading government-focused IT organization in the last 30 years. NICSI has successfully executed more than 30,000 projects in India and other developing nations by providing state of art and cost-effective solutions for all their growing ICT needs. These solutions are delivered through the procurement of products and services from high quality vendors, empanelled with NICSI/GeM.
          </p>
          <div className="mt-6 rounded-xl border border-blue-100 bg-[#F8FAFF] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Nationwide Digital Footprint</p>
            <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm uppercase tracking-wide text-[#0052CC]">Ministries</p>
                <p className="mt-1 text-lg font-bold text-[#0F172A]">52+</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm uppercase tracking-wide text-[#0052CC]">Departments</p>
                <p className="mt-1 text-lg font-bold text-[#0F172A]">166+</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm uppercase tracking-wide text-[#0052CC]">PSUs</p>
                <p className="mt-1 text-lg font-bold text-[#0F172A]">280+</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm uppercase tracking-wide text-[#0052CC]">Projects</p>
                <p className="mt-1 text-lg font-bold text-[#0F172A]">9350+</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Vision</p>
          <p className="mt-3 rounded-lg bg-blue-50 p-4 text-left text-sm italic leading-6 text-[#0F172A]">
            &quot;Achieve leadership position in the technology enablement of India and other developing countries thereby contributing effectively to accelerate socioeconomic growth&quot;
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {visionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Mission</p>
          <p className="mt-3 rounded-lg bg-blue-50 p-4 text-left text-sm italic leading-6 text-[#0F172A]">
            &quot;To promote and provide transparent value-added Information and Communication Technology procurement services and business solutions at competitive prices with a focus on socioeconomic development&quot;
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0052CC]">NICSI Operating Model</p>
          <h3 className="mt-1 text-2xl font-bold text-[#0F172A]">Demand to Delivery Model</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            NICSI demand-to-delivery structure with NIC, NICSI, key services, operating units, empanelment channels, and service
            catalogue mapped in one integrated flow.
          </p>
          <div className="mt-5 overflow-hidden rounded-xl border border-blue-100 bg-[#F8FAFF] p-3 md:p-4">
            <Image
              src={withSiteBasePath("/images/nicsi-operating-model.png")}
              alt="NICSI Operating Model - Demand to Delivery"
              width={2048}
              height={1334}
              className="h-auto w-full rounded-lg border border-white object-contain shadow-sm"
              priority
            />
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Value Proposition</p>

          <div className="mt-5 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
            {advantageCards.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-xl border border-blue-100 bg-[#F8FAFF] p-4">
                <h4 className="flex h-16 items-center rounded-md bg-[#0A2A72] px-4 text-base font-semibold leading-6 text-white">
                  {card.title}
                </h4>
                <ul className="mt-3 flex-1 space-y-2 text-sm text-gray-700">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 leading-6">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#BCD0F8] bg-[#EAF1FF]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0A2A72]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

       
    </main>
  );
}
