"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

const featuredProjects = [
  {
    title: "National Knowledge Network",
    logo: "/logos/national-platforms/nkn.png",
    description:
      "Secure and resilient multi-gigabit network interconnecting major education and research institutions across India.",
    highlights: [
      "2.5/10G to 40/100Gbps backbone capability",
      "Nationwide high-speed connectivity for knowledge institutions",
    ],
  },
  {
    title: "eVisa",
    logo: "/logos/national-platforms/e-visa-logo.png",
    description:
      "Integrated visa and immigration workflow for faster processing and better tracking of foreign visitors.",
    highlights: [
      "Unified workflow from issuance to registration checkpoints",
      "Automated alerts for overstay and compliance monitoring",
    ],
  },
  {
    title: "e-Procurement",
    logo: "/logos/national-platforms/e-procurement.png",
    description:
      "GePNIC enables end-to-end online government tendering and procurement lifecycle management.",
    highlights: [
      "Online bid submission and tender schedule management",
      "Reusable framework for goods and services procurement",
    ],
  },
  {
    title: "e-Passport",
    logo: "/logos/national-platforms/passport-seve-logo.png",
    description:
      "ICAO-compliant e-passport solution with digitally signed chip data for trusted travel identity.",
    highlights: [
      "Digitally signed secure e-packet generation",
      "Integrated PKI, hardware and commissioning support",
    ],
  },
  {
    title: "Smart PDS",
    logo: "/logos/national-platforms/smart-pds-logo.png",
    description:
      "Digital strengthening of Public Distribution System for transparent and efficient food grain delivery.",
    highlights: [
      "Improved beneficiary targeting and delivery monitoring",
      "Supports policy goals for food security at scale",
    ],
  },
  {
    title: "e-Office",
    logo: "/logos/national-platforms/e-office.png",
    description:
      "Unified digital office platform for transparent, paperless and accountable government operations.",
    highlights: [
      "Standardized process automation across departments",
      "Reusable architecture for central, state and district offices",
    ],
  },
  {
    title: "Government Cloud",
    logo: "/logos/national-platforms/dm-logo.png",
    description:
      "Secure cloud hosting and managed infrastructure for government portals, services and applications.",
    highlights: [
      "Scalable hosting for mission-critical digital services",
      "Optimized utilization with strong security controls",
    ],
  },
  {
    title: "Secure eMail & Messaging",
    logo: "/logos/national-platforms/secure-email-logo.png",
    description:
      "High-volume government communication platform for secure email, SMS, voice and messaging workflows.",
    highlights: [
      "Supports large-scale transactional and alert messaging",
      "Integration-ready gateway for diverse government systems",
    ],
  },
  {
    title: "e-Transport",
    logo: "/logos/national-platforms/e-transport-logo.png",
    description:
      "Mission-mode transport digitization with Vahan, Sarathi and related services across States/UTs.",
    highlights: [
      "Improves RTO efficiency and public service delivery",
      "Supports enforcement and compliance digitalization",
    ],
  },
  {
    title: "e-Courts",
    logo: "/logos/national-platforms/e-court-logo.png",
    description:
      "Pan-India judicial digital infrastructure for case services, cloud enablement and court process modernization.",
    highlights: [
      "Coverage from Supreme Court to district courts and tribunals",
      "Manpower, infrastructure and managed service support model",
    ],
  },
  {
    title: "Pragati VC",
    logo: "/logos/national-projects/pragati.png",
    description:
      "Technology-enabled governance review platform for timely monitoring and decision support at the highest level.",
    highlights: [
      "Structured review of key projects and implementation status",
      "Improved inter-ministerial coordination and follow-up",
    ],
  },
  {
    title: "eTaal 3.0",
    logo: "/logos/national-projects/etaal.png",
    description:
      "Real-time analytics dashboard capturing e-transaction trends across departments and public digital services.",
    highlights: [
      "National view of digital service transaction metrics",
      "Supports evidence-based planning and service governance",
    ],
  },
] as const;

const otherProjects = [
  {
    name: "IVFRT",
    logo: "/logos/national-projects/ivfrt.png",
    description: "Immigration and visa lifecycle support system for foreigner registration and tracking.",
    website: "https://boi.gov.in/",
  },
  {
    name: "NREGAsoft",
    logo: "/logos/national-projects/nregasoft.png",
    description: "Digital platform supporting planning, execution and monitoring under MGNREGS.",
    website: "https://nrega.nic.in/",
  },
  {
    name: "eWayBill",
    logo: "/logos/national-projects/ewaybill.png",
    description: "Electronic way bill system for GST-linked movement of goods across India.",
    website: "https://ewaybillgst.gov.in/",
  },
  {
    name: "SMS Messaging",
    logo: "/logos/national-projects/smsmessaging.png",
    description: "Government-scale messaging infrastructure for critical notifications and outreach.",
    website: "https://www.nic.in/",
  },
  {
    name: "PM Kisan",
    logo: "/logos/national-projects/pmkisan.png",
    description: "Direct income support delivery platform for eligible farmer beneficiaries.",
    website: "https://pmkisan.gov.in/",
  },
  {
    name: "PFMS",
    logo: "/logos/national-projects/pfms.png",
    description: "Public Financial Management System for fund flow tracking and payment transparency.",
    website: "https://pfms.nic.in/",
  },
  {
    name: "Jeevan Pramaan",
    logo: "/logos/national-projects/jeevanpraman.png",
    description: "Digital life certificate service for pensioners using biometric authentication.",
    website: "https://jeevanpramaan.gov.in/",
  },
  {
    name: "MyGov",
    logo: "/logos/national-projects/mygov.png",
    description: "Citizen engagement platform for consultations, tasks, polls and participatory governance.",
    website: "https://www.mygov.in/",
  },
  {
    name: "ePrison",
    logo: "/logos/national-projects/eprison.png",
    description: "Prison management platform for inmate records, workflow and correctional administration.",
    website: "https://eprisons.nic.in/",
  },
  {
    name: "Secure Email",
    logo: "/logos/national-projects/email.png",
    description: "Trusted government email services with secure identity, collaboration and communication.",
    website: "https://email.gov.in/",
  },
  {
    name: "Targeted PDS",
    logo: "/logos/national-projects/targeted-pds.png",
    description: "Digitized distribution and beneficiary validation ecosystem for fair-price delivery.",
    website: "https://nfsa.gov.in/",
  },
  {
    name: "eTransport",
    logo: "/logos/national-projects/etransport.png",
    description: "Integrated transport ecosystem supporting licenses, vehicles, challans and compliance.",
    website: "https://parivahan.gov.in/",
  },
  {
    name: "GST Prime",
    logo: "/logos/national-projects/gst-prime.png",
    description: "GST process support and digital monitoring workflows for tax operations.",
    website: "https://www.gst.gov.in/",
  },
  {
    name: "eCounselling",
    logo: "/logos/national-projects/ecounselling.png",
    description: "End-to-end admission counselling support for technical and academic institutions.",
    website: "https://www.nic.in/",
  },
  {
    name: "ServicePlus",
    logo: "/logos/national-projects/servicesplus.png",
    description: "Low-code/no-code platform to launch citizen-centric electronic services rapidly.",
    website: "https://serviceonline.gov.in/",
  },
  {
    name: "Biometric Attendance",
    logo: "/logos/national-projects/biometric.png",
    description: "Aadhaar-enabled attendance platform for real-time workforce attendance monitoring.",
    website: "https://attendance.gov.in/",
  },
] as const;

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % featuredProjects.length);

  return (
    <main className="pb-12">
      <PageTitle title="National Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">National Projects</h2>
          <p className="mt-2 text-sm text-gray-600">Detailed view of 12 national projects</p>

          <div
            className="mt-5 overflow-hidden rounded-xl border border-blue-100 bg-[#FCFDFF] shadow-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {featuredProjects.map((project, index) => (
                <article key={project.title} className="w-full shrink-0">
                  <div className="grid md:grid-cols-[340px_1fr]">
                    <div className="flex h-64 items-center justify-center border-b border-blue-100 bg-white p-6 md:h-full md:border-b-0 md:border-r">
                      <Image src={project.logo} alt={project.title} width={520} height={280} className="h-full w-full object-contain" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Project {index + 1} of 12</p>
                      <h3 className="mt-1 text-2xl font-bold text-[#0F172A]">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-700">{project.description}</p>
                      <ul className="mt-3 space-y-1 text-sm text-gray-700">
                        {project.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0052CC]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-blue-100 bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="rounded-md border border-blue-200 px-3 py-1.5 text-sm font-semibold text-[#003A8C] hover:bg-blue-50"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-md border border-blue-200 px-3 py-1.5 text-sm font-semibold text-[#003A8C] hover:bg-blue-50"
                >
                  Next
                </button>
              </div>
              <div className="flex items-center gap-2">
                {featuredProjects.map((project, index) => (
                  <button
                    key={`${project.title}-dot`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${project.title}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeIndex === index ? "bg-[#003A8C]" : "bg-blue-200 hover:bg-blue-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Other Key Projects</h2>
          <p className="mt-2 text-sm text-gray-600">Hover any card to view summary and open project website.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {otherProjects.map((project) => (
              <article key={project.name} className="group relative overflow-hidden rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-28 items-center justify-center rounded-lg border border-blue-50 bg-[#FCFDFF] p-3">
                  <Image src={project.logo} alt={project.name} width={240} height={110} className="h-full w-full object-contain" />
                </div>

                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0A2A72]/95 via-[#0A2A72]/70 to-transparent p-3 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
                  <p
                    className="text-xs text-white/95"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>
                  <Link
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex w-fit rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-[#0A2A72]"
                  >
                    Visit site
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
