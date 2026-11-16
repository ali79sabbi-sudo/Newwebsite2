import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { posts } from "@/data/blog";

// Update when content changes materially.
const LAST_UPDATED = new Date("2026-11-16T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const main = ["/", "/about/", "/massage-services/", "/massage-prices/", "/therapists/", "/gallery/", "/contact/", "/book-appointment/", "/faqs/", "/blog/", "/hygiene-and-safety/", "/first-visit-guide/", "/site-map/", "/privacy-policy/"];
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
  });
  return [
    ...main.map((p) => entry(p, p === "/" ? 1 : p === "/privacy-policy/" ? 0.3 : 0.8, p === "/privacy-policy/" ? "yearly" : "monthly")),
    ...services.map((s) => entry(`/${s.slug}/`, 0.9)),
    ...locations.map((l) => entry(`/${l.slug}/`, l.isHome ? 0.9 : 0.7)),
    ...posts.map((p) => ({ ...entry(`/blog/${p.slug}/`, 0.6), lastModified: new Date(p.updated + "T00:00:00Z") })),
  ];
}
