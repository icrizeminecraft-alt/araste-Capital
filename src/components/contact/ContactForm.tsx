"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import type { ContactContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import {
  currencies,
  emptyContactFields,
  LIMITS,
  sanitizeFieldErrors,
  validateStep,
  type ContactFields,
  type FieldErrors,
} from "@/lib/contact/schema";

type Values = Record<keyof ContactFields, string>;
type ErrorCode = keyof ContactContent["form"]["errors"];
type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "demo" }
  | { kind: "error"; code: ErrorCode };

const STEP_ONE: (keyof ContactFields)[] = ["financingType", "amount", "currency", "country", "timeline", "description"];
const HINTED: (keyof ContactFields)[] = ["amount", "country", "description", "phone"];

function newKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `k-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Formulaire en deux étapes. Les valeurs sont conservées en mémoire lors du
 * retour à l'étape précédente ; rien n'est écrit dans le navigateur ni l'URL.
 * Les erreurs sont résumées dans une zone annoncée et reliées à chaque champ.
 */
export function ContactForm({
  locale,
  t,
  token,
  financingOptions,
}: {
  locale: Locale;
  t: ContactContent["form"];
  token: string;
  financingOptions: { value: string; label: string }[];
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<Values>({ ...emptyContactFields });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [announcement, setAnnouncement] = useState("");
  // Clé d'idempotence générée à la première soumission, renouvelée à chaque nouvelle demande.
  const idempotencyRef = useRef<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const uid = useId();
  const total = t.steps.length;

  const field = (name: keyof ContactFields) => {
    const describedBy = [errors[name] ? `${uid}-${name}-error` : null, HINTED.includes(name) ? `${uid}-${name}-hint` : null]
      .filter(Boolean)
      .join(" ");
    return {
      id: `${uid}-${name}`,
      name,
      value: values[name],
      onChange: (event: { target: { value: string } }) => {
        setValues((prev) => ({ ...prev, [name]: event.target.value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
      },
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": describedBy || undefined,
    };
  };

  const errorText = (name: keyof ContactFields) => {
    const code = errors[name];
    return code ? (
      <p id={`${uid}-${name}-error`} className="field-error">
        {t.errors[code]}
      </p>
    ) : null;
  };

  // Le focus est lu au moment du rendu suivant : l'élément visé peut changer (résultat, étape).
  const focus = (ref: { current: HTMLElement | null }) => {
    window.requestAnimationFrame(() => ref.current?.focus());
  };

  const showFieldErrors = (stepErrors: FieldErrors) => {
    const count = Object.keys(stepErrors).length;
    setErrors(stepErrors);
    setStatus({ kind: "error", code: "formInvalid" });
    setAnnouncement(t.errorSummary.replace("{count}", String(count)));
    focus(summaryRef);
  };

  const fail = (code: ErrorCode) => {
    setStatus({ kind: "error", code });
    setAnnouncement(t.errors[code]);
    focus(summaryRef);
  };

  const goNext = () => {
    const stepErrors = validateStep(1, values);
    if (Object.keys(stepErrors).length > 0) return showFieldErrors(stepErrors);
    setErrors({});
    setStatus({ kind: "idle" });
    setAnnouncement("");
    setStep(2);
    focus(headingRef);
  };

  const goBack = () => {
    setStatus({ kind: "idle" });
    setAnnouncement("");
    setStep(1);
    focus(headingRef);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.kind === "submitting") return;
    const stepErrors = validateStep(2, values);
    if (Object.keys(stepErrors).length > 0) return showFieldErrors(stepErrors);
    setErrors({});
    setStatus({ kind: "submitting" });
    setAnnouncement(t.submitting);
    idempotencyRef.current ??= newKey();
    const idempotencyKey = idempotencyRef.current;
    const website = honeypotRef.current?.value ?? "";
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, locale, token, idempotencyKey, website }),
      });
      const data = (await response.json().catch(() => null)) as
        | { status: "sent" | "demo" }
        | { status: "error"; code?: string; fields?: unknown }
        | null;

      if (response.ok && data && (data.status === "sent" || data.status === "demo")) {
        setStatus({ kind: data.status });
        setAnnouncement(data.status === "sent" ? t.result.sentTitle : t.result.demoTitle);
        focus(headingRef);
        return;
      }
      if (response.status === 400 && data && data.status === "error" && data.fields) {
        const fields = sanitizeFieldErrors(data.fields);
        const inStepOne = Object.keys(fields).some((k) => STEP_ONE.includes(k as keyof ContactFields));
        setStep(inStepOne ? 1 : 2);
        if (Object.keys(fields).length > 0) return showFieldErrors(fields);
        return fail("formInvalid");
      }
      const code: ErrorCode =
        response.status === 429
          ? "rateLimited"
          : response.status === 409
            ? "duplicate"
            : response.status === 413
              ? "tooLarge"
              : response.status === 400 || response.status === 415
                ? data && data.status === "error" && data.code === "token"
                  ? "token"
                  : "formInvalid"
                : "server";
      fail(code);
    } catch {
      fail("network");
    }
  };

  const reset = () => {
    setValues({ ...emptyContactFields });
    setErrors({});
    setStep(1);
    idempotencyRef.current = null;
    setStatus({ kind: "idle" });
    setAnnouncement("");
    focus(headingRef);
  };

  const current = t.steps[step - 1];
  const stepLabel = t.stepLabel.replace("{current}", String(step)).replace("{total}", String(total));
  const done = status.kind === "sent" || status.kind === "demo";

  return (
    <div>
      {/* Zone d'annonce persistante pour les technologies d'assistance. */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      {done ? (
        <div className={`border-l-2 ${status.kind === "sent" ? "border-forest" : "border-champagne"} bg-ivory-deep/60 px-6 py-8 md:px-8`}>
          <h2 ref={headingRef} tabIndex={-1} className="font-serif text-[1.75rem] font-medium leading-tight text-forest">
            {status.kind === "sent" ? t.result.sentTitle : t.result.demoTitle}
          </h2>
          <p className="mt-4 max-w-prose font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
            {status.kind === "sent" ? t.result.sentBody : t.result.demoBody}
          </p>
          <button type="button" onClick={reset} className="btn btn-outline mt-8">
            {t.result.newRequest}
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate aria-describedby={`${uid}-required`}>
          <noscript>
            <p className="mb-8 border-l-2 border-champagne bg-ivory-deep/60 px-4 py-3 font-sans text-sm text-ink">{t.noscript}</p>
          </noscript>

          <ol className="mb-10 flex flex-wrap items-baseline gap-x-8 gap-y-3" aria-label={t.stepsLabel}>
            {t.steps.map((s, i) => {
              const n = i + 1;
              const isCurrent = n === step;
              return (
                <li key={s.title} className={`flex items-baseline gap-3 ${isCurrent ? "text-forest" : "text-ink-soft"}`} aria-current={isCurrent ? "step" : undefined}>
                  <span aria-hidden="true" className={`numeral text-base ${isCurrent ? "" : "text-ink-soft"}`}>
                    {String(n).padStart(2, "0")}
                  </span>
                  <span className={`font-serif text-lg ${isCurrent ? "font-medium" : ""}`}>{s.title}</span>
                </li>
              );
            })}
          </ol>

          <h2 ref={headingRef} tabIndex={-1} className="font-serif text-[1.75rem] font-medium leading-tight text-forest">
            <span className="eyebrow mb-2 block">{stepLabel}</span>
            {current?.title}
          </h2>
          <p className="mt-2 font-sans text-[0.9375rem] text-ink-soft">{current?.description}</p>
          <p id={`${uid}-required`} className="mt-4 font-sans text-sm text-ink-soft">
            {t.required}
          </p>

          {/* Résumé d'erreur : reçoit le focus pour être lu et repéré. */}
          <div ref={summaryRef} tabIndex={-1} className={status.kind === "error" ? "mt-6" : "sr-only"}>
            {status.kind === "error" ? (
              <p className="border-l-2 border-error bg-error-soft px-4 py-3 font-sans text-sm text-error">
                {status.code === "formInvalid" && Object.keys(errors).length > 0
                  ? t.errorSummary.replace("{count}", String(Object.keys(errors).length))
                  : t.errors[status.code]}
              </p>
            ) : null}
          </div>

          {/* Pot de miel : hors écran, ignoré par les personnes, rempli par les robots. */}
          <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
            <label htmlFor={`${uid}-website`}>{t.honeypotLabel}</label>
            <input ref={honeypotRef} id={`${uid}-website`} name="extra_field" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
          </div>

          {step === 1 ? (
            <fieldset className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-x-8">
              <legend className="sr-only">{current?.title}</legend>

              <div className="md:col-span-2">
                <label htmlFor={`${uid}-financingType`} className="field-label">
                  {t.fields.financingType.label}
                </label>
                <select {...field("financingType")} className="field-input" required>
                  <option value="">{t.fields.financingType.placeholder}</option>
                  {financingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  <option value="other">{t.fields.financingType.other}</option>
                </select>
                {errorText("financingType")}
              </div>

              <div>
                <label htmlFor={`${uid}-amount`} className="field-label">
                  {t.fields.amount.label}
                </label>
                <input {...field("amount")} type="text" inputMode="numeric" autoComplete="off" className="field-input" required />
                <p id={`${uid}-amount-hint`} className="field-hint">
                  {t.fields.amount.hint}
                </p>
                {errorText("amount")}
              </div>

              <div>
                <label htmlFor={`${uid}-currency`} className="field-label">
                  {t.fields.currency.label}
                </label>
                <select {...field("currency")} className="field-input" required>
                  {currencies.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errorText("currency")}
              </div>

              <div>
                <label htmlFor={`${uid}-country`} className="field-label">
                  {t.fields.country.label}
                </label>
                <input {...field("country")} type="text" autoComplete="country-name" className="field-input" required />
                <p id={`${uid}-country-hint`} className="field-hint">
                  {t.fields.country.hint}
                </p>
                {errorText("country")}
              </div>

              <div>
                <label htmlFor={`${uid}-timeline`} className="field-label">
                  {t.fields.timeline.label}
                </label>
                <select {...field("timeline")} className="field-input" required>
                  <option value="">{t.fields.financingType.placeholder}</option>
                  {t.fields.timeline.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errorText("timeline")}
              </div>

              <div className="md:col-span-2">
                <label htmlFor={`${uid}-description`} className="field-label">
                  {t.fields.description.label}
                </label>
                <textarea {...field("description")} rows={6} maxLength={LIMITS.description} className="field-input resize-y" required />
                <p id={`${uid}-description-hint`} className="field-hint">
                  {t.fields.description.hint}
                </p>
                {errorText("description")}
              </div>

              <div className="mt-2 md:col-span-2">
                <button type="button" onClick={goNext} className="btn btn-primary">
                  {t.next}
                </button>
              </div>
            </fieldset>
          ) : (
            <fieldset className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-x-8">
              <legend className="sr-only">{current?.title}</legend>

              <div>
                <label htmlFor={`${uid}-name`} className="field-label">
                  {t.fields.name.label}
                </label>
                <input {...field("name")} type="text" autoComplete="name" className="field-input" required />
                {errorText("name")}
              </div>

              <div>
                <label htmlFor={`${uid}-company`} className="field-label">
                  {t.fields.company.label}
                </label>
                <input {...field("company")} type="text" autoComplete="organization" className="field-input" required />
                {errorText("company")}
              </div>

              <div>
                <label htmlFor={`${uid}-email`} className="field-label">
                  {t.fields.email.label}
                </label>
                <input {...field("email")} type="email" autoComplete="email" className="field-input" required />
                {errorText("email")}
              </div>

              <div>
                <label htmlFor={`${uid}-phone`} className="field-label">
                  {t.fields.phone.label} <span className="font-normal text-ink-soft">({t.optional})</span>
                </label>
                <input {...field("phone")} type="tel" autoComplete="tel" className="field-input" />
                <p id={`${uid}-phone-hint`} className="field-hint">
                  {t.fields.phone.hint}
                </p>
                {errorText("phone")}
              </div>

              <fieldset className="md:col-span-2">
                <legend className="field-label">{t.fields.channel.label}</legend>
                <div className="flex flex-wrap gap-6">
                  {t.fields.channel.options.map((option) => (
                    <label key={option.value} className="flex min-h-[2.75rem] items-center gap-3 font-sans text-[0.9375rem]">
                      <input
                        type="radio"
                        name="channel"
                        value={option.value}
                        checked={values.channel === option.value}
                        onChange={() => setValues((prev) => ({ ...prev, channel: option.value }))}
                        className="h-4 w-4 accent-forest"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <p className="border-l border-champagne pl-4 font-sans text-sm leading-relaxed text-ink-soft md:col-span-2">
                {t.privacyNotice}{" "}
                <Link href={pagePath(locale, "privacy")} className="link-line text-forest">
                  {t.privacyLink}
                </Link>
              </p>

              <div className="mt-2 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between md:col-span-2">
                <button type="button" onClick={goBack} className="btn btn-outline">
                  {t.back}
                </button>
                <button
                  ref={submitRef}
                  type="submit"
                  className="btn btn-primary"
                  aria-disabled={status.kind === "submitting" ? true : undefined}
                  aria-busy={status.kind === "submitting" ? true : undefined}
                >
                  {status.kind === "submitting" ? `${t.submitting}…` : t.submit}
                </button>
              </div>
            </fieldset>
          )}
        </form>
      )}
    </div>
  );
}
