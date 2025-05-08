// src/pages/Ranking/Ranking.jsx
import React from 'react';
import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import { FaSearch, FaFilter, FaRegCalendarAlt } from 'react-icons/fa';

const miembros = [
  { nombre: 'Luis Castañeda', porcentaje: 78 },
  { nombre: 'Sofia Castellanos', porcentaje: 82, destacado: true },
  { nombre: 'Alejandra Sánchez', porcentaje: 69 },
];

const Ranking = () => {
  return (
    <LayoutSubmenu>
      <div className="p-8 text-gray-800 w-full">
        <div className="flex justify-between items-start flex-wrap mb-8">
          {/* TITULOS */}
          <div>
            <h1 className="text-xl font-semibold">Brújula Creativa</h1>
            <h2 className="text-4xl font-bold text-red-500">Raking</h2>
          </div>

          {/* AVATARES */}
          <div className="text-right">
            <p className="text-sm font-medium">Integrantes del equipo (26)</p>
            <div className="flex justify-end mt-2 space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-300 rounded-full" />
              ))}
              <div className="w-8 h-8 bg-yellow-400 rounded-full text-xs font-bold text-white flex items-center justify-center">
                20+
              </div>
            </div>
          </div>
        </div>

        {/* INDICADORES */}
        <div className="flex justify-end space-x-10 mb-10">
          <div className="text-right">
            <p className="text-sm text-pink-600 font-semibold">Proyectos Activos</p>
            <p className="text-2xl font-bold text-red-600">16</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-orange-400 font-semibold">Próximos Proyectos</p>
            <p className="text-2xl font-bold text-orange-500">08</p>
          </div>
        </div>

        {/* FILTROS + TÍTULO */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Desempeño del equipo</h3>
          <div className="flex space-x-5 text-gray-500">
            <FaSearch className="cursor-pointer" />
            <FaFilter className="cursor-pointer" />
            <FaRegCalendarAlt className="cursor-pointer" />
          </div>
        </div>

        {/* TARJETAS DE MIEMBROS */}
        <div className="space-y-4">
          {miembros.map((m, i) => (
            <div
              key={i}
              className={`flex justify-between items-center p-4 rounded-full border shadow-sm ${
                m.destacado ? 'border-orange-400 bg-orange-50' : 'border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <span className={`font-semibold ${m.destacado ? 'text-black' : 'text-gray-700'}`}>
                  {m.nombre}
                </span>
              </div>
              <span className="font-bold text-xl">{m.porcentaje}%</span>
            </div>
          ))}
        </div>
      </div>
    </LayoutSubmenu>
  );
};

export default Ranking;