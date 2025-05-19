import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// 🔍 Verificación del archivo .env
console.log('🔍 VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('🔍 VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '[DETECTADA]' : '❌ NO DETECTADA');

import Home from './pages/Inicio/Home';
import RutasFormativas from './pages/RutasFormativas/RutasFormativas';
import Innovaciones from './pages/Innovaciones/Innovaciones';
import Colaboraciones from './pages/Colaboraciones/Colaboraciones';
import Eventos from './pages/Eventos/Eventos';
import MiPortafolio from './pages/Portafolio/MiPortafolio';
import Ranking from './pages/Ranking/Ranking';
import NotFound from './pages/NotFound';
import LoginPage from './pages/Login/LoginPage';

import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter(
  [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/login', element: <LoginPage /> },

    { path: '/rutas-formativas', element: <RutasFormativas /> },
    { path: '/innovaciones', element: <Innovaciones /> },
    { path: '/colaboraciones', element: <Colaboraciones /> },
    { path: '/eventos', element: <Eventos /> },

    {
      path: '/mi-portafolio',
      element: (
        <PrivateRoute>
          <MiPortafolio />
        </PrivateRoute>
      ),
    },
    {
      path: '/ranking',
      element: (
        <PrivateRoute>
          <Ranking />
        </PrivateRoute>
      ),
    },

    { path: '*', element: <NotFound /> },
  ],
  {
    basename: '/RecreaAcademy', // ← para GitHub Pages
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
