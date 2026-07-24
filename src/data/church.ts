/**
 * Fuente única de verdad para la landing de IASD Pariachi.
 * Edita horarios, contacto, líderes y textos aquí.
 */

export interface Verse {
  text: string;
  reference: string;
}

export interface Highlight {
  title: string;
  text: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface ScheduleItem {
  name: string;
  time: string;
}

export interface ScheduleBlock {
  day: string;
  subtitle: string;
  image: string;
  tint: 'navy' | 'ochre' | 'deep';
  about: string;
  items: ScheduleItem[];
}

export interface Department {
  name: string;
  summary: string;
}

export interface Leader {
  role: string;
  leader: string;
}

export interface Activity {
  name: string;
  day: string;
  time: string;
  kicker: string;
  blurb: string;
  purpose: string;
}

export interface SectionCopy {
  kicker: string;
  title: string;
  lead: string;
}

export interface ChurchData {
  name: string;
  fullName: string;
  location: string;
  tagline: string;
  description: string;
  mission: string;
  invitation: string;
  verse: Verse;
  highlights: Highlight[];
  beliefsUrl: string;
  beliefsLabel: string;
  address: string;
  addressDetail: string;
  coordinates: Coordinates;
  whatsapp: string;
  whatsappMessage: string;
  mapEmbedUrl: string;
  mapsDirectionsUrl: string;
  socials: SocialLinks;
  schedule: ScheduleBlock[];
  departments: Department[];
  ministries: Leader[];
  activities: Activity[];
  sections: {
    hero: {
      ctaPrimary: string;
      ctaSecondary: string;
    };
    schedule: SectionCopy;
    about: SectionCopy;
    familia: SectionCopy;
    activities: SectionCopy;
    contact: SectionCopy;
  };
}

const coordinates: Coordinates = {
  lat: -12.011539,
  lng: -76.837775,
};

export const churchData: ChurchData = {
  name: 'IASD Pariachi',
  fullName: 'Iglesia Adventista del Séptimo Día — Pariachi',
  location: 'Pariachi, Ate, Lima',
  tagline: 'Bienvenido a tu casa, bienvenido a la IASD Pariachi',
  description:
    'Una comunidad de fe en Pariachi que sigue a Jesús, estudia la Biblia y sirve con amor al prójimo.',
  mission:
    'Somos una familia de creyentes en Pariachi llamada a compartir el evangelio eterno, cultivar una vida de esperanza y acompañar a cada persona en su caminar con Cristo. Creemos en la Segunda Venida de Jesús y vivimos la fe de forma práctica: adoración, estudio bíblico y servicio solidario.',
  invitation:
    'Si tu corazón busca paz, dirección o simplemente un lugar donde te reciban con amor, aquí hay espacio para ti. No vienes como visitante: vienes como parte de una familia que camina junta hacia Jesús. En Pariachi oramos, estudiamos la Biblia y nos sostenemos unos a otros, porque nadie debería recorrer la fe en soledad. Te esperamos con los brazos abiertos; Dios ya te estaba esperando.',
  verse: {
    text: 'Me alegré con los que me decían: A la casa de Jehová iremos.',
    reference: 'Salmo 122:1',
  },
  highlights: [
    {
      title: 'Una casa de oración',
      text: 'Aquí elevamos nuestra voz a Dios, intercedemos por nuestras familias y encontramos paz en Su presencia.',
    },
    {
      title: 'Una casa de enseñanza',
      text: 'Estudiamos la Biblia con amor y claridad para conocer mejor a Jesús y vivir Su esperanza.',
    },
    {
      title: 'Una casa de servicio',
      text: 'Servimos a Pariachi con compasión, acompañando a niños, jóvenes, mujeres y familias.',
    },
  ],
  beliefsUrl: 'https://institucional.adventistas.org/es/nuestras-crencias/',
  beliefsLabel: 'Conoce las 28 creencias fundamentales',
  address: 'Mz B lote 28, Pariachi 3ra etapa',
  addressDetail: 'Pariachi, Ate — Lima, Perú. Usa “Cómo llegar” para abrir la ruta en Google Maps.',
  coordinates,
  whatsapp: '51999999999',
  whatsappMessage: 'Hola, quisiera más información sobre la IASD Pariachi.',
  mapEmbedUrl: `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&hl=es&z=17&output=embed`,
  mapsDirectionsUrl: 'https://maps.app.goo.gl/bzsQgEatbeYoHgWH8',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61591915229134',
    instagram: '',
    youtube: '',
  },
  schedule: [
    {
      day: 'Miércoles',
      subtitle: 'Culto de oración',
      image: '/images/hero/miercoles.jpg',
      tint: 'navy',
      about:
        'Nos reunimos para orar juntos, interceder por nuestras familias y buscar la dirección de Dios. Es una noche de fe, paz y comunión espiritual.',
      items: [{ name: 'Culto de Oración', time: '7:30 PM' }],
    },
    {
      day: 'Viernes',
      subtitle: 'Recepción de sábado',
      image: '/images/hero/viernes.jpg',
      tint: 'ochre',
      about:
        'Damos la bienvenida al sábado con alabanza, reflexión bíblica y el Culto Joven. Preparamos el corazón para el día de reposo en comunidad.',
      items: [{ name: 'Recepción de Sábado / Culto Joven', time: '7:30 PM' }],
    },
    {
      day: 'Sábado',
      subtitle: 'Día de reposo',
      image: '/images/hero/sabado.png',
      tint: 'deep',
      about:
        'En la mañana estudiamos la Biblia en Escuela Sabática y adoramos a Dios en el Culto Divino.',
      items: [
        { name: 'Escuela Sabática', time: '9:00 AM' },
        { name: 'Culto Divino', time: '10:45 AM' },
      ],
    },
  ],
  departments: [
    {
      name: 'Ministerio Infantil / Escuela Sabática',
      summary: 'Formación bíblica para niños y estudio de la Palabra en familia cada sábado.',
    },
    {
      name: 'Ministerio Joven (Conquistadores y Aventureros)',
      summary: 'Discipulado, liderazgo y actividades para niños y jóvenes en un ambiente de fe.',
    },
    {
      name: 'Ministerio de la Mujer / Dorcas (ASA)',
      summary: 'Compañerismo, servicio solidario y apoyo a familias de la congregación y la comunidad.',
    },
  ],
  ministries: [
    { role: 'Anciano', leader: 'Alberto Sánchez' },
    { role: 'Tesorera', leader: 'Marilu Luis' },
    { role: 'Secretaria', leader: 'Patricia Gutiérrez' },
    { role: 'Director de Escuela Sabática', leader: 'Luis Albumer' },
    { role: 'Director de MIPES', leader: 'Miguel Sarmiento' },
    { role: 'Director de Mayordomía', leader: 'Emerson Portocarrero' },
    { role: 'Diácono', leader: 'Daniel Quiroz' },
    { role: 'Diaconisa', leader: 'Soledad Solano' },
    { role: 'Directora del Ministerio de la Mujer', leader: 'Miriam Armas' },
    { role: 'Directora de Dorcas', leader: 'Marielena Villalva' },
    { role: 'Directora de JA (Jóvenes Adventistas)', leader: 'Dany Gutiérrez' },
    { role: 'Director de Conquistadores', leader: 'Haru Sarmiento' },
    { role: 'Directora de Aventureros', leader: 'Magaly' },
    { role: 'Responsable de audio y sonido', leader: 'Jeremy' },
  ],
  activities: [
    {
      name: 'Vóley',
      day: 'Sábados',
      time: '8:00 PM',
      kicker: 'Deporte y compañerismo',
      blurb: 'Espacio abierto para jugar, compartir y cuidar tu salud en comunidad.',
      purpose:
        'Fomentamos el compañerismo y la actividad física como principios de una vida equilibrada. ¡Ven a desestresarte y compartir con amigos después de despedir el sábado!',
    },
    {
      name: 'Fútbol',
      day: 'Domingos',
      time: '5:30 AM',
      kicker: 'Cuerpo, mente y amistad',
      blurb: 'Espacio abierto para jugar, compartir y cuidar tu salud en comunidad.',
      purpose:
        'Creemos en el desarrollo físico y mental. Nuestro espacio de fútbol es ideal para ejercitar el cuerpo, respirar profundo y construir amistades sanas en un ambiente familiar.',
    },
  ],
  sections: {
    hero: {
      ctaPrimary: 'Acompáñanos este sábado',
      ctaSecondary: '¿Cómo llegar?',
    },
    schedule: {
      kicker: 'Ven a adorar con nosotros',
      title: 'Horarios de servicios',
      lead: 'Un espacio para orar, estudiar la Palabra y descansar en la presencia de Dios.',
    },
    about: {
      kicker: 'Quiénes somos',
      title: 'Una casa abierta para tu corazón',
      lead: 'Somos la familia de la IASD Pariachi: una comunidad de fe en Pariachi, Ate, Lima.',
    },
    familia: {
      kicker: 'Familia',
      title: 'Nuestros líderes',
      lead: 'Conoce a quienes sirven y el cargo que desempeñan con amor. Si deseas involucrarte, serás bienvenido.',
    },
    activities: {
      kicker: 'Actividades',
      title: 'Vida Sana y Deportes',
      lead: 'Cuidamos el cuerpo porque es el templo del Espíritu. Únete a nuestros espacios de recreación.',
    },
    contact: {
      kicker: 'Visítanos',
      title: 'Contacto y ubicación',
      lead: 'Estamos en Pariachi, Ate, Lima. Será un gusto recibirte en casa.',
    },
  },
};

/** Alias compatible con imports existentes. */
export const church = churchData;

export function whatsappLink(message = churchData.whatsappMessage): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${churchData.whatsapp}?text=${text}`;
}

/** Redes con URL definida (listas para mostrar en la UI). */
export function activeSocials(): Array<{ label: string; href: string }> {
  const entries: Array<{ key: keyof SocialLinks; label: string }> = [
    { key: 'facebook', label: 'Facebook' },
    { key: 'instagram', label: 'Instagram' },
    { key: 'youtube', label: 'YouTube' },
  ];

  return entries
    .filter(({ key }) => Boolean(churchData.socials[key]?.trim()))
    .map(({ key, label }) => ({ label, href: churchData.socials[key] }));
}
