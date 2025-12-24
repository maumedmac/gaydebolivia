// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar'; // Importar AppBar
import HomePage from './components/HomePage';
import PlaceDetailWrapper from './components/PlaceDetailWrapper';
import ChatRoom from './components/ChatRoom'; // Importar ChatRoom
import ZCScreen from './components/ZCScreen'; // Importar ZCScreen
import HOScreen from './components/HOScreen'; // Importar HOScreen
import DTKScreen from './components/DTKScreen'; // Importar DTKScreen
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
            <Route path="/zc" element={<ZCScreen />} /> {/* Nueva ruta para Zona Cruising */}
            <Route path="/ho" element={<HOScreen />} /> {/* Nueva ruta para Hospedajes */}
            <Route path="/dtk" element={<DTKScreen />} /> {/* Nueva ruta para DTK */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
