"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import type { ContactContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { LIMITS } from "@/lib/contact/limits";
import { emptyBriefFields, sanitizeBriefFieldErrors, validateBrief, type BriefField, type BriefFieldErrors } from "@/lib/contact/brief-client";

type ErrorCode = keyof ContactContent["form"]["errors"];
type Status = { kind: "idle" } | { kind: "submitting" } | { kind: "sent" } | { kind: "demo" } | { kind: "error"; code: ErrorCode };

function newKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `k-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Premier échange : nom, moyen de contact, quelques lignes. Mêmes protections
 * que la fiche d'opération (jeton signé, pot de miel, limitation de débit,
 * idempotence) ; rien n'est écrit dans le navigateur ni dans l'URL.
 * Présent sur l'accueil et sur la page contact : la validation locale se
 * passe de bibliothèque, le serveur reste l'autorité.
 */
export function BriefContactForm({
  locale,
  t,
  form,
  token,
  transport = "server",
  endpoint = "",
}: {
  locale: Locale;
  t: ContactContent["brief"];
  /** Libellés partagés avec la fiche : erreurs, pot de miel, mention de confidentialité. */
  form: Pick<ContactContent["form"], "errors" | "honeypotLabel" | "privacyNotice" | "privacyLink" | "submitting" | "optional" | "errorSummary">;
  token: string;
  transport?: "server" | "remote" | "demo";
  endpoint?: string;
}) {
  const [values, setValues] = useState({ ...emptyBriefFields });
  const [errors, setErrors] = useState<BriefFieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [announcement, setAnnouncement] = useState("");
  const idempotencyRef = useRef<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const remoteTokenRef = useRef<string>("");
  const uid = useId();

  useEffect(() => {
    if (transport !== "remote") return;
    const controller = new AbortController();
    fetch(`${endpoint}/api/contact/token`, { signal: controller.signal, credentials: "omit", headers: { Accept: "application/json" } })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { token?: string } | null) => {
        if (data?.token) remoteTokenRef.current = data.token;
      })
      .catch(() => {});
    return () => controller.abort();
  }, [transport, endpoint]);

  const focusHeading = () => requestAnimationFrame(() => headingRef.current?.focus());

  const field = (name: BriefField, hinted = false) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange: (event: { target: { value: string } }) => {
      setValues((prev) => ({ ...prev, [name]: event.target.value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": [errors[name] ? `${uid}-${name}-error` : null, hinted ? `${uid}-${name}-hint` : null].filter(Boolean).join(" ") || undefined,
  });
  const errorText = (name: BriefField) =>
    errors[name] ? (
      <p id={`${uid}-${name}-error`} className="field-error">
        {form.errors[errors[name] as ErrorCode]}
      </p>
    ) : null;

  const fail = (code: ErrorCode) => {
    setStatus({ kind: "error", code });
    setAnnouncement(form.errors[code]);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const parsed = validateBrief(values);
    if (Object.keys(parsed.errors).length > 0) {
      const fieldErrors = parsed.errors;
      setErrors(fieldErrors);
      setAnnouncement(form.errorSummary.replace("{count}", String(Object.keys(fieldErrors).length)));
      const first = (Object.keys(fieldErrors) as BriefField[])[0];
      if (first) document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    setErrors({});
    if (transport === "demo") {
      setStatus({ kind: "demo" });
      setAnnouncement(t.result.demoTitle);
      focusHeading();
      return;
    }
    setStatus({ kind: "submitting" });
    setAnnouncement(form.submitting);
    idempotencyRef.current ??= newKey();
    const idempotencyKey = idempotencyRef.current;
    const website = honeypotRef.current?.value ?? "";
    const usedToken = transport === "remote" ? remoteTokenRef.current : token;
    if (!usedToken) return fail("token");
    try {
      const response = await fetch(transport === "remote" ? `${endpoint}/api/contact` : "/api/contact", {
        method: "POST",
        credentials: "omit",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ kind: "brief", ...parsed.data, locale, token: usedToken, idempotencyKey, website }),
      });
      const data = (await response.json().catch(() => null)) as { status: "sent" | "demo" } | { status: "error"; code?: string; fields?: unknown } | null;
      if (response.ok && data && (data.status === "sent" || data.status === "demo")) {
        setStatus({ kind: data.status });
        setAnnouncement(data.status === "sent" ? t.result.sentTitle : t.result.demoTitle);
        focusHeading();
        return;
      }
      if (response.status === 400 && data && data.status === "error" && data.fields) {
        const fieldErrors = sanitizeBriefFieldErrors(data.fields);
        if (Object.keys(fieldErrors).length > 0) {
          setErrors(fieldErrors);
          setStatus({ kind: "idle" });
          setAnnouncement(form.errorSummary.replace("{count}", String(Object.keys(fieldErrors).length)));
          return;
        }
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
    setValues({ ...emptyBriefFields });
    setErrors({});
    idempotencyRef.current = null;
    setStatus({ kind: "idle" });
    setAnnouncement("");
    focusHeading();
  };

  const done = status.kind === "sent" || status.kind === "demo";

  return (
    <div>
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
      {done ? (
        <div className="border-t-2 border-navy pt-8">
          <h3 ref={headingRef} tabIndex={-1} className="font-serif text-[1.6rem] font-medium leading-tight text-navy outline-none">
            {status.kind === "sent" ? t.result.sentTitle : t.result.demoTitle}
          </h3>
          <p className="mt-4 max-w-prose font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{status.kind === "sent" ? t.result.sentBody : t.result.demoBody}</p>
          <button type="button" onClick={reset} className="link-line mt-6 font-sans text-[0.9375rem] font-medium text-navy">
            {t.result.newRequest}
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="space-y-7">
          <h3 ref={headingRef} tabIndex={-1} className="sr-only outline-none">
            {t.title}
          </h3>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <div>
              <label htmlFor={`${uid}-name`} className="field-label">
                {t.fields.name.label}
              </label>
              <input {...field("name")} type="text" autoComplete="name" maxLength={LIMITS.name} required className="field-input" />
              {errorText("name")}
            </div>
            <div>
              <label htmlFor={`${uid}-email`} className="field-label">
                {t.fields.email.label}
              </label>
              <input {...field("email")} type="email" autoComplete="email" inputMode="email" maxLength={LIMITS.email} required className="field-input" />
              {errorText("email")}
            </div>
          </div>
          <div>
            <label htmlFor={`${uid}-phone`} className="field-label">
              {t.fields.phone.label}
              <span className="ml-2 font-normal text-ink-soft">({form.optional})</span>
            </label>
            <input {...field("phone", true)} type="tel" autoComplete="tel" inputMode="tel" maxLength={LIMITS.phone} className="field-input" />
            <p id={`${uid}-phone-hint`} className="field-hint">
              {t.fields.phone.hint}
            </p>
            {errorText("phone")}
          </div>
          <div>
            <label htmlFor={`${uid}-message`} className="field-label">
              {t.fields.message.label}
            </label>
            <textarea {...field("message", true)} rows={5} maxLength={LIMITS.description} required className="field-input min-h-[8rem] resize-y" />
            <p id={`${uid}-message-hint`} className="field-hint">
              {t.fields.message.hint}
            </p>
            {errorText("message")}
          </div>
          <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor={`${uid}-website`}>{form.honeypotLabel}</label>
            <input ref={honeypotRef} id={`${uid}-website`} name="extra_field" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
          </div>
          {status.kind === "error" ? (
            <p className="border-l-2 border-error pl-4 font-sans text-sm text-error" role="alert">
              {form.errors[status.code]}
            </p>
          ) : null}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="btn btn-primary" aria-disabled={status.kind === "submitting" ? true : undefined}>
              {status.kind === "submitting" ? form.submitting : t.submit}
            </button>
            <p className="max-w-sm font-sans text-xs leading-relaxed text-ink-soft">
              {form.privacyNotice}{" "}
              <Link href={pagePath(locale, "privacy")} className="link-line text-navy">
                {form.privacyLink}
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
