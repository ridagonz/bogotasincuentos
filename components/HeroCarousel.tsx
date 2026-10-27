"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Article } from "../lib/news";

export function HeroCarousel({ slides }: { slides: Article[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || slides.length < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 7500);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, slides.length]);

  const article = slides[index];
  const select = (next: number) => setIndex((next + slides.length) % slides.length);
  return (
    <section className="hero-carousel" aria-roledescription="carrusel" aria-label="Noticias destacadas"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <article className="carousel-slide" aria-label={`Noticia ${index + 1} de ${slides.length}`}>
        <Link className={`carousel-image ${article.editorialSource ? "editorial-banner" : "instagram-banner"}`} href={`/noticia/${article.slug}`}>
          <img src={article.image} alt={article.imageAlt} />
        </Link>
        <div className="carousel-copy">
          <div className="eyebrow-row light"><Link href={`/categoria/${article.categorySlug}`} className="eyebrow">{article.category}</Link><span>{article.time}</span></div>
          <h2><Link href={`/noticia/${article.slug}`}>{article.title}</Link></h2>
          <p>{article.excerpt}</p>
          <Link className="carousel-read" href={`/noticia/${article.slug}`}>Leer la noticia completa →</Link>
        </div>
      </article>
      <div className="carousel-controls" aria-label="Controles del carrusel">
        <button type="button" className="carousel-arrow" aria-label="Noticia anterior" onClick={() => select(index - 1)}>←</button>
        <div className="carousel-dots">{slides.map((slide, i) => <button key={slide.slug} type="button" aria-label={`Ver noticia ${i + 1}: ${slide.title}`} aria-current={i === index ? "true" : undefined} onClick={() => select(i)}><span /></button>)}</div>
        <button type="button" className="carousel-arrow" aria-label="Noticia siguiente" onClick={() => select(index + 1)}>→</button>
        {!reducedMotion && <button type="button" className="carousel-pause" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Reanudar rotación automática" : "Pausar rotación automática"}>{paused ? "Reanudar" : "Pausar"}</button>}
        <span className="carousel-count" aria-hidden="true">{index + 1} / {slides.length}</span>
      </div>
    </section>
  );
}
