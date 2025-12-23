// src/components/ReviewForm.jsx
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';

const ReviewForm = ({ placeId }) => {
  const [reviewText, setReviewText] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const user = auth.currentUser;
    if (!user) {
      setError('Debes iniciar sesión para dejar una reseña.');
      setLoading(false);
      return;
    }
    if (!reviewText.trim()) {
        setError('La reseña no puede estar vacía.');
        setLoading(false);
        return;
    }

    try {
      await addDoc(collection(db, 'reviews'), {
        placeId: placeId,
        userId: user.uid,
        text: reviewText,
        createdAt: serverTimestamp()
      });
      setReviewText(''); // Limpiar el formulario después de enviar
      alert('¡Gracias por tu reseña!');
    } catch (err) {
      console.error('Error al enviar la reseña:', err);
      setError('Hubo un error al enviar tu reseña.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h4>Deja tu opinión</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Escribe tu opinión aquí..."
          rows="4"
          cols="50"
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Reseña'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ReviewForm;
