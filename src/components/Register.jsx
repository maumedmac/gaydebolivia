// src/components/Register.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Importamos la instancia de auth
import './AuthForms.css'; // Importamos los estilos comunes

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Limpia errores previos
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado:', userCredential.user);
      // Aquí podrías redirigir al usuario o guardar info adicional en Firestore
      alert('Registro exitoso!'); // Notificación simple
    } catch (err) {
      console.error('Error en el registro:', err.message);
      setError(err.message); // Muestra el error al usuario
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro de Usuario</h2>
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
          placeholder="Contraseña (mín. 6 caracteres)"
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
