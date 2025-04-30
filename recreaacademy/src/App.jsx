// import { useState } from 'react'
import './App.css'
import React from 'react';
import Sidebar from './components/sidebar';
import { FaHome, FaUser, FaBook } from 'react-icons/fa';


function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '20px', flex: 1 }}>
        {/* Aquí iría el contenido principal */}
        <h1>Bienvenido a Recrea Academy</h1>
      </main>
    </div>
  );
}

export default App;