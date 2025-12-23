// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar'; // Importar AppBar
import HomePage from './components/HomePage';
import PlaceDetailWrapper from './components/PlaceDetailWrapper';
import ChatRoom from './components/ChatRoom'; // Importar ChatRoom
import './App.css'; // Estilos generales

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar /> {/* Añadir AppBar aquí */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/review/:reviewId" element={<PlaceDetailWrapper />} />
            <Route path="/chat" element={<ChatRoom />} /> {/* Nueva ruta para el chat */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
