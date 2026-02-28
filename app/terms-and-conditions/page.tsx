import PolicyPageLayout from "@/components/policy/PolicyPageLayout";

export default function TermsAndConditionsPage() {
  return (
    <PolicyPageLayout title="Terms & Conditions">
      <h2 className="text-xl font-bold text-[#0F172A]">Terms & Conditions</h2>
      <p className="mt-3 text-sm leading-7">
        This portal is designed and maintained for information sharing and public access to NICSI-related content. By using this website,
        users agree to comply with applicable terms, laws, and official usage conditions.
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-6">
        <li>Information is provided on an as-is basis for general guidance and reference purposes.</li>
        <li>NICSI may update, modify, or remove content and services without prior notice.</li>
        <li>Users are responsible for ensuring that downloaded material is used in compliance with applicable laws.</li>
        <li>Unauthorized attempts to alter website content, security settings, or services are prohibited.</li>
        <li>Disputes, if any, are subject to applicable Indian laws and jurisdiction.</li>
      </ul>
    </PolicyPageLayout>
  );
}
