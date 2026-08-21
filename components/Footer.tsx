import Link from "next/link";
import { categories } from "../lib/news";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <div>
          <div className="footer-brand">Bogotá <span>sin cuentos</span></div>
          <p>Periodismo local, útil y verificable para entender lo que pasa en Bogotá y la región.</p>
        </div>
        <div>
          <h3>Secciones</h3>
          {categories.slice(0, 6).map((category) => (
            <Link key={category.slug} href={`/categoria/${category.slug}`}>{category.name}</Link>
          ))}
        </div>
        <div>
          <h3>El medio</h3>
          <Link href="/redaccion">Sala de redacción</Link>
          <a href="#newsletter">Boletín diario</a>
          <a href="mailto:redaccion@bogotasincuentos.co">Contacto</a>
          <a href="#transparencia">Transparencia editorial</a>
        </div>
        <div>
          <h3>Síguenos</h3>
          <a href="https://www.instagram.com/bogotasincuentos/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.tiktok.com/@bogotasincuentos" target="_blank" rel="noreferrer">TikTok ↗</a>
          <a href="#youtube">YouTube ↗</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Bogotá Sin Cuentos</span>
        <span>Fotografías de demostración: Unsplash</span>
        <span>Privacidad · Términos · Cookies</span>
      </div>
    </footer>
  );
}
