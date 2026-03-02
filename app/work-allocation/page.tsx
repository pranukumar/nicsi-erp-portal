import WorkAllocationTable from "@/components/work-allocation/WorkAllocationTable";
import PageTitle from "../../components/layout/PageTitle";

export default function WorkAllocationPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Work Allocation" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <WorkAllocationTable />
      </section>
    </main>
  );
}
