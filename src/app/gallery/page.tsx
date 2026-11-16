import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { Gallery } from "@/components/Gallery";
import { CtaBand } from "@/components/CtaBand";

const path = "/gallery/";
const title = "Spa & Massage Gallery | TwincitySpa Bahria Town Rawalpindi";
const description =
  "Browse spa interiors, treatment rooms and massage photography at TwincitySpa, Bahria Town Phase 7 — warm lighting, fresh linen and calm spaces.";
export const metadata = buildMetadata({ title, description, path, image: images.couplesMassageRoomWarmLighting });

const crumbs = [{ name: "Home", path: "/" }, { name: "Gallery", path }];

const items = [
  { ...images.marigoldFloatingCandlesWelcome, caption: "Marigolds & candlelight welcome" },
  { ...images.shoulderMassageSouthAsianMaleClient, caption: "Shoulder massage" },
  { ...images.couplesMassageRoomWarmLighting, caption: "Couples treatment room" },
  { ...images.seatedNeckShoulderMassageTraditionalRoom, caption: "Seated neck & shoulder work" },
  { ...images.hotStonePlacementTherapist, caption: "Hot stone placement" },
  { ...images.candlesElephantFigurinesSpaDecor, caption: "Candlelit reception details" },
  { ...images.herbalCompressMassageLegs, caption: "Herbal compress massage" },
  { ...images.spaStillLifeOilsCandles, caption: "Oils, orchids & tea lights" },
  { ...images.hotStoneMassageTherapistLuxuryTreatmentRoom, caption: "Hot stone massage" },
  { ...images.minimalWhiteTreatmentRoom, caption: "Minimal treatment room" },
  { ...images.thaiMassageAssistedLegStretch, caption: "Thai massage stretch" },
  { ...images.massageBedIlluminatedWall, caption: "Signature treatment bed" },
  { ...images.aromatherapyRelaxationTreatment, caption: "Aromatherapy relaxation" },
  { ...images.massageRoomWoodenBlinds, caption: "Prepared massage room" },
  { ...images.headMassageMaleClient, caption: "Head massage" },
  { ...images.treatmentRoomGreenWalls, caption: "Calm green treatment room" },
  { ...images.deepTissueMassageMaleClient, caption: "Deep tissue massage" },
  { ...images.candlelitTreatmentRoom, caption: "Candlelit room" },
  { ...images.hotStoneMassageBrightSpaRoom, caption: "Hot stones & herbal compress" },
  { ...images.darkMarbleTreatmentSuite, caption: "Marble treatment suite" },
  { ...images.footMassageModernSpa, caption: "Foot massage" },
  { ...images.massageStudioNaturalLight, caption: "Natural-light studio" },
  { ...images.balineseStyleMassageTraditionalRoom, caption: "Balinese-style massage" },
];

export default function GalleryPage() {
  const imageGallery = {
    "@type": "ImageGallery",
    name: "TwincitySpa gallery",
    image: items.map((i) => ({ "@type": "ImageObject", contentUrl: absoluteUrl(i.src), caption: i.alt })),
  };
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs), imageGallery)} />
      <PageHero image={images.couplesMassageRoomWarmLighting} eyebrow="Gallery" title="Spa and Massage Gallery" crumbs={crumbs} lead={<p>Warm light, fresh linen and calm, private spaces — a glimpse of the TwincitySpa mood.</p>} />
      <section className="py-14 lg:py-20">
        <div className="container-lux">
          <p className="placeholder-note mb-10">
            These are licensed representative photographs (Pexels). They will be replaced with genuine photos of TwincitySpa’s rooms in Bahria Town Phase 7. People shown are models, not TwincitySpa staff or guests.
          </p>
          <Gallery items={items} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
