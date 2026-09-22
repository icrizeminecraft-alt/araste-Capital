import { test, expect, type Page } from "@playwright/test";

/** Données fictives uniquement ; le serveur de test est en mode démonstration. */
const fake = {
  amount: "12 000 000",
  country: "France",
  description: "Opération fictive de test : acquisition d'un actif dans l'attente d'un refinancement engagé.",
  assetLocation: "Lyon",
  name: "Test Fictif",
  company: "Société Exemple",
  email: "test@example.invalid",
};

async function fillStepOne(page: Page) {
  await page.getByLabel("Nature du financement").selectOption("bridge");
  await page.getByLabel("Objet de l'opération").selectOption("acquisition");
  await page.getByLabel("Montant recherché").fill(fake.amount);
  await page.getByLabel("Pays de l'opération").fill(fake.country);
  await page.getByLabel("Délai souhaité de mise en place").selectOption("1-3m");
  await page.getByLabel("Bref descriptif").fill(fake.description);
}
async function fillStepTwo(page: Page) {
  await page.getByLabel("Type d'actif").selectOption("commercial");
  await page.getByLabel("Localisation de l'actif").fill(fake.assetLocation);
}
async function fillStepThree(page: Page) {
  await page.getByLabel("Entité emprunteuse").selectOption("spv");
  await page.getByLabel("Pays d'immatriculation de l'emprunteur").fill(fake.country);
  await page.getByLabel("Sortie envisagée").selectOption("refinancing");
}
async function fillStepFour(page: Page) {
  await page.getByLabel("Vous présentez cette opération en qualité de").selectOption("borrower");
  await page.getByLabel("Nom et prénom").fill(fake.name);
  await page.getByLabel("Société ou structure").fill(fake.company);
  await page.getByLabel("Adresse électronique").fill(fake.email);
}
const next = (page: Page) => page.getByRole("button", { name: "Continuer" }).click();
const errorSummary = (page: Page) => page.locator("form p", { hasText: /champ\(s\) demandent votre attention\./ });

test.describe("fiche d'opération en quatre étapes", () => {
  test("valide chaque étape, conserve les données, récapitule puis annonce le mode démonstration", async ({ page }) => {
    await page.goto("/fr/contact");

    // Étape 1 : résumé d'erreurs affiché, focalisé, champs marqués.
    await next(page);
    await expect(errorSummary(page)).toBeVisible();
    await expect(page.locator("[aria-invalid='true']").first()).toBeVisible();
    const focusedText = await page.evaluate(() => document.activeElement?.textContent ?? "");
    expect(focusedText).toContain("demandent votre attention");

    await fillStepOne(page);
    await next(page);
    await expect(page.getByRole("heading", { name: /Étape 2 sur 4/ })).toBeFocused();

    // Retour : données conservées
    await page.getByRole("button", { name: "Retour" }).click();
    await expect(page.getByLabel("Montant recherché")).toHaveValue(fake.amount);
    await expect(page.getByLabel("Bref descriptif")).toHaveValue(fake.description);
    await next(page);

    // Étape 2 : champs requis, montant facultatif mais numérique.
    await next(page);
    await expect(errorSummary(page)).toBeVisible();
    await fillStepTwo(page);
    await page.getByLabel("Valeur estimée").fill("dix-huit millions");
    await next(page);
    await expect(page.getByText("Indiquez le montant en chiffres uniquement, sans symbole ni lettre (ex. 3 500 000).")).toBeVisible();
    await page.getByLabel("Valeur estimée").fill("18 000 000");
    await next(page);
    await expect(page.getByRole("heading", { name: /Étape 3 sur 4/ })).toBeFocused();

    // Étape 3
    await next(page);
    await expect(errorSummary(page)).toBeVisible();
    await fillStepThree(page);
    await next(page);
    await expect(page.getByRole("heading", { name: /Étape 4 sur 4/ })).toBeFocused();

    // Étape 4
    await next(page);
    await expect(errorSummary(page)).toBeVisible();
    await fillStepFour(page);
    await page.getByLabel("Adresse électronique").fill("pas-un-courriel");
    await next(page);
    await expect(page.getByText("Veuillez indiquer une adresse électronique valide.")).toBeVisible();
    await page.getByLabel("Adresse électronique").fill(fake.email);
    await next(page);

    // Récapitulatif : toutes les sections, retour à une étape via « Modifier ».
    const summaryHeading = page.getByRole("heading", { name: /Récapitulatif de la fiche/ }).first();
    await expect(summaryHeading).toBeFocused();
    await expect(page.getByText("18 000 000 EUR")).toBeVisible();
    await expect(page.getByText(fake.assetLocation, { exact: true })).toBeVisible();
    await expect(page.getByText("Refinancement de long terme")).toBeVisible();
    await page.getByRole("button", { name: "Modifier" }).nth(1).click();
    await expect(page.getByRole("heading", { name: /Étape 2 sur 4/ })).toBeFocused();
    await expect(page.getByLabel("Localisation de l'actif")).toHaveValue(fake.assetLocation);
    await next(page);
    await next(page);
    await next(page);
    await expect(page.getByRole("heading", { name: /Récapitulatif de la fiche/ }).first()).toBeFocused();

    // Le jeton exige un délai minimal de 3 s après le rendu de la page.
    await page.waitForTimeout(3200);
    await page.getByRole("button", { name: "Envoyer la fiche" }).click();

    const result = page.getByRole("heading", { name: "Mode démonstration : aucun message n'a été envoyé." });
    await expect(result).toBeVisible();
    await expect(result).toBeFocused();
    await expect(page.getByRole("button", { name: "Présenter une autre opération" })).toBeVisible();
  });

  test("être rappelé exige un numéro de téléphone", async ({ page }) => {
    await page.goto("/fr/contact");
    await fillStepOne(page);
    await next(page);
    await fillStepTwo(page);
    await next(page);
    await fillStepThree(page);
    await next(page);
    await fillStepFour(page);
    await page.getByRole("radio", { name: "Téléphone" }).check();
    await next(page);
    await expect(page.getByText("Indiquez un numéro pour être rappelé.")).toBeVisible();
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

  test("l'API refuse un jeton invalide et un corps trop gros, et neutralise le pot de miel", async ({ request }) => {
    const base = {
      financingType: "bridge",
      purpose: "acquisition",
      amount: fake.amount,
      currency: "EUR",
      country: fake.country,
      timeline: "1-3m",
      description: fake.description,
      assetType: "commercial",
      assetLocation: fake.assetLocation,
      borrowerType: "spv",
      borrowerCountry: fake.country,
      exitType: "refinancing",
      role: "borrower",
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

    // Pot de miel rempli : réponse neutre, sans indice pour le robot, avant même le contrôle du jeton.
    const honeypot = await request.post("/api/contact", { data: { ...base, token: "1.deadbeef", website: "http://spam.invalid" } });
    expect(honeypot.status()).toBe(200);
    expect((await honeypot.json()).status).toBe("demo");

    const huge = await request.post("/api/contact", { data: { ...base, token: "1.deadbeef", description: "x".repeat(30_000) } });
    expect(huge.status()).toBe(413);

    const crossSite = await request.post("/api/contact", { data: { ...base, token: "1.deadbeef" }, headers: { "sec-fetch-site": "cross-site" } });
    expect(crossSite.status()).toBe(403);

    const get = await request.get("/api/contact");
    expect(get.status()).toBe(405);
    expect(get.headers()["allow"]).toBe("POST");
  });
});
