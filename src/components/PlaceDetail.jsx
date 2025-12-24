// src/components/PlaceDetail.jsx
import React from 'react';
import './PlaceDetail.css'; // Crearemos este archivo para los estilos


import Map from './Map'; // Importar el nuevo componente de Mapa

const PlaceDetail = ({ placeData }) => { // Now accepts placeData as a prop
  const renderStars = (level) => {
    const fireCount = Math.round(level / 2);
    const darkCount = 5 - fireCount;
    return '🔥'.repeat(fireCount) + '⚫️'.repeat(Math.max(0, darkCount));
  };

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
        {placeData.ciudad && <span className="tag city-tag">{placeData.ciudad}</span>}
        {placeData.tipo && <span className="tag type-tag">{placeData.tipo}</span>}
        {(placeData.audiencia_tags || []).map(tag => <span key={tag} className="tag audience-tag">{tag}</span>)}
      </div>

      <div className="place-main-info">
        {placeData.address && <p><strong>📍 Dirección:</strong> {placeData.address}</p>}
        {placeData.audience && <p><strong>👥 Público:</strong> {placeData.audience}</p>}
      </div>

      {placeData.ubicacion && (
        <section className="place-section">
          <h2>🗺️ Ubicación</h2>
          <Map lat={placeData.ubicacion.lat} lon={placeData.ubicacion.lon} />
        </section>
      )}

      {placeData.hours && placeData.hours.length > 0 && (
        <section className="place-section">
          <h2>⏰ Horarios</h2>
          <ul>
            {placeData.hours.map((h, index) => <li key={index}><strong>{h.period}:</strong> {h.time} {h.days ? `(${h.days})` : ''}</li>)}
          </ul>
        </section>
      )}

      {placeData.themes && placeData.themes.length > 0 && (
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
      )}
      
      {(placeData.offerings || (placeData.amenities && placeData.amenities.length > 0)) && (
        <section className="place-section">
          <h2>🔥 ¿Qué ofrece?</h2>
          {placeData.offerings && <p>{placeData.offerings}</p>}
          <ul>
            {(placeData.amenities || []).map((a, index) => <li key={index}>{a}</li>)}
          </ul>
        </section>
      )}

      <div className="pros-cons-container">
        {placeData.pros && placeData.pros.length > 0 && (
          <section className="place-section pros">
            <h2>✅ Lo Bueno</h2>
            <ul>
              {placeData.pros.map((pro, index) => <li key={index}>{pro}</li>)}
            </ul>
          </section>
        )}

        {placeData.cons && placeData.cons.length > 0 && (
          <section className="place-section cons">
            <h2>⚠️ Lo Malo</h2>
            <ul>
              {placeData.cons.map((con, index) => <li key={index}>{con}</li>)}
            </ul>
          </section>
        )}
      </div>
      
      {placeData.tips && placeData.tips.length > 0 && (
        <section className="place-section">
          <h2>💡 Tips si decides ir</h2>
          <ul>
            {placeData.tips.map((tip, index) => <li key={index}>{tip}</li>)}
          </ul>
        </section>
      )}
      
      {placeData.activityLevels && (
        <section className="place-section">
          <h2>📊 Nivel de Actividad</h2>
          <div className="activity-levels">
            <div>Cruising Real: {renderStars(placeData.activityLevels.cruising)}</div>
            <div>Ambiente Social: {renderStars(placeData.activityLevels.social)}</div>
            <div>Higiene: {renderStars(placeData.activityLevels.hygiene)}</div>
          </div>
        </section>
      )}
      
      {placeData.bestTimeToVisit && (
        <section className="place-section">
          <h2>📅 Mejor Día / Hora para Ir</h2>
          <p>{placeData.bestTimeToVisit}</p>
        </section>
      )}
      
      {placeData.security && (
        <section className="place-section">
          <h2>🚨 Seguridad y Discreción</h2>
          <p>{placeData.security}</p>
        </section>
      )}
      
      {placeData.finalComment && (
        <section className="place-section comment-section">
          <h2>💬 Comentario Final</h2>
          <p>{placeData.finalComment}</p>
          {placeData.summary && (
            <div className="final-summary">
                <p className="summary-pro"><strong>✅ A favor:</strong> {placeData.summary?.pro}</p>
                <p className="summary-con"><strong>❌ En contra:</strong> {placeData.summary?.con}</p>
            </div>
          )}
        </section>
      )}

      {placeData.healthReminder && (
        <footer className="place-footer">
          <p>🔴 {placeData.healthReminder}</p>
        </footer>
      )}
    </div>
  );
};


export default PlaceDetail;
