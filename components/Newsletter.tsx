export function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <div>
        <span className="section-kicker">EL DÍA EN 5 MINUTOS</span>
        <h2>Las noticias que importan, sin ruido.</h2>
        <p>Recibe cada mañana una selección breve, local y verificada.</p>
      </div>
      <form>
        <label htmlFor="email">Correo electrónico</label>
        <div>
          <input id="email" type="email" placeholder="tu@correo.com" />
          <button type="button">Quiero recibirlo →</button>
        </div>
        <small>Al suscribirte aceptas nuestra política de tratamiento de datos.</small>
      </form>
    </section>
  );
}

