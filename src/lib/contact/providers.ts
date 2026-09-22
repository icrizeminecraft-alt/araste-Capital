import "server-only";
import type { ContactFields } from "@/lib/contact/schema";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import type { ExpertiseKey } from "@/config/routes";
import { renderSheetPdf, type SheetSection } from "@/lib/contact/pdf";

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

/** Libellé d'une option codée, dans la langue de la demande. */
function optionLabel(options: { value: string; label: string }[], value: string): string {
  if (!value) return "";
  return options.find((o) => o.value === value)?.label ?? value;
}

/** Fiche structurée, dans la langue de la demande, prête pour le courriel et le PDF. */
export function buildSheet(fields: ContactFields, locale: string, receivedAt: Date) {
  const l: Locale = isLocale(locale) ? locale : "fr";
  const dict = getDictionary(l);
  const t = dict.contact.form.fields;
  const steps = dict.contact.form.steps;
  const fr = l === "fr";
  const financing = fields.financingType === "other" ? t.financingType.other : dict.expertises[fields.financingType as ExpertiseKey]?.shortTitle ?? fields.financingType;
  const money = (v: string) => (v ? `${v} ${fields.currency}` : "");
  const sections: SheetSection[] = [
    {
      title: steps[0]?.title ?? "",
      rows: [
        { label: t.financingType.label, value: financing },
        { label: t.purpose.label, value: optionLabel(t.purpose.options, fields.purpose) },
        { label: t.amount.label, value: money(fields.amount) },
        { label: t.country.label, value: fields.country },
        { label: t.timeline.label, value: optionLabel(t.timeline.options, fields.timeline) },
        { label: t.description.label, value: fields.description },
      ],
    },
    {
      title: steps[1]?.title ?? "",
      rows: [
        { label: t.assetType.label, value: optionLabel(t.assetType.options, fields.assetType) },
        { label: t.assetLocation.label, value: fields.assetLocation },
        { label: t.assetValue.label, value: money(fields.assetValue) },
        { label: t.valueBasis.label, value: optionLabel(t.valueBasis.options, fields.valueBasis) },
        { label: t.annualIncome.label, value: money(fields.annualIncome) },
        { label: t.assetStatus.label, value: optionLabel(t.assetStatus.options, fields.assetStatus) },
      ],
    },
    {
      title: steps[2]?.title ?? "",
      rows: [
        { label: t.borrowerType.label, value: optionLabel(t.borrowerType.options, fields.borrowerType) },
        { label: t.borrowerCountry.label, value: fields.borrowerCountry },
        { label: t.equity.label, value: money(fields.equity) },
        { label: t.existingDebt.label, value: money(fields.existingDebt) },
        { label: t.existingDebtMaturity.label, value: fields.existingDebtMaturity },
        { label: t.securityOffered.label, value: fields.securityOffered },
        { label: t.exitType.label, value: optionLabel(t.exitType.options, fields.exitType) },
        { label: t.exitTiming.label, value: fields.exitTiming },
      ],
    },
    {
      title: steps[3]?.title ?? "",
      rows: [
        { label: t.role.label, value: optionLabel(t.role.options, fields.role) },
        { label: t.name.label, value: fields.name },
        { label: t.company.label, value: fields.company },
        { label: t.email.label, value: fields.email },
        { label: t.phone.label, value: fields.phone },
        { label: t.channel.label, value: optionLabel(t.channel.options, fields.channel) },
        { label: t.notes.label, value: fields.notes },
      ],
    },
  ];
  const reference = `${fr ? "Fiche" : "Sheet"} ${receivedAt.toISOString().slice(0, 16).replace("T", " ")} UTC`;
  const title = fr ? "Fiche d'opération" : "Transaction sheet";
  const subtitle = `${financing} · ${money(fields.amount)} · ${fields.country} · ${optionLabel(t.role.options, fields.role)}`;
  const footer = fr
    ? "Document généré automatiquement à partir de la fiche renseignée par le demandeur. Informations déclaratives, à vérifier lors de l'étude. Confidentiel."
    : "Document generated automatically from the sheet completed by the requester. Declarative information, to be verified during the review. Confidential.";
  return { locale: l, title, subtitle, reference, sections, footer, financing };
}

export function renderPlainText(fields: ContactFields, locale: string, receivedAt: Date): string {
  const sheet = buildSheet(fields, locale, receivedAt);
  const lines = [`${siteConfig.brand.name} — ${sheet.title}`, sheet.reference, sheet.subtitle, ""];
  sheet.sections.forEach((section, i) => {
    lines.push(`${String(i + 1).padStart(2, "0")}  ${section.title.toUpperCase()}`);
    for (const row of section.rows) lines.push(`${row.label} : ${row.value || "—"}`);
    lines.push("");
  });
  lines.push(sheet.footer);
  return lines.join("\n");
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

/** Courriel HTML sobre, lisible sur mobile, reprenant la charte. */
export function renderHtml(fields: ContactFields, locale: string, receivedAt: Date): string {
  const sheet = buildSheet(fields, locale, receivedAt);
  const sections = sheet.sections
    .map(
      (section, i) => `
      <h2 style="margin:28px 0 8px;font:500 18px Georgia,serif;color:#142a25;border-bottom:1px solid #aa9167;padding-bottom:6px"><span style="color:#aa9167;font-size:12px;margin-right:10px">${String(i + 1).padStart(2, "0")}</span>${escapeHtml(section.title)}</h2>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font:14px/1.5 Helvetica,Arial,sans-serif;color:#202623">
        ${section.rows
          .map(
            (row) => `<tr><td style="padding:6px 12px 6px 0;width:38%;vertical-align:top;color:#4a524d;font-size:12px;border-bottom:1px solid #ece6da">${escapeHtml(row.label)}</td><td style="padding:6px 0;vertical-align:top;border-bottom:1px solid #ece6da;white-space:pre-wrap">${escapeHtml(row.value || "—")}</td></tr>`,
          )
          .join("")}
      </table>`,
    )
    .join("");
  return `<!doctype html><html lang="${sheet.locale}"><body style="margin:0;background:#f4f0e8;padding:24px">
  <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #dad3c7">
    <div style="background:#142a25;padding:22px 28px;color:#f4f0e8;font:500 15px Georgia,serif;letter-spacing:3px">ARASTE CAPITAL<div style="font:11px Helvetica,Arial,sans-serif;letter-spacing:1px;color:#cdb88f;margin-top:6px">${escapeHtml(sheet.reference)}</div></div>
    <div style="padding:24px 28px 32px">
      <h1 style="margin:0;font:500 28px Georgia,serif;color:#142a25">${escapeHtml(sheet.title)}</h1>
      <p style="margin:6px 0 0;font:13px Helvetica,Arial,sans-serif;color:#4a524d">${escapeHtml(sheet.subtitle)}</p>
      ${sections}
      <p style="margin:32px 0 0;font:11px/1.5 Helvetica,Arial,sans-serif;color:#4a524d;border-top:1px solid #aa9167;padding-top:12px">${escapeHtml(sheet.footer)}</p>
    </div>
  </div></body></html>`;
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
  const sheet = buildSheet(fields, locale, receivedAt);
  const text = renderPlainText(fields, locale, receivedAt);
  const html = renderHtml(fields, locale, receivedAt);
  const subject = oneLine(`[${siteConfig.brand.name}] ${sheet.title} · ${sheet.financing} · ${fields.amount} ${fields.currency} · ${fields.country}`);
  const pdf = await renderSheetPdf(sheet);
  const pdfName = `${sheet.locale === "fr" ? "fiche-operation" : "transaction-sheet"}-${receivedAt.toISOString().slice(0, 10)}.pdf`;

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
        html,
        attachments: [{ filename: pdfName, content: Buffer.from(pdf).toString("base64") }],
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
    body: JSON.stringify({
      receivedAt: receivedAt.toISOString(),
      locale,
      subject,
      fields,
      text,
      html,
      pdf: { filename: pdfName, contentType: "application/pdf", base64: Buffer.from(pdf).toString("base64") },
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new ProviderError(provider, response.status);
  return "sent";
}

export { ProviderError };
