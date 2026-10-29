import { NextResponse } from "next/server";
import { createFormToken } from "@/lib/contact/token";
import { corsHeaders, isAllowedOrigin } from "@/lib/contact/cors";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Jeton anti-automatisation pour un site hébergé en statique sur une origine
 * autorisée (CONTACT_ALLOWED_ORIGINS). Même origine : également servi.
 */
export function GET(request: Request) {
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  const crossSite = Boolean(origin) && fetchSite !== "same-origin" && fetchSite !== "none";
  if (crossSite && !isAllowedOrigin(origin)) {
    return NextResponse.json({ status: "error", code: "forbidden" }, { status: 403, headers: { "Cache-Control": "no-store" } });
  }
  const headers: Record<string, string> = { "Cache-Control": "no-store" };
  if (origin && isAllowedOrigin(origin)) Object.assign(headers, corsHeaders(origin));
  return NextResponse.json({ token: createFormToken() }, { headers });
}

export function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || !isAllowedOrigin(origin)) return new NextResponse(null, { status: 403 });
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}
