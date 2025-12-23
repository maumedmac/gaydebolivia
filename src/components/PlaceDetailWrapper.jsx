// src/components/PlaceDetailWrapper.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { detailedReviews } from '../data/detailedReviews';
import PlaceDetail from './PlaceDetail';

const PlaceDetailWrapper = () => {
  const { reviewId } = useParams(); // Obtiene el 'reviewId' de la URL, ej: "satiros"
  const placeData = detailedReviews.find(review => review.id === reviewId);

  return <PlaceDetail placeData={placeData} />;
};

export default PlaceDetailWrapper;
