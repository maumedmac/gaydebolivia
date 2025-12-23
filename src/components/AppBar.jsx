// src/components/AppBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './AppBar.css';

const AppBar = () => {
  const navigate = useNavigate(); // Obtener la función navigate

  return (
    <div className="app-bar">
      <button className="app-bar-back-button" onClick={() => navigate(-1)}>
        ← Atrás
      </button>
      <div className="app-bar-title">
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Gayde</a>
      </div>
      <div className="app-bar-buttons">
        <button className="app-bar-button">PE</button>
        <button className="app-bar-button">ZC</button>
        <button className="app-bar-button">HO</button>
        <button className="app-bar-button" onClick={() => navigate('/chat')}>CHAT</button>
      </div>
    </div>
  );
};

export default AppBar;
