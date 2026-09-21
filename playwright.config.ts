import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.PORT ?? 3100);
const baseURL = `http://127.0.0.1:${port}`;

/**
 * Tests de bout en bout sur la version construite (`next build && next start`).
 * Aucun fournisseur d'envoi n'est configuré : le formulaire reste en mode
 * démonstration et ne peut déclencher aucun envoi réel.
 */
export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    locale: "fr-FR",
    // Permet d'utiliser un Chromium déjà présent (PLAYWRIGHT_CHROMIUM_EXECUTABLE) plutôt que de le télécharger.
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE } : {},
  },
  webServer: {
    command: `npm run build && npx next start -p ${port}`,
    url: `${baseURL}/fr`,
    // Un serveur déjà lancé n'est réutilisé que sur demande explicite, afin de
    // ne jamais tester contre un déploiement configuré avec un vrai fournisseur.
    reuseExistingServer: process.env.PLAYWRIGHT_REUSE_SERVER === "1",
    timeout: 240_000,
    env: { CONTACT_PROVIDER: "none", SITE_INDEXABLE: "false" },
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "tablet", use: { ...devices["Desktop Chrome"], viewport: { width: 768, height: 1024 }, hasTouch: true } },
    { name: "mobile", use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } } },
  ],
});
