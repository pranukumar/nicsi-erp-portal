import PolicyPageLayout from "@/components/policy/PolicyPageLayout";

export default function WebsitePolicyPage() {
  return (
    <PolicyPageLayout title="Website Policy">
      <h2 className="text-xl font-bold text-[#0F172A]">Website Policy</h2>
      <p className="mt-3 text-sm leading-7">
        NICSI website policy covers governance principles for quality, security, legal compliance, accessibility, and public-information
        delivery through the portal.
      </p>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Core Policy Areas</h3>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>Terms and Conditions</li>
        <li>Copyright Policy</li>
        <li>Privacy Policy</li>
        <li>Hyperlinking Policy</li>
        <li>Accessibility Statement</li>
        <li>Content Review and Lifecycle</li>
      </ul>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Content Review and Lifecycle</h3>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>Content is published from authorized inputs and updated through defined review flow.</li>
        <li>Pages are periodically reviewed for relevance, broken links, and document validity.</li>
        <li>Obsolete or superseded information is corrected, replaced, or archived as per process.</li>
      </ul>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">User Support</h3>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>Users may refer to Help, Sitemap, and policy pages for navigation and compliance details.</li>
        <li>Website issues can be reported through official NICSI contact channels.</li>
      </ul>
    </PolicyPageLayout>
  );
}
