"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SpaImage } from "@/lib/images";
import { ArrowIcon, CloseIcon } from "./Icons";

/** Masonry-style gallery with an accessible <dialog> lightbox (keyboard: ← → Esc). */
export function Gallery({ items }: { items: (SpaImage & { caption: string })[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (index !== null && !dlg.open) dlg.showModal();
    if (index === null && dlg.open) {
      dlg.close();
      triggerRef.current?.focus();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index !== null ? items[index] : null;

  return (
    <>
      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((img, i) => (
          <li key={img.src} className="mb-5 break-inside-avoid">
            <figure className="gold-frame gold-inset group rounded-2xl shadow-soft">
              <button
                type="button"
                className="block w-full overflow-hidden rounded-t-[calc(1rem-3px)]"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setIndex(i);
                }}
              >
                <span className="sr-only">Open larger image: </span>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  quality={70}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="px-4 py-3 text-sm text-stone">{img.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label={current ? current.caption : "Image viewer"}
        className="m-auto max-h-[92vh] w-[min(92vw,1200px)] overflow-visible bg-transparent p-0 backdrop:bg-charcoal/90"
      >
        {current && (
          <div className="relative">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              quality={80}
              sizes="92vw"
              className="mx-auto h-auto max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-cream">{current.caption} · {index! + 1} / {items.length}</p>
            <div className="mt-3 flex justify-center gap-3">
              <button type="button" onClick={() => step(-1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-forest">
                <ArrowIcon className="rotate-180" /><span className="sr-only">Previous image</span>
              </button>
              <button type="button" onClick={close} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-forest">
                <CloseIcon /><span className="sr-only">Close</span>
              </button>
              <button type="button" onClick={() => step(1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-forest">
                <ArrowIcon /><span className="sr-only">Next image</span>
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
