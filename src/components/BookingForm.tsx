"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { site, whatsappLink, telLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

type Option = { value: string; label: string };
type Fields = { name: string; phone: string; treatment: string; date: string; time: string; people: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", treatment: "", date: "", time: "", people: "1", message: "" };
const noopSubscribe = () => () => {};

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  const digits = f.phone.replace(/[^\d]/g, "");
  if (digits.length < 10 || digits.length > 13) e.phone = "Please enter a valid phone number, e.g. 0300 1234567.";
  if (!f.treatment) e.treatment = "Please choose a treatment, or select “Not sure — please advise”.";
  if (!f.date) e.date = "Please choose a preferred date.";
  else if (f.date < todayISO()) e.date = "The preferred date cannot be in the past.";
  if (!f.time) e.time = "Please choose a preferred time.";
  const n = Number(f.people);
  if (!Number.isInteger(n) || n < 1 || n > 6) e.people = "Please enter between 1 and 6 people.";
  if (f.message.length > 600) e.message = "Please keep your message under 600 characters.";
  return e;
}

const labels: Record<keyof Fields, string> = {
  name: "Full name",
  phone: "Phone / WhatsApp number",
  treatment: "Preferred massage",
  date: "Preferred date",
  time: "Preferred time",
  people: "Number of people",
  message: "Additional message (optional)",
};

/**
 * Booking REQUEST form.
 * There is no backend: on submit, the request is formatted into a WhatsApp
 * message to TwincitySpa. Nothing is confirmed until the team replies.
 */
export function BookingForm({ treatments }: { treatments: Option[] }) {
  const id = useId();
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<null | { url: string }>(null);
  const [treatmentTouched, setTreatmentTouched] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  // Read ?treatment=slug on the client without breaking static rendering / hydration.
  const search = useSyncExternalStore(noopSubscribe, () => window.location.search, () => "");
  const preset = new URLSearchParams(search).get("treatment") ?? "";
  const presetValid = treatments.some((o) => o.value === preset);
  const treatmentValue = !treatmentTouched && !f.treatment && presetValid ? preset : f.treatment;
  const fields: Fields = { ...f, treatment: treatmentValue };

  // Prevent picking past dates (DOM-only update, no re-render).
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = todayISO();
  }, []);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (k === "treatment") setTreatmentTouched(true);
    setF((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    const f2 = fields;
    setErrors(errs);
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    const treatmentLabel = treatments.find((t) => t.value === f2.treatment)?.label ?? (f2.treatment === "not-sure" ? "Not sure — please advise" : f2.treatment);
    const lines = [
      `Hello ${site.name}, I would like to request an appointment.`,
      ``,
      `Name: ${f2.name.trim()}`,
      `Phone: ${f2.phone.trim()}`,
      `Treatment: ${treatmentLabel}`,
      `Preferred date: ${f2.date}`,
      `Preferred time: ${f2.time}`,
      `Number of people: ${f2.people}`,
      f2.message.trim() ? `Message: ${f2.message.trim()}` : "",
      ``,
      `Please confirm availability and price. Thank you.`,
    ].filter((l, i, arr) => !(l === "" && arr[i - 1] === ""));
    const url = whatsappLink(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted({ url });
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  const fid = (k: keyof Fields) => `${id}-${k}`;
  const errId = (k: keyof Fields) => `${id}-${k}-error`;
  const errorKeys = Object.keys(errors).filter((k) => errors[k as keyof Fields]) as (keyof Fields)[];

  const inputCls = (k: keyof Fields) =>
    `mt-2 block w-full min-h-12 rounded-xl border bg-white px-4 py-3 text-[1rem] text-charcoal shadow-sm outline-none transition focus:border-gold-deep focus:ring-2 focus:ring-gold/30 ${
      errors[k] ? "border-red-700" : "border-beige"
    }`;

  const Field = ({ k, children, hint }: { k: keyof Fields; children: React.ReactNode; hint?: string }) => (
    <div>
      <label htmlFor={fid(k)} className="text-sm font-semibold text-forest">
        {labels[k]}
        {k !== "message" && <span aria-hidden className="text-gold-deep"> *</span>}
      </label>
      {hint && <p id={`${fid(k)}-hint`} className="mt-1 text-xs text-stone">{hint}</p>}
      {children}
      {errors[k] && (
        <p id={errId(k)} className="mt-2 text-sm font-medium text-red-800">
          <span aria-hidden>⚠ </span>{errors[k]}
        </p>
      )}
    </div>
  );

  const aria = (k: keyof Fields, hint = false) => ({
    id: fid(k),
    name: k,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": [errors[k] ? errId(k) : "", hint ? `${fid(k)}-hint` : ""].filter(Boolean).join(" ") || undefined,
  });

  if (submitted) {
    return (
      <div ref={doneRef} tabIndex={-1} className="card-lux p-8 outline-none" role="status" aria-live="polite">
        <p className="eyebrow">Almost done</p>
        <h2 className="mt-3 text-3xl">Send your request in WhatsApp</h2>
        <p className="mt-4 text-stone">
          We have prepared your booking request as a WhatsApp message. <strong className="text-forest">Please press “Send” in WhatsApp</strong> to deliver it to our team.
        </p>
        <p className="mt-3 text-stone">
          Your appointment is <strong className="text-forest">not confirmed yet</strong> — our team will reply on WhatsApp to confirm availability and price.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={submitted.url} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <WhatsAppIcon /> Open WhatsApp again
          </a>
          <a href={telLink} className="btn btn-outline">Prefer to call? {site.phoneDisplay}</a>
          <button type="button" className="btn btn-outline" onClick={() => setSubmitted(null)}>Edit request</button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="card-lux p-6 sm:p-8" aria-describedby={`${id}-intro`}>
      <p id={`${id}-intro`} className="text-sm text-stone">
        Fields marked <span className="text-gold-deep">*</span> are required. Submitting opens WhatsApp with your request ready to send — your booking is confirmed only when our team replies.
      </p>

      {errorKeys.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="mt-5 rounded-xl border border-red-700 bg-red-50 p-4 text-sm text-red-900 outline-none">
          <p className="font-semibold">Please correct {errorKeys.length === 1 ? "1 field" : `${errorKeys.length} fields`}:</p>
          <ul className="mt-2 list-disc pl-5">
            {errorKeys.map((k) => (
              <li key={k}><a href={`#${fid(k)}`} className="underline">{labels[k]}</a></li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {Field({ k: "name", children: <input type="text" autoComplete="name" value={f.name} onChange={set("name")} className={inputCls("name")} {...aria("name")} required /> })}
        {Field({ k: "phone", children: <input type="tel" inputMode="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} className={inputCls("phone")} placeholder="03XX XXXXXXX" {...aria("phone")} required /> })}
        <div className="sm:col-span-2">
          {Field({
            k: "treatment",
            children: (
              <select value={treatmentValue} onChange={set("treatment")} className={inputCls("treatment")} {...aria("treatment")} required>
                <option value="">Select a treatment…</option>
                {treatments.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
                <option value="not-sure">Not sure — please advise</option>
              </select>
            ),
          })}
        </div>
        {Field({ k: "date", children: <input ref={dateRef} type="date" value={f.date} onChange={set("date")} className={inputCls("date")} {...aria("date")} required /> })}
        {Field({ k: "time", children: <input type="time" value={f.time} onChange={set("time")} className={inputCls("time")} {...aria("time")} required /> })}
        {Field({ k: "people", hint: "Couples and group sessions are subject to availability.", children: <input type="number" min={1} max={6} inputMode="numeric" value={f.people} onChange={set("people")} className={inputCls("people")} {...aria("people", true)} required /> })}
        <div className="sm:col-span-2">
          {Field({ k: "message", children: <textarea rows={4} value={f.message} onChange={set("message")} className={inputCls("message")} placeholder="Pressure preference, therapist preference, health information we should know…" {...aria("message")} /> })}
        </div>
      </div>

      <button type="submit" className="btn btn-whatsapp mt-7 w-full sm:w-auto">
        <WhatsAppIcon /> Send request via WhatsApp
      </button>
      <p className="mt-4 text-xs text-stone">
        By sending a request you agree to our <Link href="/privacy-policy/" className="link-lux">privacy policy</Link>. Your details are sent only to {site.name} through WhatsApp.
      </p>
    </form>
  );
}
