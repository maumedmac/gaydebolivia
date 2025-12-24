// src/components/AppBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './AppBar.css';

const AppBar = () => {
  const navigate = useNavigate(); // Obtener la función navigate
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Cierra el menú después de la navegación
  };

  return (
    <>
      <div className="app-bar">
        <button className="app-bar-back-button" onClick={() => navigate(-1)}>
          ← Atrás
        </button>
        <div className="app-bar-title">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Gayde</a>
        </div>

        {/* --- Menú para Desktop --- */}
        <div className="app-bar-buttons">
          <button className="app-bar-button" onClick={() => navigate('/')}>PE</button>
          <button className="app-bar-button" onClick={() => navigate('/zc')}>ZC</button>
          <button className="app-bar-button" onClick={() => navigate('/ho')}>HO</button>
          <button className="app-bar-button" onClick={() => navigate('/dtk')}>DTK</button>
        </div>

        {/* --- Botón de Menú para Móvil --- */}
        <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>

      {/* --- Menú Desplegable para Móvil --- */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a onClick={() => handleMenuClick('/')}>Puntos de Encuentro</a>
          <a onClick={() => handleMenuClick('/zc')}>Zona Cruising</a>
          <a onClick={() => handleMenuClick('/ho')}>Hospedajes</a>
          <a onClick={() => handleMenuClick('/dtk')}>Discotecas Gay</a>
        </div>
      )}
    </>
  );
};

export default AppBar;
