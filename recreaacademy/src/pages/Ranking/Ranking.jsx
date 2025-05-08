// src/pages/Ranking/Ranking.jsx
import React from 'react';
import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import './Ranking.css';

const miembros = [
  { nombre: 'Luis Castañeda', porcentaje: 78 },
  { nombre: 'Sofia Castellanos', porcentaje: 82, destacado: true },
  { nombre: 'Alejandra Sánchez', porcentaje: 69 },
];

const Ranking = () => {
  return (
    <LayoutSubmenu>
      <div className="ranking-container">
        {/* Encabezado */}
        <div className="ranking-header">
          <div className="ranking-titles">
            <h1>Brújula Creativa</h1>
            <h2>Raking</h2>
          </div>
          <div className="ranking-members">
            <p>Integrantes del equipo (26)</p>
            <div className="avatars">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="avatar" />
              ))}
              <div className="avatar-plus">20+</div>
            </div>
          </div>
        </div>

        {/* Indicadores de proyectos */}
        <div className="ranking-stats">
          <div>
            <p className="label pink">Proyectos Activos</p>
            <p className="value red">16</p>
          </div>
          <div>
            <p className="label orange">Próximos Proyectos</p>
            <p className="value orange">08</p>
          </div>
        </div>

        {/* Barra superior de búsqueda */}
        <div className="ranking-tools">
          <h3>Desempeño del equipo</h3>
          <div className="icons">
            <span>🔍</span>
            <span>⚙️</span>
            <span>📅</span>
          </div>
        </div>

        {/* Lista de miembros */}
        <div className="ranking-list">
          {miembros.map((m, i) => (
            <div
              key={i}
              className={`ranking-card ${m.destacado ? 'destacado' : ''}`}
            >
              <div className="info">
                <div className="avatar" />
                <span className="nombre">{m.nombre}</span>
              </div>
              <span className="porcentaje">{m.porcentaje}%</span>
            </div>
          ))}
        </div>
      </div>
    </LayoutSubmenu>
  );
};

export default Ranking;