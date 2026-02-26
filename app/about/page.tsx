import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";
import Image from "next/image";

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
  const keyServices = [
    "Procurement of Goods & Services",
    "Resources/Manpower Provisioning",
    "Technology Consulting",
    "Project Execution and Capacity Building",
  ] as const;
  const executionChannels = [
    "Empanelment of vendors through GeM Portal",
    "Industry Partners / Empanelled Vendors",
    "Empanelment of vendors through CPPP Portal",
  ] as const;
  const serviceCatalogue = [
    "Software Development",
    "Manpower",
    "eGov Consultancy",
    "Managed Cloud Services",
    "Rollout Services",
    "Application Security Audit",
    "Training",
    "Call Center Services",
  ] as const;
  const operatingStages = [
    {
      step: "01",
      title: "Demand Intake",
      detail: "Central/State Governments and PSUs raise service requests with program needs, scope, and timelines.",
    },
    {
      step: "02",
      title: "Technical Alignment",
      detail: "NIC provides software and core infrastructure alignment for architecture, standards, and integration.",
    },
    {
      step: "03",
      title: "Service Packaging",
      detail: "NICSI defines the right mix of procurement, manpower, consulting, and execution services.",
    },
    {
      step: "04",
      title: "Execution Governance",
      detail: "Operating units coordinate partner onboarding, commercial controls, and delivery milestones.",
    },
    {
      step: "05",
      title: "Channel Delivery",
      detail: "Execution is routed through GeM, empanelled industry partners, and CPPP as per requirement.",
    },
    {
      step: "06",
      title: "Program Outcomes",
      detail: "Departments receive deployed services with quality controls, compliance, and adoption support.",
    },
  ] as const;

  return (
    <main className="pb-12">
      <PageTitle title="About NICSI" />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0052CC]">About NICSI</p> */}
          <h2 className="mt-2 text-xl font-bold text-[#0F172A] md:text-2xl">National Informatics Centre Services Inc.</h2>
          <p className="mt-4 text-justify leading-7 text-gray-700">
            National Informatics Centre Services Inc. (NICSI), established in 1995, is a Section 8 company under the Companies Act, 
            2013 (formerly a Section 25 company) under National Informatics Centre (NIC), Ministry of Electronics & Information 
            Technology (MeitY), Government of India for providing and procuring IT solutions for multiple e-governance projects undertaken 
            by NIC, MeitY, Governments and Government Organizations (like Public Sector Undertakings).
          </p>
          <p className="mt-4 text-justify leading-7 text-gray-700">
            With a turnover of more than Rs.3100 crores (FY-2024-25), NICSI has emerged as a 
            leading government-focused IT organization in the last 30 years. NICSI has successfully 
            executed more than 30,000 projects in India and other developing nations by providing state 
            of art and cost-effective solutions for all their growing ICT needs. These solutions are 
            delivered through the procurement of products and services from high quality vendors, empanelled with NICSI/GeM.

          </p>
          <div className="mt-6 rounded-xl border border-blue-100 bg-[#F8FAFF] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Geographical Reach</p>
            <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm uppercase tracking-wide text-[#0052CC]">Ministries Covered</p>
                <p className="mt-1 text-lg font-bold text-[#0F172A]">--</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm uppercase tracking-wide text-[#0052CC]">Departments Covered</p>
                <p className="mt-1 text-lg font-bold text-[#0F172A]">--</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm uppercase tracking-wide text-[#0052CC]">PSUs Covered</p>
                <p className="mt-1 text-lg font-bold text-[#0F172A]">--</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm uppercase tracking-wide text-[#0052CC]">Projects Delivered (Exact)</p>
                <p className="mt-1 text-lg font-bold text-[#0F172A]">--</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Vision</p>
          <p className="mt-3 rounded-lg bg-blue-50 p-4 text-justify text-sm italic leading-6 text-[#0F172A]">
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Mission</p>
          <p className="mt-3 rounded-lg bg-blue-50 p-4 text-justify text-sm italic leading-6 text-[#0F172A]">
            &quot;To promote and provide transparent value-added Information and Communication 
            Technology procurement services and business solutions at competitive prices with a 
            focus on socioeconomic development&quot;
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
            A service request-led model where NICSI translates Government and PSU requirements into governed execution through
            procurement, consulting, implementation, and partner ecosystem management.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-blue-200 bg-white p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0052CC]">NIC Backbone</p>
              <div className="mt-2 flex min-h-16 items-center justify-center rounded-md bg-[#F7FAFF] p-2">
                <Image src="/logos/NIC_Logo.png" alt="NIC Logo" width={160} height={60} className="h-10 w-auto object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-700">Software architecture, core infra, and technical standards alignment.</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0052CC]">NICSI Orchestration</p>
              <div className="mt-2 flex min-h-16 items-center justify-center rounded-md bg-[#F7FAFF] p-2">
                <Image src="/logos/NICSI-logo.png" alt="NICSI Logo" width={220} height={60} className="h-11 w-auto object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-700">Program governance, procurement strategy, partner management, and delivery controls.</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-gray-200 bg-[#F8FAFF] p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">How It Works</p>
            <div className="mt-3 grid gap-3 lg:grid-cols-3">
              {operatingStages.map((stage, index) => (
                <article key={stage.step} className="relative rounded-lg border border-blue-100 bg-white p-4">
                  <span className="inline-flex rounded-md bg-[#0A2A72] px-2 py-1 text-xs font-semibold text-white">{stage.step}</span>
                  <h4 className="mt-2 text-sm font-semibold text-[#0F172A]">{stage.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-gray-700">{stage.detail}</p>
                  {index !== operatingStages.length - 1 ? (
                    <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-[#2B6CB0] lg:block">&#8594;</span>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-purple-200 bg-[#FBF8FF] p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B3FA6]">Key Services Offered</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {keyServices.map((service) => (
                <div key={service} className="rounded-lg border border-purple-100 bg-white p-3 text-sm font-semibold text-[#0F172A]">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Operating Units</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-blue-200 bg-white p-3 text-sm font-semibold text-[#0F172A]">
                  Product Business Division & IT
                </div>
                <div className="rounded-lg border border-blue-200 bg-white p-3 text-sm font-semibold text-[#0F172A]">
                  Centre of Excellence for NICSI
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">Outcome Focus</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#0F172A]">
                Business model, pricing, licensing, promotional activities, and adoption of emerging technologies.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {executionChannels.map((channel, index) => (
              <div
                key={channel}
                className={`rounded-lg p-3 text-center text-sm font-semibold ${
                  index === 1
                    ? "border border-amber-300 bg-amber-100 text-amber-900"
                    : "border border-gray-800 bg-gray-900 text-white"
                }`}
              >
                {channel}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-dashed border-amber-300 bg-amber-50/60 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">Service Catalogue Delivered</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCatalogue.map((service) => (
                <div key={service} className="rounded-md border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-[#0F172A]">
                  {service}
                </div>
              ))}
            </div>
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

       
    </main>
  );
}
