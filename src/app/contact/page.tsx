import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd } from "@/lib/seo";
import { site, telLink, mailLink, whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";

const path = "/contact/";
const title = "Contact TwincitySpa | Bahria Town Phase 7, Rawalpindi";
const description =
  "Contact TwincitySpa in Bahria Town Phase 7, Rawalpindi. WhatsApp or call 0314 3100149, or email info@twincityspa.com to book a massage appointment.";
export const metadata = buildMetadata({ title, description, path, image: images.minimalWhiteTreatmentRoom });

const crumbs = [{ name: "Home", path: "/" }, { name: "Contact", path }];

export default function ContactPage() {
  const cards = [
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink(), cta: "Start a chat", external: true, accent: true },
    { icon: PhoneIcon, label: "Phone", value: site.phoneDisplay, href: telLink, cta: "Call now" },
    { icon: MailIcon, label: "Email", value: site.email, href: mailLink, cta: "Send an email" },
  ];
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description, type: "ContactPage" }), breadcrumbLd(crumbs))} />
      <PageHero image={images.minimalWhiteTreatmentRoom} eyebrow="Contact" title="Contact TwincitySpa" crumbs={crumbs} lead={<p>The quickest way to reach us is WhatsApp. We are happy to answer questions, recommend a treatment and confirm availability.</p>} />

      <section className="py-16 lg:py-24">
        <div className="container-lux">
          <ul className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`card-lux group flex h-full flex-col p-8 transition-shadow hover:shadow-lift ${c.accent ? "border-whatsapp/40" : ""}`}
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${c.accent ? "bg-whatsapp text-white" : "bg-cream text-gold-deep"}`}><c.icon width={22} height={22} /></span>
                  <h2 className="mt-5 text-2xl">{c.label}</h2>
                  <p className="mt-1 break-all text-lg text-forest">{c.value}</p>
                  <span className="mt-5 text-sm font-semibold uppercase tracking-wider text-gold-deep group-hover:text-forest">{c.cta} →</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card-lux p-8">
              <h2 className="flex items-center gap-3 text-3xl"><PinIcon className="text-gold-deep" /> Location</h2>
              <address className="mt-4 not-italic text-lg text-forest">
                {site.name}<br />
                {site.address.streetAddress ? <>{site.address.streetAddress}<br /></> : null}
                Bahria Town Phase 7<br />
                Rawalpindi, Punjab, Pakistan
              </address>
              <p className="mt-4 text-stone">Our exact location pin and directions are shared on WhatsApp when your appointment is confirmed.</p>
              {site.mapsUrl ? (
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6">Open in Google Maps</a>
              ) : (
                <a href={whatsappLink("Hello TwincitySpa, could you please share your location pin?")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-6"><WhatsAppIcon /> Request location pin</a>
              )}
              <p className="mt-6 text-sm text-stone">
                Coming from elsewhere? See guidance for <Link href="/massage-center-bahria-town/" className="link-lux">Bahria Town</Link> and <Link href="/massage-center-dha-phase-1-2/" className="link-lux">DHA Islamabad</Link>.
              </p>
            </div>
            <div className="card-lux p-8">
              <h2 className="flex items-center gap-3 text-3xl"><ClockIcon className="text-gold-deep" /> Opening hours</h2>
              {site.openingHours ? (
                <dl className="mt-4 divide-y divide-beige/60">
                  {site.openingHours.map((h) => (
                    <div key={h.days} className="flex justify-between py-3"><dt>{h.days}</dt><dd className="font-medium text-forest">{h.display}</dd></div>
                  ))}
                </dl>
              ) : (
                <p className="mt-4 text-lg text-stone">Please call or WhatsApp us for today’s opening hours and available appointment times.</p>
              )}
              <h3 className="mt-8 text-2xl">Booking an appointment</h3>
              <p className="mt-2 text-stone">Send your preferred treatment, date and time. Prefer a form? Use our <Link href="/book-appointment/" className="link-lux">booking request page</Link>.</p>
              <Link href="/book-appointment/" className="btn btn-primary mt-6">Book an appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
