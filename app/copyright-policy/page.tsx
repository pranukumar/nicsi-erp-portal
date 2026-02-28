import PolicyPageLayout from "@/components/policy/PolicyPageLayout";

export default function CopyrightPolicyPage() {
  return (
    <PolicyPageLayout title="Copyright Policy">
      <h2 className="text-xl font-bold text-[#0F172A]">Copyright Policy</h2>
      <p className="mt-3 text-sm leading-7">
        Content published on this website is owned by NICSI unless otherwise stated. Reproduction and reuse are subject to policy terms
        and applicable legal requirements.
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-6">
        <li>Material may be reused for non-commercial and informational purposes with proper attribution to NICSI.</li>
        <li>Content should not be altered in a way that misrepresents official meaning or intent.</li>
        <li>Logos, emblems, and protected identifiers require prior permission for reuse.</li>
        <li>Third-party content, where present, remains subject to original rights and licensing terms.</li>
        <li>For commercial or special reuse requests, prior written approval should be obtained.</li>
      </ul>
    </PolicyPageLayout>
  );
}
