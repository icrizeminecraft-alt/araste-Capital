/**
 * Génère les compositions architecturales en fichiers SVG statiques
 * (public/plates/<kind>.svg) à partir du composant React, afin de les servir
 * en <img> chargées à la demande plutôt qu'en SVG inline dans chaque page.
 * Usage : npm run plates (les fichiers générés sont commités).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { ArchitecturalPlate } from "../src/components/visuals/ArchitecturalPlate";
import type { PlateKind } from "../src/config/images";

const kinds: PlateKind[] = ["arcade", "colonnade", "stair", "facade", "horizon", "vault", "cornice"];
mkdirSync("public/plates", { recursive: true });
for (const kind of kinds) {
  let svg = renderToStaticMarkup(createElement(ArchitecturalPlate, { kind }));
  svg = svg.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
  writeFileSync(`public/plates/${kind}.svg`, `${svg}\n`);
  console.log(`public/plates/${kind}.svg (${(svg.length / 1024).toFixed(1)} Ko)`);
}
