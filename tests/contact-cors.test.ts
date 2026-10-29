import { describe, expect, it } from "vitest";
import { allowedOrigins, corsHeaders, isAllowedOrigin } from "@/lib/contact/cors";

describe("origines autorisées (site statique distant)", () => {
  it("ne lit que des origines http(s) valides, sans barre oblique finale", () => {
    expect(allowedOrigins("https://www.exemple.com/, http://localhost:3000 ,javascript:alert(1), exemple.com")).toEqual([
      "https://www.exemple.com",
      "http://localhost:3000",
    ]);
    expect(allowedOrigins(undefined)).toEqual([]);
  });
  it("n'autorise aucune origine par défaut", () => {
    expect(isAllowedOrigin("https://www.exemple.com", [])).toBe(false);
    expect(isAllowedOrigin(null, ["https://www.exemple.com"])).toBe(false);
    expect(isAllowedOrigin("https://www.exemple.com", ["https://www.exemple.com"])).toBe(true);
    expect(isAllowedOrigin("https://www.exemple.com.evil.test", ["https://www.exemple.com"])).toBe(false);
  });
  it("renvoie l'origine telle quelle, sans identifiants, avec Vary", () => {
    const headers = corsHeaders("https://www.exemple.com");
    expect(headers["Access-Control-Allow-Origin"]).toBe("https://www.exemple.com");
    expect(headers.Vary).toBe("Origin");
    expect(headers["Access-Control-Allow-Credentials"]).toBeUndefined();
  });
});
