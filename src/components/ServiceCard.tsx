import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/types";
import { serviceWhatsAppMessage, whatsappLink } from "@/lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import { formatPrice } from "@/data/pricing";

export function ServiceCard({ service, headingLevel = "h3" }: { service: Service; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  const href = `/${service.slug}/`;
  return (
    <article className="group card-lux gold-inset flex flex-col transition-shadow duration-500 hover:shadow-lift">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden rounded-t-[calc(1.25rem-2px)]" tabIndex={-1} aria-hidden>
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          quality={70}
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest">
          {service.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <H className="text-[1.75rem]">
          <Link href={href} className="hover:text-gold-deep">{service.name}</Link>
        </H>
        <p className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-stone">{service.excerpt}</p>
        <dl className="mt-5 grid grid-cols-2 gap-2">
          {service.rates.map((r) => (
            <div key={r.minutes} className="rounded-xl bg-cream/60 px-3 py-2 text-center">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-deep">{r.label}</dt>
              <dd className="font-serif text-xl text-forest">{formatPrice(r.amount)}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-beige/60 pt-5">
          <Link href={href} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-forest hover:text-gold-deep">
            View details <ArrowIcon width={16} height={16} /> <span className="sr-only">about {service.name}</span>
          </Link>
          <Link
            href={`/book-appointment/?treatment=${service.slug}`}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-gold-deep hover:text-forest"
          >
            Book this massage<span className="sr-only">: {service.name}</span>
          </Link>
          <a
            href={whatsappLink(serviceWhatsAppMessage(service.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp text-white transition-transform hover:scale-105"
          >
            <WhatsAppIcon />
            <span className="sr-only">WhatsApp enquiry about {service.name}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
