// src/data/detailedReviews.js

export const detailedReviews = [
  {
    id: 'satiros',
    name: 'Sátiros',
    ciudad: 'La Paz',
    tipo: 'Bar / Cruising',
    audiencia_tags: ['Variado', 'Local'],
    ubicacion: { lat: -16.493519, lon: -68.135613 },
    address: 'Calle Pichincha N°662 (a dos cuadras del reloj de la Pérez y calle Comercio)',
    hours: [
      { period: 'Mañanas (Sátiros Express)', time: '10:00 a 14:00', days: 'todos los días.' },
      { period: 'Noches', time: '18:30 a 22:00', days: 'todos los días excepto viernes y sábados.' },
      { period: 'Viernes y sábados', time: '18:30 hasta la mañana siguiente.' }
    ],
    audience: 'Variado, desde gente local hasta extranjeros ocasionales. La mayoría va a beber, no tanto a coger.',
    themes: [
      { day: 'Lunes', theme: 'Travestis', price: '10 Bs' },
      { day: 'Martes a jueves', theme: 'Bar sin mucha diferencia temática', price: '10 Bs' },
      { day: 'Viernes y domingos', theme: 'Desnudos / Boxers', price: '10 Bs / 20 Bs' },
      { day: 'Sábados', theme: 'Bar de remate', price: '10 Bs' }
    ],
    offerings: '🍸 Bar gay con espacio para beber y socializar, con área de cruising deteriorada y olvidada.',
    amenities: ['Guardarropía disponible.', 'Área de cruising con cuarto oscuro y videos porno, pero baños clausurados y pésimo mantenimiento.'],
    pros: [
      'Lugar amplio para grupos que quieren beber y socializar.',
      'Si llevas a alguien para coger, la pasarás bien.',
      'Música a pedido: si quieres, te la ponen.',
      'Cámaras de seguridad externas en la entrada.'
    ],
    cons: [
      'Higiene deficiente: pisos, mesas y asientos pegajosos por derrames sin limpiar.',
      'Frío constante en temáticas de desnudo/boxer; la estufa no alcanza para calentar.',
      'Área de cruising oscura, sucia, con ratones y asientos rotos.',
      'Baños clausurados por vandalismo y mal uso.',
      'Difícil conocer gente si vas solo; la mayoría va en grupos y el cruising casi no existe.',
      'Personal que atiende lleva a sus amigos a la barra, rompiendo discreción.',
      'Presencia de mujeres en días temáticos que incomodan a algunos asistentes.',
      'Ya no va mucha gente a hacer cruising o sexo; es más un bar de remate.'
    ],
    tips: [
      'Lleva siempre tus condones.',
      'Mejor ve con amigos o alguien pactado.',
      'No esperes un ambiente exclusivamente gay; puede haber mujeres y travestis.',
      'Prepárate para un lugar algo sucio y frío, no un bar lujoso.',
      'Los viernes de 18:30 a 22:00 son tu mejor chance para cruising; si entran semidesnudos es porque buscan acción y no solo beber.'
    ],
    suggestions: [
      'Mejorar limpieza general (mesas, pisos y área de cruising).',
      'Rehabilitar baños clausurados o adecuarlos para incentivar cruising.',
      'Controlar que el personal no lleve amigos que generen ruido o rompan temáticas.',
      'Mantener exclusividad masculina en noches temáticas para evitar incomodidad.',
      'Recuperar el enfoque original como espacio para cruising y joda gay.'
    ],
    activityLevels: {
      cruising: 2,
      social: 5,
      hygiene: 1
    },
    bestTimeToVisit: 'Viernes luego de las 7:00 pm, Domingo luego de las 7:00 pm',
    security: 'Zona céntrica, cerca de varios puntos rojos. Un tanto peligrosa si sales a altas horas de la noche; solo ten cuidado si pasas por el reloj de la Pérez. Por lo demás, no es tan conflictivo. Lugar discreto para ingreso; no es obvio.',
    finalComment: 'Sátiros hoy es más un bar de remate que un espacio de cruising gay. Útil para beber con amigos y pasar un rato, pero el abandono del área de joda y la falta de mantenimiento le restan valor. Si buscas acción, mejor ve con alguien o apuesta a los viernes de 18:30 a 22:00. Con más limpieza, orden y enfoque, podría volver a ser un referente en la ciudad, ya que es el único en pleno centro paceño.',
    healthReminder: 'Recomendación: protégete siempre, lleva condones y cuida tu salud sexual.',
    overallRating: 6,
    summary: {
      pro: 'Bar - Cruising Club',
      con: 'Mala higiene y descuido general, frío persistente en áreas clave, pérdida del espíritu de cruising.'
    }
  },
  {
    id: 'cine-vip',
    name: 'CINE VIP',
    ciudad: 'El Alto',
    tipo: 'Cine / Cruising',
    audiencia_tags: ['Local', 'Discreto'],
    ubicacion: { lat: -16.505925, lon: -68.160892 },
    address: 'Ceja, final calle 1 (letrero “Discoteca Espejos”), subiendo gradas.',
    hours: [
      { period: 'Cine y área de cruising', time: '16:00 a 19:00', days: '' },
      { period: 'Mañana (no seguro)', time: 'Desde las 9:00', days: '' },
      { period: 'Discoteca (muere cruising)', time: 'Desde las 19:00', days: '' }
    ],
    audience: 'Asistencia regular. La mayoría son hombres del Alto, muy tímidos, inseguros y cubiertos, nada de “modelos”.',
    themes: [
      { day: 'Domingos', theme: 'Desnudo', price: '5 Bs' },
      { day: 'Domingos', theme: 'Boxer', price: '10 Bs' },
      { day: 'Domingos', theme: 'Vestido', price: '20 Bs' },
      { day: 'Otros días', theme: 'Entrada', price: '10 Bs' }
    ],
    offerings: '🎥 Un lugar que mezcla cine y sexo casual.',
    amenities: ['Espacio antiguo adaptado sobre una discoteca; nada moderno ni cómodo.', 'Tiene “temáticas” diarias, pero la única que realmente se siente distinta es la del domingo.', 'Ticket que permite salir y volver a entrar el mismo día.'],
    pros: [
      'Entrada económica y con reingreso.',
      'Guardarropía con ficha incluida.',
      'Ambiente oscuro.',
      'Música moderada que acompaña sin molestar.',
      'Área de cine y zonas oscuras de cruising (no muy grandes).',
      'Si tienes suerte, puedes encontrar a alguien interesado en algo.'
    ],
    cons: [
      'Baños sucios, con mal olor y sin mantenimiento.',
      'Todo el lugar da sensación de descuido: pisos pegajosos, papeles tirados, cero limpieza visible.',
      'Mucha gente usa el celular (a pesar de estar prohibido): alumbran, chatean, te observan.',
      'Muchos entran cubiertos con gorra, barbijo y capucha; no sabes si quieren tener sexo o robarte.',
      'La mayoría se queda parada, sin moverse ni interactuar; vuelve el ambiente incómodo.',
      'Aunque hay zonas designadas para el sexo, todos terminan en el baño.',
      'Malos olores, aliento fuerte y partes íntimas sin aseo.'
    ],
    tips: [
      'Lleva condones y lubricante siempre.',
      'No lleves objetos de valor.',
      'Ve aseado: no hay duchas ni nada para limpiarse.',
      'Sé realista: no es un lugar lujoso ni con cuerpos de catálogo.',
      'Si ves que nadie se mueve… no te obligues a quedarte.'
    ],
    suggestions: [
      'Mejorar limpieza de baños y pisos.',
      'Hacer que las temáticas se sientan de verdad, con más diferencia entre días.',
      'Incentivar el uso del área de encuentros y no solo los baños.'
    ],
    activityLevels: {
      cruising: 3,
      social: 3,
      hygiene: 1
    },
    bestTimeToVisit: 'Viernes luego de las 5:00 pm, Sábado luego de las 5:00 pm, Domingo luego de las 5:00 pm',
    security: 'Es la Ceja del Alto, zona muy peligrosa a altas horas de la noche. Si bien hay minibuses relativamente cerca, sigue siendo una zona roja; conviene andar con mucho cuidado y no quedarse hasta muy tarde. El lugar en sí es discreto, no es obvio para ingreso o salida.',
    finalComment: 'Cine VIP tiene potencial, pero se siente a medias: quiere ser cine, espacio de cruising/sexo y discoteca… y no termina siendo nada claro. Lo sexual está ahí, pero el miedo, la suciedad y la inseguridad de la gente lo arruinan. Puede funcionar si vas con curiosidad y sin muchas expectativas, pero ve con los pies en la tierra y no esperes mucho.',
    healthReminder: 'Recomendación: protégete siempre, lleva condones y cuida tu salud sexual.',
    overallRating: 4,
    summary: {
      pro: 'Cine Cruising Gay',
      con: 'Mala higiene y limpieza, gente muy miedosa e insegura, desuso del área principal, discreción extrema que asusta más que protege.'
    }
  },
  {
    id: 'sauna-punto-g',
    name: 'SAUNA PUNTO G',
    ciudad: 'El Alto',
    tipo: 'Sauna',
    audiencia_tags: ['Variado', 'Activo'],
    ubicacion: { lat: -16.513340, lon: -68.157874 },
    address: 'Calle Demetrio Moscoso Nº75 (entre calles 9 y 10). Maps te lleva directo.',
    hours: [
      { period: '', time: '16:30 – 21:30', days: 'Lunes a domingo.' }
    ],
    audience: 'Gran variedad de asistentes: todas las edades, cuerpos y estilos. El ambiente es activo, sobre todo los fines de semana, y mezcla locales con personas de paso por La Paz.',
    themes: [
      { day: 'Lunes y miércoles', theme: 'Boxer', price: '20 Bs' },
      { day: 'Martes y viernes', theme: 'Desnudos', price: '30 Bs' },
      { day: 'Jueves y sábado', theme: 'Normal', price: '30 Bs' },
      { day: 'Domingos y feriados', theme: 'Boxer/Desnudos', price: '35 Bs (Apagón a las 20:00 aprox.)' }
    ],
    offerings: '🌟 Más de 10 años en la ciudad y remodelado post pandemia.',
    amenities: [
      '2 plantas: casilleros con llave, duchas, barra, sauna seco y sauna vapor.',
      'Vitrina con condones, lubricantes, boxers, dildos y demás.',
      'Sauna seco y vapor disponibles, baños limpios.',
      'Espacios amplios para socializar: barra, asientos y privados para intimidad.',
      'Privados con seguro para cerrar por dentro.',
      'Baños: funcionales con papel y uno con manguera de agua a presión.',
      'Sandalias y toallas incluidas.',
      'Área de cruising: en el piso superior con un pasillo oscuro.'
    ],
    pros: [
      'Amplia variedad de gente y edades.',
      'Ambiente social activo.',
      'Sauna funcional y duchas disponibles.',
      'Privados con seguro para cerrar.',
      'Sandalias y toallas incluidas.',
      'Barra con venta de bebidas y espacio para encuentros casuales.'
    ],
    cons: [
      'Duchas en su mayoría frías, falta agua caliente.',
      'Privados sin mantenimiento óptimo.',
      'Piso resbaloso, sobre todo en las gradas.',
      'Gente que entra con gorra y barbijo “para ocultarse”, puede incomodar.',
      'Higiene promedio, podría mejorar.'
    ],
    tips: [
      'Lleva tu propio condón y lubricante.',
      'No lleves objetos de valor.',
      'Sé respetuoso: no todos serán de tu gusto… y tú tampoco del de todos.',
      'Si es tu primera vez o tienes algo de miedo, ve acompañado.',
      'Sé claro si no te interesa alguien, y respeta cuando te lo digan a ti.',
      'Bañate antes de cualquier contacto (y exige lo mismo).'
    ],
    suggestions: [
      'Mejorar las duchas y la disponibilidad de agua caliente en todas.',
      'Mantener limpieza de privados y áreas comunes.',
      'Aumentar seguridad en pisos resbalosos.',
      'Mejorar ventilación si fuera posible.'
    ],
    activityLevels: {
      cruising: 5,
      social: 4,
      hygiene: 3
    },
    bestTimeToVisit: 'Domingos luego de las 6:00 pm > Viernes luego de las 6:00 pm > Sábados luego de las 6:00 pm',
    security: 'El Alto puede ser un poco peligroso de noche, así que conviene tomar precauciones. El teleférico queda cerca, pero los domingos cierra a las 9:00 pm, así que si no vives cerca o no conoces bien la zona, moverse más tarde puede ser complicado o riesgoso. El lugar en sí es discreto, así que no es evidente para entrar o salir, lo que ayuda a mantener privacidad.',
    finalComment: 'El lugar se llena de gente de toda la ciudad e incluso de quienes están de paso por La Paz 🏳️‍🌈✈️. Y sí, hay sexo, bastante, para todos los gustos 👀🔥. Si buscas saunear, conocer gente o ir directo a la joda, este es uno de los mejores puntos de encuentro de la ciudad.',
    healthReminder: 'Recomendación: protégete siempre, lleva condones y cuida tu salud sexual.',
    overallRating: 8,
    summary: {
      pro: 'Sauna Gay',
      con: 'Duchas en su mayoría frías, higiene promedio, piso resbaloso.'
    }
  },
  {
    id: 'sauna-spartacus',
    name: 'SAUNA SPARTACUS',
    ciudad: 'El Alto',
    tipo: 'Sauna',
    audiencia_tags: ['Local'],
    ubicacion: { lat: -16.517237,  lon: -68.155529 },
    address: 'El Alto, Av. Cívica, a dos cuadras del Obelisco (garaje naranja, 3er piso).',
    hours: [
      { period: '', time: '17:00 a 22:00 hrs', days: 'Todos los días (a veces más tarde en fines de semana).' }
    ],
    audience: 'Variedad de edades, aunque la mayoría es gente de la ciudad de El Alto. El ambiente no es tan concurrido ni diverso, suele haber menos “prendes” que en otros lugares y rara vez se llena, salvo en fines de semana.',
    themes: [
      { day: 'Lunes', theme: 'Boxer – Promo 2x30 Bs', price: '25 Bs (1 solo)' },
      { day: 'Martes y Viernes', theme: 'Desnudos', price: '25 Bs' },
      { day: 'Miércoles y Sábado', theme: 'Normal', price: '25 Bs' },
      { day: 'Jueves', theme: 'Promo 2x25 Bs', price: '20 Bs (1 solo)' },
      { day: 'Domingo', theme: 'Boxer o desnudos (a elección)', price: '25 Bs' }
    ],
    offerings: '🧖‍♂️ Sauna seco y vapor funcionales.',
    amenities: [
      'Duchas: funcionales, con agua caliente.',
      'Recepción/barra: se paga la entrada al salir; venden refrescos, bebidas y tragos.',
      'Servicio de guardarropía: no hay casilleros, entregan una bolsa para guardar pertenencias en la barra.',
      'Baños: funcionales pero sin papel, y con limpieza deficiente.',
      'Vestidores: pequeña área con chimenea y bancas en la entrada.',
      'Sandalias incluidas.',
      'Jacuzzi: funciona y la gente lo usa bastante; el detalle negativo es que muchos entran después de tener sexo sin ducharse, lo cual genera dudas de higiene.',
      'Área de cruising: en el piso inferior, con cuarto oscuro, pequeño laberinto y dos privados. Extremadamente frio.'
    ],
    pros: [
      'Sauna seco funcional.',
      'Duchas en buen estado con agua caliente.',
      'Incluye sandalias.',
      'Jacuzzi funcional.',
      'Barra con venta de bebidas.',
      'Lugar disponible para encuentros casuales.'
    ],
    cons: [
      'Área de cruising extremadamente fría e incómoda.',
      'Privados y laberinto deteriorados.',
      'Público reducido y poco llamativo.',
      'Ambiente húmedo con olor fuerte a humedad.',
      'Baños sucios y sin papel.',
      'Ventilación deficiente.',
      'Dudas de higiene en el uso del jacuzzi.'
    ],
    tips: [
      'Lleva siempre condones.',
      'Ve con expectativas medianas, no esperes demasiado del público.',
      'Si te animas al cruising, prepárate para el frío.',
      'El domingo suele ser el mejor día (seguido de viernes y sábado).',
      'Si usas el jacuzzi, dúchate antes y después: cuida tu salud y la de los demás.'
    ],
    suggestions: [
      'Mejorar el área de cruising (mínima calefacción o reubicarla arriba).',
      'Aumentar ventilación y combatir el olor a humedad.',
      'Mantener limpieza constante en baños y jacuzzi.',
      'Recuperar casilleros.',
      'Ofrecer más promociones o precios más bajos: la competencia cercana resulta más atractiva por apenas 5 Bs más.'
    ],
    activityLevels: {
      cruising: 3,
      social: 3,
      hygiene: 1
    },
    bestTimeToVisit: 'Domingos luego de las 7:30 pm',
    security: 'Es una zona un poco peligrosa de noche, tomar precauciones es necesario en El Alto. El teleférico queda cerca pero considera que los domingos cierra a las 9 pm, por lo que buscar movilidad si no vives cerca o conoces la zona puede ser un poco complicado o peligroso si es muy tarde. El lugar en sí es discreto, no es obvio para ingreso o salida.',
    finalComment: 'Sauna Spartacus ofrece lo básico: sauna seco, sauna vapor, duchas y un jacuzzi que muchos disfrutan. Sin embargo, tiene problemas importantes: higiene deficiente, área de cruising casi inutilizable por el frío y público poco diverso. Comparado con Sauna Punto G, pierde en ambiente y asistencia. Podría mejorar con inversión, limpieza y atención al detalle, pero mientras tanto funciona solo si vas con expectativas moderadas y en días clave.',
    healthReminder: 'Recomendación: protégete siempre, lleva condones y cuida tu salud sexual.',
    overallRating: 6,
    summary: {
      pro: 'Sauna Gay',
      con: 'Área de cruising helada e incómoda, higiene deficiente, baños sin papel, ambiente deteriorado y público poco atractivo.'
    }
  }

];
