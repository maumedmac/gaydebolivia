// src/components/ReviewList.jsx
import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ReviewList = ({ user, placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si no hay usuario o placeId, no hacemos nada.
    if (!user || !placeId) {
      setLoading(false);
      return;
    }
    
    setLoading(true); // Reinicia el estado de carga
    setError(null);

    const reviewsQuery = query(
      collection(db, 'reviews'),
      where('placeId', '==', placeId),
      orderBy('createdAt', 'desc') // Ordenar por fecha de creación, las más nuevas primero
    );

    const unsubscribe = onSnapshot(reviewsQuery, (snapshot) => {
      const fetchedReviews = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(fetchedReviews);
      setLoading(false);
    }, (err) => {
      console.error('Error al cargar las reseñas:', err);
      setError('No se pudieron cargar las reseñas.');
      setLoading(false);
    });

    return () => unsubscribe(); // Limpiar el listener al desmontar
  }, [user, placeId]); // El useEffect ahora depende del usuario y del lugar

  if (loading) {
    return <p>Cargando reseñas...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div style={{ marginTop: '15px' }}>
      <h4>Reseñas:</h4>
      {reviews.length === 0 ? (
        <p>No hay reseñas para este lugar aún.</p>
      ) : (
        reviews.map(review => (
          <div key={review.id} style={{ border: '1px solid #eee', padding: '8px', marginBottom: '8px' }}>
            <p><strong>{review.userId}</strong>: {review.text}</p> {/* En una app real, mostrarías el nombre del usuario */}
            <small>{review.createdAt?.toDate().toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
