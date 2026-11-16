import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1" opacity=".55" />
      <path d="M20 9c-4.5 5.2-4.5 10.4 0 15.6 4.5-5.2 4.5-10.4 0-15.6Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M20 24.6c-5.4-1-9.1-4.1-10.6-8.9 5.2.1 9 2.7 10.6 8.9Zm0 0c5.4-1 9.1-4.1 10.6-8.9-5.2.1-9 2.7-10.6 8.9Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 29h16" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-forest" : "text-ivory";
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${color}`}>
      <LogoMark className="h-10 w-10 text-gold transition-transform duration-500 group-hover:rotate-12" />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-serif text-[1.65rem] font-medium tracking-wide">
          Twincity<span className={tone === "dark" ? "text-gold-deep" : "text-gold"}>Spa</span>
        </span>
        <span className={`mt-1 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.32em] ${tone === "dark" ? "text-stone" : "text-cream/80"}`}>
          Luxury Spa &amp; Massage
        </span>
        <span className="sr-only"> — home</span>
      </span>
    </Link>
  );
}
