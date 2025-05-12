import React from 'react';
import './ArcoRecrea.css';

const iconos = ['school', 'emoji_events', 'volunteer_activism', 'text_fields', 'rocket_launch'];

const ArcoRecrea = () => {
  return (
    <div className="arco-container">
      <svg viewBox="0 0 700 350" className="arco-svg">
        <defs>
          <linearGradient id="gradienteArco" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="25%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#84cc16" />
          </linearGradient>
        </defs>
        <path
          d="M100,350 A250,250 0 0,1 600,350"
          stroke="url(#gradienteArco)"
          strokeWidth="18"
          fill="none"
        />
      </svg>

      <div className="iconos-rotatorios">
        {iconos.map((icon, i) => (
          <div key={i} className={`icono icono-${i}`}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        ))}
      </div>

      <div className="texto-centro-arco">
        <h1>Recrea <span>Academy</span></h1>
        <p className="anio">2025</p>
      </div>
    </div>
  );
};

export default ArcoRecrea;