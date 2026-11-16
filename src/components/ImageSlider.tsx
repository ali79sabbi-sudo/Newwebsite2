"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { SpaImage } from "@/lib/images";
import { ArrowIcon } from "./Icons";

type Slide = SpaImage & { caption: string };

/**
 * Accessible cross-fade image slider.
 * - Autoplays every `interval` ms; pauses on hover/focus, when the tab is hidden,
 *   and never autoplays for users who prefer reduced motion.
 * - Prev/next buttons, dot navigation and ← → keys when focused.
 */
export function ImageSlider({
  slides,
  label,
  interval = 4500,
  className = "",
  sizes = "(min-width:1024px) 40vw, 100vw",
  tone = "dark",
}: {
  slides: Slide[];
  label: string;
  interval?: number;
  className?: string;
  sizes?: string;
  tone?: "dark" | "light";
}) {
  const id = useId();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setInterval(() => {
      if (!document.hidden) go(1);
    }, interval);
    return () => window.clearInterval(t);
  }, [paused, go, interval, count]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className={`group/slider ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="gold-frame relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-lift">
        {slides.map((s, i) => (
          <div
            key={s.src}
            id={`${id}-slide-${i}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${s.caption}`}
            aria-hidden={i !== index}
            data-slide
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              quality={70}
              sizes={sizes}
              className={`object-cover transition-transform duration-[6s] ease-out ${i === index ? "scale-105" : "scale-100"}`}
            />
          </div>
        ))}
        <div aria-hidden data-inset className="pointer-events-none absolute inset-x-0 bottom-0 top-auto h-28 bg-gradient-to-t from-charcoal/75 to-transparent" />
        <p aria-live={paused ? "polite" : "off"} className="absolute bottom-4 left-5 right-28 text-sm text-ivory">
          {slides[index].caption}
        </p>
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button type="button" onClick={() => go(-1)} aria-controls={`${id}-slide-${index}`} className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/90 text-forest transition hover:bg-gold hover:text-charcoal">
            <ArrowIcon width={18} height={18} className="rotate-180" />
            <span className="sr-only">Previous image</span>
          </button>
          <button type="button" onClick={() => go(1)} aria-controls={`${id}-slide-${index}`} className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/90 text-forest transition hover:bg-gold hover:text-charcoal">
            <ArrowIcon width={18} height={18} />
            <span className="sr-only">Next image</span>
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-1">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-current={i === index}
            className="flex h-11 w-8 items-center justify-center"
          >
            <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-7 bg-gold" : tone === "dark" ? "w-2.5 bg-cream/40" : "w-2.5 bg-beige"}`} />
            <span className="sr-only">Show image {i + 1}: {s.caption}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
