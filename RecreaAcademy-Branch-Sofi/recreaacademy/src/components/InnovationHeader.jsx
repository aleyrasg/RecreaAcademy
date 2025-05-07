// src/components/InnovationHeader.jsx
import React from 'react';

const InnovationHeader = () => {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold text-red-600 mb-2">Innovaciones</h1>
      <p className="mb-4 text-gray-600">Actualízate como educador. Encuentra rutas, microcursos y webinars para explorar nuevas tendencias y metodologías.</p>
      <div className="flex gap-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Explorar innovaciones</button>
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-100">Ver microcursos</button>
      </div>
    </div>
  );
};

export default InnovationHeader;
