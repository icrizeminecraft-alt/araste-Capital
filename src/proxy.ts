import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";

/**
 * Redirige les chemins sans préfixe de langue vers la langue par défaut,
 * en respectant la préférence Accept-Language pour la racine.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  let target: string = defaultLocale;
  if (pathname === "/") {
    const accept = request.headers.get("accept-language") ?? "";
    const preferred = accept
      .split(",")
      .map((part) => part.split(";")[0]?.trim().slice(0, 2).toLowerCase())
      .find((code) => code && (locales as readonly string[]).includes(code));
    if (preferred) target = preferred;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${target}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/((?!api|_next|icon|apple-icon|manifest|robots|sitemap|opengraph-image|.*\\..*).*)"],
};
