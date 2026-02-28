import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import Link from "next/link";

export default function HelpWebsitePolicyPage() {
  return (
    <PolicyPageLayout title="Help and Website Policy">
      <h2 className="text-xl font-bold text-[#0F172A]">Help and Website Policy</h2>
      <p className="mt-3 text-sm leading-7">
        This section has been split into two dedicated pages for clarity and better navigation.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Link href="/help" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 text-sm font-semibold text-[#0F172A] hover:border-blue-300">
          Open Help Page
        </Link>
        <Link
          href="/website-policy"
          className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 text-sm font-semibold text-[#0F172A] hover:border-blue-300"
        >
          Open Website Policy Page
        </Link>
      </div>
    </PolicyPageLayout>
  );
}
