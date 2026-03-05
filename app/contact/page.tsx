import Link from "next/link";
import { Building2, Clock3, Mail, MapPin, MapPinned, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import PageTitle from "../../components/layout/PageTitle";

export default function ContactPage() {
  const mapQuery = "NBCC Tower, 15 Bhikaji Cama Place, New Delhi - 110066";
  const mapSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const mapOpenStreetHref = "https://www.openstreetmap.org/?mlat=28.5699&mlon=77.1838#map=16/28.5699/77.1838";
  const mapEmbedSrc =
    "https://www.openstreetmap.org/export/embed.html?bbox=77.1758%2C28.5654%2C77.1918%2C28.5744&layer=mapnik&marker=28.5699%2C77.1838";

  return (
    <main className="pb-12">
      <PageTitle title="Contact Us" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF5FF] p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-[#F8FAFF] to-[#EEF5FF] p-5">
              <h2 className="text-xl font-bold text-[#0F172A]">NICSI Contact Details</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-white px-3 py-2.5">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EAF2FF] text-[#0F4BB8]">
                    <Building2 size={16} />
                  </span>
                  <p className="text-sm font-medium text-[#1E293B]">National Informatics Centre Services Incorporated</p>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-white px-3 py-2.5">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EAF2FF] text-[#0F4BB8]">
                    <MapPin size={16} />
                  </span>
                  <p className="text-sm text-[#334155]">6th Floor (Hall No. 2 &amp; 3), NBCC Tower, 15 Bhikaji Cama Place, New Delhi - 110066</p>
                </div>

                <a
                  href={mapSearchHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-lg border border-blue-100 bg-white px-3 py-2.5 text-sm font-semibold text-[#0F4BB8] transition hover:border-blue-200 hover:bg-[#F4F8FF]"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EAF2FF] text-[#0F4BB8]">
                    <MapPinned size={16} />
                  </span>
                  <span className="mt-1">View on Google Maps</span>
                </a>

                <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-white px-3 py-2.5">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#FFEEDB] text-[#E97817]">
                    <Phone size={16} />
                  </span>
                  <div className="space-y-2 text-sm text-[#334155]">
                    <p>
                      <span className="font-semibold text-[#0F172A]">Contact:</span> +91-11-22900525, +91-11-22900523
                    </p>
                    <a
                      href="https://wa.me/918527625551"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Chat on WhatsApp: 8527625551"
                      className="inline-flex items-center gap-2 rounded-full border border-[#B7EFCF] bg-[#ECFFF4] px-3 py-1.5 font-medium text-[#0A7A37] transition hover:bg-[#DFFBEA]"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
                        <MessageCircle size={14} />
                      </span>
                      <span>WhatsApp: 8527625551</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-white px-3 py-2.5">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EAF2FF] text-[#0F4BB8]">
                    <Mail size={16} />
                  </span>
                  <p className="text-sm text-[#334155]">Email: mdnicsi@nic.in</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-[#F8FAFF] to-[#EEF5FF] p-5">
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/70 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-sky-100/70 blur-2xl" />

              <div className="relative">
                <h2 className="text-xl font-bold text-[#0F172A]">Support &amp; Directory</h2>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-[#1D4ED8]">
                  <ShieldCheck size={14} />
                  <span>Single Point Support</span>
                  <span className="text-blue-200">|</span>
                  <Clock3 size={14} />
                  <span>Assisted Response</span>
                </div>
                <p className="mt-3 font-semibold text-[#0A2E73]">
                  Email:{" "}
                  <a href="mailto:info-nicsi@nic.in" className="underline decoration-blue-300 underline-offset-2 hover:text-[#0F4BB8]">
                    info-nicsi@nic.in
                  </a>
                  
                </p>
                <p className="mt-2 text-sm text-gray-600">(A single point of contact for support or issue related to NICSI services and products)</p>
                <div className="mt-5">
                  <Link
                    href="/personnel-work-allocation"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-[#0F4BB8] bg-gradient-to-r from-[#0F4BB8] to-[#1E63CF] px-5 py-3 text-base font-semibold text-white transition hover:from-[#0C3D95] hover:to-[#174FA8]"
                  >
                    Employees Directory
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-gradient-to-br from-white to-[#F4F9FF] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Office Location Map</h2>
          <p className="mt-2 text-sm text-gray-600">
            If map does not load, open location on{" "}
            <a href={mapSearchHref} target="_blank" rel="noreferrer" className="font-semibold text-[#0F4BB8] underline">
              Google Maps
            </a>{" "}
            or{" "}
            <a href={mapOpenStreetHref} target="_blank" rel="noreferrer" className="font-semibold text-[#0F4BB8] underline">
              OpenStreetMap
            </a>
            .
          </p>
          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
            <iframe
              title="NBCC Tower, Bhikaji Cama Place, New Delhi map"
              src={mapEmbedSrc}
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-gradient-to-br from-white to-[#F4F9FF] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Other Office Addresses</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <h3 className="text-base font-semibold text-[#0F172A]">NICSI Laxmi Nagar Data Centre</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                1st Floor, Core-2, Scope Minar
                <br />
                Laxmi Nagar, Delhi - 110092
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <h3 className="text-base font-semibold text-[#0F172A]">NICSI Shastri Park</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                <span className="font-semibold text-[#0F172A]">Address 1:</span> 1st to 5th Floor, Block-3, DMRC IT Park
                <br />
                New Delhi - 110053
                <br />
                <br />
                <span className="font-semibold text-[#0F172A]">Address 2:</span> 2nd &amp; 5th Floor, Block-1, DMRC IT Park
                <br />
                New Delhi - 110053
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <h3 className="text-base font-semibold text-[#0F172A]">World Trade Centre</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Tower-A, 3rd Floor, World Trade Centre Nauroji Nagar
                <br />
                New Delhi - 110029
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
