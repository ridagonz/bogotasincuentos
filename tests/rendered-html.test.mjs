import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the social-first news homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Bogotá Sin Cuentos \| Noticias de Bogotá y la región/);
  assert.match(html, /Distrito evalúa la movilidad de los sábados/);
  assert.match(html, /Ver publicación original/);
  assert.match(html, /instagram\.com\/bogotasincuentos/);
  assert.match(html, /tiktok\.com\/@bogotasincuentos/);
  assert.match(html, /NewsMediaOrganization/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("article preserves provenance and answer-engine metadata", async () => {
  const response = await render("/noticia/distrito-evalua-movilidad-sabados-bogota");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /ORIGEN DE ESTA HISTORIA/);
  assert.match(html, /Abrir publicación original/);
  assert.match(html, /Contexto oficial contrastado/);
  assert.match(html, /NewsArticle/);
  assert.match(html, /SpeakableSpecification/);
  assert.match(html, /citation/);
  assert.match(html, /Alcaldía de Bogotá/);
});

