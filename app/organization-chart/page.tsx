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

const ministers: Person[] = [
  {
    role: "Hon'ble Cabinet Minister (MeitY)",
    name: "Shri Ashwini Vaishnaw",
    designation: "Minister of Electronics & Information Technology",
    phone: "011-24369191 / 011-24362626",
    email: "moeit[at]gov[dot]in",
    photo: "/images/cabinate_minister.jpg",
  },
  {
    role: "Hon'ble Minister of State (MeitY)",
    name: "Shri Jitin Prasada",
    designation: "Minister of State, Electronics & Information Technology",
    phone: "011-24368757 / 011-24368758",
    email: "mos-eit[at]gov[dot]in",
    photo: "/images/jitin-prasada.png",
  },
];

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
    designation: "Managing Director",
    phone: "01126105291",
    email: "mdnicsi[at]nic[dot]in",
    photo: "/images/md_sir_nicsi.jpg",
  },
};

const imageSizeMap = {
  "Hon'ble Cabinet Minister (MeitY)": { frame: "h-32 w-24" },
  "Hon'ble Minister of State (MeitY)": { frame: "h-28 w-22" },
  "Chairperson, NICSI": { frame: "h-24 w-20" },
  "Managing Director, NICSI": { frame: "h-24 w-20" },
} as const;

const hqHierarchy: Person[] = [
  { role: "FA", name: "Shri Jitender Kumar", designation: "Chief General Manager", phone: "01122900582", email: "kundalji[at]nic[dot]in" },
  { role: "HoD Admin", name: "Shri Naveen Agrawal", designation: "Chief General Manager", phone: "01122900547", email: "srgm-na[at]nicsi[dot]nic[dot]in" },
  { role: "HoD HR", name: "Md. Ziya Ur Rehman Badar", designation: "Sr. General Manager", phone: "01122900553", email: "mzr[dot]badar[at]nic[dot]in" },
   { role: "HoD GeM & Tender", name: "Shri Ramdatt Upadhyay", designation: "General Manager", phone: "01122900512", email: "upadhyay[dot]rd[at]nic[dot]in" },
  { role: "HoD PI", name: "Shri Lalit Kumar Bhatia", designation: "General Manager", phone: "01122900516", email: "lalit[dot]b[at]nic[dot]in" },
  { role: "HoD CoE/ PBD & IT", name: "Shri Prasanna Pandey", designation: "General Manager", phone: "01122900517", email: "kumar[dot]jyoti[at]nic[dot]in" },
   
  { role: "HoD Accounts", name: "Shri Bhupendra Kumar Sharma", designation: "General Manager", phone: "01122900510", email: "bks[at]nic[dot]in" },
   { role: "PIO", name: "Shri Ajay Kumar Gupta", designation: "General Manager", phone: "01122900556", email: "ajayg[at]nic[dot]in"},
  { role: "Public Grievance Officer", name: "Shri Vikas Dixit", designation: "Manager", phone: "01122900503", email: "vikas[dot]dixit[at]nic[dot]in"},
  
   ];

const domainExperts: Person[] = [
  { role: "Domain Expert - Data Analytics", name: "VACANT", designation: "Domain Expert", note: "Final details to be confirmed" },
  { role: "Domain Expert - Cyber Security", name: "VACANT", designation: "Domain Expert", note: "Final details to be confirmed" },
  { role: "Domain Expert - Procurement", name: "VACANT", designation: "Domain Expert", note: "Final details to be confirmed" },
];

const consultants: Person[] = [
  { role: "Consultant (Program)", name: "VACANT", designation: "Consultant", note: "Company Secretary/Consultant details to be finalized" },
  { role: "Consultant (Technology)", name: "VACANT", designation: "Consultant", note: "Company Secretary role currently under restructuring" },
];

const stateUnits: StateUnit[] = [
  { stateUt: "Andhra Pradesh", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Arunachal Pradesh", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Assam", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Bihar", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Chhattisgarh", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Goa", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Gujarat", officer: "Post Vacant", designation: "-", note: "Gandhinagar" },
  { stateUt: "Haryana", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Himachal Pradesh", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Jharkhand", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Karnataka", officer: "Shri Y. Siva Sankara Reddy", designation: "General Manager", phone: "08022863218", email: "yss[dot]reddy[at]nic[dot]gov[dot]in", note: "Bangalore" },
  { stateUt: "Kerala", officer: "Shri Manu Mohan B", designation: "Dy. General Manager", phone: "04712729894", email: "manu[at]nic[dot]in", note: "Thiruvananthapuram" },
  { stateUt: "Madhya Pradesh", officer: "Shri Swadesh Kumar Shrivastava", designation: "General Manager", phone: "07552554600", email: "swadesh[dot]sh[at]nic[dot]in", note: "Bhopal" },
  { stateUt: "Maharashtra", officer: "Shri Gangaram Devaba Kumbhar", designation: "Manager", phone: "09096138063", email: "gd[dot]kumbhar[at]nic[dot]in", note: "Pune" },
  { stateUt: "Manipur", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Meghalaya", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Mizoram", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Nagaland", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Odisha", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Punjab", officer: "Shri Tarminder Singh", designation: "General Manager", phone: "01722740708", email: "gm17-nicsi[at]nic[dot]in", note: "Chandigarh" },
  { stateUt: "Rajasthan", officer: "Shri Manoj Prakash", designation: "Deputy General Manager", phone: "09829434526", email: "manoj[dot]prakash[at]gov[dot]in", note: "Jaipur" },
  { stateUt: "Sikkim", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Tamil Nadu", officer: "Shri V. Sivaramakrishnan", designation: "Sr. General Manager", phone: "04425672555", email: "siva[dot]tn[at]nic[dot]in", note: "Chennai" },
  { stateUt: "Telangana", officer: "Shri A. Maruthi Kumar", designation: "General Manager", phone: "04023221904", email: "kumar[dot]maruthi[at]nic[dot]in", note: "Hyderabad" },
  { stateUt: "Tripura", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Uttar Pradesh", officer: "Shri Deep Kumar", designation: "General Manager", phone: "05222239087", email: "gm-nicsi[at]nic[dot]in", note: "Lucknow" },
  { stateUt: "Uttarakhand", officer: "VACANT", designation: "VACANT" },
  { stateUt: "West Bengal", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Andaman and Nicobar Islands", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Chandigarh", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Dadra and Nagar Haveli and Daman and Diu", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Delhi", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Jammu and Kashmir", officer: "Shri Sudhir Kumar Sharma", designation: "General Manager", phone: "09419220325", email: "sudhir[dot]sharma[at]nic[dot]in", note: "Srinagar" },
  { stateUt: "Ladakh", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Lakshadweep", officer: "VACANT", designation: "VACANT" },
  { stateUt: "Puducherry", officer: "VACANT", designation: "VACANT" },
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
      <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">{person.role}</p>
      <h4 className="mt-1 text-sm font-bold text-[#0F172A]">{person.name}</h4>
      <p className="text-xs text-gray-700">{person.designation}</p>
      {(person.phone || person.email) && (
        <p className="mt-1 text-[11px] text-[#003A8C]">
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
      <p className="text-xs font-semibold uppercase tracking-wide text-[#003A8C]">{person.role}</p>
      <p className="mt-1 text-sm font-semibold text-[#0F172A]">{person.name}</p>
      <p className="text-xs text-gray-700">{person.designation}</p>
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
          <h3 className="mt-2 text-2xl font-bold text-[#0F172A] md:text-3xl">NICSI Organization Hierarchy</h3>

          <div className="mt-6 space-y-5">
            <div>
              <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Our Ministers</p>
              <div className="grid gap-3 md:grid-cols-2">
                {ministers.map((minister) => (
                  <TopNode key={minister.role} person={minister} />
                ))}
              </div>
            </div>

            <div className="mx-auto h-6 w-px bg-blue-300" />

            <div className="grid items-start gap-3 md:grid-cols-[1fr_minmax(0,28rem)_minmax(0,16rem)]">
              <div className="hidden md:block" />
              <div className="mx-auto w-full max-w-md">
                <TopNode person={leadership.chairperson} />
              </div>
              <div className="mx-auto hidden w-full max-w-xs md:mx-0 md:block">
                <div className="relative mt-12 rounded-lg border border-dashed border-blue-300 bg-white/90 px-4 py-3">
                  <span className="absolute left-0 top-[62%] h-px w-8 -translate-x-8 -translate-y-1/2 bg-blue-300" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">PPS to Chairperson, NICSI</p>
                  <p className="text-xs font-semibold text-[#0F172A]">Ram Avtar Dhawan</p>
                  <p className="text-xs text-gray-600">Phone: 011-24369222</p>
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">{leadership.md.role}</p>
                    <h4 className="text-sm font-bold leading-tight text-[#0F172A]">{leadership.md.name}</h4>
                    <p className="text-sm text-gray-700">{leadership.md.designation}</p>
                    <p className="text-xs text-[#003A8C]">Phone: {leadership.md.phone} | Email: {leadership.md.email}</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto hidden w-full max-w-xs md:mx-0 md:block">
                <div className="relative mt-12 rounded-lg border border-dashed border-blue-300 bg-white/90 px-4 py-3">
                  <span className="absolute left-0 top-[62%] h-px w-8 -translate-x-8 -translate-y-1/2 bg-blue-300" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">PS to MD NICSI</p>
                  <p className="text-xs font-semibold text-[#0F172A]">P. K. Parida</p>
                  <p className="text-xs text-gray-600">Phone: 011-26105291</p>
                </div>
              </div>
            </div>

            <div className="mx-auto h-6 w-px bg-blue-300" />
            <div className="mx-auto h-px w-full max-w-5xl bg-blue-200" />

            <div>
              <div className="grid items-stretch gap-4 lg:grid-cols-3">
                <article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
                  <h4 className="rounded-md bg-[#0A2A72] px-3 py-2 text-sm font-semibold text-white">↓ NICSI HQ Personnel</h4>
                  <div className="mt-3 space-y-2">
                    {hqHierarchy.map((person) => (
                      <DetailNode key={person.role} person={person} />
                    ))}
                  </div>
                </article>

                <article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
                  <h4 className="rounded-md bg-[#0A2A72] px-3 py-2 text-sm font-semibold text-white">↓ Domain Experts</h4>
                  <div className="mt-3 space-y-2">
                    {domainExperts.map((person) => (
                      <DetailNode key={person.role} person={person} />
                    ))}
                  </div>
                </article>

                <article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
                  <h4 className="rounded-md bg-[#0A2A72] px-3 py-2 text-sm font-semibold text-white">↓ Company Secretary / Consultants</h4>
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
                    <p className="text-gray-700">{unit.officer} ({unit.designation})</p>
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
