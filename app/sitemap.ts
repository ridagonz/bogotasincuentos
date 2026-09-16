import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { articles, categories, contentUpdatedAt } from "../lib/news";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "bogota-sin-cuentos.example";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const base = `${protocol}://${host}`;
  return [
    { url: base, lastModified: new Date(contentUpdatedAt), changeFrequency: "hourly", priority: 1 },
    ...articles.map((article) => ({ url: `${base}/noticia/${article.slug}`, lastModified: new Date(article.publishedAt), changeFrequency: "daily" as const, priority: 0.8 })),
    ...categories.map((category) => ({ url: `${base}/categoria/${category.slug}`, lastModified: new Date(contentUpdatedAt), changeFrequency: "daily" as const, priority: 0.7 })),
  ];
}
