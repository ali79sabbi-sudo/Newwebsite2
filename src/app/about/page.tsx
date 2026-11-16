import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

const path = "/about/";
const title = "About TwincitySpa | Luxury Spa in Bahria Town Phase 7";
const description =
  "Learn about TwincitySpa — a calm, professional massage and spa centre in Bahria Town Phase 7, Rawalpindi, built on care, privacy and hygiene.";
export const metadata = buildMetadata({ title, description, path, image: images.massageBedIlluminatedWall });

const crumbs = [{ name: "Home", path: "/" }, { name: "About", path }];

const values = [
  { title: "Calm", text: "Quiet rooms, soft lighting and an unhurried pace. We protect the stillness of every appointment." },
  { title: "Care", text: "A consultation before every treatment. Your preferences, comfort and health come first." },
  { title: "Cleanliness", text: "Fresh linen for every guest, cleaned surfaces and equipment, and strict hand hygiene." },
  { title: "Conduct", text: "Professional massage only. Proper draping, clear boundaries and respect at all times." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description, type: "AboutPage" }), breadcrumbLd(crumbs))} />
      <PageHero image={images.massageBedIlluminatedWall} eyebrow="About us" title="About TwincitySpa" crumbs={crumbs} lead={<p>A luxury massage and spa centre in Bahria Town Phase 7, Rawalpindi — built around calm, care and professional standards.</p>} />

      <section className="py-16 lg:py-24">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
          <div className="prose-lux text-[1.08rem]">
            <p className="font-serif text-[1.6rem] leading-snug text-forest">
              TwincitySpa was created with a simple idea: people in Rawalpindi and Islamabad deserve a spa that feels genuinely calm, spotlessly clean and completely professional.
            </p>
            <p>
              Our name reflects the community we serve. Located in <Link href="/massage-center-bahria-town-phase-7/">Bahria Town Phase 7</Link>, we sit between the twin cities and welcome guests from across Bahria Town, DHA Islamabad and beyond.
            </p>
            <p>
              We offer <Link href="/massage-services/">14 professional massage treatments</Link> — from a classic Swedish massage to hot stone, Thai, Balinese and four hands. Every appointment starts with a short consultation, because the best massage is the one tailored to you.
            </p>
            <p>
              We are proud to offer professional massage and wellness treatments only. That commitment shapes everything: how our rooms are prepared, how our therapists communicate, and how we answer every enquiry.
            </p>
          </div>
          <div className="gold-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
            <Image src={images.candlelitTreatmentRoom.src} alt={images.candlelitTreatmentRoom.alt} fill quality={70} sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream/60 py-16 lg:py-24">
        <div className="container-lux">
          <SectionHeading align="center" eyebrow="Our promise" title="Four things we never compromise on" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title} className="card-lux p-8">
                <span className="font-serif text-4xl text-gold">0{i + 1}</span>
                <h3 className="mt-3 text-3xl">{v.title}</h3>
                <p className="mt-3 text-stone">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-lux grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Hygiene" title="Our cleanliness standards" />
            <ul className="prose-lux mt-6">
              <li>Fresh, laundered linen and towels for every guest</li>
              <li>Massage beds, surfaces and equipment cleaned between appointments</li>
              <li>Therapists wash their hands before and after every treatment</li>
              <li>Oils stored hygienically and dispensed — never shared from open bowls between guests</li>
              <li>Well-ventilated rooms prepared before each session</li>
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Professional conduct" title="Respect, privacy and consent" />
            <ul className="prose-lux mt-6">
              <li>Private treatment rooms and professional draping</li>
              <li>Your consent and comfort guide every part of the session</li>
              <li>You can ask to change pressure or stop at any time</li>
              <li>Professional massage only — inappropriate requests end the appointment</li>
              <li>Your personal details are kept confidential (see our <Link href="/privacy-policy/">privacy policy</Link>)</li>
            </ul>
          </div>
        </div>
        <div className="container-lux mt-12">
          <p className="placeholder-note">
            <strong>Owner note:</strong> Add TwincitySpa’s founding year, team background and any genuine certifications here once confirmed. Placeholder content has been intentionally kept factual.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
