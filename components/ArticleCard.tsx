import Link from "next/link";
import type { Article } from "../lib/news";

export function ArticleCard({ article, index, horizontal = false }: { article: Article; index?: number; horizontal?: boolean }) {
  return (
    <article className={horizontal ? "article-card horizontal" : "article-card"}>
      <Link className="card-image" href={`/noticia/${article.slug}`} aria-label={article.title}>
        <img className="social-art" src={article.image} alt={article.imageAlt} />
        <span className="platform-chip">{article.socialPlatform}</span>
        {article.format === "video" && <span className="video-chip">▶ VIDEO</span>}
        {typeof index === "number" && <span className="rank-number">{String(index + 1).padStart(2, "0")}</span>}
      </Link>
      <div className="card-copy">
        <div className="eyebrow-row">
          <Link href={`/categoria/${article.categorySlug}`} className="eyebrow">{article.category}</Link>
          <span>{article.time}</span>
        </div>
        <h3><Link href={`/noticia/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <div className="card-meta"><span>Por {article.author}</span><span>{article.readingTime} de lectura</span></div>
        <a className="original-link" href={article.socialUrl} target="_blank" rel="noreferrer">Ver publicación original ↗</a>
      </div>
    </article>
  );
}
