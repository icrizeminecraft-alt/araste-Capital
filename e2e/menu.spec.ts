import { test, expect } from "@playwright/test";

test.describe("menu mobile", () => {
  test.skip(({ viewport }) => (viewport?.width ?? 1440) >= 1024, "menu mobile uniquement sous 1024 px");

  test("s'ouvre, se ferme au clavier et rend le focus au bouton", async ({ page }) => {
    await page.goto("/fr");
    const trigger = page.getByRole("button", { name: /ouvrir le menu/i });
    await trigger.focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog", { name: "Menu" });
    await expect(dialog).toBeVisible();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(dialog.getByRole("link", { name: "Le cabinet" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("les liens du menu naviguent", async ({ page }) => {
    await page.goto("/fr");
    await page.getByRole("button", { name: /ouvrir le menu/i }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Notre approche" }).click();
    await expect(page).toHaveURL(/\/fr\/notre-approche$/);
    await expect(page.getByRole("dialog")).toBeHidden();
  });
});
