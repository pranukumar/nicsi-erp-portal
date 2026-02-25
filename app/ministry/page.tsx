import Image from "next/image";
import PageTitle from "../../components/layout/PageTitle";

type Minister = {
  name: string;
  role: string;
  image: string;
  imageSize?: "small" | "default";
  phone: string[];
  email: string;
};

const ministers: Minister[] = [
  {
    name: "Shri Ashwini Vaishnaw",
    role: "Hon'ble Minister of Railways, Information and Broadcasting, and Electronics and Information Technology",
    image: "/images/ministry/ashwini-vaishnaw.jpg",
    phone: ["+91-11-24369191 (Office)", "+91-11-24362626 (Office)", "+91-11-24366070 (Fax)"],
    email: "moeit[at]gov[dot]in",
  },
  {
    name: "Shri Jitin Prasada",
    role: "Hon'ble Minister of State in the Ministry of Commerce and Industry, and Electronics and Information Technology",
    image: "/images/ministry/jitin-prasada.png",
    imageSize: "small",
    phone: ["+91-11-24368757 (Office)", "+91-11-24368758 (Office)", "+91-11-24360958 (Fax)"],
    email: "mos-eit[at]gov[dot]in",
  },
];

export default function MinistryPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Ministry" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Ministry</h2>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {ministers.map((minister) => (
              <article key={minister.name} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="flex gap-4">
                  <div
                    className={`shrink-0 overflow-hidden rounded-lg border border-blue-100 bg-white ${
                      minister.imageSize === "small" ? "h-32 w-24" : "h-36 w-28"
                    }`}
                  >
                    <Image src={minister.image} alt={minister.name} width={240} height={320} className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-[#0A2A72]">{minister.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{minister.role}</p>
                    <div className="mt-3 text-sm">
                      <p className="font-semibold text-[#0F172A]">Telephone</p>
                      <ul className="mt-1 space-y-1">
                        {minister.phone.map((number) => (
                          <li key={number}>{number}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-3 text-sm">
                      <p className="font-semibold text-[#0F172A]">Email</p>
                      <p>{minister.email}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
