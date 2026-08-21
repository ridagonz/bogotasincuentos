import Link from "next/link";
import { articles } from "../../lib/news";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query ? articles.filter((article) => `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query)) : [];
  return (
    <main className="shell search-page">
      <span className="section-kicker">ARCHIVO EDITORIAL</span><h1>Buscar en Bogotá Sin Cuentos</h1>
      <form action="/buscar" className="big-search"><input name="q" defaultValue={q} placeholder="Ej. movilidad, cultura, lluvias…" /><button type="submit">Buscar →</button></form>
      {query && <p className="search-count">{results.length} resultado{results.length === 1 ? "" : "s"} para “{q}”</p>}
      <div className="search-results">{results.map((article) => <article key={article.slug}><img className="social-art" src={article.image} alt="" /><div><span className="eyebrow">{article.category}</span><h2><Link href={`/noticia/${article.slug}`}>{article.title}</Link></h2><p>{article.excerpt}</p><small>{article.time} · {article.readingTime} de lectura · Fuente: {article.socialPlatform}</small></div></article>)}</div>
      {!query && <div className="empty-search">Escribe una palabra para consultar noticias por tema, localidad o protagonista.</div>}
      {query && results.length === 0 && <div className="empty-search">No encontramos coincidencias. Prueba con un tema más general.</div>}
    </main>
  );
}
