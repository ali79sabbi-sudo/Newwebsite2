/**
 * Central business configuration — the single source of truth for NAP
 * (name, address, phone) data used in the UI, metadata and JSON-LD.
 *
 * Values set to `null` are deliberately unknown. Fill them in once confirmed
 * and they will appear automatically across the site and structured data.
 */
export const site = {
  name: "TwincitySpa",
  legalName: null as string | null, // e.g. registered business name
  url: "https://twincityspa.com",
  tagline: "Relax. Restore. Rejuvenate.",
  description:
    "TwincitySpa is a luxury massage and spa centre in Bahria Town Phase 7, Rawalpindi, offering professional massage treatments for guests from Rawalpindi and Islamabad.",
  phoneDisplay: "0314 3100149",
  phoneE164: "+923143100149",
  whatsappNumber: "923143100149",
  email: "info@twincityspa.com",
  address: {
    // Exact street / plot / building is NOT confirmed — do not invent it.
    streetAddress: null as string | null,
    locality: "Bahria Town Phase 7",
    city: "Rawalpindi",
    region: "Punjab",
    postalCode: null as string | null,
    country: "PK",
    countryName: "Pakistan",
  },
  /** Set only after confirming from the actual premises / Google Business Profile. */
  geo: null as { lat: number; lng: number } | null,
  /**
   * Confirmed by the owner: open every day from 12 PM (noon) until 5 AM the next morning.
   * `opens`/`closes` are 24-hour times for schema.org; a closing time earlier than the
   * opening time means the business closes after midnight.
   */
  openingHours: [
    {
      days: "Every day",
      dayCodes: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "05:00",
      display: "12:00 PM – 5:00 AM",
    },
  ] as { days: string; dayCodes: string[]; opens: string; closes: string; display: string }[] | null,
  /** Google Maps share link once the exact address/pin is confirmed. */
  mapsUrl: null as string | null,
  /** Add real profile URLs; empty entries are hidden. */
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    googleBusiness: "",
  },
  foundingYear: null as number | null,
};

/** e.g. "Open every day, 12:00 PM – 5:00 AM" */
export const hoursText = site.openingHours
  ? `Open ${site.openingHours.map((h) => `${h.days.toLowerCase()}, ${h.display}`).join("; ")}`
  : null;

export const fullLocation = `${site.address.locality}, ${site.address.city}, ${site.address.countryName}`;

export const defaultWhatsAppMessage =
  "Hello TwincitySpa, I would like to enquire about your massage services and available appointments.";

export function whatsappLink(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsAppMessage(serviceName: string) {
  return `Hello TwincitySpa, I would like to book a ${serviceName}. Could you please share available appointment times and prices?`;
}

export const telLink = `tel:${site.phoneE164}`;
export const mailLink = `mailto:${site.email}`;

export function absoluteUrl(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  const withSlash = p.endsWith("/") || p.includes("#") || p.includes(".") ? p : `${p}/`;
  return `${site.url}${withSlash}`;
}
