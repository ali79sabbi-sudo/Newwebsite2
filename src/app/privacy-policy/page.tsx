import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";

const path = "/privacy-policy/";
const title = "Privacy Policy & Terms | TwincitySpa";
const description =
  "TwincitySpa’s privacy policy and terms and conditions: how we handle booking information, WhatsApp enquiries, cookies, appointments and conduct.";
export const metadata = buildMetadata({ title, description, path, image: images.minimalWhiteTreatmentRoom });

const crumbs = [{ name: "Home", path: "/" }, { name: "Privacy Policy & Terms", path }];
const UPDATED = "16 November 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description }), breadcrumbLd(crumbs))} />
      <PageHero image={images.minimalWhiteTreatmentRoom} eyebrow="Legal" title="Privacy Policy and Terms" crumbs={crumbs} lead={<p>Last updated: {UPDATED}</p>} />
      <div className="container-lux py-14 lg:py-20">
        <nav aria-label="On this page" className="card-lux mb-12 max-w-3xl p-6">
          <p className="eyebrow">On this page</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="#privacy" className="link-lux">Privacy policy</a></li>
            <li><a href="#cookies" className="link-lux">Cookies &amp; analytics</a></li>
            <li><a href="#terms" className="link-lux">Terms &amp; conditions</a></li>
            <li><a href="#contact" className="link-lux">Contact</a></li>
          </ul>
        </nav>

        <article className="prose-lux max-w-3xl">
          <p className="placeholder-note">This template is written in plain language for a small spa business. Please have it reviewed by a legal adviser before relying on it.</p>

          <h2 id="privacy" className="scroll-mt-32">Privacy policy</h2>
          <p>{site.name} (“we”, “us”) respects your privacy. This policy explains what information we collect through {site.url} and how we use it.</p>
          <h3>Information we collect</h3>
          <ul>
            <li><strong>Booking requests:</strong> when you use our booking form, the details you enter (name, phone number, treatment, date, time, number of guests and message) are formatted into a WhatsApp message. The form does not store this information on our website — it is sent only if you choose to send the WhatsApp message.</li>
            <li><strong>WhatsApp, phone and email:</strong> when you contact us, we receive the information you share, such as your name, number and appointment preferences.</li>
            <li><strong>Health information you choose to share:</strong> such as injuries or conditions relevant to your treatment. We use this only to keep your treatment safe and appropriate.</li>
          </ul>
          <h3>How we use your information</h3>
          <ul>
            <li>To respond to enquiries and manage appointments</li>
            <li>To adapt treatments safely to your needs</li>
            <li>To contact you about your booking</li>
          </ul>
          <p>We do not sell your personal information. We do not share it with third parties except where needed to provide our services (for example, WhatsApp as a messaging platform) or where required by law.</p>
          <h3>Third-party services</h3>
          <p>WhatsApp is operated by Meta and has its own privacy policy. Messages you send via WhatsApp are subject to WhatsApp’s terms.</p>
          <h3>Retention and your rights</h3>
          <p>We keep booking information only as long as needed to manage appointments and our records. You may ask us to access, correct or delete the personal information we hold about you by contacting us.</p>

          <h2 id="cookies" className="scroll-mt-32">Cookies and analytics</h2>
          <p>Our website does not use advertising cookies. If website analytics (such as Google Analytics) are enabled, they may use cookies to measure visits in aggregate. You can block cookies in your browser settings.</p>

          <h2 id="terms" className="scroll-mt-32">Terms and conditions</h2>
          <h3>Professional services only</h3>
          <p>{site.name} provides professional massage and wellness treatments only. Any inappropriate request, comment or behaviour will result in the immediate end of the appointment, and we may refuse future bookings.</p>
          <h3>Appointments</h3>
          <ul>
            <li>A booking is confirmed only when our team confirms it by WhatsApp, phone or email. Submitting the website form does not confirm an appointment.</li>
            <li>Please arrive on time. Late arrival may shorten your treatment so the next guest is not delayed.</li>
            <li>Please tell us as early as possible if you need to cancel or reschedule. Specific cancellation terms will be communicated when you book.</li>
          </ul>
          <h3>Prices</h3>
          <p>Prices are confirmed before your appointment is booked. Prices on this website, where shown, may change without notice.</p>
          <h3>Health and safety</h3>
          <ul>
            <li>You must tell us about any medical conditions, injuries, allergies, pregnancy or medications that may affect your treatment.</li>
            <li>Massage is a wellbeing service and is not a substitute for medical diagnosis or treatment.</li>
            <li>We may decline or adapt a treatment if we believe it may not be suitable for you.</li>
          </ul>
          <h3>Website content</h3>
          <p>Photographs on this website include licensed stock images used for illustration. People shown in stock images are models, not our staff or guests. Content is provided for general information and may be updated.</p>

          <h2 id="contact" className="scroll-mt-32">Contact</h2>
          <p>
            Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>, call <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a> or visit our <Link href="/contact/">contact page</Link>.
          </p>
        </article>
      </div>
    </>
  );
}
