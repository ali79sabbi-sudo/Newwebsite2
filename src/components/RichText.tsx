import Link from "next/link";
import { Fragment } from "react";

/**
 * Renders plain text with inline [label](/path) links and **bold**.
 * Keeps content data simple while allowing crawlable internal links.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (/^(https?:|mailto:|tel:)/.test(href))
            return (
              <a key={i} href={href} className="link-lux" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {label}
              </a>
            );
          return (
            <Link key={i} href={href} className="link-lux">
              {label}
            </Link>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-forest">{bold[1]}</strong>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
