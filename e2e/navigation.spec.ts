import { test, expect } from "@playwright/test";

const pages = [
  "/fr",
  "/fr/le-cabinet",
  "/fr/expertises",
  "/fr/expertises/financement-relais",
  "/fr/notre-approche",
  "/fr/contact",
  "/fr/mentions-legales",
  "/fr/confidentialite",
  "/en",
  "/en/expertise/bridge-finance",
  "/en/contact",
];

test.describe("navigation", () => {
  test("la racine redirige vers une langue", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.url()).toMatch(/\/(fr|en)$/);
  });

  for (const path of pages) {
    test(`${path} répond, a un H1 unique et aucun débordement horizontal`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      const lang = await page.locator("html").getAttribute("lang");
      expect(lang).toBe(path.startsWith("/en") ? "en" : "fr");
    });
  }

  test("page inconnue : 404 localisée", async ({ page }) => {
    const response = await page.goto("/fr/page-inexistante");
    expect(response?.status()).toBe(404);
    await expect(page.locator("h1")).toContainText("Cette page n'existe pas");
    const en = await page.goto("/en/does-not-exist");
    expect(en?.status()).toBe(404);
  });

  test("le sélecteur de langue conserve la page correspondante", async ({ page }) => {
    await page.goto("/fr/expertises/financement-relais");
    await page.getByRole("link", { name: "English" }).first().click();
    await expect(page).toHaveURL(/\/en\/expertise\/bridge-finance$/);
    await page.getByRole("link", { name: "Français" }).first().click();
    await expect(page).toHaveURL(/\/fr\/expertises\/financement-relais$/);
  });

  test("aucun lien interne mort sur l'accueil et l'index des expertises", async ({ page, request }) => {
    const seen = new Set<string>();
    for (const start of ["/fr", "/en", "/fr/expertises"]) {
      await page.goto(start);
      const hrefs = await page.locator("a[href^='/']").evaluateAll((els) => els.map((el) => (el as HTMLAnchorElement).getAttribute("href") ?? ""));
      for (const href of hrefs) {
        const clean = href.split("#")[0] ?? "";
        if (!clean || seen.has(clean)) continue;
        seen.add(clean);
        const res = await request.get(clean);
        expect(res.status(), `${clean} depuis ${start}`).toBeLessThan(400);
      }
    }
  });

  test("préproduction : robots interdit l'indexation et l'en-tête X-Robots-Tag est présent", async ({ request }) => {
    const robots = await request.get("/robots.txt");
    expect(await robots.text()).toContain("Disallow: /");
    const home = await request.get("/fr");
    expect(home.headers()["x-robots-tag"]).toContain("noindex");
  });
});
