"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import type { ContactContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import {
  currencies,
  emptyContactFields,
  LIMITS,
  sanitizeFieldErrors,
  stepFields,
  validateStep,
  type ContactFields,
  type FieldErrors,
  type StepNumber,
} from "@/lib/contact/schema";

type Values = Record<keyof ContactFields, string>;
type ErrorCode = keyof ContactContent["form"]["errors"];
type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "demo" }
  | { kind: "error"; code: ErrorCode };

const HINTED: (keyof ContactFields)[] = [
  "amount", "country", "description", "assetLocation", "assetValue", "annualIncome", "equity", "existingDebt", "existingDebtMaturity", "securityOffered", "exitTiming", "phone", "notes",
];
const OPTIONAL: (keyof ContactFields)[] = ["assetValue", "valueBasis", "annualIncome", "assetStatus", "equity", "existingDebt", "existingDebtMaturity", "securityOffered", "exitTiming", "phone", "notes"];
const TOTAL = 4;

function newKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `k-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Fiche d'opération en quatre étapes, avec récapitulatif avant envoi.
 * Les valeurs restent en mémoire ; rien n'est écrit dans le navigateur ni l'URL.
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
  const [step, setStep] = useState<StepNumber>(1);
  const [values, setValues] = useState<Values>({ ...emptyContactFields });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [announcement, setAnnouncement] = useState("");
  const [reviewing, setReviewing] = useState(false);
  const idempotencyRef = useRef<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const uid = useId();

  const field = (name: keyof ContactFields) => {
    const describedBy = [errors[name] ? `${uid}-${name}-error` : null, HINTED.includes(name) ? `${uid}-${name}-hint` : null].filter(Boolean).join(" ");
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
      required: !OPTIONAL.includes(name),
    };
  };

  const label = (name: keyof ContactFields, text: string) => (
    <label htmlFor={`${uid}-${name}`} className="field-label">
      {text}
      {OPTIONAL.includes(name) ? <span className="ml-2 font-normal text-ink-soft">({t.optional})</span> : null}
    </label>
  );
  const hint = (name: keyof ContactFields, text: string) => (
    <p id={`${uid}-${name}-hint`} className="field-hint">
      {text}
    </p>
  );
  const errorText = (name: keyof ContactFields) => {
    const code = errors[name];
    return code ? (
      <p id={`${uid}-${name}-error`} className="field-error">
        {t.errors[code]}
      </p>
    ) : null;
  };
  const select = (name: keyof ContactFields, options: { value: string; label: string }[], placeholder = t.fields.financingType.placeholder) => (
    <select {...field(name)} className="field-input">
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
  const input = (name: keyof ContactFields, props: Record<string, unknown> = {}) => <input {...field(name)} type="text" className="field-input" {...props} />;
  const Field = ({ name, children, wide = false }: { name: keyof ContactFields; children: ReactNode; wide?: boolean }) => (
    <div className={wide ? "md:col-span-2" : ""} data-field={name}>
      {children}
      {errorText(name)}
    </div>
  );

  const focus = (ref: { current: HTMLElement | null }) => window.requestAnimationFrame(() => ref.current?.focus());

  const showFieldErrors = (stepErrors: FieldErrors) => {
    setErrors(stepErrors);
    setStatus({ kind: "error", code: "formInvalid" });
    setAnnouncement(t.errorSummary.replace("{count}", String(Object.keys(stepErrors).length)));
    focus(summaryRef);
  };
  const fail = (code: ErrorCode) => {
    setStatus({ kind: "error", code });
    setAnnouncement(t.errors[code]);
    focus(summaryRef);
  };
  const goTo = (target: StepNumber, review = false) => {
    setErrors({});
    setStatus({ kind: "idle" });
    setAnnouncement("");
    setReviewing(review);
    setStep(target);
    focus(headingRef);
  };
  const goNext = () => {
    const stepErrors = validateStep(step, values);
    if (Object.keys(stepErrors).length > 0) return showFieldErrors(stepErrors);
    if (step < TOTAL) return goTo((step + 1) as StepNumber);
    goTo(TOTAL, true);
  };
  const goBack = () => {
    if (reviewing) return goTo(TOTAL);
    if (step > 1) goTo((step - 1) as StepNumber);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.kind === "submitting") return;
    for (const s of [1, 2, 3, 4] as StepNumber[]) {
      const stepErrors = validateStep(s, values);
      if (Object.keys(stepErrors).length > 0) {
        setReviewing(false);
        setStep(s);
        return showFieldErrors(stepErrors);
      }
    }
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
      const data = (await response.json().catch(() => null)) as { status: "sent" | "demo" } | { status: "error"; code?: string; fields?: unknown } | null;
      if (response.ok && data && (data.status === "sent" || data.status === "demo")) {
        setStatus({ kind: data.status });
        setAnnouncement(data.status === "sent" ? t.result.sentTitle : t.result.demoTitle);
        focus(headingRef);
        return;
      }
      if (response.status === 400 && data && data.status === "error" && data.fields) {
        const fields = sanitizeFieldErrors(data.fields);
        const keys = Object.keys(fields) as (keyof ContactFields)[];
        const target = ([1, 2, 3, 4] as StepNumber[]).find((s) => keys.some((k) => stepFields[s].includes(k))) ?? TOTAL;
        setReviewing(false);
        setStep(target);
        if (keys.length > 0) return showFieldErrors(fields);
        return fail("formInvalid");
      }
      const code: ErrorCode =
        response.status === 429 ? "rateLimited"
        : response.status === 409 ? "duplicate"
        : response.status === 413 ? "tooLarge"
        : response.status === 400 || response.status === 415
          ? (data && data.status === "error" && data.code === "token" ? "token" : "formInvalid")
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
    setReviewing(false);
    idempotencyRef.current = null;
    setStatus({ kind: "idle" });
    setAnnouncement("");
    focus(headingRef);
  };

  const current = t.steps[step - 1];
  const stepLabel = t.stepLabel.replace("{current}", String(step)).replace("{total}", String(TOTAL));
  const done = status.kind === "sent" || status.kind === "demo";
  const optionText = (options: { value: string; label: string }[], value: string) => options.find((o) => o.value === value)?.label ?? "";
  const summaryRows = (s: StepNumber): { label: string; value: string }[] => {
    const f = t.fields;
    const money = (v: string) => (v ? `${v} ${values.currency}` : "");
    switch (s) {
      case 1:
        return [
          { label: f.financingType.label, value: values.financingType === "other" ? f.financingType.other : optionText(financingOptions, values.financingType) },
          { label: f.purpose.label, value: optionText(f.purpose.options, values.purpose) },
          { label: f.amount.label, value: money(values.amount) },
          { label: f.country.label, value: values.country },
          { label: f.timeline.label, value: optionText(f.timeline.options, values.timeline) },
          { label: f.description.label, value: values.description },
        ];
      case 2:
        return [
          { label: f.assetType.label, value: optionText(f.assetType.options, values.assetType) },
          { label: f.assetLocation.label, value: values.assetLocation },
          { label: f.assetValue.label, value: money(values.assetValue) },
          { label: f.valueBasis.label, value: optionText(f.valueBasis.options, values.valueBasis) },
          { label: f.annualIncome.label, value: money(values.annualIncome) },
          { label: f.assetStatus.label, value: optionText(f.assetStatus.options, values.assetStatus) },
        ];
      case 3:
        return [
          { label: f.borrowerType.label, value: optionText(f.borrowerType.options, values.borrowerType) },
          { label: f.borrowerCountry.label, value: values.borrowerCountry },
          { label: f.equity.label, value: money(values.equity) },
          { label: f.existingDebt.label, value: money(values.existingDebt) },
          { label: f.existingDebtMaturity.label, value: values.existingDebtMaturity },
          { label: f.securityOffered.label, value: values.securityOffered },
          { label: f.exitType.label, value: optionText(f.exitType.options, values.exitType) },
          { label: f.exitTiming.label, value: values.exitTiming },
        ];
      default:
        return [
          { label: f.role.label, value: optionText(f.role.options, values.role) },
          { label: f.name.label, value: values.name },
          { label: f.company.label, value: values.company },
          { label: f.email.label, value: values.email },
          { label: f.phone.label, value: values.phone },
          { label: f.channel.label, value: optionText(f.channel.options, values.channel) },
          { label: f.notes.label, value: values.notes },
        ];
    }
  };

  if (done) {
    return (
      <div>
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </div>
        <div className={`border-l-2 ${status.kind === "sent" ? "border-forest" : "border-champagne"} bg-ivory-deep/60 px-6 py-8 md:px-8`}>
          <h2 ref={headingRef} tabIndex={-1} className="font-serif text-[1.75rem] font-medium leading-tight text-forest">
            {status.kind === "sent" ? t.result.sentTitle : t.result.demoTitle}
          </h2>
          <p className="mt-4 max-w-prose font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{status.kind === "sent" ? t.result.sentBody : t.result.demoBody}</p>
          <button type="button" onClick={reset} className="btn btn-outline mt-8">
            {t.result.newRequest}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
      <form onSubmit={submit} noValidate aria-describedby={`${uid}-required`}>
        <noscript>
          <p className="mb-8 border-l-2 border-champagne bg-ivory-deep/60 px-4 py-3 font-sans text-sm text-ink">{t.noscript}</p>
        </noscript>

        <ol className="mb-10 flex flex-wrap items-baseline gap-x-7 gap-y-3" aria-label={t.stepsLabel}>
          {t.steps.map((s, i) => {
            const n = (i + 1) as StepNumber;
            const isCurrent = n === step && !reviewing;
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
          <span className="eyebrow mb-2 block">{reviewing ? t.summaryTitle : stepLabel}</span>
          {reviewing ? t.summaryTitle : current?.title}
        </h2>
        <p className="mt-2 font-sans text-[0.9375rem] text-ink-soft">{reviewing ? t.summaryHint : current?.description}</p>
        <p id={`${uid}-required`} className="mt-4 font-sans text-sm text-ink-soft">
          {t.required}
        </p>

        <div ref={summaryRef} tabIndex={-1} className={status.kind === "error" ? "mt-6" : "sr-only"}>
          {status.kind === "error" ? (
            <p className="border-l-2 border-error bg-error-soft px-4 py-3 font-sans text-sm text-error">
              {status.code === "formInvalid" && Object.keys(errors).length > 0 ? t.errorSummary.replace("{count}", String(Object.keys(errors).length)) : t.errors[status.code]}
            </p>
          ) : null}
        </div>

        <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor={`${uid}-website`}>{t.honeypotLabel}</label>
          <input ref={honeypotRef} id={`${uid}-website`} name="extra_field" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>

        {reviewing ? (
          <div className="mt-8 space-y-10">
            {([1, 2, 3, 4] as StepNumber[]).map((s) => (
              <section key={s} aria-labelledby={`${uid}-summary-${s}`} className="border-t border-forest pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 id={`${uid}-summary-${s}`} className="flex items-baseline gap-3 font-serif text-xl font-medium text-forest">
                    <span aria-hidden="true" className="numeral text-sm">
                      {String(s).padStart(2, "0")}
                    </span>
                    {t.steps[s - 1]?.title}
                  </h3>
                  <button type="button" onClick={() => goTo(s)} className="link-line font-sans text-sm font-medium text-forest">
                    {t.edit}
                  </button>
                </div>
                <dl className="mt-4 grid grid-cols-1 gap-y-3 font-sans text-[0.9375rem] md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-x-6">
                  {summaryRows(s)
                    .filter((row) => row.value)
                    .map((row) => (
                      <div key={row.label} className="contents">
                        <dt className="text-sm text-ink-soft md:border-b md:border-stone md:py-2">{row.label}</dt>
                        <dd className="whitespace-pre-line border-b border-stone pb-3 text-ink md:py-2">{row.value}</dd>
                      </div>
                    ))}
                </dl>
              </section>
            ))}
            <p className="border-l border-champagne pl-4 font-sans text-sm leading-relaxed text-ink-soft">
              {t.privacyNotice}{" "}
              <Link href={pagePath(locale, "privacy")} className="link-line text-forest">
                {t.privacyLink}
              </Link>
            </p>
            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" onClick={goBack} className="btn btn-outline">
                {t.back}
              </button>
              <button type="submit" className="btn btn-primary" aria-disabled={status.kind === "submitting" ? true : undefined} aria-busy={status.kind === "submitting" ? true : undefined}>
                {status.kind === "submitting" ? `${t.submitting}…` : t.submit}
              </button>
            </div>
          </div>
        ) : (
          <fieldset className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-x-8">
            <legend className="sr-only">{current?.title}</legend>

            {step === 1 ? (
              <>
                <Field name="financingType" wide>
                  {label("financingType", t.fields.financingType.label)}
                  <select {...field("financingType")} className="field-input">
                    <option value="">{t.fields.financingType.placeholder}</option>
                    {financingOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                    <option value="other">{t.fields.financingType.other}</option>
                  </select>
                </Field>
                <Field name="purpose" wide>
                  {label("purpose", t.fields.purpose.label)}
                  {select("purpose", t.fields.purpose.options)}
                </Field>
                <Field name="amount">
                  {label("amount", t.fields.amount.label)}
                  {input("amount", { inputMode: "numeric", autoComplete: "off" })}
                  {hint("amount", t.fields.amount.hint)}
                </Field>
                <Field name="currency">
                  {label("currency", t.fields.currency.label)}
                  <select {...field("currency")} className="field-input">
                    {currencies.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field name="country">
                  {label("country", t.fields.country.label)}
                  {input("country", { autoComplete: "country-name" })}
                  {hint("country", t.fields.country.hint)}
                </Field>
                <Field name="timeline">
                  {label("timeline", t.fields.timeline.label)}
                  {select("timeline", t.fields.timeline.options)}
                </Field>
                <Field name="description" wide>
                  {label("description", t.fields.description.label)}
                  <textarea {...field("description")} rows={6} maxLength={LIMITS.description} className="field-input resize-y" />
                  {hint("description", t.fields.description.hint)}
                </Field>
              </>
            ) : null}

            {step === 2 ? (
              <>
                <Field name="assetType">
                  {label("assetType", t.fields.assetType.label)}
                  {select("assetType", t.fields.assetType.options)}
                </Field>
                <Field name="assetLocation">
                  {label("assetLocation", t.fields.assetLocation.label)}
                  {input("assetLocation")}
                  {hint("assetLocation", t.fields.assetLocation.hint)}
                </Field>
                <Field name="assetValue">
                  {label("assetValue", t.fields.assetValue.label)}
                  {input("assetValue", { inputMode: "numeric", autoComplete: "off" })}
                  {hint("assetValue", t.fields.assetValue.hint)}
                </Field>
                <Field name="valueBasis">
                  {label("valueBasis", t.fields.valueBasis.label)}
                  {select("valueBasis", t.fields.valueBasis.options)}
                </Field>
                <Field name="annualIncome">
                  {label("annualIncome", t.fields.annualIncome.label)}
                  {input("annualIncome", { inputMode: "numeric", autoComplete: "off" })}
                  {hint("annualIncome", t.fields.annualIncome.hint)}
                </Field>
                <Field name="assetStatus">
                  {label("assetStatus", t.fields.assetStatus.label)}
                  {select("assetStatus", t.fields.assetStatus.options)}
                </Field>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <Field name="borrowerType">
                  {label("borrowerType", t.fields.borrowerType.label)}
                  {select("borrowerType", t.fields.borrowerType.options)}
                </Field>
                <Field name="borrowerCountry">
                  {label("borrowerCountry", t.fields.borrowerCountry.label)}
                  {input("borrowerCountry", { autoComplete: "country-name" })}
                </Field>
                <Field name="equity">
                  {label("equity", t.fields.equity.label)}
                  {input("equity", { inputMode: "numeric", autoComplete: "off" })}
                  {hint("equity", t.fields.equity.hint)}
                </Field>
                <Field name="existingDebt">
                  {label("existingDebt", t.fields.existingDebt.label)}
                  {input("existingDebt", { inputMode: "numeric", autoComplete: "off" })}
                  {hint("existingDebt", t.fields.existingDebt.hint)}
                </Field>
                <Field name="existingDebtMaturity">
                  {label("existingDebtMaturity", t.fields.existingDebtMaturity.label)}
                  {input("existingDebtMaturity")}
                  {hint("existingDebtMaturity", t.fields.existingDebtMaturity.hint)}
                </Field>
                <Field name="exitType">
                  {label("exitType", t.fields.exitType.label)}
                  {select("exitType", t.fields.exitType.options)}
                </Field>
                <Field name="exitTiming">
                  {label("exitTiming", t.fields.exitTiming.label)}
                  {input("exitTiming")}
                  {hint("exitTiming", t.fields.exitTiming.hint)}
                </Field>
                <Field name="securityOffered" wide>
                  {label("securityOffered", t.fields.securityOffered.label)}
                  <textarea {...field("securityOffered")} rows={3} maxLength={LIMITS.medium} className="field-input resize-y" />
                  {hint("securityOffered", t.fields.securityOffered.hint)}
                </Field>
              </>
            ) : null}

            {step === 4 ? (
              <>
                <Field name="role" wide>
                  {label("role", t.fields.role.label)}
                  {select("role", t.fields.role.options)}
                </Field>
                <Field name="name">
                  {label("name", t.fields.name.label)}
                  {input("name", { autoComplete: "name" })}
                </Field>
                <Field name="company">
                  {label("company", t.fields.company.label)}
                  {input("company", { autoComplete: "organization" })}
                </Field>
                <Field name="email">
                  {label("email", t.fields.email.label)}
                  <input {...field("email")} type="email" autoComplete="email" className="field-input" />
                </Field>
                <Field name="phone">
                  {label("phone", t.fields.phone.label)}
                  <input {...field("phone")} type="tel" autoComplete="tel" className="field-input" />
                  {hint("phone", t.fields.phone.hint)}
                </Field>
                <fieldset className="md:col-span-2">
                  <legend className="field-label">{t.fields.channel.label}</legend>
                  <div className="flex flex-wrap gap-6">
                    {t.fields.channel.options.map((option) => (
                      <label key={option.value} className="flex min-h-[2.75rem] items-center gap-3 font-sans text-[0.9375rem]">
                        <input type="radio" name="channel" value={option.value} checked={values.channel === option.value} onChange={() => setValues((prev) => ({ ...prev, channel: option.value }))} className="h-4 w-4 accent-forest" />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <Field name="notes" wide>
                  {label("notes", t.fields.notes.label)}
                  <textarea {...field("notes")} rows={3} maxLength={LIMITS.medium} className="field-input resize-y" />
                  {hint("notes", t.fields.notes.hint)}
                </Field>
              </>
            ) : null}

            <div className="mt-2 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between md:col-span-2">
              {step > 1 ? (
                <button type="button" onClick={goBack} className="btn btn-outline">
                  {t.back}
                </button>
              ) : (
                <span />
              )}
              <button type="button" onClick={goNext} className="btn btn-primary">
                {t.next}
              </button>
            </div>
          </fieldset>
        )}
      </form>
    </div>
  );
}
