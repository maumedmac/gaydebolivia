// src/components/DTKScreen.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dtkPlaces as placesData } from '../data/dtkPlaces'; // Cambiado a dtkPlaces
import { calculateDistance } from '../utils/geolocation';
import './HomePage.css'; // Reutilizamos el CSS de HomePage

const DTKScreen = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sortPlacesByDistance = (userLocation) => {
      const placesWithDistance = placesData.map(place => {
        const distance = calculateDistance(userLocation, place.ubicacion);
        return { ...place, distance };
      });

      placesWithDistance.sort((a, b) => a.distance - b.distance);
      setPlaces(placesWithDistance);
    };

    if (!navigator.geolocation) {
      setError('La geolocalización no es soportada por tu navegador.');
      setPlaces(placesData); // Mostrar la lista sin ordenar
      setLoading(false);
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userLocation = { lat: latitude, lon: longitude };
        sortPlacesByDistance(userLocation);
        setLoading(false);
      },
      (err) => {
        setError(`Error al obtener la ubicación: ${err.message}. Mostrando lista sin ordenar.`);
        setPlaces(placesData); // En caso de error, mostrar la lista sin ordenar
        setLoading(false);
      }
    );
  }, []);

  // Helper function to render stars based on a 1-10 rating
  const renderStars = (ratingOutOf10) => {
    const starCount = ratingOutOf10 / 2; // Convert to a 5-star scale
    const fullStars = Math.floor(starCount);
    const hasHalfStar = (starCount - fullStars) >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span className="star-rating">
        {'⭐'.repeat(fullStars)}
        {hasHalfStar && '✨'}
        {'☆'.repeat(emptyStars)}
      </span>
    );
  };

  return (
    <div className="home-page">
      <h1>Discreto (DTK) 🤫</h1>
      <p className="home-subtitle">Explora lugares para encuentros discretos y DTK.</p>
      
      {loading && <p>Obteniendo tu ubicación para ordenar los lugares...</p>}
      {error && <p style={{ color: 'orange' }}>{error}</p>}

      <div className="review-list">
        {places.map(review => (
          <Link to={`/review/${review.id}`} key={review.id} className="review-card-link">
            <div className="review-card">
              <img 
                src={review.imagePath || `/images/places/${review.id}-placeholder.jpg`} 
                alt={review.name} 
                className="card-image"
              />
              <div className="card-content">
                <h3>{review.name}</h3>
                <div className="card-tags">
                  <span className="tag">{review.ciudad}</span>
                  <span className="tag">{review.tipo}</span>
                  {review.distance !== undefined && (
                    <span className="tag distance-tag">
                      📍{review.distance.toFixed(1)} km
                    </span>
                  )}
                </div>
                <div className="card-rating">{review.overallRating}/10</div>
                <p className="card-summary-pro">✅ {review.summary.pro}</p>
                <p className="card-rating-stars">{renderStars(review.overallRating)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DTKScreen;
