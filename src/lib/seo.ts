import type { Metadata } from "next";
import { site, absoluteUrl } from "./site";
import type { SpaImage } from "./images";

const DEFAULT_OG = "/og/twincityspa-og.jpg";

type MetaInput = {
  title: string; // full title — keep under ~60 chars, unique per page
  description: string; // keep ~140–160 chars, unique per page
  path: string;
  image?: SpaImage;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex,
}: MetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImages = image
    ? [{ url: image.src, width: image.width, height: image.height, alt: image.alt }]
    : [{ url: DEFAULT_OG, width: 1200, height: 630, alt: "TwincitySpa luxury massage centre in Bahria Town Phase 7, Rawalpindi" }];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_PK",
      images: ogImages,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((i) => i.url),
    },
  };
}

/* ─────────────── JSON-LD ─────────────── */

export const ORG_ID = `${site.url}/#organization`;
export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;

function postalAddress() {
  const a = site.address;
  return {
    "@type": "PostalAddress",
    ...(a.streetAddress ? { streetAddress: a.streetAddress } : {}),
    addressLocality: `${a.locality}, ${a.city}`,
    addressRegion: a.region,
    ...(a.postalCode ? { postalCode: a.postalCode } : {}),
    addressCountry: a.country,
  };
}

const sameAs = () => Object.values(site.social).filter(Boolean);

/** Site-wide graph: Organization + DaySpa (LocalBusiness subtype) + WebSite. */
export function siteGraph() {
  const business: Record<string, unknown> = {
    "@type": "DaySpa",
    "@id": BUSINESS_ID,
    name: site.name,
    url: site.url,
    description: site.description,
    telephone: site.phoneE164,
    email: site.email,
    image: absoluteUrl("/og/twincityspa-og.jpg"),
    logo: absoluteUrl("/logo.png"),
    address: postalAddress(),
    slogan: site.tagline,
    parentOrganization: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Place", name: "Bahria Town, Rawalpindi" },
      { "@type": "City", name: "Rawalpindi" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "Place", name: "DHA Islamabad" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      email: site.email,
      contactType: "reservations",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  };
  if (site.geo) business.geo = { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng };
  if (site.mapsUrl) business.hasMap = site.mapsUrl;
  if (site.openingHours)
    business.openingHoursSpecification = site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayCodes.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    }));
  const sa = sameAs();
  if (sa.length) business.sameAs = sa;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: site.name,
        url: site.url,
        logo: absoluteUrl("/logo.png"),
        email: site.email,
        telephone: site.phoneE164,
        ...(sa.length ? { sameAs: sa } : {}),
      },
      business,
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: site.url,
        name: site.name,
        inLanguage: "en-PK",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageLd(opts: { path: string; name: string; description: string; type?: string; image?: SpaImage }) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "en-PK",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    ...(opts.image ? { primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(opts.image.src) } } : {}),
  };
}

export function serviceLd(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  rates?: { minutes: number; label: string; amount: number }[];
  serviceName?: string;
}) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Rawalpindi" },
      { "@type": "City", name: "Islamabad" },
    ],
    ...(opts.rates?.length
      ? {
          offers: opts.rates.map((r) => ({
            "@type": "Offer",
            name: `${opts.serviceName ?? opts.name} — ${r.label}`,
            price: r.amount,
            priceCurrency: "PKR",
            url: absoluteUrl(opts.path),
            availability: "https://schema.org/InStock",
          })),
        }
      : {}),
  };
}

export type QA = { q: string; a: string };

/**
 * FAQPage markup must mirror the visible Q&A on the page.
 * Note: Google limits FAQ rich results to authoritative government/health
 * sites, so this is for machine understanding — not a rich-result guarantee.
 */
export function faqLd(faqs: QA[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
    })),
  };
}

/** Answers may contain [label](/path) links — strip to plain text for JSON-LD. */
export function stripLinks(s: string) {
  return s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
