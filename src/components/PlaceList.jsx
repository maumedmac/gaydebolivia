// src/components/PlaceList.jsx
import React from 'react';
// Importamos los datos directamente desde nuestro archivo local
import { placesData } from '../data/places';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList'; // Importar el nuevo componente ReviewList

const PlaceList = ({ user }) => {
  return (
    <div>
      <h2>Lugares Recomendados</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {placesData.map(place => (
          <div key={place.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{place.name}</h3>
            <img src={place.imagePath} alt={place.name} style={{ maxWidth: '300px' }} />
            <p>{place.description}</p>
            {/* Formulario para añadir una reseña a este lugar */}
            <ReviewForm placeId={place.id} />
            {/* Lista de reseñas para este lugar */}
            <ReviewList user={user} placeId={place.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
