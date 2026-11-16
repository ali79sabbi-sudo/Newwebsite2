import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, faqLd, graph, webPageLd } from "@/lib/seo";
import { faqGroups, allFaqs } from "@/data/faqs";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { FaqList, StillHaveQuestions } from "@/components/Faq";

const path = "/faqs/";
const title = "Massage & Spa FAQs | TwincitySpa Bahria Town Rawalpindi";
const description =
  "Answers to common questions about TwincitySpa: location, treatments, therapist availability, booking via WhatsApp, prices, hygiene and what to wear.";
export const metadata = buildMetadata({ title, description, path, image: images.relaxingBackMassageWhiteTowels });

const crumbs = [{ name: "Home", path: "/" }, { name: "FAQs", path }];

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs), faqLd(allFaqs, path))} />
      <PageHero image={images.relaxingBackMassageWhiteTowels} eyebrow="Help centre" title="Frequently Asked Questions" crumbs={crumbs} lead={<p>{allFaqs.length} answers about our treatments, therapists, bookings and visits.</p>} />
      <section className="py-14 lg:py-20">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          <nav aria-label="FAQ topics" className="lg:col-span-3">
            <ul className="sticky top-32 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="inline-flex min-h-11 items-center rounded-full border border-beige px-4 text-sm text-forest hover:border-gold lg:w-full lg:rounded-lg lg:border-0 lg:px-3 lg:hover:bg-cream">
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16 lg:col-span-9">
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`h-${g.id}`} className="scroll-mt-32">
                <h2 id={`h-${g.id}`} className="mb-6 text-4xl">{g.title}</h2>
                <FaqList items={g.items} />
              </section>
            ))}
            <StillHaveQuestions />
          </div>
        </div>
      </section>
    </>
  );
}
