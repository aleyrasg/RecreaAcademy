import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Inicio/Home';
import RutasFormativas from './pages/RutasFormativas/RutasFormativas';
import Innovaciones from './pages/Innovaciones/Innovaciones';
import Colaboraciones from './pages/Colaboraciones/Colaboraciones';
import Eventos from './pages/Eventos/Eventos';
import MiPortafolio from './pages/Portafolio/MiPortafolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  // {
    
  //   path: '/',
  //   element: <Home />,
  // },
  {
    path: '/rutas-formativas',
    element: <RutasFormativas />,
  },
  {
    path: '/innovaciones',
    element: <Innovaciones />,
  },
  {
    path: '/colaboraciones',
    element: <Colaboraciones />,
  },
  {
    path: '/eventos',
    element: <Eventos />,
  },
  {
    path: '/mi-portafolio',
    element: <MiPortafolio />,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);