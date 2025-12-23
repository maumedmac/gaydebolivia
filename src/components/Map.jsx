// src/components/Map.jsx
import React, { useRef, useEffect, useState } from 'react'; // Import useState
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';

const Map = ({ lat, lon }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [error, setError] = useState(null); // State to hold error messages
  const apiKey = import.meta.env.VITE_MAPTILER_KEY;

  useEffect(() => {
    if (!apiKey) {
      setError("Falta la clave de API de Maptiler en el archivo .env.local (VITE_MAPTILER_KEY)");
      return;
    }
    if (map.current) return; // previene que el mapa se re-inicialice

    try {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${apiKey}`, // Usamos el estilo oscuro
        center: [lon, lat],
        zoom: 15
      });

      // Añadir controles de navegación
      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

      // Añadir un marcador en la posición
      new maplibregl.Marker({ color: "#FF0000" }) // Marcador rojo
        .setLngLat([lon, lat])
        .addTo(map.current);
    } catch (e) {
      console.error("Error al inicializar el mapa:", e);
      setError(`Error al inicializar el mapa: ${e.message}`);
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    }

  }, [lat, lon, apiKey]);

  // Si hay un error (ya sea por la API key o por la inicialización), lo mostramos
  if (error) {
    return <div className="map-error">{error}</div>;
  }

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
