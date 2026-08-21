"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "../lib/news";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="demo-bar">
        <div className="shell demo-inner">
          <span>PROTOTIPO EDITORIAL</span>
          <span>Noticias ampliadas desde Instagram y TikTok · con fuente visible</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell masthead">
          <Link href="/" className="brand" aria-label="Bogotá Sin Cuentos, inicio">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-skyline">▥▥▥</span>
              <strong>Bogotá</strong>
              <small>sin cuentos</small>
            </span>
            <span className="brand-copy">
              <strong>Bogotá Sin Cuentos</strong>
              <small>Lo que pasa en la ciudad, bien contado.</small>
            </span>
          </Link>
          <div className="masthead-meta">
            <span>Sábado, 15 de agosto de 2026</span>
            <span className="weather"><b>14°</b> Bogotá · Lluvia ligera</span>
          </div>
          <div className="header-actions">
            <button
              className="icon-button"
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              aria-expanded={searchOpen}
              aria-label="Abrir buscador"
            >
              ⌕
            </button>
            <button
              className="menu-button"
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
            >
              <span>Menú</span><b aria-hidden="true">{menuOpen ? "×" : "☰"}</b>
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="search-drawer">
            <form className="shell search-form" action="/buscar">
              <label htmlFor="site-search">¿Qué está pasando?</label>
              <input id="site-search" name="q" placeholder="Buscar noticias, barrios o temas" autoFocus />
              <button type="submit">Buscar →</button>
            </form>
          </div>
        )}
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          <div className="shell nav-inner">
            <Link href="/" onClick={() => setMenuOpen(false)}>Última hora</Link>
            {categories.map((category) => (
              <Link key={category.slug} href={`/categoria/${category.slug}`} onClick={() => setMenuOpen(false)}>
                {category.name}
              </Link>
            ))}
            <Link className="nav-admin" href="/redaccion" onClick={() => setMenuOpen(false)}>Sala de redacción ↗</Link>
          </div>
        </nav>
      </header>
      <div className="breaking-bar">
        <div className="shell breaking-inner">
          <span className="breaking-label">EN DESARROLLO</span>
          <span className="breaking-time">09:32</span>
          <p>El Distrito evalúa la movilidad de los sábados; no hay anuncio de una nueva restricción general.</p>
          <Link href="/noticia/distrito-evalua-movilidad-sabados-bogota">Seguir noticia →</Link>
        </div>
      </div>
    </>
  );
}
