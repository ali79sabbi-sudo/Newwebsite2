/**
 * VERIFIED reviews only. Add genuine reviews (e.g. copied with permission from
 * your Google Business Profile) — never invent testimonials.
 * The homepage reviews section is hidden while this list is empty.
 * Do NOT add AggregateRating schema unless it reflects real, visible reviews.
 */
export type Review = { author: string; text: string; source: string; date: string };

export const reviews: Review[] = [];
