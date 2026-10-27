import { octoberArticles } from "./october-news";
import { alertaSimit } from "./alerta-simit";
import { septemberArticles } from './september-news';

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  image: string;
  imageAlt: string;
  author: string;
  publishedAt: string;
  time: string;
  readingTime: string;
  priority: number;
  format?: "video" | "article";
  location?: string;
  keyFacts: string[];
  body: string[];
  socialUrl: string;
  socialPlatform: "Instagram" | "TikTok";
  verificationLabel: string;
  primarySourceUrl?: string;
  primarySourceLabel?: string;
  editorialSource?: boolean;
  bodySections?: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  alertaSimit,
  ...octoberArticles,
  ...septemberArticles,
  {
    slug: "proyecto-ley-competitividad-simplifica-tramites-empresas",
    title: "Proyecto de Ley de Competitividad busca simplificar trámites para las empresas",
    excerpt:
      "La iniciativa radicada ante el Senado propone un expediente empresarial digital, fortalece la Ventanilla Única Empresarial y limita la duplicación de documentos.",
    category: "Economía",
    categorySlug: "economia",
    image: "/social/simplificar-empresas.jpg",
    imageAlt: "Portada de Bogotá Sin Cuentos sobre el proyecto para simplificar trámites empresariales",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-19T12:00:00-05:00",
    time: "19 ago",
    readingTime: "4 min",
    priority: 112,
    format: "video",
    location: "Bogotá / Colombia",
    socialUrl: "https://www.instagram.com/bogotasincuentos/reel/DcOddZHjfF2/",
    socialPlatform: "Instagram",
    verificationLabel: "Proyecto legislativo · en trámite",
    keyFacts: [
      "La propuesta fue radicada ante el Senado por el Ministerio de Comercio, Industria y Turismo.",
      "Una entidad no podría pedir nuevamente un documento que ya repose en otra institución estatal.",
      "El texto contempla un Expediente Único Empresarial Digital y medidas específicas para microempresas y el sector de la construcción.",
    ],
    body: [
      "El Gobierno radicó ante el Senado un Proyecto de Ley de Competitividad orientado a reducir trámites y cargas administrativas para quienes producen y generan empleo. La iniciativa fue presentada por el ministro de Comercio, Industria y Turismo, Mauricio Gómez Amín.",
      "Uno de sus ejes establece que, si una entidad estatal ya tiene un documento, otra institución no debería exigirlo de nuevo. Para hacerlo posible, el proyecto fortalece la Ventanilla Única Empresarial y crea un Expediente Único Empresarial Digital que reuniría información pública relevante.",
      "En construcción y desarrollo urbano se propone un certificado urbanístico vinculante con plazo de 15 días hábiles, además de un requerimiento único integral. También se plantea que las microempresas queden exentas del cobro por la inspección técnica de seguridad de bomberos. Al tratarse de un proyecto de ley, estas disposiciones aún dependen del debate y aprobación del Congreso.",
    ],
  },
  {
    slug: "gobierno-presenta-plan-milagro-reconstruccion-sismo",
    title: "Gobierno presenta el Plan Milagro para la reconstrucción tras el sismo",
    excerpt:
      "La estrategia plantea tres fases para estabilizar las zonas afectadas, reconstruir infraestructura y reactivar la economía de los territorios golpeados.",
    category: "Política",
    categorySlug: "politica",
    image: "/social/plan-milagro.jpg",
    imageAlt: "Portada de Bogotá Sin Cuentos sobre el Plan Milagro de Reconstrucción",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-18T12:00:00-05:00",
    time: "18 ago",
    readingTime: "4 min",
    priority: 106,
    format: "article",
    location: "Colombia",
    socialUrl: "https://www.instagram.com/bogotasincuentos/p/DcL5_sFoJRA/",
    socialPlatform: "Instagram",
    verificationLabel: "Anuncio gubernamental · en desarrollo",
    keyFacts: [
      "El plan se organiza en estabilización inicial, reconstrucción física y reactivación económica.",
      "La primera fase contempla un equipo de expertos para coordinar la respuesta.",
      "El Gobierno anunció un Fondo Milagro y convocó la participación del sector financiero y privado.",
    ],
    body: [
      "El Gobierno Nacional presentó el denominado Plan Milagro de Reconstrucción como respuesta a los daños ocasionados por el sismo en distintos departamentos del país. La coordinación de recursos y la vigilancia sobre su ejecución aparecen como los principales desafíos de la operación.",
      "La estrategia anunciada se divide en tres fases: una estabilización inicial con un equipo de expertos, la reconstrucción física articulada con el sector constructor y una etapa de reactivación económica de largo plazo para los territorios afectados.",
      "El plan prevé la creación del Fondo Milagro y solicita apoyo del sector financiero y privado mediante aportes y condiciones crediticias favorables. Los alcances, recursos y cronogramas deberán precisarse conforme avancen los actos administrativos y la ejecución oficial.",
    ],
  },
  {
    slug: "distrito-evalua-movilidad-sabados-bogota",
    title: "Distrito evalúa la movilidad de los sábados antes de anunciar nuevos cambios",
    excerpt:
      "El análisis estudia circulación y tiempos de viaje. Por ahora no se ha anunciado una restricción general adicional para todos los vehículos.",
    category: "Movilidad",
    categorySlug: "movilidad",
    image: "/social/movilidad-sabados.jpg",
    imageAlt: "Portada de Bogotá Sin Cuentos sobre el análisis de movilidad de los sábados",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-15T10:01:10-05:00",
    time: "15 ago",
    readingTime: "4 min",
    priority: 100,
    format: "video",
    location: "Bogotá",
    socialUrl: "https://www.instagram.com/bogotasincuentos/reel/DcEKUK4EmhP/",
    socialPlatform: "Instagram",
    verificationLabel: "Contexto oficial contrastado",
    primarySourceUrl: "https://bogota.gov.co/mi-ciudad/movilidad/asi-sera-el-pico-y-placa-para-vehiculos-matriculados-fuera-de-bogota",
    primarySourceLabel: "Alcaldía de Bogotá · medida para vehículos matriculados fuera de la ciudad",
    keyFacts: [
      "La Administración analiza el comportamiento del tránsito durante los sábados.",
      "El análisis no equivale, por sí solo, a una nueva restricción general.",
      "Existe una medida distinta para vehículos matriculados fuera de Bogotá; no debe confundirse con este estudio.",
    ],
    body: [
      "La Administración Distrital analiza el comportamiento de la movilidad durante los sábados como parte de la evaluación de las condiciones de circulación vehicular en Bogotá. La revisión contempla el uso de las vías y los tiempos de desplazamiento.",
      "Hasta la publicación de esta nota, el análisis no representa el anuncio de un nuevo pico y placa general para todos los vehículos los sábados. Cualquier modificación deberá comunicarse mediante los canales oficiales y contar con la reglamentación correspondiente.",
      "Este estudio debe diferenciarse de la restricción anunciada previamente para vehículos particulares matriculados fuera de Bogotá, una medida específica que tiene calendario y condiciones propias.",
    ],
  },
  {
    slug: "detonacion-artefacto-artesanal-barrio-unir-engativa",
    title: "Detonación de artefacto artesanal en el barrio Unir no dejó personas heridas",
    excerpt:
      "El hecho ocurrió durante la madrugada cerca de la calle 80. Las autoridades investigan las circunstancias de la explosión.",
    category: "Seguridad",
    categorySlug: "seguridad",
    image: "/social/explosion-unir.jpg",
    imageAlt: "Portada informativa sobre una detonación en el barrio Unir de Engativá",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-14T16:45:30-05:00",
    time: "14 ago",
    readingTime: "3 min",
    priority: 94,
    location: "Engativá",
    socialUrl: "https://www.instagram.com/bogotasincuentos/p/DcCT0_9ExAX/",
    socialPlatform: "Instagram",
    verificationLabel: "Información preliminar · en seguimiento",
    keyFacts: [
      "La detonación se registró en el barrio Unir, localidad de Engativá.",
      "El reporte preliminar no registra personas heridas.",
      "Las autoridades buscan establecer el origen y las circunstancias del artefacto.",
    ],
    body: [
      "Durante la madrugada del viernes se registró una detonación en el barrio Unir, en la localidad de Engativá, cerca de la calle 80. La situación generó alarma entre los habitantes del sector.",
      "De acuerdo con la información preliminar divulgada por Bogotá Sin Cuentos, se habría tratado de un artefacto explosivo artesanal improvisado. No se reportaron personas heridas ni otras afectaciones al momento de la publicación.",
      "La investigación continúa. Esta nota mantendrá visible su condición preliminar hasta contar con un comunicado oficial o un nuevo balance de las autoridades.",
    ],
  },
  {
    slug: "idiger-formulario-reportar-grietas-inmuebles-bogota",
    title: "IDIGER habilita una ruta digital para reportar grietas y daños en inmuebles",
    excerpt:
      "El formulario permite registrar la ubicación, describir la afectación y adjuntar fotografías para orientar la valoración técnica.",
    category: "Servicio",
    categorySlug: "servicio",
    image: "/social/idiger-grietas.jpg",
    imageAlt: "Portada de Bogotá Sin Cuentos sobre el formulario de reporte de grietas del IDIGER",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-13T17:24:24-05:00",
    time: "13 ago · 5:24 p. m.",
    readingTime: "4 min",
    priority: 91,
    format: "video",
    location: "Bogotá",
    socialUrl: "https://www.instagram.com/bogotasincuentos/reel/Db_zcxrE7X2/",
    socialPlatform: "Instagram",
    verificationLabel: "Herramienta oficial verificada",
    primarySourceUrl: "https://www.idiger.gov.co/documents/20182/1466955/Formulario%2Bde%2Bevaluaci%C3%B3n%2Bprimaria%2Bde%2Buna%2Bvivienda%2Bdespu%C3%A9s%2Bde%2Bun%2Bsismo.pdf/2faa82de-5257-4aa9-a3a8-126e95bd26d9",
    primarySourceLabel: "IDIGER · evaluación primaria de vivienda después de un sismo",
    keyFacts: [
      "La ciudadanía puede registrar ubicación y características de la afectación.",
      "El reporte admite fotografías del inmueble.",
      "Una autoevaluación no reemplaza la inspección de personal calificado cuando existe riesgo.",
    ],
    body: [
      "La Alcaldía de Bogotá dispone de una ruta de reporte para que los ciudadanos informen sobre grietas o posibles afectaciones en sus edificaciones después de un sismo.",
      "La herramienta reúne la ubicación del inmueble, una descripción del daño y evidencia fotográfica. Esta información permite orientar la priorización y las valoraciones técnicas realizadas por personal especializado.",
      "Si hay colapso parcial, inclinación, caída de elementos o cambios visibles en muros y pisos, la recomendación es no ingresar y solicitar atención institucional. El formulario ciudadano no sustituye una inspección estructural.",
    ],
  },
  {
    slug: "bomberos-bogota-rescatan-hombre-cali",
    title: "Bomberos de Bogotá apoyan rescate de un hombre atrapado entre escombros en Cali",
    excerpt:
      "El equipo USAR participa en las labores de búsqueda y rescate con personal, tecnología y equipos especializados.",
    category: "Región",
    categorySlug: "region",
    image: "/social/rescate-cali.jpg",
    imageAlt: "Portada informativa sobre el apoyo de Bomberos de Bogotá en Cali",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-13T10:00:24-05:00",
    time: "13 ago · 10:00 a. m.",
    readingTime: "3 min",
    priority: 88,
    location: "Cali",
    socialUrl: "https://www.instagram.com/bogotasincuentos/p/Db_ArKLgeNG/",
    socialPlatform: "Instagram",
    verificationLabel: "Reporte del medio · actualización abierta",
    keyFacts: [
      "El grupo USAR de Bomberos de Bogotá participa en la operación.",
      "El hombre rescatado permaneció cerca de 20 horas atrapado, según el reporte publicado.",
      "La misión combina búsqueda, estabilización y atención prehospitalaria.",
    ],
    body: [
      "El grupo de búsqueda y rescate urbano de Bomberos de Bogotá continúa apoyando la respuesta de emergencia en Cali. El equipo participa en la localización de personas y la evaluación de estructuras colapsadas.",
      "Bogotá Sin Cuentos reportó el rescate con vida de un hombre de 35 años que permaneció cerca de 20 horas bajo los restos de una edificación. La identidad y el balance operativo deben leerse con el corte de actualización indicado en esta nota.",
      "La capacidad USAR integra entrenamiento, búsqueda electrónica y canina, herramientas de corte, equipos de estabilización y atención prehospitalaria.",
    ],
  },
  {
    slug: "bogota-envia-especialistas-equipos-rescate-cali",
    title: "Bogotá envía 62 especialistas y cinco toneladas de equipos de rescate a Cali",
    excerpt:
      "La comisión incluye rescatistas, personal de salud y binomios caninos para apoyar la atención de estructuras colapsadas.",
    category: "Región",
    categorySlug: "region",
    image: "/social/equipo-cali.jpg",
    imageAlt: "Portada sobre el equipo de especialistas enviado por Bogotá a Cali",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-12T10:00:13-05:00",
    time: "12 ago · 10:00 a. m.",
    readingTime: "4 min",
    priority: 84,
    location: "Bogotá / Cali",
    socialUrl: "https://www.instagram.com/bogotasincuentos/p/Db8b2XbCIbz/",
    socialPlatform: "Instagram",
    verificationLabel: "Reporte del medio · balance operativo",
    keyFacts: [
      "La comisión está integrada por 62 personas entrenadas.",
      "El despliegue incluye dos binomios caninos.",
      "Se movilizaron cinco toneladas de equipos especializados.",
    ],
    body: [
      "Bogotá movilizó hacia Cali una comisión de 62 personas, integrada por rescatistas especializados y profesionales de la salud. El grupo viajó acompañado por dos binomios caninos.",
      "El despliegue incluye cinco toneladas de equipos para búsqueda en estructuras colapsadas, tecnología de localización, herramientas de corte y penetración, material de estabilización y atención prehospitalaria.",
      "Según la publicación original de Bogotá Sin Cuentos, la ciudad también preparaba equipos adicionales para responder a otras zonas afectadas. El balance puede cambiar a medida que avance la emergencia.",
    ],
  },
  {
    slug: "campin-punto-ayudas-humanitarias-terremoto",
    title: "El Campín se suma como punto de recepción de ayudas humanitarias",
    excerpt:
      "El lugar recibe alimentos no perecederos, agua, cobijas, artículos de higiene y otros suministros priorizados.",
    category: "Servicio",
    categorySlug: "servicio",
    image: "/social/campin-donaciones.jpg",
    imageAlt: "Portada de Bogotá Sin Cuentos sobre donaciones en El Campín",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-12T16:29:03-05:00",
    time: "12 ago · 4:29 p. m.",
    readingTime: "3 min",
    priority: 79,
    location: "Bogotá",
    socialUrl: "https://www.instagram.com/bogotasincuentos/p/Db9IWuhk0jl/",
    socialPlatform: "Instagram",
    verificationLabel: "Información de servicio · confirme antes de ir",
    keyFacts: [
      "El Estadio El Campín fue habilitado como punto de recepción.",
      "Se priorizan agua, alimentos no perecederos, cobijas y elementos de higiene.",
      "Antes de desplazarse conviene confirmar horarios y necesidades vigentes.",
    ],
    body: [
      "El Estadio El Campín se sumó a los puntos habilitados en Bogotá para recibir ayudas humanitarias destinadas a las comunidades afectadas por el terremoto.",
      "La recepción prioriza alimentos no perecederos, agua, cobijas, colchonetas y artículos de higiene. Las necesidades pueden actualizarse según los inventarios y la capacidad logística.",
      "Antes de llevar una donación, consulte el estado del punto y entregue únicamente elementos solicitados, en buen estado, cerrados y dentro de su fecha de consumo.",
    ],
  },
  {
    slug: "seis-puntos-oficiales-donaciones-bogota",
    title: "Bogotá mantiene seis puntos para recibir donaciones destinadas a damnificados",
    excerpt:
      "Las sedes reciben suministros básicos y piden entregar únicamente productos incluidos en el listado de necesidades.",
    category: "Servicio",
    categorySlug: "servicio",
    image: "/social/puntos-donacion.jpg",
    imageAlt: "Portada informativa sobre seis puntos de donación en Bogotá",
    author: "Redacción Bogotá Sin Cuentos",
    publishedAt: "2026-08-11T15:26:07-05:00",
    time: "11 ago · 3:26 p. m.",
    readingTime: "4 min",
    priority: 73,
    location: "Bogotá",
    socialUrl: "https://www.instagram.com/bogotasincuentos/p/Db6cW7zjgSL/",
    socialPlatform: "Instagram",
    verificationLabel: "Información de servicio · sujeta a cambios",
    keyFacts: [
      "Los puntos están distribuidos en sedes de la Cruz Roja y el Palacio de los Deportes.",
      "Se reciben agua, cobijas, alimentos y elementos de higiene.",
      "Las autoridades piden no llevar productos por fuera del listado priorizado.",
    ],
    body: [
      "Bogotá mantiene puntos de recepción para canalizar donaciones hacia las comunidades afectadas. La operación se realiza con apoyo de organizaciones humanitarias.",
      "Entre los elementos solicitados aparecen agua potable, cobijas, mantas, colchonetas, alimentos no perecederos, productos de primeros auxilios y elementos de higiene personal.",
      "Los puntos y horarios pueden variar. Consulte la publicación original y los canales institucionales antes de desplazarse.",
    ],
  },
];

export const categories = [
  { name: "Ciudad", slug: "ciudad" },
  { name: "Movilidad", slug: "movilidad" },
  { name: "Seguridad", slug: "seguridad" },
  { name: "Política", slug: "politica" },
  { name: "Economía", slug: "economia" },
  { name: "Cultura", slug: "cultura" },
  { name: "Región", slug: "region" },
];

export const sortedArticles = [...articles].sort((a, b) => b.publishedAt.slice(0, 10).localeCompare(a.publishedAt.slice(0, 10)) || b.priority - a.priority);

export function findArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const contentUpdatedAt = "2026-10-26";
export function publicationDate(value: string) {
  return new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(value.slice(0, 10)));
}
