import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "../../../components/ArticleCard";
import { Newsletter } from "../../../components/Newsletter";
import { articles, findArticle, publicationDate } from "../../../lib/news";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/noticia/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt, images: [{ url: article.image, alt: article.imageAlt }], publishedTime: article.publishedAt, authors: [article.author], section: article.category },
    twitter: { card: "summary_large_image", title: article.title, description: article.excerpt, images: [article.image] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "bogota-sin-cuentos.example";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [`${baseUrl}${article.image}`],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    inLanguage: "es-CO",
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "NewsMediaOrganization", name: "Bogotá Sin Cuentos" },
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".article-deck", ".key-facts"] },
    citation: [article.socialUrl, article.primarySourceUrl].filter(Boolean),
    isBasedOn: article.socialUrl,
    mainEntityOfPage: `${baseUrl}/noticia/${article.slug}`,
  };

  return (
    <main className="article-page">
      <div className="shell article-breadcrumbs"><Link href="/">Inicio</Link><span>›</span><Link href={`/categoria/${article.categorySlug}`}>{article.category}</Link></div>
      <article>
        <header className="shell article-header">
          <div className="article-labels"><Link href={`/categoria/${article.categorySlug}`} className="eyebrow">{article.category}</Link><span className="verification-pill">● {article.verificationLabel}</span></div>
          <h1>{article.title}</h1>
          <p className="article-deck">{article.excerpt}</p>
          <div className="article-byline">
            <div className="author-avatar">{article.author.split(" ").map((word) => word[0]).slice(0, 2).join("")}</div>
            <div><b>Por {article.author}</b><span>Publicado el {publicationDate(article.publishedAt)}</span></div>
            <div className="share-actions"><button type="button">Compartir ↗</button><button type="button">Guardar ♧</button></div>
          </div>
        </header>
        <figure className="shell article-figure social-figure">
          <img className="social-art" src={article.image} alt={article.imageAlt} />
          <figcaption>{article.imageAlt}. Imagen publicada por Bogotá Sin Cuentos en {article.socialPlatform}.</figcaption>
        </figure>
        <div className="shell article-layout">
          <div className="article-body">
            <div className="key-facts">
              <span>EN 30 SEGUNDOS</span>
              <h2>Lo que debe saber</h2>
              <ul>{article.keyFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
            </div>
            <div className="social-origin">
              <div>
                <span>ORIGEN DE ESTA HISTORIA</span>
                <h2>Publicada primero en {article.socialPlatform}</h2>
                <p>Adaptamos la publicación a un artículo ampliado sin ocultar su procedencia. Puedes comparar el texto, la fecha y la pieza original.</p>
                <small>{article.verificationLabel}</small>
              </div>
              <a href={article.socialUrl} target="_blank" rel="noreferrer">Abrir publicación original ↗</a>
            </div>
            {article.body.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "dropcap" : ""}>{paragraph}</p>)}
            <h2>¿Qué recomiendan las autoridades?</h2>
            <p>Consultar información actualizada, verificar los canales oficiales y evitar difundir mensajes sin fuente. Esta nota se actualizará si se conocen nuevos datos relevantes.</p>
            <blockquote>“La información de servicio debe ser clara, verificable y fácil de encontrar para todas las personas.”</blockquote>
            <div className="source-box" id="fuentes">
              <span>FUENTES Y METODOLOGÍA</span>
              <p>La publicación original de Bogotá Sin Cuentos es el punto de partida. Cuando existe una fuente institucional disponible, la enlazamos y diferenciamos de la información preliminar.</p>
              <a href={article.socialUrl} target="_blank" rel="noreferrer">Publicación original en {article.socialPlatform} →</a>
              {article.primarySourceUrl && <a href={article.primarySourceUrl} target="_blank" rel="noreferrer">{article.primarySourceLabel} →</a>}
            </div>
            <div className="article-update"><b>Fecha de la fuente original:</b> {publicationDate(article.publishedAt)} · Consulte el enlace de procedencia para ver la publicación completa.</div>
          </div>
          <aside className="article-aside">
            <div className="aside-sticky">
              <span className="section-kicker">EN ESTA NOTA</span>
              <a href="#contenido">Resumen</a><a href="#fuentes">Fuentes</a><a href="#relacionadas">Noticias relacionadas</a>
              <div className="aside-newsletter"><b>Bogotá en 5 minutos</b><p>Recibe el resumen cada mañana.</p><button type="button">Suscribirme →</button></div>
            </div>
          </aside>
        </div>
      </article>
      <section className="shell related-section" id="relacionadas">
        <div className="section-heading"><div><span className="section-index">03</span><h2>Para entender mejor</h2></div></div>
        <div className="related-grid">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div>
      </section>
      <div className="shell"><Newsletter /></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  );
}
