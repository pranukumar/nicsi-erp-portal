type DocumentGuidanceProps = {
  reviewLabel?: string;
  contactEmail?: string;
};

export default function DocumentGuidance({
  reviewLabel = "Documents are provided in PDF format with file-size labels for easier access planning.",
  contactEmail = "info-nicsi@nic.in",
}: DocumentGuidanceProps) {
  return (
    <div className="rounded-xl border border-blue-100 bg-[#F8FBFF] px-4 py-3 text-sm text-[#334155]">
      <p className="font-semibold text-[#0F172A]">Document Access Guidance</p>
      <ul className="mt-2 space-y-1.5 leading-6">
        <li>Download labels include file format and size where available, in line with public-document access good practice.</li>
        <li>{reviewLabel}</li>
        <li>
          If a file does not open or appears inaccessible, request support at{" "}
          <a href={`mailto:${contactEmail}`} className="font-semibold text-[#003A8C] underline underline-offset-2">
            {contactEmail}
          </a>.
        </li>
      </ul>
    </div>
  );
}
