import type { QA } from "@/lib/seo";
import { RichText } from "./RichText";
import { ChevronIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { site, telLink, mailLink, whatsappLink } from "@/lib/site";
import Link from "next/link";

/**
 * Accessible, crawlable FAQ accordion using native <details>/<summary>.
 * Answers are in the HTML at all times (visible to crawlers & screen readers), no JS required.
 */
export function FaqList({ items, headingLevel = "h3" }: { items: QA[]; headingLevel?: "h3" | "h4" }) {
  const H = headingLevel;
  return (
    <div className="divide-y divide-beige/70 border-y border-beige/70">
      {items.map((f, i) => (
        <details key={i} className="group py-1" name={undefined}>
          <summary className="flex min-h-14 items-center justify-between gap-6 py-4 text-left">
            <H className="font-serif text-[1.3rem] leading-snug text-forest sm:text-[1.4rem]">{f.q}</H>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-beige text-gold-deep transition-transform duration-300 group-open:rotate-180">
              <ChevronIcon width={16} height={16} />
            </span>
          </summary>
          <div className="pb-6 pr-12 text-[1rem] leading-relaxed text-stone">
            <p><RichText text={f.a} /></p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function StillHaveQuestions() {
  return (
    <div className="card-lux mt-10 flex flex-col gap-6 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="font-serif text-2xl text-forest">Still have questions? Contact {site.name}.</p>
        <p className="mt-2 text-stone">Our team is happy to help you choose a treatment and check availability.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon /> WhatsApp</a>
        <a href={telLink} className="btn btn-outline"><PhoneIcon /> {site.phoneE164}</a>
        <a href={mailLink} className="btn btn-outline"><MailIcon /> Email</a>
        <Link href="/book-appointment/" className="btn btn-primary">Book appointment</Link>
      </div>
    </div>
  );
}
