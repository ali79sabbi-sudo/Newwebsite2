import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd } from "@/lib/seo";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { posts } from "@/data/blog";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon } from "@/components/Icons";

const path = "/site-map/";
const title = "Sitemap — All Pages | TwincitySpa Bahria Town Rawalpindi";
const description =
  "Browse every page on the TwincitySpa website: massage treatments, locations served, guides, booking, prices, FAQs and policies — all in one place.";
export const metadata = buildMetadata({ title, description, path, image: images.candlelitTreatmentRoom });

const crumbs = [{ name: "Home", path: "/" }, { name: "Sitemap", path }];

type Group = { title: string; intro: string; links: { label: string; href: string; note?: string }[] };

export default function SiteMapPage() {
  const groups: Group[] = [
    {
      title: "Main pages",
      intro: "Start here.",
      links: [
        { label: "Home", href: "/" },
        { label: "About TwincitySpa", href: "/about/" },
        { label: "All Massage Services", href: "/massage-services/" },
        { label: "Prices & Packages", href: "/massage-prices/" },
        { label: "Our Therapists", href: "/therapists/" },
        { label: "Gallery", href: "/gallery/" },
        { label: "Contact Us", href: "/contact/" },
        { label: "Book an Appointment", href: "/book-appointment/" },
      ],
    },
    {
      title: "Massage treatments",
      intro: `${services.length} professional treatments at our Phase 7 spa.`,
      links: services.map((s) => ({ label: s.name, href: `/${s.slug}/`, note: s.category })),
    },
    {
      title: "Locations & areas served",
      intro: "One spa in Bahria Town Phase 7 — welcoming guests from across the twin cities.",
      links: locations.map((l) => ({ label: l.name, href: `/${l.slug}/`, note: l.isHome ? "Our spa" : "Area guide" })),
    },
    {
      title: "Guides & blog",
      intro: "Helpful, honest reading.",
      links: [
        { label: "Wellness Blog", href: "/blog/" },
        ...posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` })),
        { label: "First Visit Guide", href: "/first-visit-guide/" },
      ],
    },
    {
      title: "Help & policies",
      intro: "Answers and the small print.",
      links: [
        { label: "Frequently Asked Questions", href: "/faqs/" },
        { label: "Hygiene & Safety", href: "/hygiene-and-safety/" },
        { label: "Privacy Policy", href: "/privacy-policy/" },
        { label: "Terms & Conditions", href: "/privacy-policy/#terms" },
        { label: "XML sitemap (for search engines)", href: "/sitemap.xml" },
      ],
    },
  ];
  const total = groups.reduce((n, g) => n + g.links.length, 0);

  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs))} />
      <PageHero image={images.candlelitTreatmentRoom} eyebrow="Sitemap" title="Every Page at a Glance" crumbs={crumbs} lead={<p>{total} links, neatly organised — find any treatment, area guide or answer in seconds.</p>} />
      <div className="container-lux py-14 lg:py-20">
        <nav aria-label="Jump to section" className="mb-12 flex flex-wrap gap-2">
          {groups.map((g, i) => (
            <a key={g.title} href={`#g${i}`} className="inline-flex min-h-11 items-center rounded-full border border-beige px-4 text-sm text-forest hover:border-gold hover:text-gold-deep">{g.title}</a>
          ))}
        </nav>
        <div className="gap-8 lg:columns-2">
          {groups.map((g, i) => (
            <section key={g.title} id={`g${i}`} aria-labelledby={`h${i}`} className="card-lux mb-8 break-inside-avoid scroll-mt-32 p-7 sm:p-9">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2 id={`h${i}`} className="mt-2 text-3xl sm:text-4xl">{g.title}</h2>
              <p className="mt-2 text-stone">{g.intro}</p>
              <ul className="mt-6 divide-y divide-beige/60">
                {g.links.map((l) => (
                  <li key={l.href}>
                    {l.href.endsWith(".xml") ? (
                      <a href={l.href} className="group flex min-h-12 items-center justify-between gap-4 py-2 text-forest hover:text-gold-deep">
                        <span>{l.label}</span>
                        <ArrowIcon width={16} height={16} className="shrink-0 text-gold-deep transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <Link href={l.href} className="group flex min-h-12 items-center justify-between gap-4 py-2 text-forest hover:text-gold-deep">
                        <span>{l.label}</span>
                        <span className="flex shrink-0 items-center gap-3">
                          {l.note && <span className="hidden rounded-full bg-cream px-2.5 py-0.5 text-[0.7rem] uppercase tracking-wider text-gold-deep sm:inline">{l.note}</span>}
                          <ArrowIcon width={16} height={16} className="text-gold-deep transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
