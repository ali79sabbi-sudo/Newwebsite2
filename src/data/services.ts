import { servicesA } from "./services-a";
import { servicesB } from "./services-b";
import type { Service } from "./types";

export const services: Service[] = [...servicesA, ...servicesB];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const featuredServiceSlugs = [
  "full-body-massage",
  "thai-massage",
  "hot-stone-massage",
  "deep-tissue-massage",
  "aromatherapy-massage",
  "couples-massage",
];
