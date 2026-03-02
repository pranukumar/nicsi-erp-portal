import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

const links: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About NICSI", href: "/about" },
  { label: "Organization Chart", href: "/organization-chart" },
  { label: "Personnel & Work Allocation", href: "/personnel-work-allocation" },
  { label: "Board of Directors", href: "/board-of-directors" },
  { label: "List of Chairpersons", href: "/list-of-chairpersons" },
  { label: "List of Managing Directors", href: "/list-of-managing-directors" },
  { label: "National Projects", href: "/national-projects" },
  { label: "State Projects", href: "/state-projects" },
  { label: "MeitY Projects", href: "/meity-projects" },
  { label: "NICSI Products", href: "/pbd-projects" },
  { label: "International Projects", href: "/international-projects" },
  { label: "NGC Cloud", href: "/ngc-cloud" },
  { label: "NICSI Cloud Services", href: "/nicsi-cloud" },
  { label: "NICSI Centre of Excellence", href: "/centre-of-excellence" },
  { label: "Empanelled Vendors", href: "/empanelled-vendors" },
  { label: "Empanelled Vendors (Classic)", href: "/empanelled-vendors-classic" },
  { label: "Tenders", href: "/tenders" },
  { label: "NICSI CPP Tenders", href: "/active-tenders" },
  { label: "NICSI GeM Bids", href: "/nicsi-gem-bids" },
  { label: "NICSI SOP", href: "/nicsi-sop" },
  { label: "Forms", href: "/forms" },
  { label: "Reports", href: "/reports" },
  { label: "Press Releases", href: "/press-releases" },
  { label: "News & Updates", href: "/news-updates" },
  { label: "Awards & Recognition", href: "/awards-recognition" },
  { label: "Events", href: "/events" },
  { label: "Photo Gallery", href: "/photo-gallery" },
  { label: "Photos", href: "/photos" },
  { label: "Video Gallery", href: "/video-gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Archive", href: "/archive" },
  { label: "RTI", href: "/rti" },
  { label: "GST Particulars", href: "/gst-particulars" },
  { label: "CSR", href: "/csr" },
  { label: "Vacancies", href: "/vacancies" },
  { label: "Capacity Building Training", href: "/capacity-building-training" },
  { label: "Internship", href: "/internship" },
  { label: "Internship Application", href: "/internship/apply" },
  { label: "Login", href: "/login" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Copyright Policy", href: "/copyright-policy" },
  { label: "Help", href: "/help" },
  { label: "Website Policy", href: "/website-policy" },
  { label: "Hyperlinking Policy", href: "/hyperlinking-policy" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
];

export default function SitemapPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Sitemap" />
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Sitemap</h2>
          <div className="mt-3 h-[2px] w-20 bg-[#003A8C]" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-blue-100 bg-[#FCFDFF] px-4 py-3 text-sm font-medium text-[#0F172A] hover:border-blue-300 hover:text-[#003A8C]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
