import type { QA } from "@/lib/seo";

export type FaqGroup = { id: string; title: string; items: QA[] };

/** Main /faqs/ page — grouped by topic. */
export const faqGroups: FaqGroup[] = [
  {
    id: "about",
    title: "About TwincitySpa",
    items: [
      { q: "Where is TwincitySpa located?", a: "TwincitySpa is located in Bahria Town Phase 7, Rawalpindi, Pakistan. Our exact location pin is shared on WhatsApp when your appointment is confirmed." },
      { q: "Does TwincitySpa have more than one branch?", a: "No. Bahria Town Phase 7 is our only location. We welcome guests from across Bahria Town, DHA and Islamabad." },
      { q: "What kind of business is TwincitySpa?", a: "We are a professional massage and spa centre offering relaxation and wellbeing treatments in private, hygienic rooms." },
      { q: "Do you offer intimate or adult services?", a: "No. TwincitySpa provides professional massage only. Inappropriate requests or behaviour will end the appointment immediately without refund." },
    ],
  },
  {
    id: "treatments",
    title: "Treatments",
    items: [
      { q: "What massage services does TwincitySpa offer?", a: "Full body, Swedish, Thai, deep tissue, hot stone, aromatherapy, relaxation, Balinese, sports, head and shoulder, back, foot reflexology, four hands and couples massage. See [all massage services](/massage-services/)." },
      { q: "Does TwincitySpa offer Thai massage?", a: "Yes — [Thai massage](/thai-massage/) is performed in comfortable clothing with assisted stretches." },
      { q: "Where can I get a hot stone massage in Rawalpindi?", a: "TwincitySpa offers [hot stone massage](/hot-stone-massage/) at our spa in Bahria Town Phase 7, Rawalpindi." },
      { q: "Which massage is best for beginners?", a: "A [Swedish massage](/swedish-massage/) or [full body massage](/full-body-massage/) is a gentle, well-rounded introduction." },
      { q: "What is the difference between Thai and Swedish massage?", a: "Swedish is oil-based with flowing strokes on a massage bed; Thai is clothed with rhythmic pressure and assisted stretches. Read our [comparison guide](/blog/thai-vs-swedish-massage/)." },
      { q: "Which massage is best for tight shoulders?", a: "Try a [head and shoulder massage](/head-shoulder-massage/), [back massage](/back-massage/) or [deep tissue massage](/deep-tissue-massage/)." },
      { q: "Do you offer couples massage?", a: "Yes, [couples massage](/couples-massage/) is available subject to room and therapist availability." },
      { q: "Do you offer Chinese massage?", a: "We do not currently list a specific Chinese massage treatment. Ask us about pressure-based options such as Thai, Balinese or foot reflexology." },
      { q: "What is “body to body massage” — is it offered?", a: "No. We offer only legitimate professional treatments such as [full body massage](/full-body-massage/), performed by a therapist with proper draping." },
      { q: "How do I choose the right massage?", a: "Think about how you want to feel afterwards. Our guide on [how to choose a massage](/blog/how-to-choose-a-massage/) matches goals to treatments." },
    ],
  },
  {
    id: "therapists",
    title: "Therapists & Conduct",
    items: [
      { q: "Can I request a female therapist?", a: "Yes, you are welcome to state a preference. Our team will confirm which therapists are available at your chosen time before booking." },
      { q: "Can male guests book with a female therapist?", a: "Please mention your preference when you enquire. Availability is confirmed directly by our team, and all treatments follow the same professional standards." },
      { q: "Are your therapists professional?", a: "Our therapists follow strict professional conduct: consultation before treatment, proper draping, respect for your boundaries and clear communication. Learn more on our [therapists page](/therapists/)." },
      { q: "Can I ask the therapist to stop or change pressure?", a: "Yes, at any time. Your comfort and consent come first throughout the session." },
    ],
  },
  {
    id: "booking",
    title: "Booking, Prices & Hours",
    items: [
      { q: "How can I book a massage?", a: "Message us on [WhatsApp](https://wa.me/923143100149), call [0314 3100149](tel:+923143100149), or send a request through our [booking page](/book-appointment/)." },
      { q: "Can I book through WhatsApp?", a: "Yes. WhatsApp is the fastest way to check availability and confirm your appointment." },
      { q: "Is my booking confirmed when I submit the form?", a: "No. The form sends your request to our team via WhatsApp. Your appointment is confirmed only when our team replies." },
      { q: "How much does a massage cost?", a: "Every treatment is **PKR 3,000 for 30 minutes** or **PKR 6,000 for 1 hour**. See our [prices page](/massage-prices/)." },
      { q: "How long are the sessions?", a: "You can choose a 30-minute or a 1-hour session for any treatment. For full body, hot stone and couples treatments, most guests prefer 1 hour." },
      { q: "What are your opening hours?", a: "We are open **every day from 12:00 PM (noon) until 5:00 AM**. Message us on WhatsApp to book a slot." },
      { q: "Do you accept walk-ins?", a: "Walk-ins depend on availability. We recommend messaging ahead to avoid waiting." },
      { q: "What is your cancellation policy?", a: "Please tell us as early as possible if you need to cancel or reschedule. Full cancellation terms are provided when you book and in our [terms](/privacy-policy/#terms)." },
      { q: "Do you offer gift vouchers?", a: "Contact us on WhatsApp to discuss gift arrangements." },
    ],
  },
  {
    id: "visit",
    title: "Your Visit",
    items: [
      { q: "What should I wear?", a: "Wear something comfortable. You will have privacy to change and remain draped during oil treatments. For Thai massage, loose clothing is best." },
      { q: "How should I prepare for my appointment?", a: "Avoid a heavy meal beforehand, arrive 10 minutes early, and let us know about any health conditions." },
      { q: "Is parking available?", a: "Ask our team about parking when you confirm your booking." },
      { q: "How do you maintain hygiene and cleanliness?", a: "Fresh linen and towels for every guest, cleaned surfaces and equipment between appointments, and strict hand hygiene." },
      { q: "Is my privacy protected?", a: "Yes. Treatments take place in private rooms, and your contact details are used only to manage your booking. See our [privacy policy](/privacy-policy/)." },
      { q: "Can I get a massage if I am pregnant or have a medical condition?", a: "Please consult your doctor first and tell us before booking. Some treatments are not suitable and may need to be adapted or avoided." },
    ],
  },
  {
    id: "location",
    title: "Location & Service Area",
    items: [
      { q: "Do you serve customers from Islamabad?", a: "Yes. Guests from Islamabad — especially DHA and southern Islamabad — visit our Phase 7 spa via the Islamabad Expressway or GT Road." },
      { q: "Is TwincitySpa near DHA Islamabad?", a: "Bahria Town Phase 7 neighbours DHA Phase 1. See our [DHA Phase 1 & 2 page](/massage-center-dha-phase-1-2/)." },
      { q: "Do you provide home service?", a: "Our treatments take place at our Phase 7 spa. Contact us directly about any special request." },
      { q: "How can I contact TwincitySpa?", a: "WhatsApp or call [0314 3100149](tel:+923143100149), or email [info@twincityspa.com](mailto:info@twincityspa.com)." },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);

/** Short selection for the homepage. */
export const homeFaqs = [
  allFaqs.find((f) => f.q === "Where is TwincitySpa located?")!,
  allFaqs.find((f) => f.q === "What massage services does TwincitySpa offer?")!,
  allFaqs.find((f) => f.q === "How can I book a massage?")!,
  allFaqs.find((f) => f.q === "Does TwincitySpa offer Thai massage?")!,
  allFaqs.find((f) => f.q === "Where can I get a hot stone massage in Rawalpindi?")!,
  allFaqs.find((f) => f.q === "Can I request a female therapist?")!,
  allFaqs.find((f) => f.q === "Do you serve customers from Islamabad?")!,
  allFaqs.find((f) => f.q === "How can I contact TwincitySpa?")!,
];
