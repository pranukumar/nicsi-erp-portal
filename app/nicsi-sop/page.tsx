import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function Page() {
  return (
    <main className="pb-16 bg-gray-50">
      <PageTitle title="Standard Operating Procedure (SOP)" />

      <section className="mx-auto max-w-5xl px-6 py-10 bg-white shadow-sm rounded-xl text-gray-800 leading-relaxed">

        {/* Reference Info */}
        <div className="text-sm text-gray-600 mb-6 border-b pb-4">
          <p><strong>Ref No.:</strong> 120th BM/NICSI-CS/26112021</p>
          <p><strong>Date:</strong> 24.12.2021</p>
        </div>

        {/* Background */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#003A8C] mb-3">
            1. Background
          </h2>
          <p>
            The Board of Directors in its 120th meeting held on 26th November 2021
            approved the following process for assignment of work to empanelled
            Consulting Agencies.
          </p>
        </div>

        {/* SOP Process */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#003A8C] mb-4">
            2. Approved SOP Process
          </h2>

          <ol className="list-decimal pl-6 space-y-5">

            <li>
              <strong>Empanelment Procedure:</strong>
              <p className="mt-2">
                NICSI shall follow an open and transparent procedure for
                empanelment of consulting agencies as per provisions of the
                General Financial Rules (GFRs).
              </p>
            </li>

            <li>
              <strong>Information to User Department:</strong>
              <p className="mt-2">
                Upon receipt of request from a User Department, NICSI shall
                inform the department about empanelled consulting agencies
                and the GFR compliant procedure followed.
              </p>
            </li>

            <li>
              <strong>Specific Agency Requested:</strong>
              <p className="mt-2">
                If the User Department clearly specifies a particular agency
                in writing, NICSI may assign the work to that agency.
                Responsibility for adherence to relevant financial and
                procurement rules shall rest with the concerned User Department.
              </p>
            </li>

            <li>
              <strong>No Specific Agency Indicated:</strong>
              <p className="mt-2">
                Work shall be awarded based on recommendations of a Committee
                constituted by the User Department. The Committee shall be
                chaired by a representative of the User Department. If chaired
                by any NIC/NICSI officer, it must include a representative from
                the User Department.
              </p>
            </li>

            <li>
              <strong>Presentation & Evaluation:</strong>
              <p className="mt-2">
                All empanelled consulting agencies shall be invited to present
                their proposals. Evaluation shall be objective and the most
                suitable agency may be assigned the work by NICSI based on
                Committee recommendation.
              </p>
            </li>

            <li>
              <strong>User Department Participation:</strong>
              <p className="mt-2">
                Full participation and involvement of the User Department
                is mandatory in the agency selection process.
              </p>
            </li>

          </ol>
        </div>

        {/* Strategic Alliances */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#003A8C] mb-3">
            3. Strategic Alliances (96th Board Meeting – 18 March 2016)
          </h2>
          <p>
            If a User Department expresses inability to select one out of
            multiple channel partners (in addition to mandatory PAC provision),
            the Channel Partner(s) shall be selected by OEM(s) for each transaction.
          </p>
        </div>

        {/* Scope */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#003A8C] mb-4">
            4. Scope of Applicability
          </h2>

          <ul className="grid md:grid-cols-2 gap-y-2 list-disc pl-6">
            <li>ICT Solutions</li>
            <li>Procurement of Hardware & Software</li>
            <li>Networking & Integration</li>
            <li>Consulting Services</li>
            <li>Web Services & Training</li>
            <li>Technical Manpower Support Services</li>
            <li>Roll-out & Deployment Services</li>
            <li>Data Centre Services</li>
            <li>Turnkey Projects</li>
          </ul>
        </div>

        {/* Approval */}
        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold text-[#003A8C] mb-3">
            5. Approval
          </h2>
          <p>
            This SOP is issued with the approval of the Competent Authority.
          </p>

          <div className="mt-4 font-medium">
            Company Secretary <br />
            National Informatics Centre Services Inc. (NICSI)
          </div>
        </div>

        {/* Official Link */}
        <div className="mt-10 text-sm text-gray-600 border-t pt-4">
          Official Website:{" "}
          <Link
            href="https://nicsi.nic.in/"
            target="_blank"
            className="font-semibold text-[#003A8C] hover:underline"
          >
            https://nicsi.nic.in/
          </Link>
        </div>

      </section>
    </main>
  );
}