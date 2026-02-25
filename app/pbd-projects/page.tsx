import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Bus, Landmark, LocateFixed, ScanFace } from "lucide-react";
import PageTitle from "../../components/layout/PageTitle";

export default function Page() {
  type Solution = {
    name: string;
    tagline: string;
    description: string;
    accent: string;
    logo?: string;
    icon?: LucideIcon;
  };

  const featuredSolutions: readonly Solution[] = [
    {
      name: "ServicePlus",
      tagline: "Low-code eService Delivery Framework",
      description:
        "Meta-data-based e-service delivery framework built on Low Code-No Code (LCNC) architecture for delivering electronic services to citizens.",
      accent: "text-[#0A2A72]",
      logo: "/logos/national-projects/servicesplus.png",
    },
    {
      name: "e-Counselling Services",
      tagline: "Simplifying The Admission Process",
      description:
        "One-stop solution providing end-to-end technical support and services toward hassle-free, transparent admission processes for technical and academic institutions across the country.",
      accent: "text-[#C62828]",
      logo: "/logos/national-projects/ecounselling.png",
    },
    {
      name: "StarBus",
      tagline: "One Nation One Portal",
      description:
        "A fully configurable, cloud-enabled platform providing State Transport Corporation services such as online seat booking, bus pass issuance, fleet and crew management.",
      accent: "text-[#00796B]",
      icon: Bus,
    },
  ];

  const otherProjects = [
    {
      name: "eNagar Setu",
      subtitle: "Property Tax Collection",
      description:
        "Digital service platform to streamline municipal tax collection across urban local bodies.",
      accent: "text-[#0A2A72]",
      icon: Landmark,
    },
    {
      name: "Vehicle Location & Tracking System",
      subtitle: "VLTS",
      description:
        "GPS-based vehicle tracking solution designed to monitor public transport and emergency vehicles in real time.",
      accent: "text-[#0284C7]",
      icon: LocateFixed,
    },
    {
      name: "Face Auth",
      subtitle: "Biometric Verification",
      description:
        "Biometric authentication service that leverages facial recognition technology to verify user identity across government platforms.",
      accent: "text-[#1E40AF]",
      icon: ScanFace,
    },
  ] as const satisfies readonly (Omit<Solution, "tagline"> & { subtitle: string })[];

  return (
    <main className="pb-12">
      <PageTitle title="PBD Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">PBD Projects</h2>
          <p className="mt-2 text-sm text-gray-600">Featured PBD Solutions</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredSolutions.map((solution) => (
              <article key={solution.name} className="flex h-full flex-col rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="mb-3 flex h-14 items-center justify-start">
                  {solution.logo ? (
                    <div className="flex h-14 w-40 items-center rounded-md border border-gray-100 bg-white p-2">
                      <Image src={solution.logo} alt={`${solution.name} logo`} width={180} height={56} className="h-full w-full object-contain" />
                    </div>
                  ) : solution.icon ? (
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-blue-200 bg-white text-[#0A2A72]">
                      <solution.icon size={22} />
                    </span>
                  ) : null}
                </div>
                <p className={`min-h-[3.5rem] text-2xl font-bold ${solution.accent}`}>{solution.name}</p>
                <p className="mt-1 text-sm font-semibold text-gray-600">{solution.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-gray-700">{solution.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <article key={project.name} className="flex h-full flex-col rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                {project.icon && (
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-200 bg-[#F8FAFF] text-[#0A2A72]">
                    <project.icon size={20} />
                  </span>
                )}
                <p className={`min-h-[3.5rem] text-2xl font-bold leading-tight ${project.accent}`}>{project.name}</p>
                <p className="mt-1 text-sm font-semibold text-gray-600">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-gray-700">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
 
      </section>
    </main>
  );
}
