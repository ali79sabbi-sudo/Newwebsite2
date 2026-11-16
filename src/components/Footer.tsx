import Link from "next/link";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { site, telLink, mailLink, whatsappLink } from "@/lib/site";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

const important = [
  { label: "About TwincitySpa", href: "/about/" },
  { label: "All Massage Services", href: "/massage-services/" },
  { label: "Prices & Packages", href: "/massage-prices/" },
  { label: "Our Therapists", href: "/therapists/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Wellness Blog", href: "/blog/" },
  { label: "First Visit Guide", href: "/first-visit-guide/" },
  { label: "Hygiene & Safety", href: "/hygiene-and-safety/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Contact Us", href: "/contact/" },
  { label: "Book an Appointment", href: "/book-appointment/" },
];

const socialLabels: Record<string, string> = { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", googleBusiness: "Google Business Profile" };

// Fixed at build time; update yearly or when deploying.
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="on-dark relative overflow-hidden bg-forest text-cream/85">
      <div className="container-lux relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">
            A calm, professional massage and spa centre in Bahria Town Phase 7, Rawalpindi — welcoming guests from across Bahria Town, DHA and Islamabad.
          </p>
          <p className="mt-4 font-serif text-xl italic text-gold-light">{site.tagline}</p>
          <ul className="mt-6 space-y-3 text-[0.95rem]">
            <li className="flex gap-3"><PinIcon className="mt-1 shrink-0 text-gold" /><span>Bahria Town Phase 7, Rawalpindi, Pakistan</span></li>
            <li><a href={telLink} className="flex gap-3 hover:text-gold"><PhoneIcon className="mt-1 shrink-0 text-gold" />{site.phoneDisplay}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-gold"><WhatsAppIcon className="mt-1 shrink-0 text-gold" />WhatsApp {site.phoneDisplay}</a></li>
            <li><a href={mailLink} className="flex gap-3 hover:text-gold"><MailIcon className="mt-1 shrink-0 text-gold" />{site.email}</a></li>
            <li className="flex gap-3">
              <ClockIcon className="mt-1 shrink-0 text-gold" />
              <span>
                {site.openingHours
                  ? site.openingHours.map((h) => `${h.days}: ${h.display} (closes after midnight)`).join(" · ")
                  : "Opening hours: please call or WhatsApp for today’s availability"}
              </span>
            </li>
          </ul>
        </div>

        <nav aria-label="Massage services" className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">Massage Services</h2>
          <ul className="mt-5 grid grid-cols-1 gap-2 text-[0.93rem] sm:grid-cols-2 lg:grid-cols-1">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/${s.slug}/`} className="hover:text-gold">{s.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Important pages" className="lg:col-span-2">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">Explore</h2>
          <ul className="mt-5 space-y-2 text-[0.93rem]">
            {important.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-gold">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service areas" className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">Areas We Serve</h2>
          <ul className="mt-5 space-y-2 text-[0.93rem]">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}/`} className="hover:text-gold">
                  {l.isHome ? `${l.name} (our location)` : l.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-cream/80">
            TwincitySpa has one location in Bahria Town Phase 7. Area pages describe how guests from nearby communities can visit us.
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {socials.map(([k, url]) => (
                <li key={k}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/30 px-3 py-1.5 text-xs hover:border-gold hover:text-gold">
                    {socialLabels[k] ?? k}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-lux flex flex-col gap-3 py-6 pb-24 text-xs text-cream/80 md:flex-row md:items-center md:justify-between md:pb-6">
          <p>© {COPYRIGHT_YEAR} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/privacy-policy/" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/privacy-policy/#terms" className="hover:text-gold">Terms &amp; Conditions</Link></li>
            <li><Link href="/faqs/" className="hover:text-gold">FAQs</Link></li>
            <li><Link href="/site-map/" className="hover:text-gold">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
