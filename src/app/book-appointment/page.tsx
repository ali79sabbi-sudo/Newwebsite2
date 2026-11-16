import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd } from "@/lib/seo";
import { site, telLink, whatsappLink } from "@/lib/site";
import { services } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { BookingForm } from "@/components/BookingForm";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

const path = "/book-appointment/";
const title = "Book a Massage Appointment in Rawalpindi | TwincitySpa";
const description =
  "Request a massage appointment at TwincitySpa, Bahria Town Phase 7. Choose your treatment, date and time and send your request via WhatsApp in seconds.";
export const metadata = buildMetadata({ title, description, path, image: images.spaMassageWarmStudio });

const crumbs = [{ name: "Home", path: "/" }, { name: "Book an Appointment", path }];

export default function BookPage() {
  const treatments = services.map((s) => ({ value: s.slug, label: s.name }));
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs))} />
      <PageHero image={images.spaMassageWarmStudio} eyebrow="Reservations" title="Book an Appointment" crumbs={crumbs} lead={<p>Send your request in under a minute. Our team replies on WhatsApp to confirm availability and price.</p>} />

      <section className="py-14 lg:py-20">
        <div className="container-lux grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-6 text-4xl">Your booking request</h2>
            <BookingForm treatments={treatments} />
          </div>
          <aside className="space-y-6 lg:col-span-5" aria-label="Other ways to book">
            <div className="card-lux p-7">
              <h2 className="text-2xl">Prefer to book directly?</h2>
              <div className="mt-5 grid gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full"><WhatsAppIcon /> WhatsApp {site.phoneDisplay}</a>
                <a href={telLink} className="btn btn-outline w-full"><PhoneIcon /> Call {site.phoneDisplay}</a>
              </div>
            </div>
            <div className="card-lux p-7">
              <h2 className="text-2xl">How booking works</h2>
              <ol className="prose-lux mt-4 text-[0.97rem]">
                <li>Complete the form and press <strong>Send request via WhatsApp</strong>.</li>
                <li>WhatsApp opens with your request written out — press <strong>Send</strong>.</li>
                <li>Our team replies to confirm availability, session length and price.</li>
                <li>Your appointment is confirmed only once you receive our reply.</li>
              </ol>
            </div>
            <div className="placeholder-note">
              Couples and <Link href="/four-hands-massage/" className="link-lux">four hands</Link> sessions need two therapists — please book these in advance. Have a health condition? Mention it in your message.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
