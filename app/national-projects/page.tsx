import Image from "next/image";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

const nationalProjects = [
  { name: "IVFRT", logo: "/logos/national-projects/ivfrt.png" },
  { name: "PRAGATI", logo: "/logos/national-projects/pragati.png" },
  { name: "NREGAsoft", logo: "/logos/national-projects/nregasoft.png" },
  { name: "eWayBill", logo: "/logos/national-projects/ewaybill.png" },
  { name: "SMS Messaging", logo: "/logos/national-projects/smsmessaging.png" },
  { name: "eTaal", logo: "/logos/national-projects/etaal.png" },
  { name: "eCourt", logo: "/logos/national-projects/ecourt.png" },
  { name: "PM Kisan", logo: "/logos/national-projects/pmkisan.png" },
  { name: "PFMS", logo: "/logos/national-projects/pfms.png" },
  { name: "Jeevan Pramaan", logo: "/logos/national-projects/jeevanpraman.png" },
  { name: "MyGov", logo: "/logos/national-projects/mygov.png" },
  { name: "ePrison", logo: "/logos/national-projects/eprison.png" },
  { name: "Secure Email", logo: "/logos/national-projects/email.png" },
  { name: "Targeted PDS", logo: "/logos/national-projects/targeted-pds.png" },
  { name: "eTransport", logo: "/logos/national-projects/etransport.png" },
  { name: "GST Prime", logo: "/logos/national-projects/gst-prime.png" },
  { name: "eCounselling", logo: "/logos/national-projects/ecounselling.png" },
  { name: "ServicePlus", logo: "/logos/national-projects/servicesplus.png" },
  { name: "Biometric Attendance", logo: "/logos/national-projects/biometric.png" },
] as const;

const featuredProjects = [
  {
    title: "National Knowledge Network",
    logo: "/logos/national-platforms/nkn.png",
    description:
      "The National Knowledge Network (NKN) is designed as a secure and resilient multi-gigabit network to interconnect knowledge and research institutions across India.",
    highlights: [
      "Ultra-high speed core from 2.5/10G up to 40/100Gbps",
      "Secure and consistent nationwide connectivity",
    ],
  },
  {
    title: "eVisa",
    logo: "/logos/national-platforms/e-visa-logo.png",
    description:
      "Enhanced foreigner tracking through integration of visa issuance, immigration checks, and FRRO/FRO registrations for faster and better-informed decisions.",
    highlights: [
      "Passenger profiling for high-risk traveller identification",
      "Automated alerts for overstays and registration lapses",
      "Integrated with e-passport, e-migration and criminal tracking systems",
    ],
  },
  {
    title: "e-Procurement",
    logo: "/logos/national-platforms/e-procurement.png",
    description:
      "GePNIC, developed by NIC under MeitY, enables government departments and organizations to manage tendering and procurement completely online.",
    highlights: [
      "Online tender schedule download and bid submission",
      "Generic, reusable architecture for all procurement categories",
      "Supports procurement of goods and services",
    ],
  },
  {
    title: "e-Passport",
    logo: "/logos/national-platforms/passport-seve-logo.png",
    description:
      "e-Packet generation is implemented as per ICAO standards with digitally signed chip contents for secure passport issuance workflows.",
    highlights: [
      "Approx. 78.12 lakh e-passports issued",
      "Includes hardware, PKI setup, software, installation and commissioning",
    ],
  },
  {
    title: "Smart PDS",
    logo: "/logos/national-platforms/smart-pds-logo.png",
    description:
      "Public Distribution System (PDS) has evolved into a key government mechanism for food economy management and affordable distribution of food grains.",
    highlights: [
      "Supports scarcity management with targeted delivery",
      "Strengthens efficiency in food distribution governance",
    ],
  },
  {
    title: "e-Office",
    logo: "/logos/national-platforms/e-office.png",
    description:
      "eOffice enables simplified, effective, and transparent inter and intra-government processes through a reusable, open architecture framework.",
    highlights: [
      "Reusable across central, state and district offices",
      "Combines multiple independent functions under one framework",
    ],
  },
  {
    title: "Government Cloud",
    logo: "/logos/national-platforms/dm-logo.png",
    description:
      "NIC Cloud offers secure, scalable hosting for portals, websites and applications with optimized infrastructure utilization for e-Governance.",
    highlights: [
      "Built with strong security and generic architecture",
      "Accelerates implementation of e-Government applications",
    ],
  },
  {
    title: "Secure eMail & Messaging",
    logo: "/logos/national-platforms/secure-email-logo.png",
    description:
      "Large-scale government messaging platform supporting SMS, Voice and WhatsApp channels with integration-ready gateway services.",
    highlights: [
      "300+ crore messages per month",
      "Supports diverse government applications and service workflows",
    ],
  },
  {
    title: "e-Transport",
    logo: "/logos/national-platforms/e-transport-logo.png",
    description:
      "The eTransport MMP by MoRTH is implemented across 35 States/UTs with flagship applications such as Vahan, Sarathi and eChallan.",
    highlights: [
      "Transforms RTO operations and citizen service delivery",
      "Improves efficiency in road transport governance",
    ],
  },
  {
    title: "e-Court",
    logo: "/logos/national-platforms/e-court-logo.png",
    description:
      "The e-Courts MMP is a pan-India program covering software PMU support, infrastructure, cloud services, S3WaaS, connectivity and capacity building.",
    highlights: [
      "Coverage includes Supreme Court, High Courts, District Courts and Tribunals",
      "Integrated manpower, infrastructure and managed service model",
    ],
  },
] as const;

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="National Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">National Projects</h2>
          <p className="mt-2 text-sm text-gray-600">Featured National Platforms</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.title} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-20 items-center justify-center rounded-md border border-gray-100 bg-white p-2">
                    <Image src={project.logo} alt={project.title} width={150} height={60} className="h-full w-full object-contain" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">{project.title}</h4>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-700">{project.description}</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0052CC]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Other Major Projects</h2>
          <p className="mt-2 text-sm text-gray-600">
            Major mission-mode and citizen service platforms supported across ministries and states.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {nationalProjects.map((project) => (
              <article key={project.name} className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-3 shadow-sm">
                <div className="flex h-20 items-center justify-center rounded-md border border-gray-100 bg-white p-2">
                  <Image src={project.logo} alt={project.name} width={180} height={80} className="h-full w-full object-contain" />
                </div>
                <p className="mt-2 text-center text-xs font-semibold text-[#0F172A]">{project.name}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm">
          Official source:{" "}
          <Link
            href="https://nicsi.nic.in/nationalProjects"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#003A8C]"
          >
            NICSI National Projects
          </Link>
        </p>
      </section>
    </main>
  );
}
