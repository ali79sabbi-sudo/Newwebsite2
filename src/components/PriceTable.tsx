import Link from "next/link";
import type { Service } from "@/data/types";
import { STANDARD_RATES, formatPrice } from "@/data/pricing";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

/** Responsive price list: one column per session length (30 min / 1 hour). */
export function PriceTable({ services, caption }: { services: Service[]; caption: string }) {
  const columns = STANDARD_RATES;
  return (
    <div className="card-lux gold-inset">
      <div className="overflow-hidden rounded-[calc(1.25rem-2px)] bg-white">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead className="hidden bg-cream/70 text-xs uppercase tracking-[0.18em] text-forest md:table-header-group">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold">Treatment</th>
              {columns.map((c) => (
                <th key={c.minutes} scope="col" className="px-6 py-4 text-right font-semibold">{c.label}</th>
              ))}
              <th scope="col" className="px-6 py-4 font-semibold"><span className="sr-only">Book</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-beige/60">
            {services.map((s) => (
              <tr key={s.slug} className="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-5 md:table-row md:p-0">
                <th scope="row" className="col-span-2 font-normal md:px-6 md:py-5">
                  <Link href={`/${s.slug}/`} className="font-serif text-xl text-forest hover:text-gold-deep">{s.name}</Link>
                  <span className="block text-sm text-stone">{s.pressure}</span>
                </th>
                {columns.map((c) => {
                  const r = s.rates.find((x) => x.minutes === c.minutes);
                  return (
                    <td key={c.minutes} className="rounded-xl bg-cream/50 px-4 py-3 md:rounded-none md:bg-transparent md:px-6 md:py-5 md:text-right">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gold-deep md:hidden">{c.label}</span>
                      <span className="font-serif text-2xl text-forest">{r ? formatPrice(r.amount) : "—"}</span>
                    </td>
                  );
                })}
                <td className="col-span-2 md:px-6 md:py-5 md:text-right">
                  <a
                    href={whatsappLink(`Hello TwincitySpa, I would like to book a ${s.name} (30 minutes / 1 hour). What times are available?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-whatsapp px-4 text-sm font-semibold text-whatsapp hover:bg-whatsapp hover:text-white"
                  >
                    <WhatsAppIcon width={16} height={16} /> Book<span className="sr-only"> {s.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
