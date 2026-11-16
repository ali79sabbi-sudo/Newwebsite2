import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, serviceBySlug } from "@/data/services";
import { locations, locationBySlug } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { LocationTemplate } from "@/components/LocationTemplate";

/** Root-level slugs for the 14 treatment pages and 8 location pages (URLs per the site plan). */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...locations.map((l) => ({ slug: l.slug }))];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (s) return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}/`, image: s.image });
  const l = locationBySlug(slug);
  if (l) return buildMetadata({ title: l.metaTitle, description: l.metaDescription, path: `/${l.slug}/`, image: l.image });
  return {};
}

export default async function SlugPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (s) return <ServiceTemplate service={s} />;
  const l = locationBySlug(slug);
  if (l) return <LocationTemplate loc={l} />;
  notFound();
}
