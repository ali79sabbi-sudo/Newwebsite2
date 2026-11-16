import Link from "next/link";
import type { Crumb } from "@/lib/seo";

export function Breadcrumbs({ crumbs, tone = "light" }: { crumbs: Crumb[]; tone?: "light" | "dark" }) {
  const base = tone === "light" ? "text-cream/85" : "text-stone";
  return (
    <nav aria-label="Breadcrumb" className={`text-[0.8rem] tracking-wide ${base}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={tone === "light" ? "text-ivory" : "text-forest"}>{c.name}</span>
              ) : (
                <>
                  <Link href={c.path} className="underline-offset-4 hover:underline">{c.name}</Link>
                  <span aria-hidden className="text-gold">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
