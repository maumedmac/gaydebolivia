// src/components/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Importamos la instancia de auth
import './AuthForms.css'; // Importamos los estilos comunes

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Limpia errores previos
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario inició sesión:', userCredential.user);
      alert('¡Inicio de sesión exitoso!'); // Notificación simple
      // Aquí podrías redirigir al usuario o actualizar el estado global de la app
    } catch (err) {
      console.error('Error en el inicio de sesión:', err.message);
      setError(err.message); // Muestra el error al usuario
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
