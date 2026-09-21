import "server-only";
import type { ContactFields } from "@/lib/contact/schema";
import { siteConfig } from "@/config/site";

/**
 * Envoi des demandes de contact.
 * `none`    : mode démonstration, rien n'est envoyé (réponse « demo »).
 * `resend`  : API REST de Resend, clé côté serveur uniquement.
 * `webhook` : POST JSON vers une URL interne (CRM, automatisation).
 * Aucune donnée du formulaire n'est journalisée.
 */
export type Provider = "none" | "resend" | "webhook";
export type SendOutcome = "sent" | "demo";

export function currentProvider(): Provider {
  const value = (process.env.CONTACT_PROVIDER ?? "none").toLowerCase();
  if (value === "resend" && process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL) {
    return "resend";
  }
  if (value === "webhook" && process.env.CONTACT_WEBHOOK_URL) return "webhook";
  return "none";
}

export function renderPlainText(fields: ContactFields, locale: string, receivedAt: Date): string {
  const lines = [
    `${siteConfig.brand.name} — nouvelle demande (${locale.toUpperCase()})`,
    `Reçue le ${receivedAt.toISOString()}`,
    "",
    "OPÉRATION",
    `Nature du financement : ${fields.financingType}`,
    `Montant recherché : ${fields.amount} ${fields.currency}`,
    `Pays de l'opération : ${fields.country}`,
    `Échéance souhaitée : ${fields.timeline}`,
    "Descriptif :",
    fields.description,
    "",
    "CONTACT",
    `Nom : ${fields.name}`,
    `Société : ${fields.company}`,
    `Courriel : ${fields.email}`,
    `Téléphone : ${fields.phone || "—"}`,
    `Canal préféré : ${fields.channel}`,
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
  const subject = `[${siteConfig.brand.name}] ${fields.financingType} · ${fields.amount} ${fields.currency} · ${fields.country}`;

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
