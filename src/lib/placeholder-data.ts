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
    facebook: "https://www.facebook.com/share/1BuNjHRusX/",
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
    id: "visita-colombia-embajada",
    slug: "visita-colombia-embajada-haiti",
    title: "El presidente de la Cámara se reúne con la embajada de Haití en Colombia",
    category: "Noticias",
    excerpt:
      "En el marco de una visita a Colombia, el presidente Jimmy Joly sostuvo una reunión con el Chargé d'Affaires de la embajada de Haití en Colombia para fortalecer la integración económica de Haití con América Latina.",
    date: "2026-08-28",
    placeholder: "Visita a Colombia",
    imageSrc: "/images/news/visita-colombia-embajada.jpg",
    paragraphs: [
      "La Cámara Chileno-Haitiana de Comercio, Turismo e Industria continúa impulsando acciones concretas para fortalecer la integración económica de Haití con América Latina y generar nuevas oportunidades de cooperación, inversión y comercio.",
      "En el marco de una visita a Colombia, orientada a abordar diferentes asuntos comerciales y explorar nuevas conexiones empresariales y estratégicas, el presidente de la Cámara, Jimmy Joly, sostuvo una importante reunión con el Chargé d'Affaires de la embajada de Haití en Colombia.",
      "El encuentro permitió intercambiar perspectivas sobre las oportunidades existentes para fortalecer los vínculos entre Haití, Colombia y otros mercados de América Latina, así como identificar posibles áreas de colaboración institucional y empresarial.",
      "Entre los temas de interés se abordaron: promoción del comercio y las inversiones entre Haití y América Latina, conexión entre empresarios y organizaciones del sector privado, identificación de nuevas oportunidades de negocios y cooperación, facilitación de vínculos comerciales e institucionales, internacionalización de empresas y productos haitianos, y fortalecimiento de la presencia de Haití en los mercados latinoamericanos.",
      "Desde la Cámara creemos firmemente que la integración regional es una herramienta fundamental para el desarrollo económico de Haití. Por ello, seguimos trabajando para construir puentes entre empresarios, instituciones, inversionistas y actores estratégicos de la región.",
      "Haití tiene oportunidades, talento y productos para ofrecer al mundo. El desafío es conectar esas oportunidades con nuevos mercados.",
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
    id: "latcams-2025",
    slug: "reunion-latcams-2025",
    title: "La Cámara participa en la reunión de LATCAMS 2025",
    category: "Eventos",
    excerpt:
      "La Cámara se enorgullece de formar parte de la reunión de Cámaras Latinoamericanas de Comercio (LATCAMS), un espacio clave para fortalecer relaciones entre cámaras de comercio y definir juntos los objetivos y actividades para 2025.",
    date: "2025-01-31",
    placeholder: "Reunión LATCAMS",
    imageSrc: "/images/news/latcams-2025.jpg",
    paragraphs: [
      "La Cámara Chileno-Haitiana de Comercio, Turismo e Industria se enorgullece de formar parte de la reunión de Cámaras Latinoamericanas de Comercio LATCAMS, un espacio clave para fortalecer nuestras relaciones como cámaras de comercio y definir juntos los objetivos y actividades para este 2025.",
      "Creemos que ha llegado el momento de consolidar la unión entre Latinoamérica y el Caribe, impulsando el intercambio comercial, el turismo, la tecnología, la educación y mucho más. ¡Juntos, construiremos nuevas oportunidades para el desarrollo de nuestra región!",
    ],
  },
  {
    id: "apex-brasil",
    slug: "encuentro-apexbrasil-sao-paulo",
    title: "Encuentro con ApexBrasil en São Paulo",
    category: "Noticias",
    excerpt:
      "El presidente Jimmy Joly y el secretario general Fagenson Phadael se reunieron con ApexBrasil en São Paulo para explorar oportunidades de negocios en sectores clave para Haití, como alimentos, agroindustria y tecnología agrícola.",
    date: "2024-10-19",
    placeholder: "Encuentro ApexBrasil",
    imageSrc: "/images/news/apex-brasil.jpg",
    paragraphs: [
      "Nos complace compartir con una noticia emocionante sobre el reciente viaje del presidente Jimmy Joly y el secretario general Fagenson Phadael. Este viaje marca un hito significativo en nuestra misión de fortalecer las relaciones comerciales y promover el desarrollo económico sostenible entre Haití y los países de Latino América, especialmente Chile y Brasil.",
      "Durante esta estancia, nuestros líderes, junto con un miembro de la Cámara de Comercio Haití-Brasil, tuvieron el privilegio de reunirse con ApexBrasil de São Paulo, representada por su jefe Gustavo Sperendio. Este encuentro fue sumamente fructífero, pues se discutieron múltiples oportunidades de negocios en sectores clave donde Haití presenta una gran demanda, como el sector de alimentos, agroindustrial y tecnología agrícola. Estas oportunidades no solo representan un potencial de crecimiento económico, sino también una posibilidad de mejorar la calidad de vida.",
      "Uno de los temas más destacados fue la colaboración en el ámbito agrícola. A través de las organizaciones brasileñas exportadoras de tecnologías agrícolas, estamos explorando nuevas formas de impulsar la innovación y la eficiencia en el sector agrícola haitiano. Esta colaboración promete traer tecnologías avanzadas y prácticas sostenibles que beneficiarán enormemente a nuestros agricultores y al país en general.",
      "Además, se abordaron diversos temas de colaboración futura, desde el intercambio de conocimientos hasta la identificación de exportadores confiables.",
      "Esta visita es solo el comienzo de una serie de iniciativas que planeamos llevar a cabo para seguir fomentando el crecimiento y la cooperación entre nuestras naciones. Estamos entusiasmados por las oportunidades que se avecinan y confiamos en que esta reunión traerá grandes beneficios para todos los empresarios socios de la cámara.",
    ],
  },
  {
    id: "senadora-beauzile",
    slug: "encuentro-ex-senadora-edmonde-supplice-beauzile",
    title: "Encuentro con la ex senadora haitiana Edmonde Supplice Beauzile",
    category: "Noticias",
    excerpt:
      "La Cámara tuvo el honor de reunirse con la ex senadora haitiana Edmonde Supplice Beauzile, quien participó en la Cumbre de la Alianza Progresista en Chile, para abordar temas de gran relevancia para Haití.",
    date: "2024-10-08",
    placeholder: "Ex senadora Beauzile",
    imageSrc: "/images/news/senadora-beauzile.jpg",
    paragraphs: [
      "La Cámara Chileno-Haitiana de Comercio, Turismo e Industria tuvo el honor de tener un encuentro con la ex senadora haitiana Edmonde Supplice Beauzile, quien participó en la Cumbre de la Alianza Progresista en Chile. Durante su estancia, mantuvimos una reunión fructífera en la que abordamos temas de gran relevancia para Haití.",
      "Uno de los principales puntos discutidos fue la situación de inseguridad en Haití. La ex senadora Beauzile compartió sus preocupaciones y perspectivas sobre este desafío, subrayando la necesidad de encontrar soluciones efectivas para mejorar la seguridad en el país.",
      "En este contexto, exploramos las oportunidades que la Cámara Chileno-Haitiana de Comercio, Turismo e Industria puede brindar a través de inversiones extranjeras en Haití. Reconocemos el potencial de estas inversiones para fomentar el desarrollo económico y contribuir a la estabilización del país. Discutimos diversas estrategias para atraer inversores chilenos y de otros países de Latinoamérica, y cómo estas inversiones pueden ser canalizadas de manera efectiva para generar un impacto positivo en la seguridad y el bienestar de la población haitiana.",
      "Además, abordamos otros temas de interés común, incluyendo el fortalecimiento de las relaciones comerciales y turísticas entre ambos países, y la promoción de iniciativas conjuntas que beneficien a nuestras comunidades.",
      "Estamos comprometidos en continuar trabajando juntos para impulsar el desarrollo y la cooperación entre los países de Latino América, especialmente Chile con Haití.",
    ],
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
    name: "Jimmy Joly",
    role: { es: "Presidente", fr: "Président" },
    section: "presidencia",
    placeholder: "Presidente",
  },
  {
    id: "secretario-general",
    name: "Fagenson Phadael",
    role: { es: "Secretario General", fr: "Secrétaire Général" },
    section: "directores",
    placeholder: "Secretario General",
  },
  {
    id: "tesorero",
    name: "Douanius Norvin",
    role: { es: "Tesorero", fr: "Trésorier" },
    section: "directores",
    placeholder: "Tesorero",
  },
  {
    id: "consejero",
    name: "Manuel Soto",
    role: { es: "Consejero", fr: "Conseiller" },
    section: "directores",
    placeholder: "Consejero",
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

export const strategicPartners: Partner[] = [
  {
    id: "chambrics",
    name: "CHAMBRICS",
    tier: "estrategico",
    logoSrc: "/images/partners/chambrics.png",
  },
  {
    id: "fhcc",
    name: "Federation of Haitian Chambers of Commerce",
    tier: "estrategico",
    logoSrc: "/images/partners/fhcc.png",
  },
  {
    id: "ccithc",
    name: "Chambre de Commerce, d'Industrie et de Tourisme Haïti-Chili",
    tier: "estrategico",
    logoSrc: "/images/partners/ccithc.png",
  },
  {
    id: "cciasm",
    name: "Chambre de Commerce, d'Industrie et des Affaires Internationales de Saint-Marc",
    tier: "estrategico",
    logoSrc: "/images/partners/cciasm.png",
  },
  {
    id: "usina-startup",
    name: "Usina de Startup",
    tier: "estrategico",
    logoSrc: "/images/partners/usina-startup.png",
  },
];

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
