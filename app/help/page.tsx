import PolicyPageLayout from "@/components/policy/PolicyPageLayout";

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

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Screen reader and speech support</h3>
      <p className="mt-2 text-sm leading-6">
        NICSI website supports accessibility features including screen-reader access and speech-recognition support for inclusive usage.
      </p>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Using search and sitemap</h3>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>Basic Search can be used to find pages using word/phrase in title or URL.</li>
        <li>Sitemap provides an overall view of website sections for quick navigation.</li>
      </ul>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">RSS Feed</h3>
      <p className="mt-2 text-sm leading-6">
        RSS feed is available for users who want to receive regularly updated content through feed readers/news aggregators.
      </p>
      <ul className="mt-2 space-y-1 text-sm leading-6">
        <li>Users may subscribe using feed-reader software or web-based RSS readers.</li>
        <li>Feed URL: /rss.xml</li>
        <li>Feed reader instructions vary by platform and provider.</li>
      </ul>

      <h3 className="mt-5 text-base font-bold text-[#0F172A]">Feedback / Suggestions</h3>
      <p className="mt-2 text-sm leading-6">
        Users may share comments and improvement suggestions through official NICSI contact/feedback channels.
      </p>
    </PolicyPageLayout>
  );
}
