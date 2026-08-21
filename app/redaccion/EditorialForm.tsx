"use client";

import { useState } from "react";

export function EditorialForm() {
  const [saved, setSaved] = useState(false);
  const [title, setTitle] = useState("Nueva noticia de servicio para Bogotá");
  const [summary, setSummary] = useState("Escribe un resumen breve que responda qué pasó, dónde y por qué importa.");
  const [priority, setPriority] = useState("80");
  const [socialUrl, setSocialUrl] = useState("https://www.instagram.com/bogotasincuentos/reel/DcEKUK4EmhP/");
  const [socialImported, setSocialImported] = useState(false);
  const importSocialPost = () => {
    setTitle("Distrito evalúa la movilidad de los sábados antes de anunciar nuevos cambios");
    setSummary("El análisis estudia circulación y tiempos de viaje. Por ahora no se ha anunciado una restricción general adicional para todos los vehículos.");
    setSocialImported(true);
  };
  return (
    <main className="editorial-page">
      <div className="shell editorial-shell">
        <header className="editorial-header"><div><span className="section-kicker">CMS · DEMOSTRACIÓN</span><h1>Sala de redacción</h1><p>Publica una noticia completa y lista para buscadores desde un solo lugar.</p></div><div className="editorial-status"><span></span> Guardado automático activo</div></header>
        <div className="workflow"><span className="active">1 Contenido</span><i></i><span>2 Multimedia</span><i></i><span>3 SEO + IA</span><i></i><span>4 Publicar</span></div>
        <form className="editorial-grid" onSubmit={(event) => { event.preventDefault(); setSaved(true); }}>
          <section className="editor-panel">
            <div className="panel-heading"><div><span>01</span><h2>Información principal</h2></div><small>* Campos obligatorios</small></div>
            <div className="social-importer">
              <div><b>Importar desde Instagram o TikTok</b><small>Pega la URL: conservaremos la publicación como fuente original.</small></div>
              <div><input value={socialUrl} onChange={(event) => setSocialUrl(event.target.value)} /><button type="button" onClick={importSocialPost}>Leer publicación →</button></div>
              {socialImported && <p>✓ Titular y resumen importados. Revisa, contrasta y amplía antes de publicar.</p>}
            </div>
            <label>Categoría *<select><option>Ciudad</option><option>Movilidad</option><option>Seguridad</option><option>Cultura</option><option>Región</option></select></label>
            <label>Titular *<textarea rows={2} value={title} onChange={(event) => setTitle(event.target.value)} maxLength={110} /><small>{title.length}/110 · Incluye el lugar y la acción principal.</small></label>
            <label>Resumen / bajada *<textarea rows={3} value={summary} onChange={(event) => setSummary(event.target.value)} maxLength={180} /><small>{summary.length}/180 · Esta respuesta puede aparecer en Google y asistentes de IA.</small></label>
            <label>Cuerpo de la noticia *<textarea rows={10} defaultValue={"Bogotá, 15 de agosto de 2026. Empieza con el dato más importante.\n\nAgrega contexto, cifras verificadas y declaraciones atribuidas.\n\nCierra con información de servicio para la ciudadanía."} /></label>
            <div className="form-row"><label>Autor *<input defaultValue="Redacción BSC" /></label><label>Localidad<input placeholder="Ej. Chapinero" /></label></div>
          </section>
          <aside className="editor-sidebar">
            <section className="editor-panel compact">
              <div className="panel-heading"><div><span>02</span><h2>Imagen o video</h2></div></div>
              <div className="upload-zone"><b>＋</b><strong>Sube una imagen o video</strong><span>JPG, PNG, WEBP o MP4 · máx. 50 MB</span><button type="button">Seleccionar archivo</button></div>
              <label>Texto alternativo *<input placeholder="Describe lo que aparece en la imagen" /></label>
              <label>URL de Instagram o TikTok<input value={socialUrl} onChange={(event) => setSocialUrl(event.target.value)} placeholder="https://instagram.com/reel/…" /></label>
            </section>
            <section className="editor-panel compact seo-panel">
              <div className="panel-heading"><div><span>03</span><h2>SEO + respuestas de IA</h2></div><em>82/100</em></div>
              <label>Título SEO<input value={title} onChange={(event) => setTitle(event.target.value)} /></label>
              <label>Descripción SEO<textarea rows={3} value={summary} onChange={(event) => setSummary(event.target.value)} /></label>
              <label>Respuesta rápida<textarea rows={3} placeholder="Responde la pregunta principal en 2 o 3 frases verificables." /></label>
              <label>Fuente primaria<input placeholder="Entidad, documento o vocero" /></label>
              <div className="seo-checks"><span className="done">✓ Titular claro</span><span className="done">✓ Lugar identificado</span><span>○ Falta fuente primaria</span><span>○ Agrega texto alternativo</span></div>
            </section>
            <section className="editor-panel compact publish-panel">
              <div className="panel-heading"><div><span>04</span><h2>Prioridad y publicación</h2></div></div>
              <label>Nivel de prioridad <div className="range-row"><input type="range" min="0" max="100" value={priority} onChange={(event) => setPriority(event.target.value)} /><b>{priority}</b></div><small>La portada combina este valor con actualidad, relevancia y desempeño.</small></label>
              <label className="check-label"><input type="checkbox" defaultChecked /> Noticia destacada en portada</label>
              <label className="check-label"><input type="checkbox" /> Programar publicación</label>
              <div className="publish-actions"><button type="button" className="secondary">Guardar borrador</button><button type="submit">Publicar noticia →</button></div>
              {saved && <div className="saved-message">✓ Noticia validada y lista para publicar.</div>}
            </section>
          </aside>
        </form>
      </div>
    </main>
  );
}
