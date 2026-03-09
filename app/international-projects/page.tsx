import PageTitle from "../../components/layout/PageTitle";
import Image from "next/image";
import { withSiteBasePath } from "@/lib/staticAudit";

export default function Page() {
  const projects = [
    {
      country: "Mauritius",
      image: "/logos/countries/mauritius.png",
      details:
        "ePrisons Software Application has marched into international arena with its adoption by Mauritius Prison Service in two phases.",
    },
    {
      country: "Bhutan",
      image: "/logos/countries/bhutan.png",
      details: "Implementation of 5 NIC developed applications for Royal Govt. of Bhutan.",
    },
    {
      country: "Mongolia",
      image: "/logos/countries/mongolia.png",
      details:
        "Upgradation and modernization of Atal Bihari Vajpayee Centre for Excellence in Information and Communication Technology (ABVCE-ICT) at Ulaanbaatar, Mongolia. The project included setting up of CICs in Mongolia.",
    },
    {
      country: "Bangladesh",
      image: "/logos/countries/bangladesh.png",
      details:
        "Information system infrastructure setup at Centre for Integrated Rural Development for Asia and Pacific, Bangladesh.",
    },
    {
      country: "Sri Lanka",
      image: "/logos/countries/sri-lanka.png",
      details:
        "eOffice is deployed at Ministry of Telecommunication and Digital Infrastructure, Govt. of Sri Lanka.",
    },
  ] as const;
  const normalizedProjects = projects.map((project) => ({
    ...project,
    image: withSiteBasePath(project.image),
  }));

  return (
    <main className="pb-12">
      <PageTitle title="International Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-[#0F172A]">International Projects</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            NICSI supports selected international digital governance initiatives through trusted platforms and implementation support.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {normalizedProjects.map((project) => (
              <article
                key={`${project.country}-card`}
                className="rounded-xl border border-blue-100 bg-gradient-to-b from-white to-[#F8FBFF] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-[#0F172A]">{project.country}</h3>

                <div className="mt-4 flex h-40 items-center justify-center rounded-lg border border-blue-100 bg-white p-4">
                  <Image
                    src={project.image}
                    alt={`${project.country} flag`}
                    width={420}
                    height={280}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-700">{project.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
