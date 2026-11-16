import type { SpaImage } from "@/lib/images";
import type { QA } from "@/lib/seo";
import type { Rate } from "./pricing";

export type Step = { title: string; text: string };

export type Service = {
  slug: string;
  name: string; // e.g. "Thai Massage"
  category: "Signature" | "Therapeutic" | "Relaxing" | "Focused" | "Shared";
  serviceType: string; // schema.org serviceType
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string; // short hero line
  excerpt: string; // card copy
  image: SpaImage;
  secondaryImage: SpaImage;
  intro: string[];
  about: { heading: string; paragraphs: string[] };
  expect: Step[];
  benefits: string[];
  pressure: string;
  goodFor: string[];
  considerations: string[];
  /** Session lengths and prices — see src/data/pricing.ts */
  rates: Rate[];
  faqs: QA[];
  related: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
};

export type LocationPage = {
  slug: string;
  name: string; // "Bahria Town Phase 4"
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  image: SpaImage;
  isHome: boolean; // true only for the actual business location
  relationship: { heading: string; paragraphs: string[] };
  areas: { name: string; note: string }[];
  route: { heading: string; paragraphs: string[]; verifyNote?: string };
  recommended: { slug: string; why: string }[];
  tips: string[];
  faqs: QA[];
  nearby: string[]; // other location slugs
  primaryKeyword: string;
  secondaryKeywords: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  image: SpaImage;
  published: string; // ISO date
  updated: string;
  readingMinutes: number;
  sections: { heading: string; body: string[]; list?: string[] }[];
  faqs?: QA[];
  relatedServices: string[];
};
