import Image from "next/image";
import ExternalLaunchButton from "@/components/common/ExternalLaunchButton";

const importantLinks = [
  { title: "Gov.in", href: "https://www.india.gov.in/", logo: "/logos/india_gov.in_logo.png", width: 174, height: 53 },
  { title: "MeitY", href: "https://www.meity.gov.in/", logo: "/logos/meity_logo.png", width: 174, height: 53 },
  { title: "Digital India", href: "https://www.digitalindia.gov.in/", logo: "/logos/digital-india.png", width: 589, height: 287 },
  { title: "NKN", href: "https://nkn.gov.in/", logo: "/logos/national-platforms/nkn.png", width: 2693, height: 1434 },
  { title: "NIC", href: "https://www.nic.in/", logo: "/logos/NIC_Logo.png", width: 174, height: 53 },
  { title: "MyGov", href: "https://www.mygov.in/", logo: "/logos/national-projects/mygov.png", width: 308, height: 80 },
  { title: "Swachh Bharat", href: "https://swachhbharatmission.gov.in/", logo: "/logos/swachh-bharat.png", width: 340, height: 148 },
] as const;

const scrollingImportantLinks = [...importantLinks, ...importantLinks];

export default function ImportantLinksBar() {
  return (
    <section className="mt-16 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Other Important Links</p>
        <div className="important-links-marquee mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-[#EEF2F9] p-4">
          <div className="important-links-track flex w-max gap-4">
            {scrollingImportantLinks.map((item, index) => (
              <ExternalLaunchButton
                key={`${item.title}-${index}`}
                url={item.href}
                className="flex h-24 w-52 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
                title={item.title}
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="h-14 w-auto max-w-[170px] object-contain"
                />
              </ExternalLaunchButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
