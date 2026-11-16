import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";

export const metadata: Metadata = { title: { absolute: "Page not found | TwincitySpa" }, robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="container-lux py-24 text-center lg:py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl sm:text-6xl">This page has drifted away</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-stone">The page you are looking for may have moved. Try one of these instead:</p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/massage-services/" className="btn btn-outline">Massage services</Link>
        <Link href="/book-appointment/" className="btn btn-outline">Book an appointment</Link>
      </div>
      <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2">
        {services.slice(0, 8).map((s) => (
          <li key={s.slug}><Link href={`/${s.slug}/`} className="inline-flex min-h-11 items-center rounded-full border border-beige px-4 text-sm text-forest hover:border-gold">{s.name}</Link></li>
        ))}
      </ul>
    </section>
  );
}
