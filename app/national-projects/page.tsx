import Image from "next/image";
import PageTitle from "../../components/layout/PageTitle";
import ExternalLaunchButton from "@/components/common/ExternalLaunchButton";
import { withSiteBasePath } from "@/lib/staticAudit";

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
    title: "Government Cloud",
    logo: "/logos/national-platforms/nic-cloud-logo.svg",
    description:
      "India's sovereign cloud initiative enabling secure, scalable, and cost-effective government infrastructure.",
    highlights: [
      "Optimizes ICT expenditure",
      "Accelerates e-Gov application deployment",
      "Improves infrastructure utilization efficiency",
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
    title: "Government eMail",
    logo: "/logos/national-platforms/government_email.png",
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
    name: "PM Kisan",
    logo: "/logos/national-projects/pmkisan.png",
    description: "Direct income support delivery platform for eligible farmer beneficiaries.",
    website: "https://pmkisan.gov.in/",
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
  const normalizedKey = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const seen = new Set<string>();
  const combinedProjects = [
    ...featuredProjects.map((project) => ({
      name: project.title,
      logo: withSiteBasePath(project.logo),
      description: project.description,
      website: undefined as string | undefined,
    })),
    ...otherProjects.map((project) => ({
      ...project,
      logo: withSiteBasePath(project.logo),
    })),
  ].filter((project) => {
    const key = normalizedKey(project.name);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return (
    <main className="pb-12">
      <PageTitle title="National Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div id="other-key-projects" className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8 scroll-mt-28">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {combinedProjects.map((project) => (
              <article key={project.name} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-28 items-center justify-center rounded-lg border border-blue-50 bg-[#FCFDFF] p-3">
                  <Image src={project.logo} alt={project.name} width={240} height={110} className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[#0F172A]">{project.name}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-700">{project.description}</p>
                {project.website ? (
                  <ExternalLaunchButton
                    url={project.website}
                    className="mt-3 inline-flex w-fit rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                    title={`Visit ${project.name}`}
                  >
                    Visit Site
                  </ExternalLaunchButton>
                ) : null}
              </article>
            ))}
          </div>
        </div>
 
      </section>
    </main>
  );
}
