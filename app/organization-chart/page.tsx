import Image from "next/image";
import PageTitle from "../../components/layout/PageTitle";

type Person = {
  role: string;
  name: string;
  designation: string;
  phone?: string;
  email?: string;
  note?: string;
  photo?: string;
};

type StateUnit = {
  stateUt: string;
  officer: string;
  designation: string;
  phone?: string;
  email?: string;
  note?: string;
};

const leadership = {
  chairperson: {
    role: "Chairperson, NICSI",
    name: "Shri Abhishek Singh",
    designation: "Additional Secretary, MeitY",
    phone: "01124369222",
    email: "as[at]meity[dot]gov[dot]in",
    photo: "/images/dg_sir.jpg",
  },
  md: {
    role: "Managing Director, NICSI",
    name: "Shri Alok Tiwari",
    designation: "",
    phone: "01126105291",
    email: "mdnicsi[at]nic[dot]in",
    photo: "/images/md_sir_nicsi.jpg",
  },
};

const imageSizeMap = {
  "Chairperson, NICSI": { frame: "h-24 w-20" },
  "Managing Director, NICSI": { frame: "h-24 w-20" },
} as const;

const hqHierarchy: Person[] = [
  { role: "Financial Advisor", name: "Shri Jitender Kumar", designation: "Chief General Manager", phone: "01122900582", email: "kundalji[at]nic[dot]in" },
  { role: "HoD Admin", name: "Shri Naveen Agrawal", designation: "Chief General Manager", phone: "01122900547", email: "srgm-na[at]nicsi[dot]nic[dot]in" },
  { role: "HoD HR", name: "Md. Ziya Ur Rehman Badar", designation: "Sr. General Manager", phone: "01122900553", email: "mzr[dot]badar[at]nic[dot]in" },
   { role: "HoD GeM & Tender", name: "Shri Ramdatt Upadhyay", designation: "General Manager", phone: "01122900512", email: "upadhyay[dot]rd[at]nic[dot]in" },
  { role: "HoD Performa Invoice (PI)", name: "Shri Lalit Kumar Bhatia", designation: "General Manager", phone: "01122900516", email: "lalit[dot]b[at]nic[dot]in" },
  { role: "HoD-COE-NICSI and PBD & IT", name: "Shri Prasanna Pandey", designation: "General Manager", phone: "01122900517", email: "kumar[dot]jyoti[at]nic[dot]in" },
   
  { role: "HoD Accounts", name: "Shri Bhupendra Kumar Sharma", designation: "General Manager", phone: "01122900510", email: "bks[at]nic[dot]in" },
   { role: "Public Information Officer (PIO)", name: "Shri Ajay Kumar Gupta", designation: "General Manager", phone: "01122900556", email: "ajayg[at]nic[dot]in"},
  { role: "Public Grievance Officer", name: "Shri Vikas Dixit", designation: "Manager", phone: "01122900503", email: "vikas[dot]dixit[at]nic[dot]in"},
  
   ];

const domainExperts: Person[] = [
  { role: "CHRO – Chief Human Resources Officer", name: " ", designation: " "  },
  { role: "CTO – Chief Technology Officer", name: " ", designation: " " },
  { role: "CLO – Chief Legal Officer", name: " ", designation: " "  },
  { role: "CFO – Chief Financial Officer", name: " ", designation: " "  },
  { role: "CPO – Chief Procurement Officer", name: " ", designation: " "  },
];

const consultants: Person[] = [
  { role: "Company Secretary", name: "Name to be updated", designation: "Designation to be updated" },
  { role: "Consultant (Program Management)", name: " ", designation: " ", note: " " },
  { role: "Consultant (Technology Profile)", name: " ", designation: " ", note: " " },
];

const stateUnits: StateUnit[] = [
  { stateUt: "Andhra Pradesh", officer: "Shri A. Maruthi Kumar", designation: "General Manager", phone: "04023221904", email: "kumar[dot]maruthi[at]nic[dot]in" },
  { stateUt: "Arunachal Pradesh", officer: "", designation: "" },
  { stateUt: "Assam", officer: "", designation: "" },
  { stateUt: "Bihar", officer: "", designation: "" },
  { stateUt: "Chhattisgarh", officer: "Shri Swadesh Kumar Shrivastava", designation: "General Manager", phone: "07552554600", email: "swadesh[dot]sh[at]nic[dot]in" },
  { stateUt: "Goa", officer: "Shri Y. Siva Sankara Reddy", designation: "General Manager", phone: "08022863218", email: "yss[dot]reddy[at]nic[dot]gov[dot]in" },
  { stateUt: "Gujarat", officer: "Shri Manoj Prakash", designation: "Deputy General Manager", phone: "09829434526", email: "manoj[dot]prakash[at]gov[dot]in" },
  { stateUt: "Haryana", officer: "Shri Tarminder Singh", designation: "General Manager", phone: "01722740708", email: "gm17-nicsi[at]nic[dot]in" },
  { stateUt: "Himachal Pradesh", officer: "Shri Sudhir Kumar Sharma", designation: "General Manager", phone: "09419220325", email: "sudhir[dot]sharma[at]nic[dot]in" },
  { stateUt: "Jharkhand", officer: "", designation: "" },
  { stateUt: "Karnataka", officer: "Shri Y. Siva Sankara Reddy", designation: "General Manager", phone: "08022863218", email: "yss[dot]reddy[at]nic[dot]gov[dot]in", note: "Bangalore" },
  { stateUt: "Kerala", officer: "Shri Manu Mohan B", designation: "Dy. General Manager", phone: "04712729894", email: "manu[at]nic[dot]in", note: "Thiruvananthapuram" },
  { stateUt: "Madhya Pradesh", officer: "Shri Swadesh Kumar Shrivastava", designation: "General Manager", phone: "07552554600", email: "swadesh[dot]sh[at]nic[dot]in", note: "Bhopal" },
  { stateUt: "Maharashtra", officer: "Shri Gangaram Devaba Kumbhar", designation: "Manager", phone: "09096138063", email: "gd[dot]kumbhar[at]nic[dot]in", note: "Pune" },
  { stateUt: "Manipur", officer: "", designation: "" },
  { stateUt: "Meghalaya", officer: "", designation: "" },
  { stateUt: "Mizoram", officer: "", designation: "" },
  { stateUt: "Nagaland", officer: "", designation: "" },
  { stateUt: "Odisha", officer: "", designation: "" },
  { stateUt: "Punjab", officer: "Shri Tarminder Singh", designation: "General Manager", phone: "01722740708", email: "gm17-nicsi[at]nic[dot]in", note: "Chandigarh" },
  { stateUt: "Rajasthan", officer: "Shri Manoj Prakash", designation: "Deputy General Manager", phone: "09829434526", email: "manoj[dot]prakash[at]gov[dot]in", note: "Jaipur" },
  { stateUt: "Sikkim", officer: "", designation: "" },
  { stateUt: "Tamil Nadu", officer: "Shri V. Sivaramakrishnan", designation: "Sr. General Manager", phone: "04425672555", email: "siva[dot]tn[at]nic[dot]in", note: "Chennai" },
  { stateUt: "Telangana", officer: "Shri A. Maruthi Kumar", designation: "General Manager", phone: "04023221904", email: "kumar[dot]maruthi[at]nic[dot]in", note: "Hyderabad" },
  { stateUt: "Tripura", officer: "", designation: "" },
  { stateUt: "Uttar Pradesh", officer: "Shri Deep Kumar", designation: "General Manager", phone: "05222239087", email: "gm-nicsi[at]nic[dot]in", note: "Lucknow" },
  { stateUt: "Uttarakhand", officer: "Shri Deep Kumar", designation: "General Manager", phone: "05222239087", email: "gm-nicsi[at]nic[dot]in"  },
  { stateUt: "West Bengal", officer: "", designation: "" },
  { stateUt: "Andaman and Nicobar Islands", officer: "Shri V. Sivaramakrishnan", designation: "Sr. General Manager", phone: "04425672555", email: "siva[dot]tn[at]nic[dot]in"  },
  { stateUt: "Chandigarh", officer: "Shri Tarminder Singh", designation: "General Manager", phone: "01722740708", email: "gm17-nicsi[at]nic[dot]in" },
  { stateUt: "Dadra and Nagar Haveli & Daman & Diu", officer: "Shri Gangaram Devaba Kumbhar", designation: "Manager", phone: "09096138063", email: "gd[dot]kumbhar[at]nic[dot]in"  },
  { stateUt: "Delhi", officer: "", designation: "" },
  { stateUt: "Jammu and Kashmir", officer: "Shri Sudhir Kumar Sharma", designation: "General Manager", phone: "09419220325", email: "sudhir[dot]sharma[at]nic[dot]in", note: "Srinagar" },
  { stateUt: "Ladakh", officer: "Shri Sudhir Kumar Sharma", designation: "General Manager", phone: "09419220325", email: "sudhir[dot]sharma[at]nic[dot]in" },
  { stateUt: "Lakshadweep", officer: "Shri Manu Mohan B", designation: "Dy. General Manager", phone: "04712729894", email: "manu[at]nic[dot]in"  },
  { stateUt: "Puducherry", officer: "Shri V. Sivaramakrishnan", designation: "Sr. General Manager", phone: "04425672555", email: "siva[dot]tn[at]nic[dot]in" },
];

function TopNode({ person }: { person: Person }) {
  const sizeClasses = imageSizeMap[person.role as keyof typeof imageSizeMap] ?? { frame: "h-24 w-20" };
  return (
    <article className="h-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-center shadow-sm">
      {person.photo && (
        <div className={`mx-auto mb-2 overflow-hidden rounded-lg border border-blue-100 shadow-sm ${sizeClasses.frame}`}>
          <Image src={person.photo} alt={person.name} width={120} height={160} className="h-full w-full object-cover object-top" />
        </div>
      )}
      <p className="text-sm font-semibold uppercase tracking-wide text-[#0052CC]">{person.role}</p>
      <h4 className="mt-1 text-base font-bold text-[#0F172A]">{person.name}</h4>
      {person.designation ? <p className="text-sm text-gray-700">{person.designation}</p> : null}
      {(person.phone || person.email) && (
        <p className="mt-1 text-xs text-[#003A8C]">
          {person.phone ? `Phone: ${person.phone}` : ""}
          {person.phone && person.email ? " | " : ""}
          {person.email ? `Email: ${person.email}` : ""}
        </p>
      )}
    </article>
  );
}

function DetailNode({ person }: { person: Person }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-3">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#003A8C]">{person.role}</p>
      <p className="mt-1 text-base font-semibold text-[#0F172A]">{person.name}</p>
      <p className="text-sm text-gray-700">{person.designation}</p>
      {(person.phone || person.email) && (
        <p className="mt-1 text-[11px] text-gray-600">
          {person.phone ? `Phone: ${person.phone}` : ""}
          {person.phone && person.email ? " | " : ""}
          {person.email ? `Email: ${person.email}` : ""}
        </p>
      )}
      {person.note && <p className="mt-1 text-[11px] text-[#0A2A72]">{person.note}</p>}
    </article>
  );
}

export default function OrganizationChartPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Organization Chart" />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052CC]">Organization Chart</p>
          <h3 className="mt-2 text-xl font-bold text-[#0F172A] md:text-2xl">NICSI Organization Hierarchy</h3>

          <div className="mt-6 space-y-5">
            <div className="grid items-start gap-3 md:grid-cols-[1fr_minmax(0,28rem)_minmax(0,16rem)]">
              <div className="hidden md:block" />
              <div className="mx-auto w-full max-w-md">
                <TopNode person={leadership.chairperson} />
              </div>
              <div className="mx-auto hidden w-full max-w-xs md:mx-0 md:block">
                <div className="relative mt-16 rounded-lg border border-dashed border-blue-300 bg-white/90 px-4 py-3">
                  <span className="absolute left-0 top-[62%] h-px w-8 -translate-x-8 -translate-y-1/2 bg-blue-300" />
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0052CC]">PPS to Chairperson, NICSI</p>
                  <p className="text-sm font-semibold text-[#0F172A]">Ram Avtar Dhawan</p>
                  <p className="text-sm text-gray-600">Phone: 011-24369222</p>
                </div>
              </div>
            </div>

            <div className="mx-auto h-6 w-px bg-blue-300" />

            <div className="grid items-start gap-3 md:grid-cols-[1fr_minmax(0,28rem)_minmax(0,16rem)]">
              <div className="hidden md:block" />
              <div className="mx-auto w-full max-w-md rounded-xl border border-blue-200 bg-white p-4 text-center shadow-sm">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-24 w-20 overflow-hidden rounded-lg border border-blue-100 shadow-sm">
                    <Image
                      src={leadership.md.photo}
                      alt={leadership.md.name}
                      width={120}
                      height={160}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#0052CC]">{leadership.md.role}</p>
                    <h4 className="text-base font-bold leading-tight text-[#0F172A]">{leadership.md.name}</h4>
                    <p className="text-sm text-[#003A8C]">Phone: {leadership.md.phone} | Email: {leadership.md.email}</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto hidden w-full max-w-xs md:mx-0 md:block">
                <div className="relative mt-16 rounded-lg border border-dashed border-blue-300 bg-white/90 px-4 py-3">
                  <span className="absolute left-0 top-[62%] h-px w-8 -translate-x-8 -translate-y-1/2 bg-blue-300" />
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0052CC]">PS to MD NICSI</p>
                  <p className="text-sm font-semibold text-[#0F172A]">P. K. Parida</p>
                  <p className="text-sm text-gray-600">Phone: 011-26105291</p>
                </div>
              </div>
            </div>

            <div className="mx-auto h-6 w-px bg-blue-300" />
            <div className="mx-auto h-px w-full max-w-4xl bg-blue-200" />

            <div>
              <div className="grid items-stretch gap-4 lg:grid-cols-3">
                <article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
                  <h4 className="rounded-md bg-[#0A2A72] px-3 py-2 text-sm font-semibold text-white">NICSI HQ Personnel</h4>
                  <div className="mt-3 space-y-2">
                    {hqHierarchy.map((person) => (
                      <DetailNode key={person.role} person={person} />
                    ))}
                  </div>
                </article>

                <article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
                  <h4 className="rounded-md bg-[#0A2A72] px-3 py-2 text-sm font-semibold text-white">Domain Experts</h4>
                  <div className="mt-3 space-y-2">
                    {domainExperts.map((person) => (
                      <DetailNode key={person.role} person={person} />
                    ))}
                  </div>
                </article>

                <article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
                  <h4 className="rounded-md bg-[#0A2A72] px-3 py-2 text-sm font-semibold text-white">Company Secretary and Consultants</h4>
                  <div className="mt-3 space-y-2">
                    {consultants.map((person) => (
                      <DetailNode key={person.role} person={person} />
                    ))}
                  </div>
                </article>
              </div>
            </div>

            <div>
              <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#0052CC]">NICSI State Personnel - 36 States/UTs</p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {stateUnits.map((unit) => (
                  <article key={unit.stateUt} className="rounded-md border border-gray-200 bg-white px-3 py-2 text-xs">
                    <p className="font-semibold text-[#0F172A]">{unit.stateUt}</p>
                    {unit.officer || unit.designation ? (
                      <p className="text-gray-700">
                        {unit.officer}
                        {unit.officer && unit.designation ? ` (${unit.designation})` : unit.designation}
                      </p>
                    ) : null}
                    {(unit.phone || unit.email) && <p className="text-gray-600">{unit.phone ?? ""}{unit.phone && unit.email ? " | " : ""}{unit.email ?? ""}</p>}
                    {unit.note && <p className="text-[#003A8C]">{unit.note}</p>}
                  </article>
                ))}
              </div> 
            </div>
          </div>
        </div>
      </section>

       
    </main>
  );
}


