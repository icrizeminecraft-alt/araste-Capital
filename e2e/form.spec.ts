import { test, expect } from "@playwright/test";

/** Données fictives uniquement ; le serveur de test est en mode démonstration. */
const fake = {
  amount: "12 000 000",
  country: "France",
  description: "Opération fictive de test : acquisition d'un actif dans l'attente d'un refinancement engagé.",
  name: "Test Fictif",
  company: "Société Exemple",
  email: "test@example.invalid",
};

test.describe("formulaire en deux étapes", () => {
  test("valide, conserve les données au retour et annonce le mode démonstration", async ({ page }) => {
    await page.goto("/fr/contact");

    // Validation de l'étape 1
    await page.getByRole("button", { name: "Continuer" }).click();
    await expect(page.getByText("Certains champs demandent votre attention.")).toBeVisible();
    await expect(page.locator("[aria-invalid='true']").first()).toBeVisible();

    await page.getByLabel("Nature du financement").selectOption("bridge");
    await page.getByLabel("Montant recherché").fill(fake.amount);
    await page.getByLabel("Pays de l'opération").fill(fake.country);
    await page.getByLabel("Échéance souhaitée").selectOption("1-3m");
    await page.getByLabel("Bref descriptif").fill(fake.description);
    await page.getByRole("button", { name: "Continuer" }).click();

    await expect(page.getByRole("heading", { name: /Étape 2 sur 2/ })).toBeFocused();

    // Retour : données conservées
    await page.getByRole("button", { name: "Retour" }).click();
    await expect(page.getByLabel("Montant recherché")).toHaveValue(fake.amount);
    await expect(page.getByLabel("Bref descriptif")).toHaveValue(fake.description);
    await page.getByRole("button", { name: "Continuer" }).click();

    // Étape 2
    await page.getByRole("button", { name: "Envoyer la demande" }).click();
    await expect(page.getByText("Certains champs demandent votre attention.")).toBeVisible();
    await page.getByLabel("Nom et prénom").fill(fake.name);
    await page.getByLabel("Société ou structure").fill(fake.company);
    await page.getByLabel("Adresse électronique").fill("pas-un-courriel");
    await page.getByRole("button", { name: "Envoyer la demande" }).click();
    await expect(page.getByText("Veuillez indiquer une adresse électronique valide.")).toBeVisible();
    await page.getByLabel("Adresse électronique").fill(fake.email);

    // Le jeton exige un délai minimal de 3 s après le rendu de la page.
    await page.waitForTimeout(3200);
    await page.getByRole("button", { name: "Envoyer la demande" }).click();

    const status = page.getByRole("status");
    await expect(status).toContainText("Mode démonstration : aucun message n'a été envoyé.");
    await expect(status).toBeFocused();
    await expect(page.getByRole("button", { name: "Présenter une autre opération" })).toBeVisible();
  });

  test("rien n'est écrit dans le navigateur ni dans l'URL", async ({ page }) => {
    await page.goto("/fr/contact");
    await page.getByLabel("Montant recherché").fill(fake.amount);
    await page.getByLabel("Bref descriptif").fill(fake.description);
    const storage = await page.evaluate(() => ({ local: Object.keys(localStorage), session: Object.keys(sessionStorage), cookies: document.cookie }));
    expect(storage.local).toHaveLength(0);
    expect(storage.session).toHaveLength(0);
    expect(storage.cookies).toBe("");
    const url = new URL(page.url());
    expect(url.search).toBe("");
    expect(url.hash).toBe("");
  });

  test("l'API refuse un jeton invalide, un pot de miel rempli et un corps trop gros", async ({ request }) => {
    const base = {
      financingType: "bridge",
      amount: fake.amount,
      currency: "EUR",
      country: fake.country,
      timeline: "1-3m",
      description: fake.description,
      name: fake.name,
      company: fake.company,
      email: fake.email,
      phone: "",
      channel: "email",
      locale: "fr",
      idempotencyKey: "abcdefgh-0001",
      website: "",
    };
    const badToken = await request.post("/api/contact", { data: { ...base, token: "1.deadbeef" } });
    expect(badToken.status()).toBe(400);
    expect((await badToken.json()).code).toBe("token");

    const honeypot = await request.post("/api/contact", { data: { ...base, token: "1.deadbeef", website: "http://spam.invalid" } });
    expect(honeypot.status()).toBe(400);

    const huge = await request.post("/api/contact", { data: { ...base, token: "1.deadbeef", description: "x".repeat(20_000) } });
    expect([400, 413]).toContain(huge.status());

    const get = await request.get("/api/contact");
    expect(get.status()).toBe(405);
  });
});
