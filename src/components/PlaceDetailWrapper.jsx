// src/components/PlaceDetailWrapper.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { detailedReviews } from '../data/detailedReviews';
import { cruisingPlaces } from '../data/cruisingPlaces'; // Importar los nuevos datos
import { hospedajes } from '../data/hospedajes';
import { dtkPlaces } from '../data/dtkPlaces'; // Importar los nuevos datos DTK
import PlaceDetail from './PlaceDetail';

const PlaceDetailWrapper = () => {
  const { reviewId } = useParams(); // Obtiene el 'reviewId' de la URL, ej: "satiros"

  // Combinar todos los arrays de datos en uno solo
  const allPlaces = [...detailedReviews, ...cruisingPlaces, ...hospedajes, ...dtkPlaces];

  // Buscar el lugar en el array combinado
  const placeData = allPlaces.find(review => review.id === reviewId);

  return <PlaceDetail placeData={placeData} />;
};

export default PlaceDetailWrapper;
