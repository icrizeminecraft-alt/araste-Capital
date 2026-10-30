// Serveur statique minimal pour l'audit Lighthouse en intégration continue :
// sert `out/` comme l'hébergeur le ferait (compression gzip des textes,
// en-têtes de cache équivalents au .htaccess, types MIME, index.html des
// dossiers) et répond au jeton du formulaire pour éviter une erreur console.
// Usage : node outils/servir-statique.mjs <dossier> [port]
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { gzipSync } from "node:zlib";

const [root = "out", port = "8080"] = process.argv.slice(2);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};
const compressible = new Set([".html", ".css", ".js", ".json", ".txt", ".xml", ".svg", ".webmanifest"]);
const cacheControl = (ext, pathname) => {
  if (ext === ".html") return "no-cache";
  if (pathname.startsWith("/_next/static/")) return "public, max-age=31536000, immutable";
  if (ext === ".jpg" || ext === ".avif") return "public, max-age=2592000";
  return "public, max-age=86400";
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  if (url.pathname === "/api/contact/token") {
    res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" });
    res.end(JSON.stringify({ token: "audit" }));
    return;
  }
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith("/")) pathname += "index.html";
  let file = normalize(join(root, pathname));
  if (!file.startsWith(normalize(root))) {
    res.writeHead(403);
    res.end();
    return;
  }
  try {
    let info = await stat(file).catch(() => null);
    if (info?.isDirectory()) {
      file = join(file, "index.html");
      info = await stat(file);
    }
    if (!info) {
      file = `${file}.html`;
      info = await stat(file);
    }
    const ext = extname(file);
    let body = await readFile(file);
    const headers = {
      "content-type": types[ext] ?? "application/octet-stream",
      "cache-control": cacheControl(ext, url.pathname),
      "x-content-type-options": "nosniff",
    };
    if (compressible.has(ext) && /\bgzip\b/.test(req.headers["accept-encoding"] ?? "")) {
      body = gzipSync(body, { level: 6 });
      headers["content-encoding"] = "gzip";
      headers.vary = "Accept-Encoding";
    }
    res.writeHead(200, headers);
    res.end(body);
  } catch {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end(`404 ${pathname}`);
  }
});
server.listen(Number(port), "127.0.0.1", () => console.log(`Site servi sur http://127.0.0.1:${port}/ (dossier ${root})`));
