import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "../components/ArticleCard";
import { Newsletter } from "../components/Newsletter";
import { HeroCarousel } from "../components/HeroCarousel";
import { sortedArticles, publicationDate, contentUpdatedAt } from "../lib/news";

export const metadata: Metadata = {
  title: { absolute: "Bogotá Sin Cuentos | Noticias de Bogotá y la región" },
  description:
    "Noticias de Bogotá de última hora: movilidad, seguridad, cultura, economía, política y servicio ciudadano.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const [lead, second, third, ...latest] = sortedArticles;
  const instagramRecent = sortedArticles.filter((article) => !article.editorialSource && article.socialPlatform === "Instagram").slice(0, 3);

  return (
    <main>
      <section className="shell hero-section">
        <div className="hero-heading">
          <div>
            <span className="section-kicker">PORTADA · ACTUALIZADA {publicationDate(contentUpdatedAt).toUpperCase()}</span>
            <h1>Esto es lo que está pasando.</h1>
          </div>
          <p>Las noticias más recientes de Bogotá Sin Cuentos, con sus fechas y publicaciones originales.</p>
        </div>
        <div className="hero-grid">
          <HeroCarousel slides={[lead, ...instagramRecent]} />
          <div className="hero-side">
            {[second, third].map((article, index) => (
              <article className="side-story" key={article.slug}>
                <Link href={`/noticia/${article.slug}`} className="side-image">
                  <img className="social-art" src={article.image} alt={article.imageAlt} />
                  <span className="platform-chip">{article.socialPlatform}</span>
                  {article.format === "video" && <span className="play-button">▶</span>}
                </Link>
                <div>
                  <div className="eyebrow-row"><Link href={`/categoria/${article.categorySlug}`} className="eyebrow">{article.category}</Link><span>{article.time}</span></div>
                  <h3><Link href={`/noticia/${article.slug}`}>{article.title}</Link></h3>
                  {index === 0 && <p>{article.excerpt}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell latest-section">
        <div className="section-heading">
          <div><span className="section-index">01</span><h2>Lo último</h2></div>
          <a href="#archivo">Ver todas las noticias →</a>
        </div>
        <div className="latest-layout">
          <div className="latest-grid" id="archivo">
            {latest.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
          <aside className="most-read">
            <div className="aside-title"><span>EN TENDENCIA</span><h2>Lo más leído</h2></div>
            <ol>
              {sortedArticles.slice(0, 5).map((article, index) => (
                <li key={article.slug}>
                  <span>{index + 1}</span>
                  <div><Link href={`/noticia/${article.slug}`}>{article.title}</Link><small>{article.category} · {article.time}</small></div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="city-band">
        <div className="shell">
          <div className="section-heading inverse">
            <div><span className="section-index">02</span><h2>La ciudad en video</h2></div>
            <a href="https://www.instagram.com/bogotasincuentos/reels/" target="_blank" rel="noreferrer">Ver reels en Instagram ↗</a>
          </div>
          <div className="video-grid" id="videos">
            {sortedArticles.filter((article) => article.format === "video").map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
            <article className="social-prompt">
              <span className="social-icon">♪</span>
              <h3>De la red social a la noticia completa.</h3>
              <p>Cada publicación conserva su enlace original y se amplía con contexto, fuentes, hora de actualización y datos encontrables en Google.</p>
              <div className="social-profile-links">
                <a href="https://www.instagram.com/bogotasincuentos/" target="_blank" rel="noreferrer">Instagram ↗</a>
                <a href="https://www.tiktok.com/@bogotasincuentos" target="_blank" rel="noreferrer">TikTok ↗</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="shell explain-section">
        <div className="explain-copy">
          <span className="section-kicker">PERIODISMO ÚTIL</span>
          <h2>Respuestas claras para preguntas reales.</h2>
          <p>Cada noticia puede incluir un resumen verificable, datos clave, fuentes y contexto. Así las personas —y los asistentes de IA— encuentran una respuesta precisa sin perder la historia completa.</p>
          <Link href={`/noticia/${lead.slug}`}>Ver ejemplo de noticia optimizada →</Link>
        </div>
        <div className="answer-card">
          <span>RESPUESTA RÁPIDA</span>
          <h3>{lead.title}</h3>
          <p>{lead.excerpt}</p>
          <div><b>Fuente:</b> Bogotá Sin Cuentos · Publicado el {publicationDate(lead.publishedAt)}</div>
        </div>
      </section>

      <div className="shell"><Newsletter /></div>
    </main>
  );
}
