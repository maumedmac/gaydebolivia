export const hospedajes = [
  {
    id: 'alinares',
    name: 'Alojamiento Linares',
    ciudad: 'La Paz',
    tipo: 'Hospedaje',
    audiencia_tags: ['Gay Friendly', 'Turistas'],
    ubicacion: { lat: -16.499452, lon: -68.137614},
    address: 'Calle Linares, estre Rodriguez y Tarija',
    hours: [
      { period: 'Check-in', time: 'Desde las 8:00' },
      { period: 'Check-out', time: 'Hasta las 21:00' },
    ],
    audience: 'parejas heteros y homosexuales',
    pros: [
      'Las habitaciones son comodas.',
      'Ambiente muy amigable y respetuoso.',
      'Ubicación céntrica, cerca de todo.',
      'Limpio y económico.'
    ],
    cons: [
      'Tiene Wifi lento',
      'Puede haber ruidos y gemidos'
    ],
    tips: [
      'Feriados y fines de semana el Lleno.',
      'Pueden entrar visitas sin coste extra.',
    ],
    activityLevels: {
      cruising: 0,
      social: 6,
      hygiene: 8
    },
    bestTimeToVisit: 'Todo el año',
    security: 'Zona segura y falta iluminacion.',
    finalComment: 'Simple a 30Bs y con baño a 50Bs, puedes recibir visitas de afuera o de otras piezas sin costo adicional.',
    healthReminder: '',
    overallRating: 8,
    summary: {
      pro: 'Ambiente amigable y céntrico',
      con: 'Habitaciones mucha gente'
    }
  },
  {
  id: 'abarriochino',
    name: 'Alojamiento Barrio Chino',
    ciudad: 'El Alto',
    tipo: 'Hospedaje',
    audiencia_tags: ['Gay Friendly', 'Hetero'],
    ubicacion: { lat: -16.508966, lon: -68.160494},
    address: 'Demetrio Moscoso entre calles 3 y 4',
    hours: [
      { period: 'Check-in', time: 'Desde las 8:00' },
      { period: 'Check-out', time: 'Hasta las 21:00' },
    ],
    audience: 'parejas heteros y homosexuales',
    pros: [
      'Ambiente amigable y respetuoso.',
      'Ubicación céntrica, cerca de todo.',
      'Económico.'
    ],
    cons: [
      'Las habitaciones pueden ser muy pequeñas.',
      'Ambiente improvisado',
      'Peligroso muy tarde.'
    ],
    tips: [
      'Feriados y fines de semana el Lleno.',
      'Puedes recibir visitas pero con pago',
    ],
    activityLevels: {
      cruising: 0,
      social: 6,
      hygiene: 8
    },
    bestTimeToVisit: 'Todo el año',
    security: 'Zona segura y bien iluminada.',
    finalComment: '15Bs la pieza simple y pago adicional por visitas externas.',
    healthReminder: '',
    overallRating: 8,
    summary: {
      pro: 'Ambiente amigable y céntrico',
      con: 'Habitaciones pequeñas'
    }
  }
];
