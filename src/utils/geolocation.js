// src/utils/geolocation.js

/**
 * Convierte grados a radianes.
 * @param {number} deg - Grados a convertir.
 * @returns {number} - El valor en radianes.
 */
function toRad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * Calcula la distancia entre dos puntos geográficos usando la fórmula de Haversine.
 * @param {object} pos1 - Objeto con la latitud y longitud del primer punto.
 * @param {number} pos1.lat - Latitud del primer punto.
 * @param {number} pos1.lon - Longitud del primer punto.
 * @param {object} pos2 - Objeto con la latitud y longitud del segundo punto.
 * @param {number} pos2.lat - Latitud del segundo punto.
 * @param {number} pos2.lon - Longitud del segundo punto.
 * @returns {number} - La distancia en kilómetros.
 */
export function calculateDistance(pos1, pos2) {
  const R = 6371; // Radio de la Tierra en kilómetros
  const dLat = toRad(pos2.lat - pos1.lat);
  const dLon = toRad(pos2.lon - pos1.lon);
  const lat1 = toRad(pos1.lat);
  const lat2 = toRad(pos2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
}
