import "server-only";
import type { ContactFields } from "@/lib/contact/schema";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import type { ExpertiseKey } from "@/config/routes";

/**
 * Envoi des demandes de contact.
 * `none`    : mode démonstration, rien n'est envoyé (réponse « demo »).
 * `resend`  : API REST de Resend, clé côté serveur uniquement.
 * `webhook` : POST JSON vers une URL interne (CRM, automatisation).
 * Aucune donnée du formulaire n'est journalisée.
 */
export type Provider = "none" | "resend" | "webhook";
export type SendOutcome = "sent" | "demo";

/** Fournisseur demandé, fournisseur effectif et raison d'un repli éventuel. */
export function providerStatus(): { requested: string; provider: Provider; problem: string | null } {
  const requested = (process.env.CONTACT_PROVIDER ?? "none").toLowerCase();
  if (requested === "none") return { requested, provider: "none", problem: null };
  if (requested === "resend") {
    const ok = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL);
    return ok
      ? { requested, provider: "resend", problem: null }
      : { requested, provider: "none", problem: "RESEND_API_KEY, CONTACT_TO_EMAIL et CONTACT_FROM_EMAIL sont requis" };
  }
  if (requested === "webhook") {
    return process.env.CONTACT_WEBHOOK_URL
      ? { requested, provider: "webhook", problem: null }
      : { requested, provider: "none", problem: "CONTACT_WEBHOOK_URL est requis" };
  }
  return { requested, provider: "none", problem: `valeur inconnue « ${requested} »` };
}

export function currentProvider(): Provider {
  return providerStatus().provider;
}

/** Sujet monoligne, borné. */
function oneLine(value: string, max = 120): string {
  const flat = value.replace(/\s+/g, " ").trim();
  return flat.length > max ? `${flat.slice(0, max - 1)}…` : flat;
}

/** Libellés lisibles, dans la langue de la demande, pour les valeurs codées. */
export function describeFields(fields: ContactFields, locale: string) {
  const l: Locale = isLocale(locale) ? locale : "fr";
  const t = getDictionary(l).contact.form.fields;
  const dict = getDictionary(l);
  const financing =
    fields.financingType === "other" ? t.financingType.other : dict.expertises[fields.financingType as ExpertiseKey]?.shortTitle ?? fields.financingType;
  const timeline = t.timeline.options.find((o) => o.value === fields.timeline)?.label ?? fields.timeline;
  const channel = t.channel.options.find((o) => o.value === fields.channel)?.label ?? fields.channel;
  return { locale: l, t, financing, timeline, channel };
}

export function renderPlainText(fields: ContactFields, locale: string, receivedAt: Date): string {
  const d = describeFields(fields, locale);
  const lines = [
    `${siteConfig.brand.name} — ${d.locale === "fr" ? "nouvelle demande" : "new request"} (${d.locale.toUpperCase()})`,
    `${d.locale === "fr" ? "Reçue le" : "Received on"} ${receivedAt.toISOString()}`,
    "",
    d.locale === "fr" ? "OPÉRATION" : "TRANSACTION",
    `${d.t.financingType.label} : ${d.financing}`,
    `${d.t.amount.label} : ${fields.amount} ${fields.currency}`,
    `${d.t.country.label} : ${fields.country}`,
    `${d.t.timeline.label} : ${d.timeline}`,
    `${d.t.description.label} :`,
    fields.description,
    "",
    "CONTACT",
    `${d.t.name.label} : ${fields.name}`,
    `${d.t.company.label} : ${fields.company}`,
    `${d.t.email.label} : ${fields.email}`,
    `${d.t.phone.label} : ${fields.phone || "—"}`,
    `${d.t.channel.label} : ${d.channel}`,
  ];
  return lines.join("\n");
}

class ProviderError extends Error {
  constructor(
    public readonly provider: Provider,
    public readonly status: number,
  ) {
    super(`Provider ${provider} responded ${status}`);
  }
}

export async function sendContact(fields: ContactFields, locale: string): Promise<SendOutcome> {
  const provider = currentProvider();
  if (provider === "none") return "demo";

  const receivedAt = new Date();
  const text = renderPlainText(fields, locale, receivedAt);
  const subject = oneLine(`[${siteConfig.brand.name}] ${describeFields(fields, locale).financing} · ${fields.amount} ${fields.currency} · ${fields.country}`);

  if (provider === "resend") {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: fields.email,
        subject,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new ProviderError(provider, response.status);
    return "sent";
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.CONTACT_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`;
  }
  const response = await fetch(process.env.CONTACT_WEBHOOK_URL as string, {
    method: "POST",
    headers,
    body: JSON.stringify({ receivedAt: receivedAt.toISOString(), locale, subject, fields, text }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new ProviderError(provider, response.status);
  return "sent";
}

export { ProviderError };
