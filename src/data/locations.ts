import { images } from "@/lib/images";
import type { LocationPage } from "./types";

/**
 * LOCAL SEO RULES APPLIED
 * - TwincitySpa has ONE location: Bahria Town Phase 7, Rawalpindi.
 * - Other pages describe how guests from that area can visit — never a branch.
 * - No travel times or distances are stated (not yet verified by driving).
 * - Geographic context below comes from public property guides (Zameen, Graana,
 *   DHA sources). Flagged in docs/LOCAL-FACTS-TO-VERIFY.md for owner verification.
 */

const VERIFY =
  "We have not published travel times because they depend on traffic and your exact starting point. Use Google Maps from your location for an accurate estimate, or message us for directions.";

const sharedHomeNote = "TwincitySpa’s only location is in Bahria Town Phase 7, Rawalpindi.";

export const locations: LocationPage[] = [
  {
    slug: "massage-center-bahria-town-phase-7",
    name: "Bahria Town Phase 7",
    shortName: "Phase 7",
    metaTitle: "Massage Center in Bahria Town Phase 7 | TwincitySpa",
    metaDescription:
      "TwincitySpa is a luxury massage centre located in Bahria Town Phase 7, Rawalpindi. Full body, Thai, hot stone and more. Book via WhatsApp 0314 3100149.",
    h1: "Massage Center in Bahria Town Phase 7",
    isHome: true,
    image: images.massageBedIlluminatedWall,
    intro: [
      "TwincitySpa is based right here in Bahria Town Phase 7, Rawalpindi. If you live, work or shop in Phase 7, a professional massage is close to home — no long drive into Islamabad required.",
      "We offer a full menu of professional treatments, from a classic [full body massage](/full-body-massage/) and [Thai massage](/thai-massage/) to [hot stone](/hot-stone-massage/) and [couples](/couples-massage/) sessions, in calm, private rooms prepared with fresh linen for every guest.",
    ],
    relationship: {
      heading: "Our home in Phase 7",
      paragraphs: [
        "Phase 7 is TwincitySpa’s one and only location. Everything we do — consultations, treatments, hygiene standards and bookings — is managed from here.",
        "Phase 7 is one of Bahria Town Rawalpindi’s busier mixed residential and commercial phases, including the Spring North area and the food street around Bahria’s commercial blocks. It has road connections towards GT Road via the Bahria Expressway, and local guides describe its road network as linking with neighbouring DHA Phase 1.",
      ],
    },
    areas: [
      { name: "Spring North, Phase 7", note: "Residential and commercial area within Phase 7." },
      { name: "Phase 7 commercial & food street area", note: "Popular for dining — an easy add-on to an evening appointment." },
      { name: "Neighbouring Bahria Town Phase 8", note: "Guests from Phase 8 often visit us; see our [Phase 8 page](/massage-center-bahria-town-phase-8/)." },
      { name: "Neighbouring DHA Phase 1", note: "Connected to Phase 7 by road; see our [DHA Phase 1 & 2 page](/massage-center-dha-phase-1-2/)." },
    ],
    route: {
      heading: "Finding TwincitySpa in Phase 7",
      paragraphs: [
        "Our exact building location is shared when your appointment is confirmed. Message us on WhatsApp and we will send a pin and simple directions.",
        "If you are travelling from Islamabad, most routes reach Bahria Town via GT Road or the Islamabad Expressway and the Bahria Expressway.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "full-body-massage", why: "Our most-requested treatment by Phase 7 residents." },
      { slug: "head-shoulder-massage", why: "Ideal for a quick visit after work." },
      { slug: "couples-massage", why: "A relaxing plan for a weekend evening, followed by dinner nearby." },
    ],
    tips: [
      "Book a day or two ahead for evenings and weekends.",
      "Ask about parking when you confirm your appointment.",
      "Arrive 10 minutes early to settle in.",
    ],
    faqs: [
      { q: "Where is TwincitySpa located in Bahria Town Phase 7?", a: "TwincitySpa is in Bahria Town Phase 7, Rawalpindi. We share the exact location pin and directions on WhatsApp when your appointment is confirmed." },
      { q: "Is TwincitySpa a massage centre in Phase 7?", a: "Yes. Phase 7 is our only location — we do not have branches in other phases or in Islamabad sectors." },
      { q: "Does TwincitySpa offer full body massage in Phase 7?", a: "Yes. Our [full body massage](/full-body-massage/) is one of our most popular treatments. Pressure is tailored to your preference." },
      { q: "What massage treatments are available?", a: "Our menu includes full body, Swedish, Thai, deep tissue, hot stone, aromatherapy, relaxation, Balinese, sports, head and shoulder, back, foot reflexology, four hands and couples massage. See [all massage services](/massage-services/)." },
      { q: "Does TwincitySpa offer Thai massage?", a: "Yes, [Thai massage](/thai-massage/) is available. It is performed in comfortable clothing with assisted stretches." },
      { q: "Is hot stone massage available?", a: "Yes, [hot stone massage](/hot-stone-massage/) is on our menu. Please share any health conditions before booking." },
      { q: "Can I enquire about female therapist availability?", a: "Yes. Mention your therapist preference when you message us and our team will confirm who is available at your chosen time." },
      { q: "How much does a massage session cost?", a: "Every treatment is PKR 3,000 for 30 minutes or PKR 6,000 for 1 hour. See our [prices page](/massage-prices/)." },
      { q: "Can I book through WhatsApp?", a: "Yes — WhatsApp is the fastest way. Message [0314 3100149](https://wa.me/923143100149) with your preferred treatment, date and time." },
      { q: "Does TwincitySpa accept advance appointments?", a: "Yes, and we recommend booking ahead, especially for evenings, weekends, [couples](/couples-massage/) and [four hands](/four-hands-massage/) sessions." },
      { q: "Do you accept walk-ins?", a: "Walk-ins depend on availability. To avoid waiting, please message or call before you come." },
      { q: "Is parking available?", a: "Parking arrangements depend on the building and time of day. Ask our team when you confirm your booking." },
      { q: "What are your opening hours?", a: "TwincitySpa is open every day from 12:00 PM (noon) until 5:00 AM. Message us on WhatsApp or call [0314 3100149](tel:+923143100149) to book a slot." },
      { q: "How do I get to Phase 7 from Islamabad?", a: "Routes usually reach Bahria Town via the Islamabad Expressway or GT Road. Use Google Maps from your starting point and message us for our location pin." },
      { q: "Is TwincitySpa near DHA Phase 1?", a: "DHA Phase 1 neighbours Bahria Town Phase 7 and the two are connected by road. Check Google Maps from your address for the current route." },
      { q: "Are the treatment rooms private?", a: "Yes. Treatments take place in private rooms, and you remain professionally draped throughout." },
      { q: "How do you maintain hygiene?", a: "Fresh linen and towels are used for every guest, surfaces are cleaned between appointments, and therapists wash their hands before and after each treatment." },
      { q: "What should I wear to my appointment?", a: "Wear something comfortable. You will have privacy to change, and for Thai massage loose clothing is ideal." },
      { q: "Which massage should I choose if it is my first visit?", a: "A [Swedish](/swedish-massage/) or [full body massage](/full-body-massage/) is a gentle, well-rounded start. Our guide on [choosing a massage](/blog/how-to-choose-a-massage/) can help." },
      { q: "What is your cancellation policy?", a: "Please let us know as early as possible if you need to cancel or reschedule so we can offer the slot to another guest." },
      { q: "Do you offer intimate or adult services?", a: "No. TwincitySpa provides professional massage and wellness treatments only. Any inappropriate request will end the appointment." },
      { q: "How can I contact TwincitySpa?", a: "WhatsApp or call [0314 3100149](tel:+923143100149), or email [info@twincityspa.com](mailto:info@twincityspa.com)." },
    ],
    nearby: ["massage-center-bahria-town", "massage-center-bahria-town-phase-8", "massage-center-dha-phase-1-2"],
    primaryKeyword: "massage center Bahria Town Phase 7",
    secondaryKeywords: ["full body massage center Bahria Town Phase 7", "spa center near Bahria Town Phase 7", "female to male massage center Bahria Town (availability enquiry only)"],
  },
  {
    slug: "massage-center-bahria-town",
    name: "Bahria Town Rawalpindi",
    shortName: "Bahria Town",
    metaTitle: "Massage Center in Bahria Town Rawalpindi | TwincitySpa",
    metaDescription:
      "Looking for a professional massage centre in Bahria Town Rawalpindi? Visit TwincitySpa in Phase 7 — serving guests from every Bahria phase. Book on WhatsApp.",
    h1: "Massage Center in Bahria Town, Rawalpindi",
    isHome: false,
    image: images.couplesMassageRoomWarmLighting,
    intro: [
      "Bahria Town Rawalpindi is a large, spread-out community, and finding a calm, professional spa within it is not always easy. TwincitySpa is located in Bahria Town Phase 7 and welcomes guests from across every phase — from the Civic Center area in Phase 4 to Phase 8’s newer blocks.",
      "Whether you want a relaxing [full body massage](/full-body-massage/), a firm [deep tissue](/deep-tissue-massage/) session or a shared [couples massage](/couples-massage/), you will find a full treatment menu without leaving Bahria Town.",
    ],
    relationship: {
      heading: "One spa serving all of Bahria Town",
      paragraphs: [
        `${sharedHomeNote} We do not operate branches in other phases — instead, guests travel to us from across the community.`,
        "Bahria Town Rawalpindi is made up of several phases linked by internal boulevards and the Bahria Expressway, which connects the society to GT Road. The Civic Center in Phase 4 serves as a commercial hub for the earlier phases, while Phases 7 and 8 sit towards the GT Road side alongside DHA Islamabad.",
      ],
    },
    areas: [
      { name: "Phases 1–3", note: "Earlier, established phases. Guests typically travel via the main boulevards." },
      { name: "Phase 4 & Civic Center", note: "Commercial hub of the earlier phases — see our [Phase 4 page](/massage-center-bahria-town-phase-4/)." },
      { name: "Phases 5 & 6", note: "See our [Phase 5 & 6 page](/massage-center-bahria-town-phase-5-6/)." },
      { name: "Phase 7", note: "Our home — see [TwincitySpa in Phase 7](/massage-center-bahria-town-phase-7/)." },
      { name: "Phase 8, Safari Valley & surrounding blocks", note: "Neighbouring Phase 7 — see our [Phase 8 page](/massage-center-bahria-town-phase-8/)." },
      { name: "Safari Villas & Bahria Heights", note: "Residents of these communities are welcome; check your route on Google Maps." },
    ],
    route: {
      heading: "Visiting from elsewhere in Bahria Town — or Islamabad",
      paragraphs: [
        "From Phases 1–6, most guests use the main Bahria boulevards and the Bahria Expressway towards Phase 7. From Phase 8 the journey is generally shorter, as the two phases are neighbours.",
        "Visiting from Islamabad? Bahria Town is reached via the Islamabad Expressway or GT Road. TwincitySpa is a convenient choice for guests in southern Islamabad and DHA Islamabad who prefer not to travel into central sectors.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "full-body-massage", why: "The most-searched treatment in Bahria Town." },
      { slug: "couples-massage", why: "Popular for anniversaries and weekend plans." },
      { slug: "hot-stone-massage", why: "A favourite in the cooler months." },
    ],
    tips: [
      "Message us first so we can share our location pin.",
      "Allow extra time at peak traffic hours on the Expressway and GT Road.",
      "Weekends book up faster — reserve in advance.",
    ],
    faqs: [
      { q: "Is there a massage centre in Bahria Town Rawalpindi?", a: "Yes. TwincitySpa is a professional massage centre located in Bahria Town Phase 7, serving guests from every phase of Bahria Town." },
      { q: "Does TwincitySpa have branches in other Bahria phases?", a: "No. Our only location is Bahria Town Phase 7. Guests from other phases visit us there." },
      { q: "Which is the best massage centre in Bahria Town?", a: "The best choice depends on your needs. We focus on clean private rooms, professional conduct and a full treatment menu — message us with questions and judge for yourself." },
      { q: "Do you offer full body massage in Bahria Town?", a: "Yes, [full body massage](/full-body-massage/) is available at our Phase 7 spa." },
      { q: "Is couples massage available in Bahria Town?", a: "Yes, [couples massage](/couples-massage/) is available subject to room and therapist availability. Please book ahead." },
      { q: "Can I request a female or male therapist?", a: "You are welcome to state a preference when booking. Our team will confirm which therapists are available for your chosen time." },
      { q: "Do you offer Chinese massage?", a: "We do not currently list a specific Chinese massage treatment. If you enjoy pressure-point work, ask about [Thai](/thai-massage/), [Balinese](/balinese-massage/) or [foot reflexology](/foot-reflexology/)." },
      { q: "What does “body to body massage” mean — do you offer it?", a: "We do not. TwincitySpa offers professional, therapeutic massage only, performed by trained therapists with proper draping. Our [full body massage](/full-body-massage/) is a legitimate head-to-toe treatment." },
      { q: "How do I travel to TwincitySpa from Bahria Phase 4 or Civic Center?", a: "Most guests use the main Bahria boulevards towards Phase 7. Message us for our pin and use Google Maps for a live route." },
      { q: "Is TwincitySpa convenient for Islamabad residents?", a: "Guests from southern Islamabad and DHA Islamabad often find Bahria Town easier to reach than central sectors. Check your route via the Islamabad Expressway or GT Road." },
      { q: "Do you serve customers from Islamabad?", a: "Yes, everyone is welcome to visit our Phase 7 spa. We do not offer home or hotel visits unless confirmed directly by our team." },
      { q: "What is the difference between Thai and Swedish massage?", a: "Thai massage is clothed and stretch-based; Swedish is oil-based with flowing strokes. Read [Thai vs Swedish massage](/blog/thai-vs-swedish-massage/)." },
      { q: "How do I book an appointment?", a: "Use WhatsApp, call [0314 3100149](tel:+923143100149), or send a request via our [booking page](/book-appointment/)." },
      { q: "Is the spa suitable for first-time visitors?", a: "Absolutely. Your therapist will explain everything, and you can choose gentle pressure. See [how to choose a massage](/blog/how-to-choose-a-massage/)." },
      { q: "Can I enquire about appointment availability today?", a: "Yes — WhatsApp is the quickest way to check same-day availability." },
      { q: "Are prices the same for all treatments?", a: "Yes — every treatment is PKR 3,000 for 30 minutes or PKR 6,000 for 1 hour. See our [prices page](/massage-prices/)." },
      { q: "What are your hygiene standards?", a: "Fresh linen for every guest, cleaned surfaces between appointments and strict hand hygiene. Read more on our [About page](/about/)." },
      { q: "Is TwincitySpa open late?", a: "Yes — we are open every day from 12:00 PM until 5:00 AM, so late-evening and after-midnight appointments are possible. Book ahead for popular evening times." },
      { q: "Can I buy a massage as a gift for someone in Bahria Town?", a: "Contact us on WhatsApp to discuss gift arrangements." },
      { q: "What if I have a medical condition?", a: "Tell us before booking. Some treatments may need to be adapted or avoided, and you may need advice from your doctor." },
    ],
    nearby: ["massage-center-bahria-town-phase-7", "massage-center-bahria-town-phase-4", "massage-center-bahria-town-phase-8"],
    primaryKeyword: "massage center Bahria Town",
    secondaryKeywords: ["full body massage center Bahria Town", "spa in Bahria Town Rawalpindi", "couples massage center Bahria Town", "best massage center in Bahria Town"],
  },
  {
    slug: "massage-center-bahria-town-phase-4",
    name: "Bahria Town Phase 4",
    shortName: "Phase 4",
    metaTitle: "Massage Near Bahria Town Phase 4 & Civic Center | TwincitySpa",
    metaDescription:
      "Live or work in Bahria Town Phase 4 or near Civic Center? TwincitySpa in nearby Phase 7 offers professional massage treatments. Enquire on WhatsApp.",
    h1: "Massage Near Bahria Town Phase 4 & Civic Center",
    isHome: false,
    image: images.minimalWhiteTreatmentRoom,
    intro: [
      "Phase 4 is home to Bahria Town’s Civic Center — the busy commercial heart of the earlier phases, with offices, apartments, shops and restaurants. For many people working or living around Civic Center, the working day is long and the shoulders feel it.",
      "TwincitySpa is located in Bahria Town Phase 7, and we welcome guests from Phase 4 who want a calm, private treatment away from the bustle of the commercial district.",
    ],
    relationship: {
      heading: "Serving Phase 4 from our Phase 7 spa",
      paragraphs: [
        `${sharedHomeNote} We do not have a branch at Civic Center or anywhere in Phase 4 — Phase 4 guests travel to our Phase 7 spa.`,
        "Because Civic Center is a workplace for many, our most popular choices for Phase 4 guests tend to be focused treatments that fit around a busy day.",
      ],
    },
    areas: [
      { name: "Civic Center", note: "The commercial hub of Phase 4 with offices and apartment towers." },
      { name: "Phase 4 residential blocks", note: "Residents are welcome to book at our Phase 7 spa." },
      { name: "Nearby Phases 3 & 5", note: "See our [Phase 5 & 6 page](/massage-center-bahria-town-phase-5-6/)." },
    ],
    route: {
      heading: "Getting from Phase 4 to TwincitySpa",
      paragraphs: [
        "From Civic Center, guests generally follow the main Bahria boulevards and the Bahria Expressway towards Phase 7. Traffic around Civic Center can be heavy at peak times, so allow some extra time.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "head-shoulder-massage", why: "Perfect after long hours at a desk around Civic Center." },
      { slug: "back-massage", why: "Focused relief when time is short." },
      { slug: "deep-tissue-massage", why: "For stubborn tightness from long working weeks." },
    ],
    tips: ["Evening slots fill quickly — book ahead from the office on WhatsApp.", "Mention if you are coming straight from work so we can plan timing."],
    faqs: [
      { q: "Is there a TwincitySpa branch at Bahria Town Civic Center?", a: "No. TwincitySpa’s only location is Bahria Town Phase 7. Guests from Phase 4 and Civic Center visit us there." },
      { q: "Where can I get a professional massage near Civic Center?", a: "TwincitySpa in Phase 7 welcomes guests from Civic Center. Message us on WhatsApp for our location pin." },
      { q: "Which treatment suits office workers from Civic Center?", a: "Our [head and shoulder massage](/head-shoulder-massage/) and [back massage](/back-massage/) are focused options that fit around a busy day." },
      { q: "Can I book an after-work appointment?", a: "Yes. We are open daily from 12:00 PM until 5:00 AM, so after-work and late-night appointments are easy to arrange. Evening slots are popular — book ahead on WhatsApp." },
      { q: "How do I get to Phase 7 from Phase 4?", a: "Most guests use the main Bahria boulevards and the Bahria Expressway. Use Google Maps for live traffic." },
      { q: "Do you offer full body massage for Phase 4 residents?", a: "Yes, our [full body massage](/full-body-massage/) is available to all guests at our Phase 7 spa." },
      { q: "Can I enquire about therapist availability?", a: "Yes — mention any preference and we will confirm availability before your appointment." },
      { q: "How do I book?", a: "WhatsApp or call [0314 3100149](tel:+923143100149), or use our [booking form](/book-appointment/)." },
    ],
    nearby: ["massage-center-bahria-town", "massage-center-bahria-town-phase-5-6", "massage-center-bahria-town-phase-7"],
    primaryKeyword: "massage center near Bahria Town Phase 4",
    secondaryKeywords: ["massage near Civic Center Bahria Town", "spa near Civic Center Rawalpindi"],
  },
  {
    slug: "massage-center-bahria-town-phase-5-6",
    name: "Bahria Town Phase 5 & 6",
    shortName: "Phase 5 & 6",
    metaTitle: "Massage Near Bahria Town Phase 5 & 6 | TwincitySpa",
    metaDescription:
      "Residents of Bahria Town Phase 5 and Phase 6 can book professional massage at TwincitySpa in Phase 7, Rawalpindi. Calm private rooms. Book on WhatsApp.",
    h1: "Massage for Bahria Town Phase 5 & 6 Residents",
    isHome: false,
    image: images.treatmentRoomGreenWalls,
    intro: [
      "Phases 5 and 6 are largely residential, family-oriented parts of Bahria Town Rawalpindi. For residents here, a spa visit is often a planned weekend treat or a quiet evening to recharge after a busy week.",
      "TwincitySpa, located in Bahria Town Phase 7, welcomes Phase 5 and 6 residents to a calm, professional setting with a full massage menu.",
    ],
    relationship: {
      heading: "A short trip within Bahria Town",
      paragraphs: [
        `${sharedHomeNote} There is no TwincitySpa branch in Phase 5 or Phase 6.`,
        "Because Phases 5 and 6 are primarily residential, many guests from these areas prefer relaxation-focused treatments and shared sessions such as couples massage.",
      ],
    },
    areas: [
      { name: "Bahria Town Phase 5", note: "Residential blocks near the earlier phases." },
      { name: "Bahria Town Phase 6", note: "Residential community within Bahria Town Rawalpindi." },
      { name: "Nearby Phase 4 & Civic Center", note: "See our [Phase 4 page](/massage-center-bahria-town-phase-4/)." },
    ],
    route: {
      heading: "Travelling from Phase 5 or 6",
      paragraphs: [
        "Guests from Phases 5 and 6 typically use the main Bahria boulevards and the Bahria Expressway to reach Phase 7. Message us for our exact location pin once your booking is confirmed.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "relaxation-massage", why: "A peaceful weekend reset." },
      { slug: "aromatherapy-massage", why: "Calming scents for a quiet evening visit." },
      { slug: "couples-massage", why: "Time together, subject to availability." },
    ],
    tips: ["Weekend mornings can be a quieter time to visit — ask about availability.", "Couples sessions should be booked ahead."],
    faqs: [
      { q: "Is there a massage centre in Bahria Town Phase 5 or 6?", a: "TwincitySpa does not have a branch in Phase 5 or 6. Our only location is in Bahria Town Phase 7, which residents of these phases can easily visit." },
      { q: "What treatment is best for a weekend visit?", a: "Many guests choose a [relaxation massage](/relaxation-massage/) or [aromatherapy massage](/aromatherapy-massage/) for a calm weekend reset." },
      { q: "Can my spouse and I book together?", a: "Yes — ask about [couples massage](/couples-massage/), subject to room and therapist availability." },
      { q: "How do I get to TwincitySpa from Phase 6?", a: "Use the main Bahria boulevards and Bahria Expressway towards Phase 7, and check Google Maps for the current route." },
      { q: "Do you offer home service in Phase 5 or 6?", a: "Our treatments take place at our Phase 7 spa. Please contact us directly if you have a special request." },
      { q: "How much does a massage cost?", a: "PKR 3,000 for 30 minutes or PKR 6,000 for 1 hour, for any treatment. Full list on our [prices page](/massage-prices/)." },
      { q: "How do I book?", a: "Message [0314 3100149](https://wa.me/923143100149) on WhatsApp or use our [booking form](/book-appointment/)." },
    ],
    nearby: ["massage-center-bahria-town-phase-4", "massage-center-bahria-town", "massage-center-bahria-town-phase-7"],
    primaryKeyword: "massage center near Bahria Town Phase 5 / Phase 6",
    secondaryKeywords: ["spa Bahria Town Phase 6", "massage Bahria Town Phase 5"],
  },
  {
    slug: "massage-center-bahria-town-phase-8",
    name: "Bahria Town Phase 8",
    shortName: "Phase 8",
    metaTitle: "Massage Center Near Bahria Town Phase 8 | TwincitySpa",
    metaDescription:
      "TwincitySpa in neighbouring Bahria Town Phase 7 welcomes guests from Phase 8, Safari Valley and nearby blocks. Professional massage. Book on WhatsApp.",
    h1: "Massage Center Near Bahria Town Phase 8",
    isHome: false,
    image: images.massageRoomWoodenBlinds,
    intro: [
      "Bahria Town Phase 8 is one of the newer, fast-growing parts of Bahria Town Rawalpindi, with blocks such as Safari Valley, the Overseas blocks and Lake View. Many families have moved here in recent years — and the nearest professional spa is right next door.",
      "TwincitySpa is located in neighbouring Bahria Town Phase 7, making it a natural choice for Phase 8 residents who want a quality massage close to home.",
    ],
    relationship: {
      heading: "Phase 7 and Phase 8 — neighbours",
      paragraphs: [
        `${sharedHomeNote} We do not have a branch in Phase 8, but as neighbouring phases, the trip is generally straightforward.`,
        "Local guides describe Phase 8 as sitting between DHA Islamabad Phases 1 and 3, near the GT Road side of Bahria Town.",
      ],
    },
    areas: [
      { name: "Safari Valley", note: "A Phase 8 residential block." },
      { name: "Overseas blocks", note: "Residential blocks within Phase 8." },
      { name: "Lake View", note: "Residential block within Phase 8." },
      { name: "Nearby DHA Phase 3 & 4", note: "See our [DHA Phase 3 & 4 page](/massage-center-dha-phase-3-4/)." },
    ],
    route: {
      heading: "From Phase 8 to TwincitySpa",
      paragraphs: [
        "Because Phases 7 and 8 are neighbours, guests usually travel via internal Bahria Town roads. Message us for the exact pin and check Google Maps for the best route from your block.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "full-body-massage", why: "A complete reset close to home." },
      { slug: "hot-stone-massage", why: "Comforting warmth on cooler evenings." },
      { slug: "foot-reflexology", why: "A gentle, clothed option for a quick visit." },
    ],
    tips: ["Message us for our pin before your first visit.", "Book in advance for weekend evenings."],
    faqs: [
      { q: "Is there a massage centre near Bahria Town Phase 8?", a: "Yes — TwincitySpa is located in neighbouring Bahria Town Phase 7. We do not have a branch inside Phase 8." },
      { q: "Can Safari Valley residents visit TwincitySpa?", a: "Of course. Message us for our location pin and directions from your block." },
      { q: "Which treatments are popular with Phase 8 guests?", a: "[Full body massage](/full-body-massage/), [hot stone massage](/hot-stone-massage/) and [foot reflexology](/foot-reflexology/) are all good choices." },
      { q: "How do I get to Phase 7 from Phase 8?", a: "Via internal Bahria Town roads. Use Google Maps for the most accurate live route." },
      { q: "Can I book same-day?", a: "Same-day appointments depend on availability. WhatsApp us to check." },
      { q: "Can I request a particular therapist?", a: "Mention your preference when booking and we will confirm availability." },
      { q: "How do I contact TwincitySpa?", a: "WhatsApp or call [0314 3100149](tel:+923143100149), or email [info@twincityspa.com](mailto:info@twincityspa.com)." },
    ],
    nearby: ["massage-center-bahria-town-phase-7", "massage-center-dha-phase-3-4", "massage-center-dha-phase-1-2"],
    primaryKeyword: "massage center near Bahria Town Phase 8",
    secondaryKeywords: ["spa near Safari Valley Bahria Town", "massage Bahria Town Phase 8"],
  },
  {
    slug: "massage-center-dha-phase-1-2",
    name: "DHA Phase 1 & 2",
    shortName: "DHA 1 & 2",
    metaTitle: "Massage Center Near DHA Phase 1 & 2 Islamabad | TwincitySpa",
    metaDescription:
      "Near DHA Phase 1 or 2 Islamabad? TwincitySpa in neighbouring Bahria Town Phase 7 offers professional massage and spa treatments. Enquire on WhatsApp.",
    h1: "Massage Center Near DHA Phase 1 & 2, Islamabad",
    isHome: false,
    image: images.darkMarbleTreatmentSuite,
    intro: [
      "DHA Islamabad Phases 1 and 2 are among the most established DHA communities in the twin cities. Phase 2 — the largest — stretches between GT Road and the Islamabad Expressway and is home to landmarks such as the World Trade Center Islamabad, while Phase 1 lies close to GT Road.",
      "For residents and professionals in DHA 1 and 2, TwincitySpa in Bahria Town Phase 7 offers a nearby alternative to travelling into central Islamabad for a professional massage.",
    ],
    relationship: {
      heading: "Close neighbours, not a branch",
      paragraphs: [
        `${sharedHomeNote} We do not operate in DHA. Local guides describe DHA Phase 1 as internally connected to Bahria Town Phase 7, which makes our spa a convenient choice for DHA residents.`,
        "Guests from DHA Phase 2 typically approach via GT Road or the Expressway corridor, depending on where they start.",
      ],
    },
    areas: [
      { name: "DHA Phase 1", note: "Near GT Road; neighbouring Bahria Town Phase 7." },
      { name: "DHA Phase 2", note: "The largest DHA phase, between GT Road and the Islamabad Expressway." },
      { name: "DHA Phase 2 Extension", note: "Residents are welcome — check your route on Google Maps." },
    ],
    route: {
      heading: "From DHA Phase 1 or 2",
      paragraphs: [
        "From DHA Phase 1, guests typically use the road connection into Bahria Town Phase 7. From DHA Phase 2, the route depends on your sector — GT Road and the Expressway corridor are the usual options.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "deep-tissue-massage", why: "Firm, focused relief for busy professionals." },
      { slug: "swedish-massage", why: "A classic relaxing option." },
      { slug: "four-hands-massage", why: "An indulgent signature experience (book ahead)." },
    ],
    tips: ["Message us for the location pin before setting off.", "Allow extra time on GT Road at rush hour."],
    faqs: [
      { q: "Is there a massage centre near DHA Phase 1?", a: "TwincitySpa is in Bahria Town Phase 7, which neighbours DHA Phase 1. We do not have a branch inside DHA." },
      { q: "Is TwincitySpa a good option for DHA Phase 2 residents?", a: "Many DHA 2 residents prefer visiting Bahria Town rather than central Islamabad sectors. Check your route via GT Road or the Expressway." },
      { q: "Where can I find professional massage services near DHA Islamabad?", a: "TwincitySpa in Bahria Town Phase 7, Rawalpindi welcomes guests from DHA Islamabad. See [our services](/massage-services/)." },
      { q: "How do I travel from DHA Phase 1 to TwincitySpa?", a: "DHA Phase 1 is connected by road to Bahria Phase 7. Use Google Maps from your address and message us for our pin." },
      { q: "Do you offer couples massage?", a: "Yes, [couples massage](/couples-massage/) is available subject to availability." },
      { q: "Which massage is good after a long workday?", a: "Try a [deep tissue](/deep-tissue-massage/) or [head and shoulder massage](/head-shoulder-massage/)." },
      { q: "How do I book from DHA?", a: "WhatsApp [0314 3100149](https://wa.me/923143100149) or use our [booking page](/book-appointment/)." },
      { q: "Do you visit homes in DHA?", a: "Our treatments take place at our Phase 7 spa. Contact us directly about any special request." },
    ],
    nearby: ["massage-center-bahria-town-phase-7", "massage-center-dha-phase-3-4", "massage-center-dha-phase-5-6"],
    primaryKeyword: "massage center near DHA Islamabad",
    secondaryKeywords: ["massage center DHA Phase 2 Islamabad", "spa near DHA Phase 1", "massage center Islamabad"],
  },
  {
    slug: "massage-center-dha-phase-3-4",
    name: "DHA Phase 3 & 4",
    shortName: "DHA 3 & 4",
    metaTitle: "Massage Near DHA Phase 3 & 4 Islamabad | TwincitySpa",
    metaDescription:
      "TwincitySpa in Bahria Town Phase 7 welcomes guests from DHA Phase 3 and Phase 4 Islamabad. Thai, full body, hot stone and more. Book on WhatsApp.",
    h1: "Massage for DHA Phase 3 & 4 Residents",
    isHome: false,
    image: images.massageStudioNaturalLight,
    intro: [
      "DHA Islamabad Phase 3 lies along GT Road, east of Bahria Town Phase 8, while Phase 4 sits next to DHA Phase 1 and opposite Bahria Town Phase 8, close to Askari 14. Both are growing communities on the Rawalpindi side of the twin cities.",
      "For residents here, TwincitySpa in Bahria Town Phase 7 offers a professional spa experience without the trip into central Islamabad.",
    ],
    relationship: {
      heading: "Visiting us from DHA 3 & 4",
      paragraphs: [
        `${sharedHomeNote} There is no TwincitySpa branch in DHA Phase 3 or 4.`,
        "Because these phases are developing quickly, many residents are still discovering local services — we are happy to answer questions on WhatsApp before you visit.",
      ],
    },
    areas: [
      { name: "DHA Phase 3", note: "Along GT Road, east of Bahria Town Phase 8." },
      { name: "DHA Phase 4", note: "Next to DHA Phase 1, opposite Bahria Phase 8 and near Askari 14." },
      { name: "Askari 14", note: "Guests from Askari 14 are welcome; check your route." },
    ],
    route: {
      heading: "From DHA Phase 3 or 4",
      paragraphs: [
        "From DHA Phase 4, guests usually travel past Bahria Town Phase 8 towards Phase 7. From DHA Phase 3, most routes run via GT Road. Exact timings vary, so please use Google Maps.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "thai-massage", why: "Energising and clothed — great for active residents." },
      { slug: "sports-massage", why: "For gym-goers and weekend sports players." },
      { slug: "full-body-massage", why: "The classic all-round treatment." },
    ],
    tips: ["Ask for our pin before your first visit.", "Book ahead for weekends."],
    faqs: [
      { q: "Is there a massage centre near DHA Phase 4?", a: "TwincitySpa is in Bahria Town Phase 7, a short trip past Bahria Phase 8 for most DHA Phase 4 residents. We have no branch in DHA." },
      { q: "Can DHA Phase 3 residents visit TwincitySpa?", a: "Yes. Most routes from DHA Phase 3 run via GT Road. Message us for our location pin." },
      { q: "Do you offer Thai massage?", a: "Yes, [Thai massage](/thai-massage/) is on our menu." },
      { q: "Is sports massage available?", a: "Yes — see [sports massage](/sports-massage/). Please seek medical advice for injuries." },
      { q: "Can I enquire about therapist availability?", a: "Yes, tell us your preference and we will confirm availability for your time slot." },
      { q: "How do I book from DHA 3 or 4?", a: "Message us on WhatsApp or call [0314 3100149](tel:+923143100149)." },
      { q: "Is TwincitySpa near Askari 14?", a: "Askari 14 is near DHA Phase 4. Check your route to Bahria Town Phase 7 on Google Maps." },
    ],
    nearby: ["massage-center-bahria-town-phase-8", "massage-center-dha-phase-1-2", "massage-center-dha-phase-5-6"],
    primaryKeyword: "massage near DHA Phase 4 Islamabad",
    secondaryKeywords: ["massage DHA Phase 3", "spa near Askari 14"],
  },
  {
    slug: "massage-center-dha-phase-5-6",
    name: "DHA Phase 5 & 6",
    shortName: "DHA 5 & 6",
    metaTitle: "Massage Near DHA Phase 5 & 6 Islamabad | TwincitySpa",
    metaDescription:
      "From DHA Phase 5 or the Expressway corridor? Visit TwincitySpa in Bahria Town Phase 7, Rawalpindi, for professional massage. Enquire on WhatsApp today.",
    h1: "Massage for DHA Phase 5 & 6 and the Expressway Corridor",
    isHome: false,
    image: images.candlelitTreatmentRoom,
    intro: [
      "DHA Islamabad Phase 5 sits along the Islamabad Expressway, and the newer communities in this corridor — including DHA Phase 6 and the DHA Valley area — continue to grow. Residents here often look south towards Bahria Town for everyday services.",
      "TwincitySpa, located in Bahria Town Phase 7, welcomes guests from DHA Phase 5, Phase 6 and the wider Expressway corridor.",
    ],
    relationship: {
      heading: "A spa for the Expressway corridor",
      paragraphs: [
        `${sharedHomeNote} We have no branch in DHA Phase 5 or 6.`,
        "Guests from this corridor usually approach Bahria Town via the Islamabad Expressway. Journey times vary considerably with traffic, so please plan with a live map.",
      ],
    },
    areas: [
      { name: "DHA Phase 5", note: "Along the Islamabad Expressway." },
      { name: "DHA Phase 6 & DHA Valley area", note: "Newer communities in the wider corridor — check your route." },
      { name: "Southern Islamabad", note: "Guests from southern Islamabad often find Bahria Town convenient." },
    ],
    route: {
      heading: "From DHA Phase 5 or 6",
      paragraphs: [
        "Most guests use the Islamabad Expressway to reach Bahria Town, then continue to Phase 7. We will share our exact pin on WhatsApp once your appointment is confirmed.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "hot-stone-massage", why: "Worth the trip for a deeply comforting treatment." },
      { slug: "balinese-massage", why: "A distinctive signature experience." },
      { slug: "couples-massage", why: "Make an outing of it together." },
    ],
    tips: ["Avoid peak Expressway traffic where possible.", "Combine your visit with dinner in Bahria Town."],
    faqs: [
      { q: "Is there a massage centre near DHA Phase 5?", a: "TwincitySpa is in Bahria Town Phase 7, reachable from DHA Phase 5 via the Islamabad Expressway. We do not have a branch in DHA." },
      { q: "Do you serve DHA Phase 6 and DHA Valley residents?", a: "Everyone is welcome at our Phase 7 spa. Check your route on Google Maps before travelling." },
      { q: "How do I travel to TwincitySpa from the Expressway?", a: "Follow the Islamabad Expressway to Bahria Town, then continue to Phase 7. Message us for our pin." },
      { q: "Which treatments are worth the journey?", a: "[Hot stone](/hot-stone-massage/), [Balinese](/balinese-massage/) and [four hands massage](/four-hands-massage/) are our most indulgent options." },
      { q: "Can I book a couples session?", a: "Yes, [couples massage](/couples-massage/) is available subject to availability — book ahead." },
      { q: "How do I book?", a: "WhatsApp [0314 3100149](https://wa.me/923143100149) or use our [booking form](/book-appointment/)." },
    ],
    nearby: ["massage-center-dha-phase-1-2", "massage-center-dha-phase-3-4", "massage-center-bahria-town"],
    primaryKeyword: "massage near DHA Phase 5 Islamabad",
    secondaryKeywords: ["spa near Islamabad Expressway", "massage center Islamabad"],
  },
  {
    slug: "massage-center-bahria-town-phase-1-3",
    name: "Bahria Town Phase 1–3",
    shortName: "Phase 1–3",
    metaTitle: "Massage Near Bahria Town Phase 1, 2 & 3 | TwincitySpa",
    metaDescription:
      "Residents of Bahria Town Phase 1, 2 and 3 can book professional massage at TwincitySpa in Phase 7, Rawalpindi. Full menu, private rooms. Enquire on WhatsApp.",
    h1: "Massage for Bahria Town Phase 1, 2 & 3 Residents",
    isHome: false,
    image: images.seatedBackMassageRedCurtainedRoom,
    intro: [
      "Phases 1, 2 and 3 are the original, well-established parts of Bahria Town Rawalpindi — mature neighbourhoods with settled families, schools and long-standing local businesses.",
      "TwincitySpa, located in Bahria Town Phase 7, welcomes residents of the earlier phases who want a calm, professional treatment without heading into central Rawalpindi or Islamabad.",
    ],
    relationship: {
      heading: "From the original phases to Phase 7",
      paragraphs: [
        `${sharedHomeNote} We do not have a branch in Phase 1, 2 or 3.`,
        "Local guides describe Phases 1 to 5 as converging around the Civic Center hub in Phase 4, so many residents of the earlier phases travel past Civic Center on their way towards Phase 7.",
      ],
    },
    areas: [
      { name: "Bahria Town Phase 1", note: "One of the first, established residential phases." },
      { name: "Bahria Town Phase 2", note: "Established residential phase." },
      { name: "Bahria Town Phase 3", note: "Established residential phase near the earlier commercial areas." },
      { name: "Civic Center, Phase 4", note: "See our [Phase 4 & Civic Center page](/massage-center-bahria-town-phase-4/)." },
    ],
    route: {
      heading: "Travelling from Phases 1–3",
      paragraphs: [
        "Most residents use the main Bahria boulevards and the Bahria Expressway towards Phase 7. We share our exact pin on WhatsApp once your appointment is confirmed.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "swedish-massage", why: "A classic, gentle treatment for any age." },
      { slug: "foot-reflexology", why: "Clothed and relaxing — a lovely first visit." },
      { slug: "hot-stone-massage", why: "Comforting warmth worth the trip." },
    ],
    tips: ["Plan around school-run traffic on the main boulevards.", "Ask us about weekday daytime slots, which are often quieter."],
    faqs: [
      { q: "Is there a TwincitySpa branch in Bahria Town Phase 1, 2 or 3?", a: "No. TwincitySpa’s only location is Bahria Town Phase 7. Residents of the earlier phases visit us there." },
      { q: "How do I get to TwincitySpa from Phase 2?", a: "Most guests use the main Bahria boulevards and the Bahria Expressway towards Phase 7. Check Google Maps for live traffic and message us for our pin." },
      { q: "Which massage is good for older family members?", a: "A gentle [relaxation massage](/relaxation-massage/) or [Swedish massage](/swedish-massage/) is often suitable. Please share any health conditions before booking." },
      { q: "Can I book for two family members at once?", a: "Yes, ask about [couples massage](/couples-massage/) — available subject to room and therapist availability." },
      { q: "Do you offer daytime appointments?", a: "Please message us for today’s available slots." },
      { q: "How do I book?", a: "WhatsApp [0314 3100149](https://wa.me/923143100149) or use our [booking form](/book-appointment/)." },
    ],
    nearby: ["massage-center-bahria-town-phase-4", "massage-center-bahria-town", "massage-center-bahria-town-phase-7"],
    primaryKeyword: "massage near Bahria Town Phase 1 / 2 / 3",
    secondaryKeywords: ["spa Bahria Town Phase 2", "massage Bahria Town Phase 3"],
  },
  {
    slug: "massage-center-islamabad",
    name: "Islamabad",
    shortName: "Islamabad",
    metaTitle: "Massage Center for Islamabad Guests | TwincitySpa Bahria Town",
    metaDescription:
      "Visiting from Islamabad? TwincitySpa in Bahria Town Phase 7 offers luxury massage and spa treatments for twin-city guests. Book on WhatsApp 0314 3100149.",
    h1: "A Spa Destination for Islamabad Guests",
    isHome: false,
    image: images.shoulderMassageSouthAsianMaleClient,
    intro: [
      "Many of our guests live or work in Islamabad. For residents of southern Islamabad, DHA Islamabad and the Expressway corridor, Bahria Town is often easier to reach than a spa in the busy central sectors — and parking is usually simpler too.",
      "TwincitySpa, located in Bahria Town Phase 7, Rawalpindi, offers a full menu of professional treatments in calm, private rooms — from a classic [Swedish massage](/swedish-massage/) to [hot stone](/hot-stone-massage/) and [four hands](/four-hands-massage/) experiences.",
    ],
    relationship: {
      heading: "Not in Islamabad — but made for the twin cities",
      paragraphs: [
        `${sharedHomeNote} We do not have a branch in any Islamabad sector, and we do not claim to.`,
        "Our name reflects who we serve: guests from both Rawalpindi and Islamabad. If you are travelling from northern sectors, the journey may be long — please check your route first so you can decide whether it suits you.",
      ],
    },
    areas: [
      { name: "DHA Islamabad", note: "Neighbouring Bahria Town — see our [DHA Phase 1 & 2 page](/massage-center-dha-phase-1-2/)." },
      { name: "Islamabad Expressway corridor", note: "See our [DHA Phase 5 & 6 page](/massage-center-dha-phase-5-6/)." },
      { name: "Southern Islamabad", note: "Generally the most convenient part of Islamabad for reaching Bahria Town." },
      { name: "Central & northern sectors", note: "Longer journey — please check Google Maps before booking." },
    ],
    route: {
      heading: "Travelling from Islamabad",
      paragraphs: [
        "Most routes from Islamabad reach Bahria Town via the Islamabad Expressway or GT Road, then continue to Phase 7. Journey times vary considerably with traffic and starting sector.",
        "Tip: tell us where you are coming from when you book, and we can suggest a sensible appointment time around peak traffic.",
      ],
      verifyNote: VERIFY,
    },
    recommended: [
      { slug: "four-hands-massage", why: "Our most indulgent experience — worth the journey." },
      { slug: "hot-stone-massage", why: "A deeply comforting signature treatment." },
      { slug: "couples-massage", why: "Make an outing of it with someone special." },
    ],
    tips: ["Book ahead and allow for Expressway traffic.", "Combine your visit with dinner in Bahria Town.", "Ask for our location pin before you set off."],
    faqs: [
      { q: "Does TwincitySpa have a branch in Islamabad?", a: "No. TwincitySpa’s only location is Bahria Town Phase 7, Rawalpindi. Islamabad guests are very welcome to visit us there." },
      { q: "Does TwincitySpa serve customers from Islamabad?", a: "Yes. Many guests travel from southern Islamabad and DHA Islamabad via the Islamabad Expressway or GT Road." },
      { q: "Where can I find professional massage services near Islamabad?", a: "TwincitySpa in Bahria Town Phase 7 offers 14 professional treatments. See [all massage services](/massage-services/)." },
      { q: "How can I travel to TwincitySpa from Islamabad?", a: "Use the Islamabad Expressway or GT Road to Bahria Town, then continue to Phase 7. Message us for our pin and check Google Maps for live traffic." },
      { q: "Is it worth travelling from central Islamabad?", a: "That depends on your sector and traffic. Check the route first — guests often combine a treatment with dinner in Bahria Town." },
      { q: "What massage services are available?", a: "Full body, Swedish, Thai, deep tissue, hot stone, aromatherapy, relaxation, Balinese, sports, head and shoulder, back, foot reflexology, four hands and couples massage." },
      { q: "Can I enquire about appointment availability?", a: "Yes — WhatsApp is the fastest way to check availability for your preferred date and time." },
      { q: "Does TwincitySpa offer couples massage?", a: "Yes, [couples massage](/couples-massage/) is available subject to room and therapist availability." },
      { q: "What is the difference between Thai and Swedish massage?", a: "Thai massage is clothed and stretch-based; Swedish is an oil massage with flowing strokes. Read [Thai vs Swedish massage](/blog/thai-vs-swedish-massage/)." },
      { q: "Do you offer home or hotel visits in Islamabad?", a: "Our treatments take place at our Phase 7 spa. Contact us directly about any special request." },
    ],
    nearby: ["massage-center-dha-phase-1-2", "massage-center-dha-phase-5-6", "massage-center-bahria-town-phase-7"],
    primaryKeyword: "massage center Islamabad (visitors to Bahria Town)",
    secondaryKeywords: ["spa center Islamabad", "best massage center in Islamabad (natural phrasing only)", "massage center near DHA Islamabad"],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
