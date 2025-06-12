import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MotionReveal from "../../components/animations/MotionReveal";
import "./Innovaciones.css";

function Tarjeta({ item }) {
  return (
    <div className={`tarjeta ${item.color}`}>
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
  );
}

function Innovaciones() {
  const [filtro, setFiltro] = useState("Destacados");
  const [busqueda, setBusqueda] = useState("");

  const todos = [
    {
      icono: "lightbulb",
      title: 'Recrea Academy lanza su primer “Reto Pedagógico Estatal',
      date: "5 de agosto",
      color: "color-1",
      tipo: ["Destacados", "Todas"],
      nivel: "principiante",
    },
    {
      icono: "science",
      title: "Proyectos de ciencias para educación básica",
      date: "2 de agosto",
      color: "color-2",
      tipo: ["Todas", "Destacados"],
      nivel: "intermedio",
    },
    {
      icono: "extension",
      title: "Resuelve un problema de lógica",
      date: "1 de agosto",
      color: "color-3",
      tipo: ["Por nivel", "Todas"],
      nivel: "avanzado",
    },
    {
      icono: "wb_sunny",
      title: "Promueve el bienestar socioemocional",
      date: "30 de junio",
      color: "color-4",
      tipo: ["Rutas", "Todas"],
      nivel: "intermedio",
    },
    {
      icono: "lightbulb",
      title: "Webinar: Estrategias digitales",
      date: "25 de junio",
      color: "color-5",
      tipo: ["Webinars", "Todas"],
      nivel: "principiante",
    },
  ];

  const filtros = ["Destacados", "Todas", "Por nivel", "Rutas", "Webinars"];

  const destacados = todos.filter(
    (item) =>
      item.tipo.includes(filtro) &&
      item.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleExplorar = () => {
    setFiltro("Todas");
  };

  const capitalizar = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Layout>
      <div className="titulo-bloque">
        <MotionReveal index={1}>
          <h1>Innovaciones</h1>
        </MotionReveal>
        <MotionReveal index={2}>
          <p className="descripcion">
            Actualízate como educador. Encuentra rutas, microcursos y webinars
            para explorar nuevas tendencias y metodologías.
          </p>
        </MotionReveal>
      </div>

      <div className="innovaciones-container">
        <MotionReveal index={3}>
          <div className="botones-accion">
            <button className="btn btn-naranja" onClick={handleExplorar}>
              Explorar innovaciones
            </button>
          </div>
        </MotionReveal>

        <MotionReveal index={4}>
          <div className="busqueda-filtros">
            <input
              type="text"
              placeholder="Buscar formaciones..."
              className="input-busqueda"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className="btn btn-filtro">Filtros</button>
          </div>
        </MotionReveal>

        <MotionReveal index={5}>
          <div className="tabs">
            {filtros.map((tab) => (
              <button
                key={tab}
                className={`tab ${filtro === tab ? "activo" : ""}`}
                onClick={() => setFiltro(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </MotionReveal>

        {filtro === "Por nivel" ? (
          <>
            {["principiante", "intermedio", "avanzado"].map((nivel, idx) => (
              <MotionReveal key={nivel} index={6 + idx}>
                <div className="nivel-bloque">
                  <h3 className={`nivel-titulo ${nivel}`}>
                    {capitalizar(nivel)}
                  </h3>
                  <div className="tarjetas-destacadas">
                    {todos
                      .filter((item) => item.nivel === nivel)
                      .filter((item) =>
                        item.title.toLowerCase().includes(busqueda.toLowerCase())
                      )
                      .map((item, idx2) => (
                        <Tarjeta key={idx2} item={item} />
                      ))}
                  </div>
                </div>
              </MotionReveal>
            ))}
          </>
        ) : (
          <MotionReveal index={6} key={filtro}>
            <div className="tarjetas-destacadas">
              {destacados.map((item, idx) => (
                <Tarjeta key={idx} item={item} />
              ))}
            </div>
          </MotionReveal>
        )}

        <MotionReveal index={10}>
          <div className="recrea-destacado">
            <h2>Recrea Academy lanza su primer “Reto Pedagógico Estatal”</h2>
            <p>
              Docentes de todo Jalisco se unen para diseñar recursos didácticos
              con Inteligencia Artificial.
            </p>
            <p>
              <strong>Más de 1,200 maestros</strong> participaron en la creación
              de propuestas innovadoras para trabajar el pensamiento crítico en
              el aula con herramientas como Gemini y Canva AI.
            </p>
          </div>
        </MotionReveal>
      </div>
    </Layout>
  );
}

export default Innovaciones;
