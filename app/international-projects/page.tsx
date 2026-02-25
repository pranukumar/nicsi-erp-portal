"use client";

import { useEffect, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, projects.length]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);

  return (
    <main className="pb-12">
      <PageTitle title="International Projects" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">International Projects</h2>

          <div
            className="mt-5 overflow-hidden rounded-xl border border-blue-100 bg-[#FCFDFF] shadow-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <article key={`${project.country}-card`} className="w-full shrink-0">
                  <div className="grid md:grid-cols-[280px_1fr]">
                    <div className="flex h-56 items-center justify-center border-b border-blue-100 bg-white p-5 md:h-full md:border-b-0 md:border-r">
                      <Image
                        src={project.image}
                        alt={`${project.country} flag`}
                        width={420}
                        height={280}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Project {index + 1}</p>
                      <h3 className="mt-1 text-2xl font-bold text-[#0F172A]">{project.country}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-700">{project.details}</p>
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
                {projects.map((project, index) => (
                  <button
                    key={`${project.country}-dot`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${project.country}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeIndex === index ? "bg-[#003A8C]" : "bg-blue-200 hover:bg-blue-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
