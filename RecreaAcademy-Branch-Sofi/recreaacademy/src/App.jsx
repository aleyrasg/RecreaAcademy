// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Inicio from './pages/Inicio/Home';
import Innovaciones from './pages/Innovaciones/Innovaciones';
import Colaboraciones from './pages/Colaboraciones/Colaboraciones';
import Ranking from './pages/Ranking/Ranking';
import Eventos from './pages/Eventos/Eventos';
import MiPortafolio from './pages/Portafolio/MiPortafolio';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/innovaciones" element={<Innovaciones />} />
            <Route path="/colaboraciones" element={<Colaboraciones />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/mi-portafolio" element={<MiPortafolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;