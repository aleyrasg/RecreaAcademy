// src/pages/Innovaciones/Innovaciones.jsx
import React, { useState } from 'react';
import InnovationCard from '../../components/InnovationCard';
import InnovationHeader from '../../components/InnovationHeader';
import InnovationTabs from '../../components/InnovationTabs';
import InnovationSection from '../../components/InnovationSection';

const cards = [
  { color: 'bg-yellow-500', title: 'Reto Pedagógico Estatal', date: '5 de agosto', icon: '💡' },
  { color: 'bg-orange-400', title: 'Proyectos de ciencias para educación básica', date: '2 de agosto', icon: '🔬' },
  { color: 'bg-red-500', title: 'Resuelve un problema de lógica', date: '1 de agosto', icon: '🧩' },
  { color: 'bg-yellow-400', title: 'Promueve el bienestar socioemocional', date: '30 de junio', icon: '🌞' },
];

const Innovaciones = () => {
  const [activeTab, setActiveTab] = useState('Destacados');

  return (
    <div className="p-6">
      <InnovationHeader />

      <div className="relative w-full mb-4">
        <input type="text" placeholder="Buscar formaciones..." className="border p-2 pl-4 pr-10 w-full rounded" />
        <span className="absolute right-4 top-2.5 text-gray-400">🔍</span>
      </div>

      <InnovationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'Destacados' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <InnovationCard key={idx} {...card} />
          ))}
        </div>
      )}

      <InnovationSection />
    </div>
  );
};

export default Innovaciones;
