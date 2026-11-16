import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, faqLd, graph, webPageLd } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqList, StillHaveQuestions } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/Icons";

const path = "/therapists/";
const title = "Professional Massage Therapists in Rawalpindi | TwincitySpa";
const description =
  "How TwincitySpa’s massage therapists work: consultation, professional draping, respect and tailored pressure. Ask about therapist availability on WhatsApp.";
export const metadata = buildMetadata({ title, description, path, image: images.therapistRedUniformBackMassage });

const crumbs = [{ name: "Home", path: "/" }, { name: "Our Therapists", path }];

/**
 * Real therapist profiles go here once confirmed (name or first name, specialities,
 * genuine qualifications). Never publish invented credentials or stock models as staff.
 */
type Therapist = { name: string; specialities: string[]; bio: string; image?: { src: string; alt: string; width: number; height: number } };
const therapists: Therapist[] = [];

const faqs = [
  { q: "Can I request a female therapist?", a: "Yes. Mention your preference when booking and our team will confirm which therapists are available at your chosen time." },
  { q: "Can male guests book with a female therapist?", a: "Please state your preference when you enquire. Availability is confirmed directly by our team, and every treatment follows the same professional standards." },
  { q: "Can I request a male therapist?", a: "You can state any preference. We will confirm availability before your appointment." },
  { q: "Will the therapist ask about my health?", a: "Yes. A short consultation covers pressure, focus areas and any health information, so treatments can be adapted or avoided where needed." },
  { q: "What if I feel uncomfortable during a session?", a: "Tell your therapist straight away. You can ask them to change pressure, avoid an area or stop the session at any time." },
  { q: "Do therapists offer anything beyond professional massage?", a: "No. TwincitySpa provides professional massage only. Inappropriate requests or behaviour end the appointment immediately." },
];

const teamPhotos = [
  { ...images.therapistRedUniformBackMassage, caption: "Back & shoulder specialists", pos: "60% center" },
  { ...images.therapistUniformPortraitAtWork, caption: "Attentive, consultation-led care", pos: "center 30%" },
  { ...images.therapistHotStoneBackTreatment, caption: "Hot stone treatments", pos: "65% center" },
  { ...images.therapistFacialMassageUniform, caption: "Gentle head & face techniques", pos: "center 30%" },
];

const standards = [
  { t: "Consultation first", d: "Pressure, focus areas and health notes are discussed before every treatment." },
  { t: "Professional draping", d: "You remain covered at all times; only the area being worked on is uncovered." },
  { t: "Clear communication", d: "Your therapist checks in on comfort and pressure — and welcomes feedback." },
  { t: "Consent & boundaries", d: "You can ask to change, skip or stop anything, at any time." },
  { t: "Hygiene", d: "Hands washed before and after every treatment; fresh linen for each guest." },
  { t: "Discretion", d: "Your visit and personal details are kept confidential." },
];

export default function TherapistsPage() {
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs), faqLd(faqs, path))} />
      <PageHero image={images.therapistRedUniformBackMassage} position="center 35%" eyebrow="Our team" title="Our Professional Massage Therapists" crumbs={crumbs} lead={<p>Attentive technique, clear communication and respect for your comfort — in every treatment.</p>} />

      <section className="py-16 lg:py-24">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How our therapists work" title="Professional standards in every session" lead="Great massage is about more than technique. It is about listening, adapting and making sure you feel safe and comfortable from start to finish." />
            <p className="mt-6 text-stone">
              Our therapists offer the full range of treatments on our <Link href="/massage-services/" className="link-lux">massage menu</Link>, from gentle <Link href="/relaxation-massage/" className="link-lux">relaxation</Link> to firm <Link href="/deep-tissue-massage/" className="link-lux">deep tissue</Link> work.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="gold-frame relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
              <Image src={images.therapistApplyingMassagePressure.src} alt={images.therapistApplyingMassagePressure.alt} fill quality={70} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="gold-frame relative mt-10 aspect-[3/4] overflow-hidden rounded-[1.5rem]">
              <Image src={images.therapistPreparingTraditionalMassage.src} alt={images.therapistPreparingTraditionalMassage.alt} fill quality={70} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <p className="col-span-2 text-xs text-stone">Representative photography — not TwincitySpa staff.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/60 py-16 lg:py-24" aria-labelledby="team-at-work">
        <div className="container-lux">
          <SectionHeading id="team-at-work" align="center" eyebrow="Our team at work" title="Friendly, skilled and professional" lead="Our therapists bring warmth, care and attentive technique to every treatment — always with professional standards and respect." />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {teamPhotos.map((t, i) => (
              <li key={t.src} className={i % 2 ? "lg:mt-10" : ""}>
                <figure>
                  <div className="gold-frame relative aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-soft">
                    <Image src={t.src} alt={t.alt} fill quality={70} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" style={{ objectPosition: t.pos }} />
                  </div>
                  <figcaption className="mt-3 text-center text-sm text-stone">{t.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-xs text-stone">Representative photography. Photos of the TwincitySpa team will be added soon.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-lux">
          <SectionHeading align="center" eyebrow="Our standards" title="What you can expect from every therapist" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((s) => (
              <li key={s.t} className="card-lux p-7">
                <h3 className="text-2xl">{s.t}</h3>
                <p className="mt-2 text-stone">{s.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-lux">
          <SectionHeading eyebrow="Therapist availability" title="Requesting a therapist" lead="You are welcome to share a therapist preference — including a female or male therapist — when you book. Availability varies by day and time, so our team confirms it before your appointment." />
          <a href={whatsappLink("Hello TwincitySpa, I'd like to ask about therapist availability for an appointment.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-8"><WhatsAppIcon /> Ask about availability</a>
          {therapists.length === 0 ? (
            <p className="placeholder-note mt-10">
              <strong>Owner note:</strong> Therapist profiles (first names, specialities and genuine qualifications) will be added once confirmed. We never present stock models as our staff or list unverified credentials.
            </p>
          ) : (
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {therapists.map((t) => (
                <li key={t.name} className="card-lux p-7">
                  <h3 className="text-2xl">{t.name}</h3>
                  <p className="mt-1 text-sm text-gold-deep">{t.specialities.join(" · ")}</p>
                  <p className="mt-3 text-stone">{t.bio}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="bg-cream/60 py-16 lg:py-24">
        <div className="container-lux max-w-4xl">
          <h2 className="text-4xl sm:text-5xl">Therapist FAQs</h2>
          <div className="mt-8"><FaqList items={faqs} /></div>
          <StillHaveQuestions />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
