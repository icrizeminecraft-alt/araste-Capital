"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import type { ContactContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import {
  currencies,
  emptyContactFields,
  financingTypes,
  validateStep,
  type ContactFields,
  type FieldErrors,
} from "@/lib/contact/schema";

type Values = Record<keyof ContactFields, string>;
type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "demo" }
  | { kind: "error"; code: keyof ContactContent["form"]["errors"] };

function newKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `k-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Formulaire en deux étapes. Les valeurs sont conservées en mémoire lors du
 * retour à l'étape précédente ; rien n'est écrit dans le navigateur ni l'URL.
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
  // Clé d'idempotence générée à la première soumission, renouvelée à chaque nouvelle demande.
  const idempotencyRef = useRef<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const uid = useId();
  const total = t.steps.length;

  const field = (name: keyof ContactFields) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange: (event: { target: { value: string } }) => {
      setValues((prev) => ({ ...prev, [name]: event.target.value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": [errors[name] ? `${uid}-${name}-error` : null, `${uid}-${name}-hint`]
      .filter(Boolean)
      .join(" ") || undefined,
  });

  const errorText = (name: keyof ContactFields) => {
    const code = errors[name];
    return code ? (
      <p id={`${uid}-${name}-error`} className="field-error" role="alert">
        {t.errors[code]}
      </p>
    ) : null;
  };

  const focusHeading = () => {
    window.requestAnimationFrame(() => headingRef.current?.focus());
  };

  const goNext = () => {
    const stepErrors = validateStep(1, values);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
      setStatus({ kind: "error", code: "formInvalid" });
      return;
    }
    setStatus({ kind: "idle" });
    setStep(2);
    focusHeading();
  };

  const goBack = () => {
    setStatus({ kind: "idle" });
    setStep(1);
    focusHeading();
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.kind === "submitting") return;
    const stepErrors = validateStep(2, values);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
      setStatus({ kind: "error", code: "formInvalid" });
      return;
    }
    setStatus({ kind: "submitting" });
    idempotencyRef.current ??= newKey();
    const idempotencyKey = idempotencyRef.current;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, locale, token, idempotencyKey, website: "" }),
      });
      const data = (await response.json().catch(() => null)) as
        | { status: "sent" | "demo" }
        | { status: "error"; code?: string; fields?: FieldErrors }
        | null;

      if (response.ok && data && (data.status === "sent" || data.status === "demo")) {
        setStatus({ kind: data.status });
        window.requestAnimationFrame(() => resultRef.current?.focus());
        return;
      }
      if (response.status === 400 && data && data.status === "error" && data.fields) {
        setErrors(data.fields);
        const firstStepOne = Object.keys(data.fields).some((k) =>
          ["financingType", "amount", "currency", "country", "timeline", "description"].includes(k),
        );
        setStep(firstStepOne ? 1 : 2);
        setStatus({ kind: "error", code: "formInvalid" });
        focusHeading();
        return;
      }
      const code =
        response.status === 429
          ? "rateLimited"
          : response.status === 409
            ? "duplicate"
            : data && data.status === "error" && data.code === "token"
              ? "token"
              : "server";
      setStatus({ kind: "error", code });
    } catch {
      setStatus({ kind: "error", code: "network" });
    }
  };

  const reset = () => {
    setValues({ ...emptyContactFields });
    setErrors({});
    setStep(1);
    idempotencyRef.current = null;
    setStatus({ kind: "idle" });
    focusHeading();
  };

  if (status.kind === "sent" || status.kind === "demo") {
    const sent = status.kind === "sent";
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className={`border-l-2 ${sent ? "border-forest" : "border-champagne"} bg-ivory-deep/60 px-6 py-8 md:px-8`}
      >
        <h2 className="font-serif text-[1.75rem] font-medium leading-tight text-forest">
          {sent ? t.result.sentTitle : t.result.demoTitle}
        </h2>
        <p className="mt-4 max-w-prose font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
          {sent ? t.result.sentBody : t.result.demoBody}
        </p>
        <button type="button" onClick={reset} className="btn btn-outline mt-8">
          {t.result.newRequest}
        </button>
      </div>
    );
  }

  const current = t.steps[step - 1];
  const stepLabel = t.stepLabel.replace("{current}", String(step)).replace("{total}", String(total));

  return (
    <form onSubmit={submit} noValidate aria-describedby={`${uid}-required`}>
      <ol className="mb-10 flex gap-6 border-b border-stone pb-5 font-sans text-sm" aria-label={stepLabel}>
        {t.steps.map((s, i) => {
          const n = i + 1;
          const isCurrent = n === step;
          return (
            <li key={s.title} className={`flex items-center gap-3 ${isCurrent ? "text-forest" : "text-ink-soft"}`} aria-current={isCurrent ? "step" : undefined}>
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 items-center justify-center border text-xs ${
                  isCurrent ? "border-forest bg-forest text-ivory" : n < step ? "border-forest text-forest" : "border-stone-dark"
                }`}
              >
                {n}
              </span>
              <span className={isCurrent ? "font-medium" : ""}>{s.title}</span>
            </li>
          );
        })}
      </ol>

      <h2 ref={headingRef} tabIndex={-1} className="font-serif text-[1.75rem] font-medium leading-tight text-forest outline-none">
        <span className="eyebrow mb-2 block text-[0.68rem]">{stepLabel}</span>
        {current?.title}
      </h2>
      <p className="mt-2 font-sans text-[0.9375rem] text-ink-soft">{current?.description}</p>
      <p id={`${uid}-required`} className="mt-4 font-sans text-sm text-ink-soft">
        {t.required}
      </p>

      <div aria-live="polite" aria-atomic="true" className="mt-6 empty:hidden">
        {status.kind === "error" ? (
          <p className="border-l-2 border-error bg-error-soft px-4 py-3 font-sans text-sm text-error">{t.errors[status.code]}</p>
        ) : null}
      </div>

      {/* Pot de miel : invisible et ignoré par les utilisateurs. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {step === 1 ? (
        <fieldset className="mt-8 grid gap-7 md:grid-cols-2 md:gap-x-8">
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
              {financingTypes.includes("other") ? <option value="other">{t.fields.financingType.other}</option> : null}
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
            <textarea {...field("description")} rows={6} maxLength={1500} className="field-input resize-y" required />
            <p id={`${uid}-description-hint`} className="field-hint">
              {t.fields.description.hint}
            </p>
            {errorText("description")}
          </div>

          <div className="md:col-span-2 mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" onClick={goNext} className="btn btn-primary">
              {t.next}
            </button>
          </div>
        </fieldset>
      ) : (
        <fieldset className="mt-8 grid gap-7 md:grid-cols-2 md:gap-x-8">
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

          <p className="md:col-span-2 border-l border-champagne pl-4 font-sans text-sm leading-relaxed text-ink-soft">
            {t.privacyNotice}{" "}
            <Link href={pagePath(locale, "privacy")} className="link-line text-forest">
              {t.privacyLink}
            </Link>
          </p>

          <div className="md:col-span-2 mt-2 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" onClick={goBack} className="btn btn-outline">
              {t.back}
            </button>
            <button type="submit" className="btn btn-primary" disabled={status.kind === "submitting"} aria-busy={status.kind === "submitting"}>
              {status.kind === "submitting" ? `${t.submitting}…` : t.submit}
            </button>
          </div>
        </fieldset>
      )}
    </form>
  );
}
