"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/data/nav";
import { Logo } from "./Logo";
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { site, telLink, whatsappLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [dropdown, setDropdown] = useState<string | null>(null); // desktop dropdown
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menus on navigation (adjust state during render when the route changes).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
    setDropdown(null);
    setMobileSection(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (open) menuButtonRef.current?.focus();
        setOpen(false);
        setDropdown(null);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setDropdown(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled || open ? "bg-ivory shadow-[0_6px_30px_-20px_rgb(40_39_37/0.5)]" : "bg-ivory"
      }`}
    >
      {/* Top info bar */}
      <div className="hidden border-b border-beige/50 bg-forest text-[0.8rem] text-cream md:block on-dark">
        <div className="container-lux flex h-9 items-center justify-between gap-4">
          <p className="tracking-wide">Bahria Town Phase 7 · Rawalpindi<span className="hidden lg:inline"> · Serving Bahria Town, DHA &amp; Islamabad</span> · <span className="text-gold-light">Open daily 12 PM – 5 AM</span></p>
          <div className="flex items-center gap-5">
            <a href={telLink} className="inline-flex items-center gap-1.5 hover:text-gold">
              <PhoneIcon width={14} height={14} /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a>
          </div>
        </div>
      </div>

      <div className="container-lux flex h-[4.5rem] items-center justify-between gap-4 lg:h-20" ref={navRef}>
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label} className="relative" onMouseEnter={() => setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}>
                  <button
                    type="button"
                    className={`inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-full px-2.5 text-[0.9rem] font-medium transition-colors hover:text-gold-deep ${
                      isActive(item.href) ? "text-gold-deep" : "text-charcoal"
                    }`}
                    aria-expanded={dropdown === item.label}
                    aria-controls={`menu-${item.label}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDropdown(dropdown === item.label ? null : item.label);
                    }}
                  >
                    {item.label}
                    <ChevronIcon width={14} height={14} className={`transition-transform ${dropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    id={`menu-${item.label}`}
                    hidden={dropdown !== item.label}
                    className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-2"
                  >
                    <div className="card-lux grid grid-cols-2 gap-x-4 gap-y-0.5 p-5">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={`rounded-lg px-3 py-2 text-[0.92rem] transition-colors hover:bg-cream ${pathname === c.href ? "bg-cream text-forest" : "text-charcoal"}`}
                        >
                          {c.label}
                        </Link>
                      ))}
                      <Link href={item.allHref!} className="col-span-2 mt-2 border-t border-beige/60 px-3 pt-3 text-sm font-semibold uppercase tracking-wider text-gold-deep hover:text-forest">
                        {item.allLabel} →
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-2.5 text-[0.9rem] font-medium transition-colors hover:text-gold-deep ${
                      isActive(item.href) ? "text-gold-deep" : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/book-appointment/" className="btn btn-primary hidden whitespace-nowrap !min-h-11 !px-5 !text-[0.78rem] sm:inline-flex">
            Book Appointment
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-beige text-forest xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-ivory xl:hidden md:top-[calc(4.5rem+2.25rem)] lg:top-[calc(5rem+2.25rem)]"
      >
        <nav aria-label="Mobile" className="container-lux pb-36 pt-4">
          <ul className="divide-y divide-beige/60">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left font-serif text-2xl text-forest"
                    aria-expanded={mobileSection === item.label}
                    aria-controls={`m-${item.label}`}
                    onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronIcon className={`transition-transform ${mobileSection === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <ul id={`m-${item.label}`} hidden={mobileSection !== item.label} className="grid grid-cols-1 gap-0.5 pb-4 sm:grid-cols-2">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded-lg px-3 py-2.5 text-[0.98rem] text-charcoal hover:bg-cream">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href={item.allHref!} className="block px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-gold-deep">
                        {item.allLabel} →
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} className="block py-4 font-serif text-2xl text-forest" aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/book-appointment/" className="btn btn-primary w-full">Book Appointment</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href={telLink} className="btn btn-outline w-full">
              <PhoneIcon /> Call {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
