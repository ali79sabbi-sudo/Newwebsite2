import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd, BUSINESS_ID } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";

const path = "/massage-services/";
const title = "Massage Services in Rawalpindi | TwincitySpa Bahria Town";
const description =
  "Explore 14 professional massage services at TwincitySpa, Bahria Town Phase 7: full body, Swedish, Thai, deep tissue, hot stone, couples and more.";
export const metadata = buildMetadata({ title, description, path, image: images.therapistFullBodyMassageBrightRoom });

const crumbs = [{ name: "Home", path: "/" }, { name: "Massage Services", path }];
const groups = ["Signature", "Relaxing", "Therapeutic", "Focused", "Shared"] as const;
const groupText: Record<(typeof groups)[number], string> = {
  Signature: "Indulgent treatments that define the TwincitySpa experience.",
  Relaxing: "Gentle, flowing treatments designed to calm the mind.",
  Therapeutic: "Firmer, focused work for tight muscles and active lifestyles.",
  Focused: "Concentrated treatments for specific areas — ideal when time is short.",
  Shared: "Treatments to enjoy together.",
};

export default function ServicesPage() {
  const itemList = {
    "@type": "ItemList",
    name: "TwincitySpa massage services",
    itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/${s.slug}/`), name: s.name })),
  };
  const catalog = {
    "@type": "OfferCatalog",
    name: "Massage treatments",
    provider: { "@id": BUSINESS_ID },
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(`/${s.slug}/`) } })),
  };
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description, type: "CollectionPage" }), breadcrumbLd(crumbs), itemList, catalog)} />
      <PageHero image={images.therapistFullBodyMassageBrightRoom} eyebrow="Treatment menu" title="Massage Services in Rawalpindi" crumbs={crumbs} lead={<p>Fourteen professional treatments at our spa in Bahria Town Phase 7 — each tailored to your preferred pressure and focus areas.</p>} />

      <nav aria-label="Treatment categories" className="sticky top-[4.5rem] z-30 border-b border-beige/60 bg-ivory lg:top-[calc(5rem+2.25rem)] md:top-[calc(4.5rem+2.25rem)]">
        <ul className="container-lux flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {groups.map((g) => (
            <li key={g}><a href={`#${g.toLowerCase()}`} className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border border-beige px-4 text-sm text-forest hover:border-gold hover:text-gold-deep">{g}</a></li>
          ))}
        </ul>
      </nav>

      <div className="container-lux py-14 lg:py-20">
        <p className="max-w-3xl text-lg text-stone">
          Not sure where to start? Read <Link href="/blog/how-to-choose-a-massage/" className="link-lux">how to choose the right massage</Link>, compare <Link href="/blog/thai-vs-swedish-massage/" className="link-lux">Thai vs Swedish</Link>, or message us — we will happily recommend a treatment.
        </p>
        {groups.map((g) => {
          const list = services.filter((s) => s.category === g);
          return (
            <section key={g} id={g.toLowerCase()} className="mt-16 scroll-mt-40" aria-labelledby={`h-${g}`}>
              <div className="flex flex-col gap-2 border-b border-beige/60 pb-5 md:flex-row md:items-end md:justify-between">
                <h2 id={`h-${g}`} className="text-4xl">{g} treatments</h2>
                <p className="text-stone">{groupText[g]}</p>
              </div>
              <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((s) => <ServiceCard key={s.slug} service={s} />)}
              </div>
            </section>
          );
        })}
      </div>
      <CtaBand />
    </>
  );
}
