import React, { useState } from 'react';
import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import './Innovaciones.css';

function Innovaciones() {
  const [filtro, setFiltro] = useState("Destacados");

  const todos = [
    {
      icono: "lightbulb",
      title: "Recrea Academy lanza su primer “Reto Pedagógico Estatal",
      date: "5 de agosto",
      color: "light-orange",
      tipo: ["Destacados", "Todas"],
      nivel: "principiante"
    },
    {
      icono: "science",
      title: "Proyectos de ciencias para educación básica",
      date: "2 de agosto",
      color: "orange",
      tipo: ["Todas", "Destacados"],
      nivel: "intermedio"
    },
    {
      icono: "extension",
      title: "Resuelve un problema de lógica",
      date: "1 de agosto",
      color: "red",
      tipo: ["Por nivel", "Todas"],
      nivel: "avanzado"
    },
    {
      icono: "wb_sunny",
      title: "Promueve el bienestar socioemocional",
      date: "30 de junio",
      color: "yellow",
      tipo: ["Rutas", "Todas"],
      nivel: "intermedio"
    },
    {
      icono: "lightbulb",
      title: "Webinar: Estrategias digitales",
      date: "25 de junio",
      color: "orange",
      tipo: ["Webinars", "Todas"],
      nivel: "principiante"
    }
  ];

  const destacados = todos.filter(item => item.tipo.includes(filtro));

  const handleExplorar = () => {
    setFiltro("Todas");
  };

  const handleMicrocursos = () => {
    alert("Funcionalidad de microcursos aún no implementada.");
  };

  return (
    <LayoutSubmenu>
      <h1 className="titulo">Innovaciones</h1>
      <div className="innovaciones-container">
        <p className="descripcion">
          Actualízate como educador. Encuentra rutas, microcursos y webinars para explorar nuevas tendencias y metodologías.
        </p>

        <div className="botones-accion">
          <button className="btn btn-naranja" onClick={handleExplorar}>Explorar innovaciones</button>
          <button className="btn btn-borde-rosa" onClick={handleMicrocursos}>Ver microcursos</button>
        </div>

        <div className="busqueda-filtros">
          <input type="text" placeholder="Buscar formaciones..." className="input-busqueda" />
          <button className="btn btn-filtro">Filtros</button>
        </div>

        <div className="tabs">
          {["Destacados", "Todas", "Por nivel", "Rutas", "Webinars"].map(tab => (
            <button
              key={tab}
              className={`tab ${filtro === tab ? "activo" : ""}`}
              onClick={() => setFiltro(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {filtro === "Por nivel" ? (
          <>
            {["principiante", "intermedio", "avanzado"].map(nivel => (
  <div key={nivel} className="nivel-bloque">
    <h3 className={`nivel-titulo ${nivel}`}>
      {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
    </h3>
    <div className="tarjetas-destacadas">
      {todos
        .filter(item => item.nivel === nivel)
        .map((item, idx) => (
          <div key={idx} className={`tarjeta ${item.color}`}>
            <div className="tarjeta-cuerpo">
              <div className="tarjeta-icono">
                <span className="material-symbols-outlined">{item.icono}</span>
              </div>
              <div className="tarjeta-titulo">
                <p>{item.title}</p>
              </div>
            </div>
            <div className="tarjeta-fecha">
              <p>{item.date}</p>
            </div>
          </div>
        ))}
    </div>
  </div>
))}

          </>
        ) : (
          <div className="tarjetas-destacadas">
            {destacados.map((item, idx) => (
              <div key={idx} className={`tarjeta ${item.color}`}>
                <div className="tarjeta-cuerpo">
                  <div className="tarjeta-icono">
                    <span className="material-symbols-outlined">{item.icono}</span>
                  </div>
                  <div className="tarjeta-titulo">
                    <p>{item.title}</p>
                  </div>
                </div>
                <div className="tarjeta-fecha">
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

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
