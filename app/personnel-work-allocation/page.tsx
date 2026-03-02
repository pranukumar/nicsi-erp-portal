import PersonnelWorkAllocationTabs from "@/components/personnel/PersonnelWorkAllocationTabs";
import PageTitle from "../../components/layout/PageTitle";
import { getHeadquarterPersonnelList } from "@/services/headquarterPersonnel";
import { getStatePersonnelList } from "@/services/statePersonnel";

const ALL_ROWS_LIMIT = 500;

export default async function PersonnelWorkAllocationPage() {
  const [headquarterResult, stateResult] = await Promise.all([
    getHeadquarterPersonnelList({
      page: 1,
      limit: ALL_ROWS_LIMIT,
      query: "",
    }),
    getStatePersonnelList({
      page: 1,
      limit: ALL_ROWS_LIMIT,
      query: "",
    }),
  ]);

  const managingDirector = headquarterResult.managingDirector;

  return (
    <main className="pb-12">
      <PageTitle title="Personnel & Work Allocation" />

      <section className="mx-auto max-w-6xl space-y-6 px-6 py-8 text-gray-700">
        {managingDirector ? (
          <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-4 shadow-sm md:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F4BB8]">Managing Director</p>
            <h3 className="mt-1 text-lg font-bold text-[#0A2A72]">{managingDirector.name}</h3>
            <p className="text-sm text-gray-700">{managingDirector.designation}</p>
            <div className="mt-4 grid gap-2 text-sm text-gray-800 sm:grid-cols-2">
              <p className="rounded-md border border-blue-100 bg-white px-3 py-2">
                <span className="font-semibold text-[#0F172A]">Phone:</span> {managingDirector.phoneNumber}
              </p>
              <p className="rounded-md border border-blue-100 bg-white px-3 py-2">
                <span className="font-semibold text-[#0F172A]">Email:</span> {managingDirector.email}
              </p>
            </div>
          </div>
        ) : null}

        <PersonnelWorkAllocationTabs
          headquarterRows={headquarterResult.rows}
          headquarterTotal={headquarterResult.total}
          managingDirector={headquarterResult.managingDirector}
          stateRows={stateResult.rows}
          stateTotal={stateResult.total}
        />
      </section>
    </main>
  );
}
