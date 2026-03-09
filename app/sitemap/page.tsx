import Link from "next/link";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import { filterLinksForStaticAudit } from "@/lib/staticAudit";

const links: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
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
  { label: "NICSI Centres of Excellence", href: "/centre-of-excellence" },
  { label: "Empanelled Vendors", href: "/empanelled-vendors" },
  { label: "Empanelled Vendors (Classic)", href: "/empanelled-vendors-classic" },
  { label: "Tenders", href: "/nicsi-gem-bids" },
  { label: "NICSI CPP Tenders", href: "/active-tenders" },
  { label: "NICSI GeM Bids", href: "/nicsi-gem-bids" },
  { label: "NICSI SOP", href: "/nicsi-sop" },
  { label: "Download Form", href: "/forms" },
  { label: "Download Annual Report", href: "/reports" },
  { label: "Press Releases", href: "/press-releases" },
  { label: "News & Updates", href: "/news-updates" },
  { label: "Awards & Recognition", href: "/awards-recognition" },
  { label: "Events", href: "/events" },
  { label: "Media Gallery", href: "/media-gallery" },
  { label: "Archive", href: "/archive" },
  { label: "RTI", href: "/rti" },
  { label: "GST Particulars", href: "/gst-particulars" },
  { label: "CSR", href: "/csr" },
  { label: "Vacancies", href: "/vacancies" },
  { label: "Internship", href: "/internship" },
  { label: "Internship Application", href: "/internship/apply" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Copyright Policy", href: "/copyright-policy" },
  { label: "Help", href: "/help" },
  { label: "Website Policy", href: "/website-policy" },
  { label: "Hyperlinking Policy", href: "/hyperlinking-policy" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
  { label: "FAQ", href: "/faq" },
];

export default function SitemapPage() {
  const visibleLinks = filterLinksForStaticAudit(links);

  return (
    <PolicyPageLayout title="Sitemap">
      <h2>Sitemap</h2>
      <p>Quick access to all major NICSI pages and public information sections.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleLinks.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="rounded-xl border border-blue-100 bg-gradient-to-b from-[#FCFDFF] to-white px-4 py-3 text-sm font-medium text-[#0F172A] shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-[#003A8C] hover:shadow-md"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </PolicyPageLayout>
  );
}
