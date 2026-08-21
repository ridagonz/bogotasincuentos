import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "../../../components/ArticleCard";
import { articles, categories } from "../../../lib/news";

const categoryDescriptions: Record<string, string> = {
  ciudad: "Historias, decisiones y servicios que transforman la vida cotidiana en Bogotá.",
  movilidad: "Estado de las vías, transporte público y claves para moverse mejor.",
  seguridad: "Información verificada sobre convivencia, emergencias y prevención.",
  politica: "Las decisiones públicas explicadas desde su impacto local.",
  economia: "Empleo, comercio y oportunidades para entender el bolsillo de la ciudad.",
  cultura: "La agenda creativa, los escenarios y las voces que mueven a Bogotá.",
  region: "Noticias de Cundinamarca y los municipios que se conectan con la capital.",
  agenda: "Planes, actividades y recomendaciones para disfrutar la ciudad.",
  servicio: "Trámites, convocatorias y datos que le facilitan la vida.",
};

export async function generateStaticParams() { return [...categories.map((category) => ({ slug: category.slug })), { slug: "agenda" }, { slug: "servicio" }]; }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = categories.find((category) => category.slug === slug)?.name || slug.charAt(0).toUpperCase() + slug.slice(1);
  return { title: `Noticias de ${name}`, description: categoryDescriptions[slug] || `Últimas noticias de ${name} en Bogotá.`, alternates: { canonical: `/categoria/${slug}` } };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = categories.find((category) => category.slug === slug)?.name || slug.charAt(0).toUpperCase() + slug.slice(1);
  const direct = articles.filter((article) => article.categorySlug === slug);
  const feed = [...direct, ...articles.filter((article) => article.categorySlug !== slug)].slice(0, 6);
  const lead = feed[0];
  return (
    <main className="category-page shell">
      <header className="category-header">
        <span className="section-kicker">SECCIÓN</span><h1>{name}</h1><p>{categoryDescriptions[slug] || `La actualidad de ${name}, explicada con contexto.`}</p>
      </header>
      <div className="category-lead">
        <Link className="category-lead-image" href={`/noticia/${lead.slug}`}><img className="social-art" src={lead.image} alt={lead.imageAlt} /><span className="platform-chip">{lead.socialPlatform}</span></Link>
        <div><span className="eyebrow">LO ÚLTIMO</span><h2><Link href={`/noticia/${lead.slug}`}>{lead.title}</Link></h2><p>{lead.excerpt}</p><div className="card-meta"><span>Por {lead.author}</span><span>{lead.time}</span></div></div>
      </div>
      <div className="section-heading"><div><span className="section-index">01</span><h2>Más de {name}</h2></div><span>Actualizado durante el día</span></div>
      <div className="category-feed">{feed.slice(1).map((article) => <ArticleCard key={article.slug} article={article} horizontal />)}</div>
    </main>
  );
}
