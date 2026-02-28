import PolicyPageLayout from "@/components/policy/PolicyPageLayout";

export default function HyperlinkingPolicyPage() {
  return (
    <PolicyPageLayout title="Hyperlinking Policy">
      <h2 className="text-xl font-bold text-[#0F172A]">Hyperlinking Policy</h2>
      <p className="mt-3 text-sm leading-7">
        This website may contain links to external websites for public convenience. NICSI is not responsible for the content,
        accuracy, or reliability of external websites linked from this portal.
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-6">
        <li>External links are provided as references and do not imply endorsement of linked entities.</li>
        <li>NICSI may review and update hyperlink listings as per policy and operational requirements.</li>
        <li>Linking to this website is generally permitted unless used in misleading, unlawful, or unauthorized contexts.</li>
        <li>Framing of NICSI pages within other sites without permission is not permitted.</li>
      </ul>
    </PolicyPageLayout>
  );
}
