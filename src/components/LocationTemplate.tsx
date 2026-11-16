import Link from "next/link";
import type { LocationPage } from "@/data/types";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { breadcrumbLd, faqLd, graph, webPageLd, type Crumb } from "@/lib/seo";
import { site, telLink, whatsappLink } from "@/lib/site";
import { PageHero } from "./PageHero";
import { JsonLd } from "./JsonLd";
import { RichText } from "./RichText";
import { FaqList, StillHaveQuestions } from "./Faq";
import { CtaBand } from "./CtaBand";
import { ArrowIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export function LocationTemplate({ loc }: { loc: LocationPage }) {
  const path = `/${loc.slug}/`;
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/massage-center-bahria-town/" },
    { name: loc.name, path },
  ];
  // The Bahria Town hub page is itself the "Locations" crumb.
  const finalCrumbs = loc.slug === "massage-center-bahria-town" ? [crumbs[0], { name: "Bahria Town", path }] : crumbs;
  const nearby = loc.nearby.map((n) => locations.find((l) => l.slug === n)!).filter(Boolean);
  const pinMsg = `Hello TwincitySpa, I'm coming from ${loc.name}. Could you share your location pin in Bahria Town Phase 7 and available appointments?`;

  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: loc.metaTitle, description: loc.metaDescription, image: loc.image }), breadcrumbLd(finalCrumbs), faqLd(loc.faqs, path))} />

      <PageHero
        image={loc.image}
        eyebrow={loc.isHome ? "Our location" : "Serving guests from " + loc.shortName}
        title={loc.h1}
        crumbs={finalCrumbs}
        lead={
          <p className="flex items-start gap-2">
            <PinIcon className="mt-1.5 shrink-0 text-gold" />
            <span>{loc.isHome ? "TwincitySpa is located here, in Bahria Town Phase 7, Rawalpindi." : "TwincitySpa is located in Bahria Town Phase 7, Rawalpindi — our only location."}</span>
          </p>
        }
      >
        <a href={whatsappLink(pinMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon /> WhatsApp us</a>
        <a href={telLink} className="btn btn-outline"><PhoneIcon /> Call {site.phoneDisplay}</a>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          <div className="prose-lux text-[1.08rem] lg:col-span-7">
            {loc.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "font-serif text-[1.55rem] leading-snug text-forest" : ""}><RichText text={p} /></p>
            ))}
            <h2>{loc.relationship.heading}</h2>
            {loc.relationship.paragraphs.map((p, i) => (
              <p key={i}><RichText text={p} /></p>
            ))}
            <h2>{loc.route.heading}</h2>
            {loc.route.paragraphs.map((p, i) => (
              <p key={i}><RichText text={p} /></p>
            ))}
            {loc.route.verifyNote && <p className="placeholder-note">{loc.route.verifyNote}</p>}
          </div>

          <aside className="space-y-6 lg:col-span-5" aria-label="Visit details">
            <div className="card-lux p-7">
              <p className="eyebrow">Visit TwincitySpa</p>
              <p className="mt-3 font-serif text-2xl text-forest">Bahria Town Phase 7, Rawalpindi</p>
              <p className="mt-2 text-sm text-stone">Exact location pin shared on WhatsApp when your appointment is confirmed.</p>
              <div className="mt-6 grid gap-3">
                <a href={whatsappLink(pinMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full"><WhatsAppIcon /> Get directions on WhatsApp</a>
                <Link href="/book-appointment/" className="btn btn-primary w-full">Book an appointment</Link>
              </div>
            </div>
            <div className="card-lux p-7">
              <h2 className="text-2xl">Areas &amp; landmarks</h2>
              <ul className="mt-4 space-y-4">
                {loc.areas.map((a) => (
                  <li key={a.name}>
                    <p className="font-semibold text-forest">{a.name}</p>
                    <p className="text-sm text-stone"><RichText text={a.note} /></p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-lux p-7">
              <h2 className="text-2xl">Visiting tips</h2>
              <ul className="mt-4 space-y-2 text-[0.97rem]">
                {loc.tips.map((t) => (
                  <li key={t} className="flex gap-3"><span className="mt-3 h-px w-4 shrink-0 bg-gold" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream/60 py-16 lg:py-24" aria-labelledby="rec">
        <div className="container-lux">
          <p className="eyebrow">Recommended</p>
          <h2 id="rec" className="mt-3 text-4xl sm:text-5xl">Popular treatments for {loc.shortName} guests</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {loc.recommended.map((r) => {
              const s = services.find((x) => x.slug === r.slug)!;
              return (
                <Link key={r.slug} href={`/${s.slug}/`} className="card-lux group flex flex-col p-7 transition-shadow hover:shadow-lift">
                  <h3 className="text-2xl group-hover:text-gold-deep">{s.name}</h3>
                  <p className="mt-2 flex-1 text-stone">{r.why}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">Explore {s.name.toLowerCase()} <ArrowIcon width={16} height={16} /></span>
                </Link>
              );
            })}
          </div>
          <p className="mt-8 text-stone">
            Browse <Link href="/massage-services/" className="link-lux">all 14 massage services</Link> or check <Link href="/massage-prices/" className="link-lux">prices and packages</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="faqs">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQs</p>
            <h2 id="faqs" className="mt-3 text-4xl sm:text-5xl">Questions from {loc.shortName} guests</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={loc.faqs} />
            <StillHaveQuestions />
          </div>
        </div>
      </section>

      <section className="bg-cream/60 py-14" aria-labelledby="nearby">
        <div className="container-lux">
          <h2 id="nearby" className="text-3xl">Nearby areas we welcome guests from</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link href={`/${n.slug}/`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-beige bg-ivory px-5 text-sm text-forest hover:border-gold hover:text-gold-deep">
                  {n.isHome ? `${n.name} (our spa)` : n.name} <ArrowIcon width={14} height={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={loc.isHome ? "Visit us in Bahria Town Phase 7" : `From ${loc.shortName} to calm`} message={pinMsg} />
    </>
  );
}
