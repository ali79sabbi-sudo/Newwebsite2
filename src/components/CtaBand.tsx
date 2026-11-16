import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { site, telLink, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export function CtaBand({
  title = "Your moment of calm is one message away",
  text = "Tell us the treatment you would like and your preferred time — our team will confirm availability on WhatsApp.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-forest">
      <Image src={images.candlelitTreatmentRoom.src} alt="" fill sizes="100vw" quality={70} className="-z-10 object-cover opacity-30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest via-forest/90 to-charcoal/80" />
      <div className="container-lux py-20 text-center lg:py-28">
        <p className="eyebrow">{site.tagline}</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl text-ivory sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-cream/85">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/book-appointment/" className="btn btn-gold">Book Your Appointment</Link>
          <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon /> Chat on WhatsApp</a>
          <a href={telLink} className="btn btn-outline"><PhoneIcon /> Call {site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
