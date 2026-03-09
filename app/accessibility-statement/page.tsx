import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import Link from "next/link";

export default function AccessibilityStatementPage() {
  return (
    <PolicyPageLayout title="Accessibility Statement">
      <h2 className="text-xl font-bold text-[#0F172A]">Accessibility Statement</h2>
      <p className="mt-3 text-sm leading-7">
        NICSI aims to make website content accessible to all users, including persons with disabilities, by aligning the portal with
        GIGW-oriented accessibility expectations and widely adopted WCAG 2.1 Level AA good practices.
      </p>
      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Accessibility features available on this portal</h3>
      <ul className="mt-4 space-y-2 text-sm leading-6">
        <li>Skip-to-content navigation is available for keyboard and assistive-technology users.</li>
        <li>Visible focus indicators, accessible tables, and structured headings are used across key public-information pages.</li>
        <li>Accessibility tools support text resizing, high contrast, grayscale mode, reduced motion, readable fonts, and link highlighting.</li>
        <li>Public documents are progressively being published with file format and size labels for easier access planning.</li>
      </ul>
      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Support and feedback</h3>
      <p className="mt-2 text-sm leading-7">
        If any page, downloadable document, or interactive element remains inaccessible, report the issue with the page URL and device
        details to{" "}
        <a href="mailto:info-nicsi@nic.in" className="font-semibold text-[#003A8C] underline underline-offset-2">
          info-nicsi@nic.in
        </a>{" "}
        or use the official <Link href="/contact" className="font-semibold text-[#003A8C] underline underline-offset-2">Contact Us</Link>{" "}
        page.
      </p>
      <p className="mt-2 text-sm leading-7">
        Users may also refer to the <Link href="/help" className="font-semibold text-[#003A8C] underline underline-offset-2">Help</Link>{" "}
        page for file-format support and viewing guidance.
      </p>
      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Review baseline</h3>
      <ul className="mt-2 space-y-2 text-sm leading-6">
        <li>Accessibility controls and policy information are reviewed along with periodic content and broken-link checks.</li>
        <li>The current portal baseline is reviewed against public-sector website quality, accessibility, and governance expectations.</li>
      </ul>
    </PolicyPageLayout>
  );
}
