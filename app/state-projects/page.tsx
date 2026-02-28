import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import IndiaStateUtTileMap, { type StateCount } from "@/components/state-projects/IndiaStateUtTileMap";
import { getStateProjectCounts } from "@/services/stateProjects";

const stateUtCounts: StateCount[] = [
  { name: "Andhra Pradesh", code: "AP", type: "State", region: "South", projectCount: 0 },
  { name: "Arunachal Pradesh", code: "AR", type: "State", region: "North-East", projectCount: 0 },
  { name: "Assam", code: "AS", type: "State", region: "North-East", projectCount: 1 },
  { name: "Bihar", code: "BR", type: "State", region: "East", projectCount: 0 },
  { name: "Chhattisgarh", code: "CG", type: "State", region: "Central", projectCount: 0 },
  { name: "Goa", code: "GA", type: "State", region: "West", projectCount: 0 },
  { name: "Gujarat", code: "GJ", type: "State", region: "West", projectCount: 0 },
  { name: "Haryana", code: "HR", type: "State", region: "North", projectCount: 0 },
  { name: "Himachal Pradesh", code: "HP", type: "State", region: "North", projectCount: 0 },
  { name: "Jharkhand", code: "JH", type: "State", region: "East", projectCount: 0 },
  { name: "Karnataka", code: "KA", type: "State", region: "South", projectCount: 1 },
  { name: "Kerala", code: "KL", type: "State", region: "South", projectCount: 0 },
  { name: "Madhya Pradesh", code: "MP", type: "State", region: "Central", projectCount: 0 },
  { name: "Maharashtra", code: "MH", type: "State", region: "West", projectCount: 1 },
  { name: "Manipur", code: "MN", type: "State", region: "North-East", projectCount: 0 },
  { name: "Meghalaya", code: "ML", type: "State", region: "North-East", projectCount: 0 },
  { name: "Mizoram", code: "MZ", type: "State", region: "North-East", projectCount: 0 },
  { name: "Nagaland", code: "NL", type: "State", region: "North-East", projectCount: 0 },
  { name: "Odisha", code: "OD", type: "State", region: "East", projectCount: 0 },
  { name: "Punjab", code: "PB", type: "State", region: "North", projectCount: 0 },
  { name: "Rajasthan", code: "RJ", type: "State", region: "North", projectCount: 1 },
  { name: "Sikkim", code: "SK", type: "State", region: "North-East", projectCount: 0 },
  { name: "Tamil Nadu", code: "TN", type: "State", region: "South", projectCount: 1 },
  { name: "Telangana", code: "TG", type: "State", region: "South", projectCount: 0 },
  { name: "Tripura", code: "TR", type: "State", region: "North-East", projectCount: 0 },
  { name: "Uttar Pradesh", code: "UP", type: "State", region: "North", projectCount: 1 },
  { name: "Uttarakhand", code: "UK", type: "State", region: "North", projectCount: 0 },
  { name: "West Bengal", code: "WB", type: "State", region: "East", projectCount: 1 },
  { name: "Andaman and Nicobar Islands", code: "AN", type: "UT", region: "UT", projectCount: 0 },
  { name: "Chandigarh", code: "CH", type: "UT", region: "UT", projectCount: 0 },
  { name: "Dadra and Nagar Haveli and Daman and Diu", code: "DN", type: "UT", region: "UT", projectCount: 0 },
  { name: "Delhi", code: "DL", type: "UT", region: "UT", projectCount: 1 },
  { name: "Jammu and Kashmir", code: "JK", type: "UT", region: "UT", projectCount: 1 },
  { name: "Ladakh", code: "LA", type: "UT", region: "UT", projectCount: 0 },
  { name: "Lakshadweep", code: "LD", type: "UT", region: "UT", projectCount: 0 },
  { name: "Puducherry", code: "PY", type: "UT", region: "UT", projectCount: 1 },
];

export default async function Page() {
  const counts = await getStateProjectCounts();
  const populatedCounts = stateUtCounts.map((item) => ({
    ...item,
    projectCount: item.projectCount + (counts[item.code] ?? 0),
  }));

  const totalProjects = populatedCounts.reduce((sum, item) => sum + item.projectCount, 0);
  const states = populatedCounts.filter((item) => item.type === "State");
  const uts = populatedCounts.filter((item) => item.type === "UT");
  const activeStates = states.filter((item) => item.projectCount > 0).length;
  const activeUts = uts.filter((item) => item.projectCount > 0).length;

  return (
    <main className="pb-12">
      <PageTitle title="State Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-[#0F172A]">State & UT Project Coverage</h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            India map view is presented below in a state/UT tile format with project count per administrative unit.
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-700">
            Current validated count: <span className="font-semibold">{totalProjects}</span>. Counts will auto-update after state-wise entries are onboarded.
          </p>

          <div className="mt-6 rounded-xl border border-blue-100 bg-gradient-to-b from-[#F7FAFF] to-white p-4 md:p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#0F172A]">India Map (Interactive State/UT View)</p>
              <p className="text-xs text-gray-600">Click a state/UT tile to view count</p>
            </div>
            <div className="mt-4">
              <IndiaStateUtTileMap items={populatedCounts} />
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Total States</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">{states.length}</p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Total UTs</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">{uts.length}</p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Active States</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">{activeStates}</p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Active UTs</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">{activeUts}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/national-projects" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm hover:border-blue-300">
              <p className="text-base font-semibold text-[#0F172A]">National Projects</p>
              <p className="mt-1 text-sm text-gray-600">Flagship digital initiatives with national rollout.</p>
            </Link>

            <Link href="/meity-projects" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm hover:border-blue-300">
              <p className="text-base font-semibold text-[#0F172A]">MeitY Projects</p>
              <p className="mt-1 text-sm text-gray-600">Programs aligned to Ministry of Electronics and IT priorities.</p>
            </Link>

            <Link href="/pbd-projects" className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm hover:border-blue-300">
              <p className="text-base font-semibold text-[#0F172A]">PBD Projects</p>
              <p className="mt-1 text-sm text-gray-600">Product and business delivery projects with implementation focus.</p>
            </Link>

            <Link
              href="https://nicsi.nic.in/projects"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm hover:border-blue-300"
            >
              <p className="text-base font-semibold text-[#0F172A]">Official Reference</p>
              <p className="mt-1 text-sm text-gray-600">View project information published on the official NICSI site.</p>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
