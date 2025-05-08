// src/pages/Eventos/Eventos.jsx
import React from 'react';
import './Eventos.css';
import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import { motion } from 'framer-motion';
import Carlos from '../../assets/carlos-anaya.png';
import Elisa from '../../assets/elisa-guerra.png';
import Manuel from '../../assets/manuel-obrien.png';

const Eventos = () => {
  return (
    <LayoutSubmenu>
      <div className="eventos-container p-8 text-gray-800 w-full">
        {/* Encabezado de eventos y calendario */}
        <div className="md:flex md:justify-between md:items-start mb-10">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-red-600 mb-2">Próximos eventos</h1>
            <h2 className="text-lg font-semibold mb-4">Eventos Institucionales</h2>
            <ul className="space-y-2 border-t border-gray-200 pt-2">
              <li>
                <span className="text-red-500 font-semibold">9 de mayo</span> — <strong>Encuentro de Liderazgo Educativo</strong>
              </li>
              <li>
                <span className="text-red-500 font-semibold">11 de junio</span> — <strong>Asamblea de Academia</strong>
              </li>
              <li>
                <span className="text-red-500 font-semibold">22 de agosto</span> — <strong>Congreso Internacional</strong>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 text-center">
            <h3 className="text-orange-500 text-lg font-semibold">Abril 2024</h3>
            <p className="text-purple-400 text-sm mb-2">📅 Dias_Calendario</p>
            <div className="grid grid-cols-7 gap-2 text-sm text-center">
              {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d, i) => (
                <span key={i} className="font-bold">{d}</span>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <span
                  key={i}
                  className={`py-1 rounded-full ${
                    i + 1 === 15 ? 'bg-orange-400 text-white' : ''
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de conferencistas */}
        <h2 className="text-2xl font-bold text-red-600 mb-4">Conferencistas</h2>

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
        >
          {/* Tarjeta 1 */}
          <div className="snap-center min-w-[280px] max-w-sm p-4 bg-red-500 text-white rounded-xl shadow-md">
            <div className="h-40 overflow-hidden rounded-xl mb-4">
              <img src={Carlos} alt="Carlos Anaya" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-lg">Carlos Anaya</h3>
            <p className="text-sm">
              Gerente para el Sector Público en Google for Education en México, Centroamérica y el Caribe.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="snap-center min-w-[280px] max-w-sm p-4 bg-orange-400 text-white rounded-xl shadow-md">
            <div className="h-40 overflow-hidden rounded-xl mb-4">
              <img src={Elisa} alt="Elisa Guerra" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-lg">Elisa Guerra</h3>
            <p className="text-sm">Maestra, autora, conferencista</p>
          </div>

          {/* Tarjeta 3 */}
          <div className="snap-center min-w-[280px] max-w-sm p-4 bg-red-500 text-white rounded-xl shadow-md">
            <div className="h-40 overflow-hidden rounded-xl mb-4">
              <img src={Manuel} alt="Manuel O’Brien Hughes" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-lg">Manuel O’Brien Hughes</h3>
            <p className="text-sm">
              Líder de Asuntos Gubernamentales y Regulatorios IBM México, Chile y Costa Rica.
            </p>
          </div>
        </motion.div>
      </div>
    </LayoutSubmenu>
  );
};

export default Eventos;