import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { PDFDocument, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { siteConfig } from "@/config/site";

export type SheetSection = { title: string; rows: { label: string; value: string }[] };

const IVORY = rgb(0.957, 0.941, 0.91);
const FOREST = rgb(0.078, 0.165, 0.145);
const INK = rgb(0.125, 0.149, 0.137);
const SOFT = rgb(0.29, 0.32, 0.3);
const BRASS = rgb(0.667, 0.569, 0.404);

/**
 * Fiche d'opération au format PDF (A4), dans la charte du site :
 * en-tête vert forêt, sections numérotées, valeurs en colonne.
 * Aucune donnée n'est conservée : le document est généré en mémoire.
 */
export async function renderSheetPdf({
  title,
  subtitle,
  reference,
  sections,
  footer,
}: {
  title: string;
  subtitle: string;
  reference: string;
  sections: SheetSection[];
  footer: string;
}): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const [serifBytes, sansBytes] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/cormorant-500-og.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/dm-sans-400-og.ttf")),
  ]);
  const serif = await doc.embedFont(serifBytes, { subset: true });
  const sans = await doc.embedFont(sansBytes, { subset: true });
  doc.setTitle(`${siteConfig.brand.name} — ${title}`);
  doc.setAuthor(siteConfig.brand.name);

  const width = 595.28;
  const height = 841.89;
  const margin = 48;
  let page = doc.addPage([width, height]);
  let y = height;

  const header = (p: PDFPage) => {
    p.drawRectangle({ x: 0, y: height - 92, width, height: 92, color: FOREST });
    p.drawText(siteConfig.brand.name.toUpperCase(), { x: margin, y: height - 40, size: 13, font: serif, color: IVORY });
    p.drawText(siteConfig.brand.tagline.fr, { x: margin, y: height - 58, size: 8, font: sans, color: rgb(0.8, 0.72, 0.56) });
    p.drawText(reference, { x: width - margin - sans.widthOfTextAtSize(reference, 8), y: height - 40, size: 8, font: sans, color: IVORY });
    p.drawLine({ start: { x: margin, y: height - 92 }, end: { x: width - margin, y: height - 92 }, thickness: 1, color: BRASS });
  };
  const footerLine = (p: PDFPage) => {
    p.drawLine({ start: { x: margin, y: 52 }, end: { x: width - margin, y: 52 }, thickness: 0.5, color: BRASS });
    p.drawText(footer, { x: margin, y: 38, size: 7, font: sans, color: SOFT, maxWidth: width - margin * 2, lineHeight: 9 });
  };

  const newPage = () => {
    page = doc.addPage([width, height]);
    header(page);
    footerLine(page);
    y = height - 120;
  };

  header(page);
  footerLine(page);
  y = height - 128;
  page.drawText(title, { x: margin, y, size: 26, font: serif, color: FOREST });
  y -= 22;
  page.drawText(subtitle, { x: margin, y, size: 9, font: sans, color: SOFT });
  y -= 30;

  const wrap = (text: string, font: PDFFont, size: number, maxWidth: number): string[] => {
    const lines: string[] = [];
    for (const paragraph of text.split(/\n+/)) {
      const words = paragraph.split(/\s+/).filter(Boolean);
      let line = "";
      for (const word of words) {
        const candidate = line ? `${line} ${word}` : word;
        if (font.widthOfTextAtSize(candidate, size) > maxWidth && line) {
          lines.push(line);
          line = word;
        } else {
          line = candidate;
        }
      }
      lines.push(line);
    }
    return lines.length ? lines : [""];
  };

  const labelWidth = 170;
  const valueX = margin + labelWidth + 12;
  const valueWidth = width - margin - valueX;

  sections.forEach((section, index) => {
    if (y < 140) newPage();
    page.drawText(String(index + 1).padStart(2, "0"), { x: margin, y, size: 9, font: serif, color: BRASS });
    page.drawText(section.title, { x: margin + 22, y, size: 15, font: serif, color: FOREST });
    y -= 8;
    page.drawLine({ start: { x: margin, y }, end: { x: width - margin, y }, thickness: 0.5, color: BRASS });
    y -= 18;
    for (const row of section.rows) {
      const valueLines = wrap(row.value || "—", sans, 9.5, valueWidth);
      const labelLines = wrap(row.label, sans, 8, labelWidth);
      const rowHeight = Math.max(valueLines.length, labelLines.length) * 12.5 + 8;
      if (y - rowHeight < 70) newPage();
      labelLines.forEach((line, i) => page.drawText(line, { x: margin, y: y - i * 12.5, size: 8, font: sans, color: SOFT }));
      valueLines.forEach((line, i) => page.drawText(line, { x: valueX, y: y - i * 12.5, size: 9.5, font: sans, color: INK }));
      y -= rowHeight;
    }
    y -= 14;
  });

  return doc.save();
}
