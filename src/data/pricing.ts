/**
 * TwincitySpa rate card (confirmed by the owner).
 * Every treatment uses STANDARD_RATES unless a service overrides `rates`.
 */
export type Rate = { minutes: number; label: string; amount: number };

export const CURRENCY = "PKR";

export const STANDARD_RATES: Rate[] = [
  { minutes: 30, label: "30 minutes", amount: 3000 },
  { minutes: 60, label: "1 hour", amount: 6000 },
];

export const formatPrice = (amount: number) => `${CURRENCY} ${amount.toLocaleString("en-US")}`;

export const fromPrice = (rates: Rate[]) => formatPrice(Math.min(...rates.map((r) => r.amount)));

/** e.g. "30 min PKR 3,000 · 1 hour PKR 6,000" */
export const ratesSummary = (rates: Rate[]) => rates.map((r) => `${r.label} ${formatPrice(r.amount)}`).join(" · ");
