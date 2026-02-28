import PolicyPageLayout from "@/components/policy/PolicyPageLayout";

export default function AccessibilityStatementPage() {
  return (
    <PolicyPageLayout title="Accessibility Statement">
      <h2 className="text-xl font-bold text-[#0F172A]">Accessibility Statement</h2>
      <p className="mt-3 text-sm leading-7">
        NICSI aims to make website content accessible to all users, including persons with disabilities, by following relevant
        accessibility standards and good usability practices.
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-6">
        <li>Content is structured for readability and navigability across desktop and mobile devices.</li>
        <li>Supportive design practices are used for keyboard navigation, focus visibility, and text clarity.</li>
        <li>Efforts are made to maintain compatibility with assistive technologies and modern browsers.</li>
        <li>If any page or document is inaccessible, users may report the issue through official support contact.</li>
      </ul>
    </PolicyPageLayout>
  );
}
