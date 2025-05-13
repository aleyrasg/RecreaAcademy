import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Inicio/Home';
import RutasFormativas from './pages/RutasFormativas/RutasFormativas';
import Innovaciones from './pages/Innovaciones/Innovaciones';
import Colaboraciones from './pages/Colaboraciones/Colaboraciones';
import Eventos from './pages/Eventos/Eventos';
import MiPortafolio from './pages/Portafolio/MiPortafolio';
import Ranking from './pages/Ranking/Ranking';
import NotFound from './pages/NotFound'; // ← Debes crear este componente

const router = createBrowserRouter(
  [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/rutas-formativas', element: <RutasFormativas /> },
    { path: '/innovaciones', element: <Innovaciones /> },
    { path: '/colaboraciones', element: <Colaboraciones /> },
    { path: '/eventos', element: <Eventos /> },
    { path: '/mi-portafolio', element: <MiPortafolio /> },
    { path: '/ranking', element: <Ranking /> },
    { path: '*', element: <NotFound /> }, // ← Ruta comodín para 404
  ],
  {
    basename: '/RecreaAcademy', // ← importante para GitHub Pages
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
