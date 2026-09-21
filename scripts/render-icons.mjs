/**
 * Rend les icônes PNG (apple-icon) à partir du SVG source, avec Chromium.
 * Usage : node scripts/render-icons.mjs
 */
import { chromium } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";

const svg = await readFile(new URL("../src/app/icon.svg", import.meta.url), "utf8");
// Chromium pré-installé de l'environnement si Playwright n'a pas téléchargé le sien.
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined;
const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: 180, height: 180 }, deviceScaleFactor: 1 });
await page.setContent(`<html><body style="margin:0;background:#142a25">${svg.replace("<svg ", '<svg width="180" height="180" ')}</body></html>`);
const png = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: 180, height: 180 } });
await writeFile(new URL("../src/app/apple-icon.png", import.meta.url), png);
await browser.close();
console.log("apple-icon.png généré (180×180).");
