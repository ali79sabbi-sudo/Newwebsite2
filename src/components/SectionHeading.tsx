import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  id?: string;
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="gold-rule" aria-hidden />
          {eyebrow}
        </p>
      )}
      <Tag id={id} className="mt-4 text-[2.15rem] sm:text-[2.6rem] lg:text-5xl">{title}</Tag>
      {lead && <div className="mt-5 text-[1.05rem] leading-relaxed text-stone">{lead}</div>}
    </div>
  );
}
