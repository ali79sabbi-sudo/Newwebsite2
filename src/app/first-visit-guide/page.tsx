import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, faqLd, graph, webPageLd } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlider } from "@/components/ImageSlider";
import { FaqList, StillHaveQuestions } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/Icons";

const path = "/first-visit-guide/";
const title = "Your First Massage Visit: What to Expect | TwincitySpa";
const description =
  "First time at a spa? A friendly guide to your first massage at TwincitySpa, Bahria Town Phase 7: booking, arrival, what to wear, consultation and etiquette.";
export const metadata = buildMetadata({ title, description, path, image: images.marigoldFloatingCandlesWelcome });

const crumbs = [{ name: "Home", path: "/" }, { name: "First Visit Guide", path }];

const timeline = [
  { t: "Before you book", d: "Decide how you want to feel afterwards — relaxed, looser, or energised. Not sure? Message us and we will recommend a treatment." },
  { t: "Booking", d: "Send your preferred treatment, date and time on WhatsApp. Choose 30 minutes (PKR 3,000) or 1 hour (PKR 6,000); we confirm availability before you travel." },
  { t: "The day of your visit", d: "Avoid a heavy meal in the hour before. Wear comfortable clothes and leave valuables at home if you can." },
  { t: "Arrival", d: "Arrive about 10 minutes early. You will be welcomed, offered water and shown where to relax." },
  { t: "Consultation", d: "A short, private chat about pressure, areas to focus on or avoid, and any health information." },
  { t: "Getting ready", d: "Your therapist leaves the room while you change and settle under the towel. For Thai massage you stay in loose clothing." },
  { t: "Your treatment", d: "Relax and breathe. Speak up at any time about pressure, temperature or comfort — feedback is welcome." },
  { t: "Afterwards", d: "Get up slowly, drink some water and take a few quiet minutes. See our aftercare tips." },
];

const etiquette = [
  "Arrive on time so you receive your full session",
  "Switch your phone to silent",
  "Tell your therapist about health conditions — it keeps you safe",
  "You choose how much you undress; you remain draped throughout",
  "Talking is optional — many guests prefer silence",
  "TwincitySpa provides professional massage only",
];

const faqs = [
  { q: "I have never had a massage. Which one should I choose?", a: "A [Swedish massage](/swedish-massage/) or [full body massage](/full-body-massage/) is a gentle, well-rounded first treatment." },
  { q: "Do I have to undress completely?", a: "No. Undress only to your comfort level. You remain covered with a towel throughout, and disposable underwear can be requested." },
  { q: "Is it okay to ask the therapist to stop?", a: "Absolutely. You can ask to change pressure, skip an area or stop at any time." },
  { q: "Should I talk during the massage?", a: "Only if you want to. Many guests prefer quiet; your therapist will follow your lead." },
  { q: "What if I feel shy or nervous?", a: "That is completely normal. Tell your therapist — they will explain each step. Foot reflexology or a head and shoulder massage are gentle, clothed options to start with." },
];

const slides = [
  { ...images.marigoldFloatingCandlesWelcome, caption: "A calm welcome" },
  { ...images.seatedNeckShoulderMassageTraditionalRoom, caption: "A short consultation and gentle start" },
  { ...images.relaxingBackMassageWhiteTowels, caption: "Professional draping with fresh towels" },
  { ...images.candlesElephantFigurinesSpaDecor, caption: "Quiet moments after your treatment" },
];

export default function FirstVisitPage() {
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs), faqLd(faqs, path))} />
      <PageHero image={images.marigoldFloatingCandlesWelcome} eyebrow="New to massage?" title="Your First Visit to TwincitySpa" crumbs={crumbs} lead={<p>Everything you need to know before your first appointment — so you can simply arrive and relax.</p>}>
        <a href={whatsappLink("Hello TwincitySpa, this is my first massage. Could you recommend a treatment?")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon /> Ask for a recommendation</a>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="container-lux grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Step by step" title="From booking to blissful" />
            <ol className="mt-10 space-y-6 border-l border-gold/60 pl-8">
              {timeline.map((s, i) => (
                <li key={s.t} className="relative">
                  <span className="absolute -left-[2.85rem] flex h-7 w-7 items-center justify-center rounded-full border border-gold bg-ivory font-serif text-sm text-gold-deep">{i + 1}</span>
                  <h3 className="text-2xl">{s.t}</h3>
                  <p className="mt-1 text-stone">{s.d}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-stone">After your visit, read our <Link href="/blog/massage-aftercare-tips/" className="link-lux">massage aftercare tips</Link>.</p>
          </div>
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-36">
              <ImageSlider tone="light" label="What your first visit looks like" slides={slides} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream/60 py-16 lg:py-24">
        <div className="container-lux">
          <SectionHeading align="center" eyebrow="Spa etiquette" title="A few gentle guidelines" />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {etiquette.map((e) => (
              <li key={e} className="card-lux px-6 py-5 text-forest">{e}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-lux max-w-4xl">
          <h2 className="text-4xl sm:text-5xl">First-timer questions</h2>
          <div className="mt-8"><FaqList items={faqs} /></div>
          <StillHaveQuestions />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
