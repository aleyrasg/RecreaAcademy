import React from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import './Innovaciones.css';

function Innovaciones() {
  const destacados = [
    { title: 'Recrea Academy lanza su primer “Reto Pedagógico Estatal”', date: '5 de agosto', color: 'light-orange' },
    { title: 'Proyectos de ciencias para educación básica', date: '2 de agosto', color: 'orange' },
    { title: 'Resuelve un problema de lógica', date: '1 de agosto', color: 'red' },
    { title: 'Promueve el bienestar socioemocional', date: '30 de junio', color: 'yellow' }
  ];

  return (
    <LayoutSubmenu>
      <div className="innovaciones-container">
        <h1 className="titulo">Innovaciones</h1>
        <p className="descripcion">
          Actualízate como educador. Encuentra rutas microcursos y webinars para explorar nuevas tendencias y metodologías.
        </p>

        <div className="botones-accion">
          <button className="btn btn-naranja">Explorar innovaciones</button>
          <button className="btn btn-borde-rosa">Ver microcursos</button>
        </div>

        <div className="busqueda-filtros">
          <input type="text" placeholder="Buscar formaciones..." className="input-busqueda" />
          <button className="btn btn-filtro">Filtros</button>
        </div>

        <div className="tabs">
          <button className="tab activo">Destacados</button>
          <button className="tab">Todas</button>
          <button className="tab">Por nivel</button>
          <button className="tab">Rutas</button>
          <button className="tab">Webinars</button>
        </div>

        <div className="tarjetas-destacadas">
          {destacados.map((item, idx) => (
            <div key={idx} className={`tarjeta ${item.color}`}>
              <p className="tarjeta-titulo">{item.title}</p>
              <p className="tarjeta-fecha">{item.date}</p>
            </div>
          ))}
        </div>

        <div className="recrea-destacado">
          <h2>Recrea Academy lanza su primer “Reto Pedagógico Estatal”</h2>
          <p>Docentes de todo Jalisco se unen para diseñar recursos didácticos con Inteligencia Artificial.</p>
          <p>
            <strong>Más de 1,200 maestros</strong> participaron en la creación de propuestas innovadoras para trabajar el pensamiento
            crítico en el aula con herramientas como Gemini y Canva AI.
          </p>
        </div>
      </div>
    </LayoutSubmenu>
  );
}

export default Innovaciones;