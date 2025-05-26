import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

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
import Logout from './pages/Logout';
import Congreso from './pages/Congreso/Congreso';
import ComunidadRecrea from './pages/ComunidadRecrea/ComunidadRecrea';


import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter(
  [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/logout', element: <Logout /> },

    { path: '/rutas-formativas', element: <RutasFormativas /> },
    { path: '/innovaciones', element: <Innovaciones /> },
    { path: '/colaboraciones', element: <Colaboraciones /> },
    { path: '/eventos', element: <Eventos /> },
    {path : '/congreso', element: <Congreso />},
    {path : '/comunidad', element: <ComunidadRecrea />},
    // {path : '/mi-portafolio', element: <MiPortafolio />},
    // {path : '/ranking', element: <Ranking />},

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
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
