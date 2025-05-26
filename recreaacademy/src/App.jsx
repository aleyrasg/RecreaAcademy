import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Inicio/Home';
import RutasFormativas from './pages/RutasFormativas/RutasFormativas';
import Innovaciones from './pages/Innovaciones/Innovaciones';
import Colaboraciones from './pages/Colaboraciones/Colaboraciones';
//import Eventos from './pages/Eventos/Eventos';
import MiPortafolio from './pages/Portafolio/MiPortafolio';
import Ranking from './pages/Ranking/Ranking';
//import NotFound from './pages/NotFound';
import LoginPage from './pages/Login/LoginPage';
import Logout from './pages/Logout';
import Congreso from './pages/Congreso/Congreso';
import Foro from './pages/ComunidadRecrea/Foro';


import PrivateRoute from './components/PrivateRoute';



function App() {
  // 🔍 Verificación del archivo .env
  console.log('🔍 VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('🔍 VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '[DETECTADA]' : '❌ NO DETECTADA');

  return (
    <Routes>
      <Route path="/RecreaAcademy/" element={(<Home />)} />
      <Route path="/RecreaAcademy/home" element={<Home />} />
      <Route path="/RecreaAcademy/login" element={<LoginPage />} />
      <Route path="/RecreaAcademy/logout" element={<Logout />} />
      <Route path="/RecreaAcademy/rutas-formativas" element={<RutasFormativas />} />
      <Route path="/RecreaAcademy/innovaciones" element={<Innovaciones />} />
      <Route path="/RecreaAcademy/colaboraciones" element={<Colaboraciones />} />
      {
      //<Route path="/RecreaAcademy/eventos" element={<Eventos />} />
      }
      <Route path="/RecreaAcademy/congreso" element={<Congreso />} />
      <Route path="/RecreaAcademy/foro" element={<Foro />} />
      <Route path="/RecreaAcademy/ranking" element={<PrivateRoute><Ranking /></PrivateRoute>} />
      <Route path="/RecreaAcademy/mi-portafolio" element={<PrivateRoute><MiPortafolio /></PrivateRoute>} />
    </Routes>
  );

}

export default App
