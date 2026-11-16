import Link from "next/link";
import { whatsappLink, telLink } from "@/lib/site";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

/** Floating WhatsApp button (desktop) + sticky booking bar (mobile). Pure server component — no JS. */
export function FloatingContact() {
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-2 rounded-full bg-whatsapp pl-4 pr-5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 md:inline-flex"
      >
        <WhatsAppIcon width={24} height={24} />
        <span>Chat on WhatsApp</span>
      </a>

      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-beige/70 bg-ivory pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_-18px_rgb(40_39_37/0.5)] md:hidden"
      >
        <a href={telLink} className="flex min-h-16 flex-col items-center justify-center gap-1 text-[0.72rem] font-semibold uppercase tracking-wider text-forest">
          <PhoneIcon /> Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-16 flex-col items-center justify-center gap-1 bg-whatsapp text-[0.72rem] font-semibold uppercase tracking-wider text-white"
        >
          <WhatsAppIcon /> WhatsApp
        </a>
        <Link href="/book-appointment/" className="flex min-h-16 flex-col items-center justify-center gap-1 text-[0.72rem] font-semibold uppercase tracking-wider text-forest">
          <CalendarIcon /> Book
        </Link>
      </nav>
    </>
  );
}
