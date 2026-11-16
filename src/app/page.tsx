import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { buildMetadata, faqLd, graph, webPageLd } from "@/lib/seo";
import { site, telLink, whatsappLink } from "@/lib/site";
import { services, featuredServiceSlugs } from "@/data/services";
import { locations } from "@/data/locations";
import { homeFaqs } from "@/data/faqs";
import { reviews } from "@/data/reviews";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqList, StillHaveQuestions } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ImageSlider } from "@/components/ImageSlider";
import { ArrowIcon, ClockIcon, DropIcon, HandsIcon, LeafIcon, PhoneIcon, PinIcon, ShieldIcon, SparkleIcon, WhatsAppIcon } from "@/components/Icons";

const title = "Luxury Massage Center in Bahria Town Rawalpindi | TwincitySpa";
const description =
  "TwincitySpa is a luxury massage centre in Bahria Town Phase 7, Rawalpindi. Full body, Thai, hot stone, deep tissue & couples massage. Book on WhatsApp.";

export const metadata = buildMetadata({ title, description, path: "/" });

const featured = featuredServiceSlugs.map((s) => services.find((x) => x.slug === s)!);

const reasons = [
  { icon: HandsIcon, title: "Professional therapists", text: "Every treatment begins with a consultation, and your preferences on pressure and focus areas are respected throughout." },
  { icon: ShieldIcon, title: "Privacy & respect", text: "Private treatment rooms, professional draping and a strict code of conduct. Professional massage only — always." },
  { icon: DropIcon, title: "Spotless hygiene", text: "Fresh linen and towels for every guest, surfaces cleaned between appointments, and strict hand hygiene." },
  { icon: LeafIcon, title: "Calm, luxurious rooms", text: "Warm lighting, quiet music and carefully prepared rooms designed to help you switch off from the moment you arrive." },
  { icon: SparkleIcon, title: "14 treatments", text: "From a classic Swedish massage to hot stone, Thai, Balinese and four hands — a treatment for every need and mood." },
  { icon: PinIcon, title: "Easy to reach", text: "Based in Bahria Town Phase 7, close to DHA Islamabad and reachable from Rawalpindi and Islamabad." },
];

const experienceSlides = [
  { ...images.marigoldFloatingCandlesWelcome, caption: "A warm welcome — candles and fresh marigolds" },
  { ...images.shoulderMassageSouthAsianMaleClient, caption: "Unhurried shoulder and neck work" },
  { ...images.seatedNeckShoulderMassageTraditionalRoom, caption: "Consultation-led, tailored treatments" },
  { ...images.hotStonePlacementTherapist, caption: "Signature hot stone massage" },
  { ...images.herbalCompressMassageLegs, caption: "Warm herbal compress techniques" },
  { ...images.candlesElephantFigurinesSpaDecor, caption: "Calm, candlelit surroundings" },
];

const steps = [
  { n: "01", title: "Enquire", text: "Message us on WhatsApp or call. Tell us the treatment, date and time you prefer." },
  { n: "02", title: "Confirm", text: "Our team confirms availability and your session — 30 minutes (PKR 3,000) or 1 hour (PKR 6,000)." },
  { n: "03", title: "Arrive & consult", text: "A calm welcome and a short consultation on pressure, focus areas and any health notes." },
  { n: "04", title: "Relax & restore", text: "Your treatment in a private room — followed by a few unhurried minutes to come back to the day." },
];

const pairings = [
  { title: "Desk-Day Reset", items: ["Back massage", "Head & shoulder massage"], links: ["back-massage", "head-shoulder-massage"], text: "For tight shoulders after long weeks at a screen.", price: "2 × 30 min · PKR 6,000" },
  { title: "Warm Escape", items: ["Hot stone massage", "Aromatherapy"], links: ["hot-stone-massage", "aromatherapy-massage"], text: "Our most comforting combination for cooler evenings.", price: "2 × 30 min · PKR 6,000" },
  { title: "Together Time", items: ["Couples massage", "Your choice of treatments"], links: ["couples-massage"], text: "Side-by-side treatments for spouses, family or friends.", price: "From PKR 3,000 per guest" },
];

export default function HomePage() {
  const jsonLd = graph(webPageLd({ path: "/", name: title, description, image: images.hotStoneMassageTherapistLuxuryTreatmentRoom }), faqLd(homeFaqs, "/"));
  const primaryAreas = locations;

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ───────── HERO ───────── */}
      <section className="on-dark relative isolate overflow-hidden bg-charcoal">
        <Image
          src={images.hotStoneMassageTherapistLuxuryTreatmentRoom.src}
          alt={images.hotStoneMassageTherapistLuxuryTreatmentRoom.alt}
          fill
          preload
          fetchPriority="high"
          quality={70}
          sizes="100vw"
          className="-z-10 object-cover object-[65%_center]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/90 via-charcoal/65 to-charcoal/10" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-charcoal/70 to-transparent" />
        <div className="container-lux flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-20 md:min-h-[44rem] lg:min-h-[48rem]">
          <div className="reveal max-w-2xl">
            <p className="eyebrow flex items-center gap-3"><span className="gold-rule" aria-hidden />Bahria Town Phase 7 · Rawalpindi</p>
            <h1 className="mt-5 text-[2.75rem] leading-[1.02] text-ivory sm:text-6xl lg:text-[5.1rem]">
              Discover the Art of <em className="font-normal text-gold">Relaxation</em> at TwincitySpa
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
              Experience professional massage and wellness treatments in a peaceful, luxurious environment at Bahria Town Phase 7, Rawalpindi.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment/" className="btn btn-gold">Book Your Appointment</Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-cream/85">
              <span className="font-serif text-xl italic">{site.tagline}</span>
              <span aria-hidden className="hidden h-4 w-px bg-cream/40 sm:block" />
              <span className="inline-flex items-center gap-2 text-sm tracking-wide"><ClockIcon width={16} height={16} className="text-gold" /> Open every day · 12 PM – 5 AM</span>
            </p>
          </div>
        </div>
      </section>

      {/* ───────── INTRO ───────── */}
      <section className="py-20 lg:py-28">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="gold-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:w-4/5">
              <Image src={images.massageBedIlluminatedWall.src} alt={images.massageBedIlluminatedWall.alt} fill quality={70} sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 right-0 hidden aspect-square w-[46%] gold-frame overflow-hidden rounded-[1.5rem] shadow-lift sm:block">
              <Image src={images.backMassageHandsDetail.src} alt={images.backMassageHandsDetail.alt} fill quality={70} sizes="25vw" className="object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Welcome to TwincitySpa"
              title={<>A quieter world, <em className="text-gold-deep">moments from home</em></>}
              lead={
                <>
                  <p>
                    TwincitySpa is a luxury massage and spa centre in Bahria Town Phase 7, created for people across Rawalpindi and Islamabad who want professional treatments in a genuinely calm setting.
                  </p>
                  <p className="mt-4">
                    From the soft lighting and fresh linen to the consultation before every session, each detail is designed so you can stop, breathe and let your therapist take care of the rest — whether you choose a{" "}
                    <Link href="/full-body-massage/" className="link-lux">full body massage</Link>, a stretching{" "}
                    <Link href="/thai-massage/" className="link-lux">Thai massage</Link> or a warming{" "}
                    <Link href="/hot-stone-massage/" className="link-lux">hot stone treatment</Link>.
                  </p>
                </>
              }
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about/" className="btn btn-outline">Our story <ArrowIcon width={16} height={16} /></Link>
              <Link href="/massage-services/" className="btn btn-primary">Explore treatments</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FEATURED TREATMENTS ───────── */}
      <section className="bg-cream/60 py-20 lg:py-28" aria-labelledby="featured-heading">
        <div className="container-lux">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading id="featured-heading" eyebrow="Signature treatments" title="Massage treatments in Rawalpindi" lead="Six of our most-loved treatments. Each is tailored to your preferred pressure and focus areas." />
            <Link href="/massage-services/" className="btn btn-outline shrink-0">View all 14 treatments</Link>
          </div>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WHY CHOOSE ───────── */}
      <section className="py-20 lg:py-28" aria-labelledby="why-heading">
        <div className="container-lux">
          <SectionHeading id="why-heading" align="center" eyebrow="Why TwincitySpa" title="Why guests choose TwincitySpa" lead="We believe a truly luxurious spa is defined by care, cleanliness and professionalism — not just décor." />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-beige/60 bg-beige/60 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <li key={r.title} className="bg-ivory p-8 lg:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold-deep"><r.icon width={22} height={22} /></span>
                <h3 className="mt-5 text-2xl">{r.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-stone">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── EXPERIENCE ───────── */}
      <section className="on-dark relative overflow-hidden bg-forest py-20 lg:py-28" aria-labelledby="exp-heading">
        <div className="container-lux grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">The TwincitySpa experience</p>
            <h2 id="exp-heading" className="mt-4 text-4xl text-ivory sm:text-5xl">From first message to final exhale</h2>
            <p className="mt-5 text-lg text-cream/80">Booking a massage should feel as easy as the treatment itself. Here is what to expect.</p>
            <ImageSlider className="mt-10" label="Inside the TwincitySpa experience" slides={experienceSlides} />
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:self-center">
            {steps.map((s) => (
              <li key={s.n} className="gold-border on-forest rounded-[1.25rem] p-7">
                <span className="font-serif text-5xl text-gold">{s.n}</span>
                <h3 className="mt-3 text-2xl text-ivory">{s.title}</h3>
                <p className="mt-2 text-cream/80">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── PACKAGES ───────── */}
      <section className="py-20 lg:py-28" aria-labelledby="pkg-heading">
        <div className="container-lux">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading id="pkg-heading" eyebrow="Popular pairings" title="Massage packages & combinations" lead="Popular ways guests combine treatments. Every treatment is PKR 3,000 for 30 minutes or PKR 6,000 for 1 hour — so a pairing of two 30-minute treatments is simply PKR 6,000." />
            <Link href="/massage-prices/" className="btn btn-outline shrink-0">Prices &amp; packages</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pairings.map((p, i) => (
              <article key={p.title} className={`card-lux flex flex-col p-8 ${i === 1 ? "md:-translate-y-4 border-gold/60" : ""}`}>
                <p className="eyebrow">{i === 1 ? "Guest favourite" : "Pairing"}</p>
                <h3 className="mt-3 text-3xl">{p.title}</h3>
                <p className="mt-3 text-stone">{p.text}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-forest"><span className="h-px w-5 bg-gold" aria-hidden />{it}</li>
                  ))}
                </ul>
                <p className="mt-6 font-serif text-2xl text-forest">{p.price}</p>
                <a
                  href={whatsappLink(`Hello TwincitySpa, I'm interested in the "${p.title}" combination (${p.items.join(" + ")}). What times are available?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp mt-5"
                >
                  <WhatsAppIcon /> Ask about {p.title}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── THERAPISTS ───────── */}
      <section className="bg-cream/60 py-20 lg:py-28" aria-labelledby="ther-heading">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="ther-heading"
              eyebrow="Our therapists"
              title="Skilled hands, professional standards"
              lead="Our therapists combine attentive technique with clear, respectful communication. They will always check your comfort, pressure and boundaries — and you can ask them to adjust or stop at any time."
            />
            <ul className="mt-8 space-y-3 text-forest">
              {["Consultation before every treatment", "Professional draping and privacy", "Pressure tailored to you", "Therapist preferences welcomed — availability confirmed at booking"].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-3 h-px w-5 shrink-0 bg-gold" aria-hidden />{t}</li>
              ))}
            </ul>
            <Link href="/therapists/" className="btn btn-primary mt-9">Meet our approach</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="gold-frame relative mt-10 aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-soft">
              <Image src={images.shoulderMassageSouthAsianMaleClient.src} alt={images.shoulderMassageSouthAsianMaleClient.alt} fill quality={70} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="gold-frame relative aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-soft">
              <Image src={images.therapistUniformPortraitAtWork.src} alt={images.therapistUniformPortraitAtWork.alt} fill quality={70} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── GALLERY STRIP ───────── */}
      <section className="py-20 lg:py-28" aria-labelledby="gal-heading">
        <div className="container-lux">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading id="gal-heading" eyebrow="Gallery" title="Spaces designed for stillness" />
            <Link href="/gallery/" className="btn btn-outline shrink-0">View gallery</Link>
          </div>
          <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-4 md:auto-rows-[14rem] md:grid-cols-4">
            {[
              { img: images.couplesMassageRoomWarmLighting, cls: "row-span-2" },
              { img: images.minimalWhiteTreatmentRoom, cls: "" },
              { img: images.hotStoneMassageBrightSpaRoom, cls: "" },
              { img: images.treatmentRoomGreenWalls, cls: "row-span-2" },
              { img: images.darkMarbleTreatmentSuite, cls: "md:col-span-2" },
            ].map(({ img, cls }) => (
              <div key={img.src} className={`gold-frame relative overflow-hidden rounded-[1.25rem] ${cls}`}>
                <Image src={img.src} alt={img.alt} fill quality={70} sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-stone">Representative photography. Genuine TwincitySpa interior photos will be added soon.</p>
        </div>
      </section>

      {/* ───────── LOCATION ───────── */}
      <section className="bg-cream/60 py-20 lg:py-28" aria-labelledby="loc-heading">
        <div className="container-lux grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="loc-heading"
              eyebrow="Location & service area"
              title="In Bahria Town Phase 7 — welcoming the twin cities"
              lead={
                <p>
                  TwincitySpa has <strong className="text-forest">one location in Bahria Town Phase 7, Rawalpindi</strong>. Guests visit us from across Bahria Town, neighbouring DHA Islamabad and the wider Rawalpindi–Islamabad area. We share our exact location pin on WhatsApp when your appointment is confirmed.
                </p>
              }
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappLink("Hello TwincitySpa, could you please share your location pin in Bahria Town Phase 7?")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon /> Get location pin</a>
              <a href={telLink} className="btn btn-outline"><PhoneIcon /> {site.phoneDisplay}</a>
            </div>
          </div>
          <div className="card-lux p-8">
            <h3 className="text-2xl">Guests visit us from</h3>
            <ul className="mt-5 grid gap-1 sm:grid-cols-2">
              {primaryAreas.map((l) => (
                <li key={l.slug}>
                  <Link href={`/${l.slug}/`} className="group flex min-h-11 items-center justify-between gap-2 rounded-lg px-3 py-2 hover:bg-cream">
                    <span className="text-forest">{l.isHome ? <><strong>{l.name}</strong> <span className="text-xs text-gold-deep">· our spa</span></> : l.name}</span>
                    <ArrowIcon width={16} height={16} className="text-gold-deep transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-beige/60 pt-4 text-sm text-stone">Also welcoming guests from Rawalpindi and Islamabad. Travel times vary with traffic — please check Google Maps from your starting point.</p>
          </div>
        </div>
      </section>

      {/* ───────── REVIEWS (verified only) ───────── */}
      {reviews.length > 0 && (
        <section className="py-20 lg:py-28" aria-labelledby="rev-heading">
          <div className="container-lux">
            <SectionHeading id="rev-heading" align="center" eyebrow="Guest reviews" title="Kind words from our guests" />
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <li key={r.author + r.date} className="card-lux p-8">
                  <blockquote className="font-serif text-xl leading-relaxed text-forest">“{r.text}”</blockquote>
                  <p className="mt-5 text-sm text-stone">— {r.author}, {r.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ───────── FAQ ───────── */}
      <section className="py-20 lg:py-28" aria-labelledby="faq-heading">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-heading" eyebrow="Questions" title="Frequently asked questions" lead={<p>Quick answers about TwincitySpa. See our <Link href="/faqs/" className="link-lux">full FAQ page</Link> for more.</p>} />
          </div>
          <div className="lg:col-span-8">
            <FaqList items={homeFaqs} />
            <StillHaveQuestions />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
