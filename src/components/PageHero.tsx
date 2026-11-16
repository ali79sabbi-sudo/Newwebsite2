import Image from "next/image";
import type { ReactNode } from "react";
import type { SpaImage } from "@/lib/images";
import type { Crumb } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";

/** Interior page hero: full-bleed photo with dark overlay, breadcrumb, H1. */
export function PageHero({
  image,
  eyebrow,
  title,
  lead,
  crumbs,
  children,
  position = "center",
}: {
  image: SpaImage;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
  position?: string;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-forest">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        preload
        fetchPriority="high"
        quality={70}
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: position }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/25" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-charcoal/40 to-transparent" />
      <div className="container-lux py-16 sm:py-20 lg:py-28">
        <Breadcrumbs crumbs={crumbs} />
        <div className="reveal mt-8 max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-[2.5rem] leading-[1.05] text-ivory sm:text-5xl lg:text-[4rem]">{title}</h1>
          {lead && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/90">{lead}</div>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
