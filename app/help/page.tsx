import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import Link from "next/link";

export default function HelpPage() {
  return (
    <PolicyPageLayout title="Help">
      <h2 className="text-xl font-bold text-[#0F172A]">Help</h2>
      <p className="mt-3 text-sm leading-7">
        This page provides guidance for viewing different file formats, using accessibility support, and navigating NICSI web content.
      </p>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Viewing information for various file formats</h3>
      <p className="mt-2 text-sm leading-6">
        Some content is available in non-HTML formats. To view such files, users may need compatible software.
      </p>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>PDF files: PDF reader software (for example, Adobe Acrobat Reader)</li>
        <li>Word files: MS Word / compatible office viewers</li>
        <li>Audio and video files: Compatible media player software</li>
      </ul>
      <p className="mt-2 text-sm leading-6">
        Wherever practical, downloadable records on this portal include file format and size labels before download.
      </p>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Screen reader and speech support</h3>
      <p className="mt-2 text-sm leading-6">
        NICSI website supports accessibility features including screen-reader access and speech-recognition support for inclusive usage.
      </p>
      <p className="mt-2 text-sm leading-6">
        Keyboard users can use the skip link at the top of the page to move directly to the main content area.
      </p>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Using search and sitemap</h3>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>Basic Search can be used to find pages using word/phrase in title or URL.</li>
        <li>Sitemap provides an overall view of website sections for quick navigation.</li>
      </ul>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">RSS Feed</h3>
      <p className="mt-2 text-sm leading-6">
        A static RSS XML feed is available for users who want a machine-readable summary of key portal updates through feed readers or aggregators.
      </p>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>Users may subscribe using feed-reader software or web-based RSS readers.</li>
        <li>Feed URL: /rss.xml</li>
        <li>Feed reader instructions vary by platform and provider.</li>
      </ul>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Feedback / Suggestions</h3>
      <p className="mt-2 text-sm leading-6">
        Users may share comments, accessibility issues, and document-viewing problems through official NICSI contact channels.
      </p>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>
          E-mail:{" "}
          <a href="mailto:info-nicsi@nic.in" className="font-semibold text-[#003A8C] underline underline-offset-2">
            info-nicsi@nic.in
          </a>
        </li>
        <li>
          Contact page:{" "}
          <Link href="/contact" className="font-semibold text-[#003A8C] underline underline-offset-2">
            Open Contact Us
          </Link>
        </li>
        <li>
          Accessibility information:{" "}
          <Link href="/accessibility-statement" className="font-semibold text-[#003A8C] underline underline-offset-2">
            Open Accessibility Statement
          </Link>
        </li>
      </ul>
    </PolicyPageLayout>
  );
}
