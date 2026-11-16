import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/types";
import { services } from "@/data/services";
import { breadcrumbLd, faqLd, graph, serviceLd, webPageLd, type Crumb } from "@/lib/seo";
import { serviceWhatsAppMessage, site, telLink, whatsappLink } from "@/lib/site";
import { PageHero } from "./PageHero";
import { JsonLd } from "./JsonLd";
import { RichText } from "./RichText";
import { FaqList, StillHaveQuestions } from "./Faq";
import { ServiceCard } from "./ServiceCard";
import { CtaBand } from "./CtaBand";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { locations } from "@/data/locations";
import { formatPrice } from "@/data/pricing";

export function ServiceTemplate({ service: s }: { service: Service }) {
  const path = `/${s.slug}/`;
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Massage Services", path: "/massage-services/" },
    { name: s.name, path },
  ];
  const related = s.related.map((r) => services.find((x) => x.slug === r)!).filter(Boolean);
  const wa = whatsappLink(serviceWhatsAppMessage(s.name));
  const home = locations.find((l) => l.isHome)!;

  return (
    <>
      <JsonLd
        data={graph(
          webPageLd({ path, name: s.metaTitle, description: s.metaDescription, image: s.image }),
          serviceLd({ name: `${s.name} at ${site.name}`, description: s.metaDescription, path, serviceType: s.serviceType, rates: s.rates, serviceName: s.name }),
          breadcrumbLd(crumbs),
          faqLd(s.faqs, path),
        )}
      />

      <PageHero image={s.image} eyebrow={`${s.category} treatment · Bahria Town Phase 7`} title={s.h1} lead={<p>{s.tagline}</p>} crumbs={crumbs}>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon /> Book on WhatsApp</a>
        <a href={telLink} className="btn btn-outline"><PhoneIcon /> Call {site.phoneDisplay}</a>
      </PageHero>

      {/* Intro + quick facts */}
      <section className="py-16 lg:py-24">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          <div className="prose-lux text-[1.08rem] lg:col-span-7">
            {s.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "font-serif text-[1.55rem] leading-snug text-forest" : ""}><RichText text={p} /></p>
            ))}
            <h2>{s.about.heading}</h2>
            {s.about.paragraphs.map((p, i) => (
              <p key={i}><RichText text={p} /></p>
            ))}
          </div>
          <aside className="lg:col-span-5" aria-label={`${s.name} at a glance`}>
            <div className="card-lux sticky top-28 p-7">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-5 divide-y divide-beige/60 text-[0.97rem]">
                <div className="flex justify-between gap-4 py-3"><dt className="text-stone">Pressure</dt><dd className="text-right font-medium text-forest">{s.pressure}</dd></div>
                {s.rates.map((r) => (
                  <div key={r.minutes} className="flex justify-between gap-4 py-3"><dt className="text-stone">{r.label}</dt><dd className="text-right font-serif text-2xl leading-none text-forest">{formatPrice(r.amount)}</dd></div>
                ))}
                <div className="flex justify-between gap-4 py-3"><dt className="text-stone">Location</dt><dd className="text-right font-medium text-forest"><Link href={`/${home.slug}/`} className="link-lux">Bahria Town Phase 7</Link></dd></div>
              </dl>
              <div className="mt-6 grid gap-3">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full"><WhatsAppIcon /> WhatsApp enquiry</a>
                <Link href={`/book-appointment/?treatment=${s.slug}`} className="btn btn-primary w-full">Book this massage</Link>
                <a href={telLink} className="btn btn-outline w-full"><PhoneIcon /> {site.phoneE164}</a>
              </div>
              <p className="mt-4 text-xs text-stone">Choose a 30-minute or 1-hour session when you book. See the full <Link href="/massage-prices/" className="link-lux">price list</Link>.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-cream/60 py-16 lg:py-24" aria-labelledby="expect">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <div className="gold-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift max-lg:order-2">
            <Image src={s.secondaryImage.src} alt={s.secondaryImage.alt} fill quality={70} sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Your treatment</p>
            <h2 id="expect" className="mt-3 text-4xl sm:text-5xl">What to expect during your {s.name.toLowerCase()}</h2>
            <ol className="mt-10 space-y-7">
              {s.expect.map((st, i) => (
                <li key={st.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-xl text-gold-deep">{i + 1}</span>
                  <div>
                    <h3 className="text-2xl">{st.title}</h3>
                    <p className="mt-1 text-stone">{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits / suitable / considerations */}
      <section className="py-16 lg:py-24">
        <div className="container-lux grid gap-6 md:grid-cols-3">
          <div className="card-lux p-8">
            <h2 className="text-3xl">Why guests choose it</h2>
            <ul className="mt-5 space-y-3">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-[0.98rem]"><CheckIcon className="mt-1 shrink-0 text-gold-deep" />{b}</li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-stone">Experiences vary. Massage is a wellbeing treatment, not a medical treatment.</p>
          </div>
          <div className="card-lux p-8">
            <h2 className="text-3xl">Who it suits</h2>
            <ul className="mt-5 space-y-3">
              {s.goodFor.map((b) => (
                <li key={b} className="flex gap-3 text-[0.98rem]"><span className="mt-3 h-px w-4 shrink-0 bg-gold" aria-hidden />{b}</li>
              ))}
            </ul>
          </div>
          <div className="card-lux border-gold/50 bg-cream/40 p-8">
            <h2 className="text-3xl">Before you book</h2>
            <ul className="mt-5 space-y-3">
              {s.considerations.map((b) => (
                <li key={b} className="flex gap-3 text-[0.98rem]"><span className="mt-1 font-serif text-lg leading-none text-gold-deep" aria-hidden>!</span>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream/60 py-16 lg:py-24" aria-labelledby="faqs">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQs</p>
            <h2 id="faqs" className="mt-3 text-4xl sm:text-5xl">{s.name}: your questions answered</h2>
            <p className="mt-4 text-stone">More answers on our <Link href="/faqs/" className="link-lux">FAQ page</Link>.</p>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={s.faqs} />
            <StillHaveQuestions />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24" aria-labelledby="related">
        <div className="container-lux">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">You may also enjoy</p>
              <h2 id="related" className="mt-3 text-4xl sm:text-5xl">Related treatments</h2>
            </div>
            <Link href="/massage-services/" className="btn btn-outline">All massage services</Link>
          </div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Book your ${s.name.toLowerCase()} in Bahria Town`} message={serviceWhatsAppMessage(s.name)} />
    </>
  );
}
