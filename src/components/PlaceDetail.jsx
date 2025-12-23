// src/components/PlaceDetail.jsx
import React from 'react';
import './PlaceDetail.css'; // Crearemos este archivo para los estilos


import Map from './Map'; // Importar el nuevo componente de Mapa

const PlaceDetail = ({ placeData }) => { // Now accepts placeData as a prop
  const renderStars = (level) => '🔥'.repeat(level) + '⚫️'.repeat(5 - level);

  if (!placeData) {
    return <div className="place-detail">No se encontró información para este lugar.</div>;
  }

  return (
    <div className="place-detail">
      <header className="place-header">
        <h1>{placeData.name}</h1>
        <div className="place-rating">{placeData.overallRating}/10</div>
      </header>

      {/* Aquí podrías poner un carrusel de imágenes */}
      <img src={placeData.imagePath || "/images/places/default-placeholder.jpg"} alt={placeData.name} className="place-main-image" />
      
      <div className="place-tags">
        <span className="tag city-tag">{placeData.ciudad}</span>
        <span className="tag type-tag">{placeData.tipo}</span>
        {placeData.audiencia_tags.map(tag => <span key={tag} className="tag audience-tag">{tag}</span>)}
      </div>

      <div className="place-main-info">
        <p><strong>📍 Dirección:</strong> {placeData.address}</p>
        <p><strong>👥 Público:</strong> {placeData.audience}</p>
      </div>

      <section className="place-section">
        <h2>🗺️ Ubicación</h2>
        <Map lat={placeData.ubicacion.lat} lon={placeData.ubicacion.lon} />
      </section>

      <section className="place-section">
        <h2>⏰ Horarios</h2>
        <ul>
          {placeData.hours.map((h, index) => <li key={index}><strong>{h.period}:</strong> {h.time} ({h.days})</li>)}
        </ul>
      </section>

      <section className="place-section">
        <h2>🎭 Temáticas y Precios</h2>
        <table>
          <tbody>
            {placeData.themes.map((t, index) => (
              <tr key={index}>
                <td>{t.day}</td>
                <td>{t.theme}</td>
                <td>{t.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      <section className="place-section">
        <h2>🔥 ¿Qué ofrece?</h2>
        <p>{placeData.offerings}</p>
        <ul>
          {placeData.amenities.map((a, index) => <li key={index}>{a}</li>)}
        </ul>
      </section>

      <div className="pros-cons-container">
        <section className="place-section pros">
          <h2>✅ Lo Bueno</h2>
          <ul>
            {placeData.pros.map((pro, index) => <li key={index}>{pro}</li>)}
          </ul>
        </section>

        <section className="place-section cons">
          <h2>⚠️ Lo Malo</h2>
          <ul>
            {placeData.cons.map((con, index) => <li key={index}>{con}</li>)}
          </ul>
        </section>
      </div>
      
      <section className="place-section">
        <h2>💡 Tips si decides ir</h2>
        <ul>
          {placeData.tips.map((tip, index) => <li key={index}>{tip}</li>)}
        </ul>
      </section>
      
      <section className="place-section">
        <h2>📊 Nivel de Actividad</h2>
        <div className="activity-levels">
          <div>Cruising Real: {renderStars(placeData.activityLevels.cruising)}</div>
          <div>Ambiente Social: {renderStars(placeData.activityLevels.social)}</div>
          <div>Higiene: {renderStars(placeData.activityLevels.hygiene)}</div>
        </div>
      </section>
      
      <section className="place-section">
        <h2>📅 Mejor Día / Hora para Ir</h2>
        <p>{placeData.bestTimeToVisit}</p>
      </section>
      
      <section className="place-section">
        <h2>🚨 Seguridad y Discreción</h2>
        <p>{placeData.security}</p>
      </section>
      
      <section className="place-section comment-section">
        <h2>💬 Comentario Final</h2>
        <p>{placeData.finalComment}</p>
        <div className="final-summary">
            <p className="summary-pro"><strong>✅ A favor:</strong> {placeData.summary.pro}</p>
            <p className="summary-con"><strong>❌ En contra:</strong> {placeData.summary.con}</p>
        </div>
      </section>

      <footer className="place-footer">
        <p>🔴 {placeData.healthReminder}</p>
      </footer>
    </div>
  );
};


export default PlaceDetail;
