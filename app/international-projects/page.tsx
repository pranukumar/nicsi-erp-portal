import PageTitle from "../../components/layout/PageTitle";
import Image from "next/image";

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

  return (
    <main className="pb-12">
      <PageTitle title="International Projects" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">International Projects</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={`${project.country}-card`} className="overflow-hidden rounded-xl border border-blue-100 bg-[#FCFDFF] shadow-sm">
                <div className="flex h-32 w-full items-center justify-center border-b border-blue-100 bg-white p-3">
                  <Image
                    src={project.image}
                    alt={`${project.country} flag`}
                    width={320}
                    height={220}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Project {index + 1}</p>
                  <h3 className="text-lg font-bold text-[#0F172A]">{project.country}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{project.details}</p>
                </div>
              </article>
            ))}
          </div> 
        </div>
         
      </section>
    </main>
  );
}
