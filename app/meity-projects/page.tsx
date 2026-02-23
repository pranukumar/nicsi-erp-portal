import Image from "next/image";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

export default function Page() {
  const projects = [
    { title: "Enhancement of National Informatics Centre (NIC) - National Cloud Services", logo: "/logos/meity-projects/national-cloud.png" },
    { title: "eTaal 3.0", logo: "/logos/meity-projects/etaal.png" },
    { title: "Secure Email Service for Government of India", logo: "/logos/meity-projects/secure-email.png" },
    { title: "Implementation of National Data Highway (NDH)", logo: "/logos/meity-projects/nic.png" },
    { title: "National Single Sign-On Platform for Government of India", logo: "/logos/meity-projects/default.svg" },
    { title: "CollabFiles design, development, rollout, management and maintenance of collaborative suite", logo: "/logos/meity-projects/default.svg" },
    { title: "Enhancement and management of websites of ministries/departments", logo: "/logos/meity-projects/default.svg" },
    { title: "India Portal 2.0", logo: "/logos/meity-projects/india-portal.png" },
    { title: "Pragati VC 2.0", logo: "/logos/meity-projects/pragati.png" },
    { title: "Gov.in Secure Intranet Portal", logo: "/logos/meity-projects/india-portal.png" },
    { title: "Gov Drive in Storage as Service for Government of India by National Informatics Centre (NIC)", logo: "/logos/meity-projects/nic.png" },
    { title: "Establishment of National Data Centre in North-East Region (NDC-NER)", logo: "/logos/meity-projects/nic.png" },
    { title: "National Scholarship Portal (Phase-II)", logo: "/logos/meity-projects/nsp-logo.svg" },
    { title: "Website Facilitation and Management Platform (WFMP) to harmonize government's digital footprint with whole-of-government approach", logo: "/logos/meity-projects/default.svg" },
    { title: "Hosting of e-Office application for 10 States/UTs (8 NE States, UT of J&K and UT of Ladakh)", logo: "/logos/meity-projects/e-office.png" },
    { title: "Operation and maintenance of Grievance Appellate Committee Web Portal", logo: "/logos/meity-projects/gac.jpg" },
    { title: "National Knowledge Network", logo: "/logos/meity-projects/nkn.png" },
    { title: "Design and development of a unified blockchain framework for offering national blockchain services", logo: "/logos/meity-projects/blockchain.jpg" },
    { title: "Website development of Ministry of Electronics & Information Technology", logo: "/logos/meity-projects/meity.png" },
  ] as const;

  return (
    <main className="pb-12">
      <PageTitle title="MeitY Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">MeitY Projects</h2>
          <p className="mt-2 text-sm text-gray-600">
            Key digital governance and national platform initiatives delivered in collaboration with MeitY.
          </p>

          <div className="mt-6 rounded-xl border border-blue-100 bg-[#F8FAFF] p-4">
            <p className="text-sm font-semibold text-[#0A2A72]">Project Count: {projects.length}</p>
            <p className="mt-1 text-xs text-gray-600">Listed as per provided project sheet in implementation-focused format.</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-wide text-[#0052CC]">Project {index + 1}</p>
                <div className="mt-2 flex h-12 w-28 items-center rounded-md border border-gray-100 bg-white p-2">
                  <Image src={project.logo} alt={`${project.title} logo`} width={112} height={40} className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-3 text-base font-semibold leading-7 text-[#0F172A]">{project.title}</h3>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm">
          Official reference:{" "}
          <Link
            href="https://nicsi.nic.in/projects"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#003A8C]"
          >
            NICSI Projects
          </Link>
        </p>
      </section>
    </main>
  );
}
