import React from 'react';

import { FiVolume2, FiSpeaker, FiMessageCircle, FiClipboard } from 'react-icons/fi';
import Layout from '../../components/Layout/Layout';

const conversaciones = [
  {
    icon: '🎉',
    titulo: '¡Bienvenidas y bienvenidos a Comunidad Recrea!',
    autor: 'Sofía Castellanos',
    hace: 'hace 2 hrs',
    respuestas: 32,
  },
  {
    icon: '☕',
    titulo: '¿Qué te inspira a seguir enseñando?',
    autor: 'Alejandra Sánchez',
    hace: 'hace 2 días',
    respuestas: 30,
  },
  {
    icon: '🛠️',
    titulo: 'Herramientas digitales que realmente te han funcionado',
    autor: 'Luis Castañeda',
    hace: 'hace 2 días',
    respuestas: 22,
  },
];

export default function ComunidadRecrea() {
  return (
    <Layout>

    </Layout>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <></>
  );
}
