// src/components/ChatRoom.jsx
import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebaseConfig';
import { collection, query, orderBy, onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore'; // Importar Firestore funciones
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [user, setUser] = useState(null); // Para almacenar el usuario autenticado
  const messagesEndRef = useRef(null); // Para scroll automático

  // Efecto para obtener mensajes en tiempo real
  useEffect(() => {
    // Escuchar cambios en el estado de autenticación
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    const messagesCollectionRef = collection(db, 'messages');
    const q = query(messagesCollectionRef, orderBy('timestamp', 'asc')); // Ordenar por timestamp

    const unsubscribeFirestore = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
      setLoadingMessages(false);
    }, (error) => {
      console.error("Error fetching messages: ", error);
      setLoadingMessages(false);
    });

    // Limpiar suscripciones al desmontar el componente
    return () => {
      unsubscribeAuth();
      unsubscribeFirestore();
    };
  }, []);

  // Efecto para hacer scroll al final de los mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !user) return; // No enviar si el mensaje está vacío o no hay usuario

    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        timestamp: serverTimestamp(), // Marca de tiempo del servidor
        senderId: user.uid,
        senderName: user.displayName || 'Anónimo', // Usar displayName o 'Anónimo'
      });
      setNewMessage('');
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="chat-room-container">
      <div className="chat-messages">
        {loadingMessages ? (
          <p>Cargando mensajes...</p>
        ) : messages.length === 0 ? (
          <p>No hay mensajes todavía. ¡Sé el primero en enviar uno!</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.senderId === user?.uid ? 'user' : 'other'}`}
            >
              <strong>{msg.senderName}:</strong> {msg.text}
              <span className="timestamp">
                {msg.timestamp?.toDate().toLocaleTimeString()}
              </span>
            </div>
          ))
        )}
        <div ref={messagesEndRef} /> {/* Para el scroll automático */}
      </div>
      <form className="chat-input-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={user ? "Escribe un mensaje..." : "Inicia sesión para chatear..."}
          disabled={!user}
        />
        <button type="submit" disabled={!user}>Enviar</button>
      </form>
    </div>
  );
};

export default ChatRoom;
