import React from 'react';
import './ArcoRecrea.css';

const ArcoRecrea = () => {
  return (
    <div className="arco-container">
      <svg viewBox="0 0 200 100" className="arco-svg">
        <defs>
          <linearGradient id="gradienteArco" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e11d48" />
            <stop offset="25%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="75%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path
          d="M10,100 A90,90 0 0,1 190,100"
          stroke="url(#gradienteArco)"
          strokeWidth="10"
          fill="none"
          className="arco-path"
        />
        {/* Íconos alrededor del arco */}
        <circle cx="40" cy="80" r="4" fill="black" />
        <circle cx="80" cy="40" r="4" fill="black" />
        <circle cx="120" cy="40" r="4" fill="black" />
        <circle cx="160" cy="80" r="4" fill="black" />
      </svg>
      <div className="texto-centro">
        <h1 className="logo-recrea">Recrea <span>Academy</span></h1>
        <p className="anio">2025</p>
      </div>
    </div>
  );
};

export default ArcoRecrea;