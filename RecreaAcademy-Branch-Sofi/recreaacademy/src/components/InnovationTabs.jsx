// src/components/InnovationTabs.jsx
import React from 'react';

const InnovationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Todas', 'Destacados', 'Por nivel', 'Rutas', 'Webinars'];

  return (
    <div className="flex gap-4 text-sm mb-4 mt-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-2 py-1 rounded ${activeTab === tab ? 'text-red-600 font-bold' : 'text-gray-600 hover:text-red-400'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default InnovationTabs;