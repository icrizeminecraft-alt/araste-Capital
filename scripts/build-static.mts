/**
 * Export statique pour un hébergement web classique (Hostinger hPanel,
 * LiteSpeed/Apache + PHP, FTP) : construit le site en fichiers HTML dans
 * `out/`, y ajoute le `.htaccess`, la page racine de redirection et le relais
 * PHP du formulaire, puis produit `dist/araste-capital-hostinger.zip`.
 *
 * Usage : npm run build:static
 * Variables lues avant la construction : NEXT_PUBLIC_SITE_URL, SITE_INDEXABLE,
 * NEXT_PUBLIC_CONTACT_ENDPOINT (défaut « php » : relais PHP de même origine).
 * Voir docs/DEPLOIEMENT.md.
 */
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { securityHeaders } from "../next.config";
import { contact as frContact } from "../src/content/fr/contact";
import { contact as enContact } from "../src/content/en/contact";
import { deepMapStrings, frenchTypography } from "../src/lib/typography";
import { enabledExpertises } from "../src/config/site";
import { LIMITS, purposes, currencies, timelines, assetTypes, valueBases, assetStatuses, borrowerTypes, exitTypes, roles, channels } from "../src/lib/contact/schema";

const root = process.cwd();
const out = join(root, "out");
const deploy = join(root, "deploy", "hostinger");
const env = {
  ...process.env,
  NODE_ENV: "production",
  STATIC_EXPORT: "true",
  NEXT_PUBLIC_CONTACT_ENDPOINT: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "php",
};
const indexable = env.SITE_INDEXABLE === "true";

function step(title: string) {
  console.log(`\n— ${title}`);
}

step("Construction Next.js (output: export)");
rmSync(out, { recursive: true, force: true });
// Webpack plutôt que Turbopack : sur l'hébergement web Hostinger, le processus
// annexe que Turbopack lance pour PostCSS est tué et la construction échoue.
const build = spawnSync(process.platform === "win32" ? "npx.cmd" : "npx", ["next", "build", "--webpack"], { stdio: "inherit", env });
if (build.status !== 0) {
  console.error("La construction a échoué.");
  process.exit(build.status ?? 1);
}

const required = ["fr/index.html", "en/index.html", "fr/contact/index.html", "fr/introuvable/index.html", "en/not-found/index.html", "robots.txt", "sitemap.xml", "manifest.webmanifest", "icon.svg"];
const missing = required.filter((file) => !existsSync(join(out, file)));
if (missing.length > 0) {
  console.error(`Fichiers attendus absents de out/ : ${missing.join(", ")}`);
  process.exit(1);
}

step("Page racine, .htaccess et relais PHP");
cpSync(join(deploy, "index.html"), join(out, "index.html"));
mkdirSync(join(out, "api"), { recursive: true });
for (const file of ["lib.php", "token.php", "contact.php", "config.example.php", ".htaccess"]) {
  cpSync(join(deploy, "api", file), join(out, "api", file));
}
// Une configuration locale (non commitée) est embarquée si elle existe.
if (existsSync(join(deploy, "api", "config.php"))) cpSync(join(deploy, "api", "config.php"), join(out, "api", "config.php"));
mkdirSync(join(out, "api", "_data"), { recursive: true });
writeFileSync(join(out, "api", "_data", ".htaccess"), "Require all denied\n");
writeFileSync(join(out, "api", "_data", "index.html"), "");

// Libellés du site pour le courriel envoyé par le relais PHP.
type Fields = typeof frContact.form.fields;
function labelsFor(locale: "fr" | "en", content: typeof frContact, financing: Record<string, string>) {
  const fields: Record<string, { label: string; options?: Record<string, string>; other?: string }> = {};
  for (const [key, def] of Object.entries(content.form.fields) as [keyof Fields, Fields[keyof Fields]][]) {
    const entry: { label: string; options?: Record<string, string>; other?: string } = { label: def.label };
    if ("options" in def) entry.options = Object.fromEntries(def.options.map((o) => [o.value, o.label]));
    if ("other" in def) entry.other = def.other;
    fields[key] = entry;
  }
  return {
    steps: content.form.steps.map((s) => s.title),
    fields,
    financing,
    sheet: {
      title: locale === "fr" ? "Fiche d'opération" : "Transaction sheet",
      reference: locale === "fr" ? "Fiche" : "Sheet",
      footer:
        locale === "fr"
          ? "Document généré automatiquement à partir de la fiche renseignée par le demandeur. Informations déclaratives, à vérifier lors de l'étude. Confidentiel."
          : "Generated automatically from the sheet completed by the applicant. Declarative information, to be verified during the review. Confidential.",
    },
  };
}
const financing: Record<"fr" | "en", Record<string, string>> = { fr: {}, en: {} };
for (const key of enabledExpertises()) {
  for (const locale of ["fr", "en"] as const) {
    const mod = (await import(`../src/content/${locale}/expertises/${key}.ts`)) as Record<string, { shortTitle: string }>;
    financing[locale][key] = mod[key]?.shortTitle ?? key;
  }
}
const labels = {
  fr: deepMapStrings(labelsFor("fr", frContact, financing.fr), frenchTypography),
  en: labelsFor("en", enContact, financing.en),
  enums: {
    financingTypes: [...enabledExpertises(), "other"],
    purposes, currencies, timelines, assetTypes, valueBases, assetStatuses, borrowerTypes, exitTypes, roles, channels,
  },
  limits: LIMITS,
};
writeFileSync(join(out, "api", "labels.json"), JSON.stringify(labels, null, 1));

const headerLines = securityHeaders.map((h) => `  Header always set ${h.key} "${h.value.replace(/"/g, '\\"')}"`).join("\n");
const htaccess = `# ARASTE CAPITAL — hébergement statique (Hostinger : LiteSpeed/Apache + PHP)
# Généré par scripts/build-static.mts : ne pas modifier dans out/, modifier le script.
Options -Indexes
DirectoryIndex index.html
AddDefaultCharset UTF-8
AddType application/manifest+json .webmanifest
AddType font/woff2 .woff2
AddType image/svg+xml .svg

<IfModule mod_rewrite.c>
  RewriteEngine On
  # Racine : langue du navigateur (français par défaut).
  RewriteCond %{HTTP:Accept-Language} ^en [NC]
  RewriteRule ^$ /en/ [R=302,L]
  RewriteRule ^$ /fr/ [R=302,L]
  # Préfixe de langue en capitales → minuscules.
  RewriteRule ^(FR|Fr|fR)(/.*)?$ /fr$2 [R=308,L]
  RewriteRule ^(EN|En|eN)(/.*)?$ /en$2 [R=308,L]
  # Relais PHP du formulaire (mêmes chemins que la route Node).
  RewriteRule ^api/contact/token/?$ api/token.php [L]
  RewriteRule ^api/contact/?$ api/contact.php [L]
  # Un chemin de page sans barre oblique finale pointe vers son dossier.
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^(.+[^/])$ /$1/ [R=301,L]
</IfModule>

ErrorDocument 404 /fr/introuvable/index.html

<IfModule mod_headers.c>
${headerLines}
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
  <FilesMatch "\\.(css|js|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(svg|png|ico|webmanifest|xml|txt)$">
    Header set Cache-Control "public, max-age=86400"
  </FilesMatch>
</IfModule>
`;
writeFileSync(join(out, ".htaccess"), htaccess);

step("Archive");
mkdirSync(join(root, "dist"), { recursive: true });
const zipPath = join(root, "dist", "araste-capital-hostinger.zip");
rmSync(zipPath, { force: true });
const zip = spawnSync("zip", ["-r", "-q", "-X", zipPath, "."], { cwd: out, stdio: "inherit" });
if (zip.status !== 0) console.warn("Archive non produite (commande zip absente) : déposer le contenu de out/ manuellement.");

function sizeOf(dir: string): number {
  let total = 0;
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    total += stat.isDirectory() ? sizeOf(path) : stat.size;
  }
  return total;
}
console.log(`
Export terminé : ${(sizeOf(out) / 1024 / 1024).toFixed(1)} Mo dans out/${existsSync(zipPath) ? `, archive ${zipPath}` : ""}.
Indexation : ${indexable ? "ouverte (SITE_INDEXABLE=true)" : "fermée (préproduction, noindex)"}.
Formulaire : ${env.NEXT_PUBLIC_CONTACT_ENDPOINT === "php" ? "relais PHP de même origine (renseigner api/config.php sur l'hébergement)" : env.NEXT_PUBLIC_CONTACT_ENDPOINT ? `instance Node distante ${env.NEXT_PUBLIC_CONTACT_ENDPOINT}` : "mode démonstration (aucun envoi)"}.
Déposer le CONTENU de out/ (y compris .htaccess et api/) dans public_html — voir docs/DEPLOIEMENT.md.`);
