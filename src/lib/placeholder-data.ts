import type {
  Alliance,
  BoardMember,
  Committee,
  DocumentResource,
  OrgLink,
  Partner,
  Post,
  SiteSettings,
} from "@/types/content";

export const siteSettings: SiteSettings = {
  heroSlides: [
    {
      text: {
        es: "Construimos puentes de crecimiento entre Chile y Haití.",
        fr: "Nous construisons des ponts de croissance entre le Chili et Haïti.",
      },
      placeholder: "Chile y Haití",
    },
    {
      text: {
        es: "Impulsamos el comercio, el turismo y la inversión bilateral.",
        fr: "Nous stimulons le commerce, le tourisme et l'investissement bilatéral.",
      },
      placeholder: "Comercio bilateral",
    },
  ],
  yearsBanner: {
    es: "3 años conectando oportunidades",
    fr: "3 ans à créer des opportunités",
  },
  address: "Av. Providencia 1234, Providencia, Santiago, Chile",
  phone: "+56 9 8363 4549",
  email: "contacto@camarachileohaitiana.cl",
  membershipEmail: "contacto@camarachileohaitiana.cl",
  website: "www.camarachileohaitiana.cl",
  officeHours: {
    es: "Lunes a viernes, 9:00 – 18:00",
    fr: "Lundi à vendredi, 9h00 – 18h00",
  },
  socialLinks: {
    facebook: "#",
    instagram: "https://www.instagram.com/camarachh",
    linkedin: "#",
    tiktok: "#",
  },
  socialHandle: "@camarachh",
};

export const impactItems: { es: string; fr: string }[] = [
  {
    es: "Apoya el comercio bilateral y la inversión en ambos países",
    fr: "Soutient le commerce bilatéral et l'investissement dans les deux pays",
  },
  {
    es: "Promueve el turismo y el intercambio cultural",
    fr: "Promeut le tourisme et l'échange culturel",
  },
  {
    es: "Facilita asesoría, networking y alianzas estratégicas",
    fr: "Facilite le conseil, le réseautage et les alliances stratégiques",
  },
  {
    es: "Representa a sus asociados ante entidades públicas y privadas",
    fr: "Représente ses membres auprès des entités publiques et privées",
  },
  {
    es: "Impulsa proyectos de desarrollo empresarial y tecnológico",
    fr: "Encourage les projets de développement commercial et technologique",
  },
  {
    es: "Forma parte de redes de cooperación internacional (OEA, ONU Mujeres)",
    fr: "Fait partie de réseaux de coopération internationale (OEA, ONU Femmes)",
  },
  {
    es: "Miembro de Latinocámaras en Chile",
    fr: "Membre de Latinocámaras au Chili",
  },
];

export const valuesList: { es: string; fr: string }[] = [
  { es: "Colaboración", fr: "Collaboration" },
  { es: "Crecimiento", fr: "Croissance" },
  { es: "Diversidad", fr: "Diversité" },
  { es: "Innovación", fr: "Innovation" },
  { es: "Confianza", fr: "Confiance" },
];

export const posts: Post[] = [
  {
    id: "crezcamos-juntos",
    slug: "crezcamos-juntos-unete-a-la-camara",
    title: "Crezcamos juntos: únete a la Cámara Chileno-Haitiana",
    category: "Portal Socios",
    excerpt:
      "¿Eres empresario, emprendedor o profesional buscando nuevas oportunidades? La Cámara te invita a formar parte de su comunidad empresarial y construir juntos una red de colaboración entre Haití, Chile y el mundo.",
    date: "2026-08-29",
    placeholder: "Crezcamos Juntos",
    imageSrc: "/images/news/crezcamos-juntos.jpg",
    paragraphs: [
      "¿Eres empresario, emprendedor o profesional y estás buscando nuevas oportunidades para crecer y conectar con nuevos mercados?",
      "La Cámara Chileno-Haitiana de Comercio, Turismo e Industria A.G. te invita a formar parte de nuestra comunidad empresarial y construir juntos una red de colaboración entre Haití, Chile y el mundo.",
      "Al ser parte de la Cámara podrás acceder a: networking y nuevos contactos empresariales; ruedas de negocios y encuentros comerciales; promoción y visibilidad de tu empresa; conferencias, capacitaciones y seminarios; información sobre oportunidades de inversión y comercio; apoyo para crear alianzas estratégicas; y vinculación y representación institucional ante organismos públicos y privados.",
      "Los grandes negocios nacen de grandes conexiones. ¡Únete hoy y forma parte de una comunidad empresarial que trabaja por el desarrollo de Haití!",
    ],
  },
  {
    id: "caonabo-airlines-visita",
    slug: "caonabo-airlines-visita-presidencial",
    title: "La Cámara reafirma su apoyo a Caonabo Airlines",
    category: "Noticias",
    excerpt:
      "El presidente de la Cámara visitó las instalaciones de Caonabo Airlines, reafirmando el compromiso institucional con la conectividad, el desarrollo económico y las oportunidades entre Haití y la región.",
    date: "2026-08-27",
    placeholder: "Visita a Caonabo Airlines",
    imageSrc: "/images/news/caonabo-airlines.jpg",
    paragraphs: [
      "La Cámara Chileno-Haitiana de Comercio, Turismo e Industria reafirma su apoyo a Caonabo Airlines, como parte de nuestro compromiso con iniciativas que contribuyen al fortalecimiento de la conectividad, el desarrollo económico y las oportunidades entre Haití y la región.",
      "La reciente visita del presidente de la Cámara a las instalaciones de Caonabo Airlines representa un gesto de acompañamiento y confianza. Más que una visita institucional, es un mensaje para nuestra comunidad: creemos en los proyectos que buscan generar nuevas oportunidades y fortalecer la conexión de Haití con el mundo.",
      "En momentos en que nuestra comunidad necesita señales de confianza y esperanza, consideramos importante estar presentes, conocer de cerca las iniciativas que se están desarrollando y expresar nuestro respaldo a quienes trabajan por construir nuevas posibilidades.",
      "Esta visita simboliza la seguridad de un proyecto transparente y con propósito, enfocado en generar oportunidades de inversión, potenciar el turismo bilateral y consolidar el bienestar y la integración de nuestra gente.",
      "Con el despegue de Caonabo Airlines, reafirmamos que este es un paso firme hacia un futuro conectado, seguro y lleno de posibilidades para todos.",
      "Desde la Cámara Chileno-Haitiana de Comercio, Turismo e Industria continuaremos promoviendo la confianza, la cooperación y las alianzas estratégicas que puedan contribuir al crecimiento del comercio, el turismo y la inversión.",
    ],
  },
  {
    id: "1",
    slug: "mision-comercial-20-empresas",
    title: "Misión comercial reúne a 20 empresas de ambos países",
    category: "CCBC",
    excerpt:
      "Delegación chilena visitó Puerto Príncipe para explorar nuevas oportunidades de negocio.",
    date: "2026-08-12",
    placeholder: "Misión comercial",
  },
  {
    id: "2",
    slug: "convenio-latinocamaras",
    title: "Nuevo convenio de cooperación con Latinocámaras",
    category: "Noticias",
    excerpt:
      "La red regional se compromete a apoyar iniciativas conjuntas de comercio exterior.",
    date: "2026-07-28",
    placeholder: "Convenio",
  },
  {
    id: "3",
    slug: "comite-derecho-mujeres-haitianas",
    title: "Lanzamiento del Comité de Derecho de Mujeres Haitianas",
    category: "Eventos",
    excerpt: "El nuevo comité impulsa proyectos de inclusión económica.",
    date: "2026-07-05",
    placeholder: "Comité mujeres",
  },
  {
    id: "4",
    slug: "foro-inversion-santiago-port-au-prince",
    title: "Foro de inversión Santiago–Port-au-Prince",
    category: "Portada",
    excerpt: "Encuentro anual reunió a inversionistas de ambos países.",
    date: "2026-06-20",
    placeholder: "Foro de inversión",
  },
  {
    id: "5",
    slug: "haiti-mercado-clave-exportaciones-chilenas",
    title: "Haití: un mercado clave para las exportaciones chilenas",
    category: "Noticias",
    excerpt: "Un análisis de las oportunidades para exportadores chilenos.",
    date: "2026-06-02",
    placeholder: "Exportaciones",
  },
  {
    id: "6",
    slug: "taller-ciberseguridad-pymes-exportadoras",
    title: "Taller de ciberseguridad para pymes exportadoras",
    category: "Eventos",
    excerpt: "Capacitación gratuita dirigida a socios de la Cámara.",
    date: "2026-05-15",
    placeholder: "Ciberseguridad",
  },
  {
    id: "7",
    slug: "nuevos-beneficios-socios-ccbc",
    title: "Nuevos beneficios para socios CCBC",
    category: "Portal Socios",
    excerpt: "Se amplía la red de descuentos y servicios para asociados.",
    date: "2026-04-30",
    placeholder: "Beneficios",
  },
  {
    id: "8",
    slug: "premio-baron-rio-branco-2026",
    title: "Premio Barón de Río Branco 2026: postulaciones abiertas",
    category: "CCBC",
    excerpt: "Se buscan empresas destacadas en la relación bilateral.",
    date: "2026-04-18",
    placeholder: "Premio",
  },
  {
    id: "9",
    slug: "acuerdo-cooperacion-turistica",
    title: "Chile y Haití firman acuerdo de cooperación turística",
    category: "Noticias",
    excerpt: "El acuerdo busca impulsar el turismo bilateral.",
    date: "2026-04-02",
    placeholder: "Turismo",
  },
  {
    id: "10",
    slug: "directorio-2026-2028",
    title: "Directorio 2026-2028 asume funciones",
    category: "Portada",
    excerpt:
      "Nueva mesa directiva inicia su gestión con foco en el crecimiento de la red.",
    date: "2026-03-15",
    placeholder: "Directorio",
  },
  {
    id: "encuentro-camara-colombiana",
    slug: "encuentro-anual-camara-chileno-colombiana",
    title: "Participación en el 16° Encuentro Anual de la Cámara Chileno-Colombiana",
    category: "Eventos",
    excerpt:
      "La Cámara participó en el 16° Encuentro Anual de la Cámara Chileno-Colombiana de Comercio, fortaleciendo lazos y explorando nuevas oportunidades de colaboración con empresarios y líderes de Chile y Colombia.",
    date: "2024-11-26",
    placeholder: "Encuentro Cámara Colombiana",
    imageSrc: "/images/news/encuentro-camara-colombiana.jpg",
    paragraphs: [
      "Nos complace compartir con ustedes nuestra participación en el 16° Encuentro Anual de la Cámara Chileno-Colombiana de Comercio. Este evento fue una excelente oportunidad para fortalecer lazos y explorar nuevas oportunidades de colaboración con destacados empresarios y líderes de Chile y Colombia.",
      "Queremos agradecer especialmente a Julián Flórez por su constante apoyo y por siempre pensar en nuestra Cámara Chileno-Haitiana de Comercio, Turismo e Industria. Como la cámara más joven creada en Chile, seguimos buscando el apoyo y la colaboración de las cámaras establecidas para seguir creciendo y fortaleciendo nuestra presencia.",
      "Además, fue un placer compartir este espacio con la Cámara de Comercio chileno brasileña, especialmente con su vicepresidenta, Selma Nunes.",
      "Formar parte del grupo de la Agrupación de Cámaras Latinoamericanas es fundamental para nosotros. Valoramos enormemente la cooperación y el trabajo conjunto, y estamos comprometidos a seguir colaborando para impulsar el comercio y las oportunidades entre nuestros países.",
      "Juntos, continuaremos trabajando por el crecimiento y la prosperidad de nuestras naciones.",
    ],
  },
];

export const newsCategories = [
  "Todos",
  "CCBC",
  "Eventos",
  "Noticias",
  "Portada",
  "Portal Socios",
];

export const boardMembers: BoardMember[] = [
  {
    id: "presidente",
    name: "Jean-Marc Delorme",
    role: { es: "Presidente", fr: "Président" },
    company: "Grupo Delorme & Cía.",
    section: "presidencia",
    placeholder: "Presidente",
  },
  {
    id: "vicepresidenta",
    name: "Camila Rojas Fuentes",
    role: { es: "Vicepresidenta", fr: "Vice-présidente" },
    company: "Rojas Comercio Exterior",
    section: "presidencia",
    placeholder: "Vicepresidenta",
  },
  {
    id: "director-1",
    name: "Marc-Antoine Bissainthe",
    role: { es: "Director", fr: "Directeur" },
    company: "Bissainthe Import-Export",
    section: "directores",
    placeholder: "Director",
  },
  {
    id: "director-2",
    name: "Valentina Soto Muñoz",
    role: { es: "Directora", fr: "Directrice" },
    company: "Soto Turismo Bilateral",
    section: "directores",
    placeholder: "Directora",
  },
  {
    id: "director-3",
    name: "Frantz Louissaint",
    role: { es: "Director", fr: "Directeur" },
    company: "Louissaint Logística",
    section: "directores",
    placeholder: "Director",
  },
  {
    id: "director-4",
    name: "Josefina Aguirre Céspedes",
    role: { es: "Directora", fr: "Directrice" },
    company: "Aguirre & Asociados",
    section: "directores",
    placeholder: "Directora",
  },
  {
    id: "director-5",
    name: "Wilfrid Charles",
    role: { es: "Director", fr: "Directeur" },
    company: "Charles Trading Co.",
    section: "directores",
    placeholder: "Director",
  },
  {
    id: "director-6",
    name: "Antonia Reyes Cortés",
    role: { es: "Directora", fr: "Directrice" },
    company: "Reyes Consultores",
    section: "directores",
    placeholder: "Directora",
  },
  {
    id: "director-7",
    name: "Guy Étienne Baptiste",
    role: { es: "Director", fr: "Directeur" },
    company: "Baptiste Ingeniería",
    section: "directores",
    placeholder: "Director",
  },
  {
    id: "director-8",
    name: "Fernanda Vidal Espinoza",
    role: { es: "Directora", fr: "Directrice" },
    company: "Vidal Finanzas",
    section: "directores",
    placeholder: "Directora",
  },
  {
    id: "director-9",
    name: "Ricardo Contreras Salas",
    role: { es: "Director", fr: "Directeur" },
    company: "Contreras Innovación",
    section: "directores",
    placeholder: "Director",
  },
  {
    id: "gerente",
    name: "Andrés Villalobos Pierre",
    role: { es: "Gerente General", fr: "Directeur général" },
    company: "Cámara Chileno-Haitiana",
    section: "gerencia",
    placeholder: "Gerente",
  },
];

export const departments: Committee[] = [
  {
    id: "dep-1",
    name: {
      es: "Comité de Inversión y Comercio",
      fr: "Comité d'Investissement et de Commerce",
    },
    description: {
      es: "Impulsa negocios y flujos de inversión entre Chile y Haití.",
      fr: "Stimule les affaires et les flux d'investissement entre le Chili et Haïti.",
    },
    type: "departamento",
  },
  {
    id: "dep-2",
    name: {
      es: "Comité de Derecho de Mujeres Haitianas en Chile",
      fr: "Comité du Droit des Femmes Haïtiennes au Chili",
    },
    description: {
      es: "Defiende y acompaña a la comunidad de mujeres haitianas.",
      fr: "Défend et accompagne la communauté des femmes haïtiennes.",
    },
    type: "departamento",
  },
  {
    id: "dep-3",
    name: { es: "Comité de Comunicación", fr: "Comité de Communication" },
    description: {
      es: "Difunde las actividades y logros de la cámara.",
      fr: "Diffuse les activités et réalisations de la chambre.",
    },
    type: "departamento",
  },
  {
    id: "dep-4",
    name: { es: "Comité de Eventos", fr: "Comité des Événements" },
    description: {
      es: "Organiza foros, misiones y encuentros bilaterales.",
      fr: "Organise des forums, missions et rencontres bilatérales.",
    },
    type: "departamento",
  },
  {
    id: "dep-5",
    name: { es: "Comité de Salud", fr: "Comité de Santé" },
    description: {
      es: "Promueve el bienestar y el acceso a la salud de la comunidad.",
      fr: "Promeut le bien-être et l'accès à la santé de la communauté.",
    },
    type: "departamento",
  },
];

export const committees: Committee[] = [
  {
    id: "com-l",
    name: { es: "Logística", fr: "Logistique" },
    description: { es: "", fr: "" },
    letter: "L",
    type: "comite",
  },
  {
    id: "com-s",
    name: { es: "Sustentabilidad", fr: "Durabilité" },
    description: { es: "", fr: "" },
    letter: "S",
    type: "comite",
  },
  {
    id: "com-le",
    name: { es: "Legal", fr: "Juridique" },
    description: { es: "", fr: "" },
    letter: "L",
    type: "comite",
  },
  {
    id: "com-f",
    name: { es: "Finanzas", fr: "Finances" },
    description: { es: "", fr: "" },
    letter: "F",
    type: "comite",
  },
  {
    id: "com-i",
    name: { es: "Innovación", fr: "Innovation" },
    description: { es: "", fr: "" },
    letter: "I",
    type: "comite",
  },
];

export const platinumPartners: Partner[] = Array.from(
  { length: 8 },
  (_, i) => ({
    id: `platinum-${i + 1}`,
    name: `Socio Platinum ${i + 1}`,
    tier: "platinum" as const,
  })
);

export const ccbcPartners: Partner[] = Array.from({ length: 27 }, (_, i) => ({
  id: `ccbc-${i + 1}`,
  name: `Socio CCBC ${i + 1}`,
  tier: "ccbc" as const,
}));

export const strategicPartnersA: Partner[] = Array.from(
  { length: 8 },
  (_, i) => ({
    id: `strategic-a-${i + 1}`,
    name: `Socio estratégico ${i + 1}`,
    tier: "estrategico" as const,
  })
);

export const strategicPartnersB: Partner[] = Array.from(
  { length: 8 },
  (_, i) => ({
    id: `strategic-b-${i + 1}`,
    name: `Socio ${i + 1}`,
    tier: "estrategico" as const,
  })
);

export const alliancePartnerLogos: Partner[] = Array.from(
  { length: 10 },
  (_, i) => ({
    id: `alianza-${i + 1}`,
    name: `Aliado ${i + 1}`,
    tier: "estrategico" as const,
  })
);

export const alliances: Alliance[] = [
  {
    id: "latinocamaras",
    name: "Latinocámaras",
    description: {
      es: "Red de cámaras de comercio latinoamericanas presente en Chile, que agrupa a organizaciones bilaterales para fortalecer el comercio y la inversión en la región.",
      fr: "Réseau de chambres de commerce latino-américaines présent au Chili, regroupant des organisations bilatérales pour renforcer le commerce et l'investissement dans la région.",
    },
    benefits: [
      {
        es: "Descuentos preferenciales en eventos organizados por la red",
        fr: "Réductions préférentielles sur les événements organisés par le réseau",
      },
      {
        es: "Acceso a estudios de mercado de la región latinoamericana",
        fr: "Accès à des études de marché de la région latino-américaine",
      },
      {
        es: "Formaciones y capacitaciones en comercio exterior",
        fr: "Formations en commerce extérieur",
      },
    ],
    featured: true,
  },
  {
    id: "onu-mujeres",
    name: "ONU Mujeres",
    description: {
      es: "Organización de las Naciones Unidas dedicada a la igualdad de género y el empoderamiento económico de las mujeres, aliada de la Cámara en programas de inclusión empresarial.",
      fr: "Organisation des Nations Unies dédiée à l'égalité des genres et à l'autonomisation économique des femmes, alliée de la Chambre dans des programmes d'inclusion économique.",
    },
    benefits: [
      {
        es: "Programas de mentoría para emprendedoras haitianas y chilenas",
        fr: "Programmes de mentorat pour entrepreneures haïtiennes et chiliennes",
      },
      {
        es: "Financiamiento preferente para proyectos liderados por mujeres",
        fr: "Financement préférentiel pour les projets menés par des femmes",
      },
      {
        es: "Talleres de liderazgo y desarrollo profesional",
        fr: "Ateliers de leadership et de développement professionnel",
      },
    ],
    featured: true,
  },
];

export const documents: DocumentResource[] = [
  {
    id: "doc-1",
    title: "Acuerdo Comercial Chile–Haití",
    description: "Texto vigente del acuerdo bilateral de comercio.",
  },
  {
    id: "doc-2",
    title: "Convenio de doble tributación",
    description: "Convención fiscal entre ambos países.",
  },
  {
    id: "doc-3",
    title: "Portal ProChile",
    description: "Información oficial para exportadores chilenos.",
  },
  {
    id: "doc-4",
    title: "Portal de inversión en Haití",
    description: "Guía oficial para inversionistas extranjeros.",
  },
  {
    id: "doc-5",
    title: "Guía aduanera bilateral",
    description: "Procedimientos y requisitos de importación/exportación.",
  },
  {
    id: "doc-6",
    title: "Directorio de cámaras aliadas",
    description: "Contactos de cámaras de comercio de la región.",
  },
];

export const orgLinks: OrgLink[] = [
  { es: "Embajada de Chile en Haití" },
  { es: "Embajada de Haití en Chile" },
  { es: "ProChile — Dirección de Promoción de Exportaciones" },
  { es: "Dirección General de Relaciones Económicas Internacionales" },
  { es: "Cámara Nacional de Comercio de Chile" },
  { es: "Ministerio de Comercio e Industria de Haití" },
  { es: "Banco Interamericano de Desarrollo (BID)" },
  { es: "Latinocámaras Chile" },
  { es: "Servicio Nacional de Aduanas de Chile" },
  { es: "Cámara de Comercio Haitiano-Americana" },
];

export const historyMilestones: { year: string; title: string; desc: { es: string; fr: string } }[] = [
  {
    year: "1975",
    title: "Fundación",
    desc: {
      es: "Creación de la asociación por un grupo de empresarios visionarios que buscaban estrechar los vínculos comerciales entre Chile y Haití.",
      fr: "Création de l'association par un groupe d'entrepreneurs visionnaires cherchant à resserrer les liens commerciaux entre le Chili et Haïti.",
    },
  },
  {
    year: "2015",
    title: "40 años",
    desc: {
      es: "La Cámara celebra cuatro décadas de trabajo, consolidada como referente en la facilitación del comercio bilateral.",
      fr: "La Chambre célèbre quatre décennies de travail, consolidée comme référence dans la facilitation du commerce bilatéral.",
    },
  },
  {
    year: "2025",
    title: "50 años",
    desc: {
      es: "Medio siglo de historia, celebrado junto a socios y autoridades de ambos países, y a instituciones aliadas.",
      fr: "Un demi-siècle d'histoire, célébré avec les membres et autorités des deux pays, et les institutions alliées.",
    },
  },
];

export const servicesList: { title: { es: string; fr: string }; desc: { es: string; fr: string } }[] = [
  {
    title: { es: "Relaciones institucionales", fr: "Relations institutionnelles" },
    desc: {
      es: "Relaciones permanentes con la embajada y las autoridades de ambos países.",
      fr: "Relations permanentes avec l'ambassade et les autorités des deux pays.",
    },
  },
  {
    title: { es: "Red de contactos", fr: "Réseau de contacts" },
    desc: {
      es: "Contactos con otras cámaras y asociaciones profesionales.",
      fr: "Contacts avec d'autres chambres et associations professionnelles.",
    },
  },
  {
    title: { es: "Comités sectoriales", fr: "Comités sectoriels" },
    desc: {
      es: "Comités sectoriales animados por los propios socios.",
      fr: "Comités sectoriels animés par les membres eux-mêmes.",
    },
  },
  {
    title: { es: "Acompañamiento en eventos", fr: "Accompagnement lors d'événements" },
    desc: {
      es: "Apoyo en eventos, conferencias y encuentros de negocios.",
      fr: "Soutien lors d'événements, de conférences et de rencontres d'affaires.",
    },
  },
  {
    title: { es: "Información actualizada", fr: "Information actualisée" },
    desc: {
      es: "Información al día sobre el comercio bilateral.",
      fr: "Information à jour sur le commerce bilatéral.",
    },
  },
  {
    title: { es: "Red regional", fr: "Réseau régional" },
    desc: {
      es: "Red de intercambio con las cámaras de comercio regionales del país socio.",
      fr: "Réseau d'échange avec les chambres de commerce régionales du pays partenaire.",
    },
  },
];

export const socialPosts = [
  { id: 1, platform: "instagram" as const },
  { id: 2, platform: "tiktok" as const },
  { id: 3, platform: "facebook" as const },
  { id: 4, platform: "instagram" as const },
  { id: 5, platform: "tiktok" as const },
  { id: 6, platform: "facebook" as const },
  { id: 7, platform: "instagram" as const },
  { id: 8, platform: "tiktok" as const },
];
