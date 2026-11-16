import { services } from "./services";
import { locations } from "./locations";

export type NavLink = { label: string; href: string };

export const serviceLinks: NavLink[] = services.map((s) => ({ label: s.name, href: `/${s.slug}/` }));
export const locationLinks: NavLink[] = locations.map((l) => ({ label: l.name, href: `/${l.slug}/` }));

export const mainNav: (NavLink & { children?: NavLink[]; allHref?: string; allLabel?: string })[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Massage Services", href: "/massage-services/", children: serviceLinks, allHref: "/massage-services/", allLabel: "View all treatments" },
  { label: "Pricing", href: "/massage-prices/" },
  { label: "Therapists", href: "/therapists/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Locations", href: "/massage-center-bahria-town/", children: locationLinks, allHref: "/massage-center-bahria-town/", allLabel: "All of Bahria Town" },
  { label: "Contact", href: "/contact/" },
];
