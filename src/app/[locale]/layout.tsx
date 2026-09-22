import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { cormorant, dmSans } from "@/app/fonts";
import "@/app/globals.css";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { MobileCta } from "@/components/layout/MobileCta";
import { pagePath } from "@/config/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const dict = getDictionary(l);
  return {
    metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
    title: { default: dict.common.meta.siteName, template: `%s — ${dict.common.meta.siteName}` },
    description: dict.common.meta.defaultDescription,
    applicationName: siteConfig.brand.name,
    robots: siteConfig.indexable ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#f4f0e8",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Active les apparitions au défilement uniquement si JavaScript est présent. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-svh flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-forest focus:px-4 focus:py-3 focus:font-sans focus:text-sm focus:text-ivory"
        >
          {dict.common.nav.skipToContent}
        </a>
        <Header locale={locale} t={dict.common} />
        <main id="contenu" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <MobileCta href={pagePath(locale, "contact")} label={dict.common.ui.mobileCta} />
        <JsonLd locale={locale} />
      </body>
    </html>
  );
}
