import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { services } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/Icons";
import { STANDARD_RATES, formatPrice } from "@/data/pricing";

const path = "/massage-prices/";
const title = "Massage Prices & Packages in Rawalpindi | TwincitySpa";
const description =
  "Massage prices at TwincitySpa, Bahria Town Phase 7: PKR 3,000 for 30 minutes or PKR 6,000 for 1 hour — any treatment, including Thai, hot stone & full body.";
export const metadata = buildMetadata({ title, description, path, image: images.hotStoneMassageHerbalCompress });

const crumbs = [{ name: "Home", path: "/" }, { name: "Prices & Packages", path }];

export default function PricesPage() {
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs))} />
      <PageHero image={images.hotStoneMassageHerbalCompress} eyebrow="Prices & packages" title="Massage Prices and Packages" crumbs={crumbs} lead={<p>One simple rate card for every treatment: <strong className="text-ivory">PKR 3,000 for 30 minutes</strong> or <strong className="text-ivory">PKR 6,000 for 1 hour</strong>.</p>}>
        <a href={whatsappLink("Hello TwincitySpa, I would like to book a massage. What times are available?")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon /> Book on WhatsApp</a>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="container-lux">
          <SectionHeading align="center" eyebrow="Rate card" title="Simple, transparent pricing" lead="The same fair price for every treatment on our menu — choose the session length that suits you." />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {STANDARD_RATES.map((r, i) => (
              <li key={r.minutes} className={`card-lux flex flex-col items-center p-10 text-center ${i === 1 ? "sm:-translate-y-3" : ""}`}>
                <p className="eyebrow">{i === 1 ? "Most popular" : "Express"}</p>
                <h2 className="mt-4 text-4xl">{r.label}</h2>
                <p className="mt-4 font-serif text-6xl text-forest">{formatPrice(r.amount)}</p>
                <p className="mt-4 text-stone">{i === 1 ? "Unhurried, complete treatment — ideal for full body, hot stone, Thai and couples sessions." : "Focused and efficient — perfect for back, head & shoulder or foot reflexology."}</p>
                <a
                  href={whatsappLink(`Hello TwincitySpa, I would like to book a ${r.label} massage (${formatPrice(r.amount)}). What times are available?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp mt-7"
                >
                  <WhatsAppIcon /> Book {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-lux">
          <div className="mb-10">
            <SectionHeading eyebrow="Treatment menu" title="Prices by treatment" lead="Every treatment below is available as a 30-minute or 1-hour session." />
          </div>
          <PriceTable services={services} caption="TwincitySpa massage treatments, session options and rates" />
        </div>
      </section>

      <section className="bg-cream/60 py-16 lg:py-24">
        <div className="container-lux grid gap-6 md:grid-cols-3">
          {[
            { t: "Couples sessions", d: "Two guests side by side in a shared room. Each guest chooses their own treatment.", href: "/couples-massage/" },
            { t: "Four hands", d: "Two therapists, one guest — our most indulgent experience. Advance booking needed.", href: "/four-hands-massage/" },
            { t: "Combinations", d: "Pair a back massage with head & shoulder, or hot stone with aromatherapy. Ask about current packages.", href: "/massage-services/" },
          ].map((c) => (
            <div key={c.t} className="card-lux p-8">
              <h2 className="text-3xl">{c.t}</h2>
              <p className="mt-3 text-stone">{c.d}</p>
              <Link href={c.href} className="link-lux mt-5 inline-block">Learn more</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-lux prose-lux max-w-3xl">
          <h2>Good to know</h2>
          <ul>
            <li>All treatments: PKR 3,000 for 30 minutes, PKR 6,000 for 1 hour.</li>
            <li>Couples and four hands sessions involve two therapists — please confirm the total when booking.</li>
            <li>Please arrive on time so you receive your full session.</li>
            <li>Let us know as early as possible if you need to reschedule. See our <Link href="/privacy-policy/#terms">terms</Link>.</li>
            <li>Gift arrangements can be discussed directly with our team.</li>
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
