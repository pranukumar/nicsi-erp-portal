import PolicyPageLayout from "@/components/policy/PolicyPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout title="Privacy Policy">
      <h2 className="text-xl font-bold text-[#0F172A]">Privacy Policy</h2>
      <p className="mt-3 text-sm leading-7">
        NICSI is committed to protecting user privacy. This website generally does not collect personal information unless it is
        voluntarily provided through forms, communication channels, or service workflows.
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-6">
        <li>Non-personal technical information may be collected for security, analytics, and service improvement.</li>
        <li>Personal details submitted by users are handled only for official processing and communication purposes.</li>
        <li>Information is not shared except as required by law, policy, or authorized government process.</li>
        <li>Reasonable safeguards are applied to protect data integrity and confidentiality.</li>
        <li>Users should avoid sharing sensitive information unless explicitly required by official process.</li>
      </ul>
    </PolicyPageLayout>
  );
}
