import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = ["/fr", "/fr/expertises", "/fr/expertises/financement-relais", "/fr/notre-approche", "/fr/contact", "/en", "/fr/mentions-legales"];

test.describe("accessibilité (axe-core, WCAG 2.x A/AA)", () => {
  for (const path of pages) {
    test(`${path} sans violation`, async ({ page }) => {
      // Les apparitions au défilement sont neutralisées : axe mesurerait sinon un contraste
      // intermédiaire pendant le fondu (0,9 s), sans rapport avec les couleurs finales.
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(path, { waitUntil: "load" });
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      const violations = results.violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length})\n  ${v.nodes.map((n) => n.target.join(" ")).join("\n  ")}`);
      expect(violations, violations.join("\n")).toEqual([]);
    });
  }

  test("le lien d'évitement mène au contenu", async ({ page }) => {
    await page.goto("/fr");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Aller au contenu" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#contenu$/);
  });

  test("le texte agrandi (200 %) ne provoque pas de débordement horizontal", async ({ page }) => {
    await page.goto("/fr");
    await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test("prefers-reduced-motion : le contenu est visible sans attendre", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/fr");
    const opacity = await page.locator(".reveal").last().evaluate((el) => getComputedStyle(el).opacity);
    expect(opacity).toBe("1");
  });
});
