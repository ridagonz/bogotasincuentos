import type { Metadata } from "next";
import { headers } from "next/headers";
import { Footer } from "../components/Footer";
import { SiteHeader } from "../components/SiteHeader";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "bogota-sin-cuentos.example";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  return {
    metadataBase: new URL(baseUrl),
    title: { default: "Bogotá Sin Cuentos", template: "%s | Bogotá Sin Cuentos" },
    description: "Noticias de Bogotá y la región, sin ruido y con contexto.",
    applicationName: "Bogotá Sin Cuentos",
    keywords: ["Bogotá", "noticias Bogotá", "movilidad", "seguridad", "cultura", "Cundinamarca"],
    authors: [{ name: "Bogotá Sin Cuentos" }],
    creator: "Bogotá Sin Cuentos",
    publisher: "Bogotá Sin Cuentos",
    formatDetection: { telephone: false },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: "Bogotá Sin Cuentos",
      title: "Bogotá Sin Cuentos",
      description: "Lo que pasa en la ciudad, bien contado.",
      images: [{ url: `${baseUrl}/og.png`, width: 1731, height: 909, alt: "Bogotá Sin Cuentos — Esto es lo que está pasando" }],
    },
    twitter: { card: "summary_large_image", title: "Bogotá Sin Cuentos", description: "Lo que pasa en la ciudad, bien contado.", images: [`${baseUrl}/og.png`] },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "bogota-sin-cuentos.example";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "Bogotá Sin Cuentos",
    url: baseUrl,
    areaServed: ["Bogotá", "Cundinamarca"],
    knowsAbout: ["Noticias locales", "Movilidad", "Cultura", "Seguridad", "Servicio ciudadano"],
    ethicsPolicy: `${baseUrl}/transparencia`,
  };
  return (
    <html lang="es-CO">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        <div id="contenido">{children}</div>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
