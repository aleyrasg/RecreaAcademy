
import React from 'react';
import { FaHome, FaLightbulb, FaUsers, FaStar, FaCalendarAlt, FaFolderOpen } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2><span className="recrea">Recrea</span> <span className="academy">Academy</span><span className="year">2025</span></h2>
      </div>

      <nav className="menu">
        <ul>
          <li><FaHome /> Inicio</li>
          <li><FaFolderOpen /> Rutas Formativas</li>
          <li className="active"><FaLightbulb /> Innovaciones</li>
          <li><FaUsers /> Colaboraciones</li>
          <li><FaStar /> Ranking</li>
          <li><FaCalendarAlt /> Eventos</li>
          <li><FaFolderOpen /> Mi Portafolio</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;