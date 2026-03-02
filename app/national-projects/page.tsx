"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const featuredProjects = [
  {
    title: "National Knowledge Network (NKN)",
    logo: "/logos/national-platforms/nkn.png",
    description:
      "A resilient and secure national backbone network interconnecting knowledge and research institutions across India.",
    highlights: [
      "Reliable high-speed connectivity",
      "Secure national academic backbone",
      "Nationwide interlinking of research institutions",
    ],
  },
  {
    title: "e-Visa",
    logo: "/logos/national-platforms/e-visa-logo.png",
    description:
      "A digitally integrated visa platform enabling faster processing with integration across passport, migration, and security systems.",
    highlights: [
      "Integrated with e-Passport and e-Migration",
      "Linked with criminal tracking and security agencies",
      "Supports data-driven decision-making at national borders",
    ],
  },
  {
    title: "e-Procurement",
    logo: "/logos/national-platforms/e-procurement.png",
    description:
      "A unified procurement platform for public institutions covering goods, services, tenders, and auctions.",
    highlights: [
      "Covers Goods & Services, global tenders, and auctions",
      "Used by CPSEs, Central Govt, States/UTs, and Defence bodies",
      "Improves transparency, compliance, and efficiency",
    ],
  },
  {
    title: "e-Passport",
    logo: "/logos/national-platforms/passport-seve-logo.png",
    description:
      "ICAO-compliant e-Passport ecosystem with secure chip data and end-to-end implementation support.",
    highlights: [
      "Digitally signed chip contents and PKI infrastructure setup",
      "Hardware and software supply, installation and commissioning",
      "Approximately 78+ lakh e-passports issued nationwide",
    ],
  },
  {
    title: "Smart PDS",
    logo: "/logos/national-platforms/smart-pds-logo.png",
    description:
      "Digitally strengthened Public Distribution System for efficient and transparent food access at scale.",
    highlights: [
      "Supports affordable food access",
      "Contributes to nationwide food security",
      "Improves transparency in supply chain governance",
    ],
  },
  {
    title: "e-Office",
    logo: "/logos/national-platforms/e-office.png",
    description:
      "Paperless governance platform improving speed, transparency, and accountability in government workflows.",
    highlights: [
      "Enhances responsiveness and operational efficiency",
      "Improves transparency in office processes",
      "Implemented across Central Govt and about 70% State Govts",
    ],
  },
  {
    title: "Government Cloud",
    logo: "/logos/national-platforms/dm-logo.png",
    description:
      "India's sovereign cloud initiative enabling secure, scalable, and cost-effective government infrastructure.",
    highlights: [
      "Optimizes ICT expenditure",
      "Accelerates e-Gov application deployment",
      "Improves infrastructure utilization efficiency",
    ],
  },
  {
    title: "Secure eMail & Messaging",
    logo: "/logos/national-platforms/secure-email-logo.png",
    description:
      "High-volume national messaging gateway supporting secure communication across government applications.",
    highlights: [
      "300+ crore messages per month",
      "Supports SMS, Voice, and WhatsApp integration",
      "Used by diverse government systems",
    ],
  },
  {
    title: "e-Transport",
    logo: "/logos/national-platforms/e-transport-logo.png",
    description:
      "Nationwide transport digitization initiative modernizing RTO services and reducing manual visits.",
    highlights: [
      "Includes Sarthi, Vahan, and eParivahan",
      "Enables online service facilitation",
      "Reduces physical footfall at transport offices",
    ],
  },
  {
    title: "e-Courts Mission Mode Project",
    logo: "/logos/national-platforms/e-court-logo.png",
    description:
      "PAN-India judicial modernization initiative covering digital systems, infrastructure, and cloud enablement.",
    highlights: [
      "Software development and court process modernization",
      "Infrastructure, connectivity, and cloud services",
      "Covers Supreme Court, High Courts, District Courts, and Tribunals",
    ],
  },
  {
    title: "Digital Public Infrastructure (DPI)",
    logo: "/logos/NICSI-logo.png",
    description:
      "Open and interoperable digital ecosystem enabling scalable citizen services and inclusive innovation.",
    highlights: [
      "Includes UMANG, Aadhaar, DigiLocker, UPI, eHospital, and GeM",
      "Strengthens financial inclusion",
      "Enables seamless citizen services and innovation-led digital economy",
    ],
  },
  {
    title: "PBD & Implementation",
    logo: "/logos/NICSI-logo.png",
    description:
      "Strategic execution model for converting ideas into scalable digital products and implementation outcomes.",
    highlights: [
      "Productization and business exploration",
      "Pricing and licensing framework development",
      "Industry alliance and implementation support",
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
const TOTAL_SLIDES = featuredProjects.length;

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  return (
    <main className="pb-12">
      <PageTitle title="National Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Key National Projects</h2>
          <div
            className="mt-5 overflow-hidden rounded-xl border border-blue-100 bg-[#FCFDFF] shadow-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <article key={project.title} className="w-full shrink-0">
                  <div className="grid md:grid-cols-[340px_1fr]">
                    <div className="flex h-64 items-center justify-center border-b border-blue-100 bg-white p-6 md:h-full md:border-b-0 md:border-r">
                      <Image src={project.logo} alt={project.title} width={520} height={280} className="h-full w-full object-contain" />
                    </div>
                    <div className="p-6">
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

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-blue-100 bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-[#003A8C] hover:bg-blue-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setPaused((prev) => !prev)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-[#003A8C] hover:bg-blue-100"
                  aria-label={paused ? "Play slider" : "Pause slider"}
                >
                  {paused ? <Play size={14} /> : <Pause size={14} />}
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-[#003A8C] hover:bg-blue-100"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {featuredProjects.map((project, index) => (
                  <button
                    type="button"
                    key={`${project.title}-dot`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={activeIndex === index}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeIndex === index ? "bg-[#003A8C]" : "bg-blue-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Other Key Projects</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {otherProjects.map((project) => (
              <article key={project.name} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-28 items-center justify-center rounded-lg border border-blue-50 bg-[#FCFDFF] p-3">
                  <Image src={project.logo} alt={project.name} width={240} height={110} className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[#0F172A]">{project.name}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-700">{project.description}</p>
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-fit rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                >
                  Visit Site
                </Link>
              </article>
            ))}
          </div>
        </div>
 
      </section>
    </main>
  );
}
