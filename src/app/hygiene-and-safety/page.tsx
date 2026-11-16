import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, faqLd, graph, webPageLd } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqList, StillHaveQuestions } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { CheckIcon, DropIcon, HandsIcon, LeafIcon, ShieldIcon } from "@/components/Icons";

const path = "/hygiene-and-safety/";
const title = "Hygiene & Safety Standards | TwincitySpa Bahria Town";
const description =
  "How TwincitySpa keeps every treatment clean, safe and professional: fresh linen, sanitised rooms, health consultations, privacy and a strict code of conduct.";
export const metadata = buildMetadata({ title, description, path, image: images.massageRoomWoodenBlinds });

const crumbs = [{ name: "Home", path: "/" }, { name: "Hygiene & Safety", path }];

const pillars = [
  {
    icon: DropIcon,
    title: "Clean rooms & linen",
    items: ["Fresh, laundered sheets and towels for every guest", "Massage beds and face cradles wiped down between appointments", "Surfaces, door handles and shared areas cleaned regularly", "Rooms aired and prepared before each session"],
  },
  {
    icon: HandsIcon,
    title: "Therapist hygiene",
    items: ["Hands washed before and after every treatment", "Clean uniforms", "Short, clean nails", "Therapists who feel unwell do not treat guests"],
  },
  {
    icon: LeafIcon,
    title: "Products & oils",
    items: ["Oils dispensed hygienically — never shared from open bowls between guests", "Unscented oil available on request", "Tell us about allergies, including nut allergies", "Stones and tools cleaned after each use"],
  },
  {
    icon: ShieldIcon,
    title: "Safety & conduct",
    items: ["Short health consultation before every treatment", "Professional draping at all times", "You can change pressure or stop at any time", "Professional massage only — strictly enforced"],
  },
];

const faqs = [
  { q: "Is fresh linen used for every guest?", a: "Yes. Every guest receives freshly laundered sheets and towels, and the massage bed is cleaned between appointments." },
  { q: "What health information should I share?", a: "Please tell us about pregnancy, recent surgery or injuries, skin conditions, high or low blood pressure, heart conditions, diabetes, blood-thinning medication and allergies. Some treatments may need to be adapted or avoided." },
  { q: "What if I feel unwell on the day of my appointment?", a: "Please reschedule. Contact us as early as possible on WhatsApp — we appreciate guests who help keep everyone healthy." },
  { q: "Can I request unscented oil?", a: "Yes. Let us know when booking or during your consultation." },
  { q: "What happens if a guest behaves inappropriately?", a: "The appointment ends immediately. TwincitySpa provides professional massage only, and our therapists’ safety and dignity are protected." },
];

export default function HygienePage() {
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs), faqLd(faqs, path))} />
      <PageHero image={images.massageRoomWoodenBlinds} eyebrow="Our standards" title="Hygiene & Safety at TwincitySpa" crumbs={crumbs} lead={<p>Luxury begins with cleanliness. Here is exactly how we keep every treatment fresh, safe and professional.</p>} />

      <section className="py-16 lg:py-24">
        <div className="container-lux">
          <SectionHeading align="center" eyebrow="Four pillars" title="What we do for every guest, every time" />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <li key={p.title} className="card-lux p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold-deep"><p.icon width={22} height={22} /></span>
                <h2 className="mt-5 text-3xl">{p.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-3 text-[0.98rem]"><CheckIcon className="mt-1 shrink-0 text-gold-deep" />{i}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream/60 py-16 lg:py-24">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <div className="gold-frame relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
            <Image src={images.spaStillLifeOilsCandles.src} alt={images.spaStillLifeOilsCandles.alt} fill quality={70} sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="prose-lux">
            <h2>Your health comes first</h2>
            <p>Massage is a wellbeing treatment, not a medical one. That is why every session starts with a short consultation. If a treatment is not suitable for you, we will suggest a gentler alternative — or recommend you speak to your doctor first.</p>
            <p>Not sure which treatment is right? Read our guide on <Link href="/blog/how-to-choose-a-massage/">how to choose a massage</Link> or our <Link href="/first-visit-guide/">first visit guide</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-lux max-w-4xl">
          <h2 className="text-4xl sm:text-5xl">Hygiene & safety FAQs</h2>
          <div className="mt-8"><FaqList items={faqs} /></div>
          <StillHaveQuestions />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
