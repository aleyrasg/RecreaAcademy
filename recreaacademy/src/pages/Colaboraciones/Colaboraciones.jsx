import React from "react";
import Layout from "../../components/Layout/Layout"; // Ajusta si la ruta cambia
import "./Colaboraciones.css";

const proyectos = [
  {
    titulo: "Red de Docentes",
    descripcion:
      "Conecta con docentes de otras zonas escolares y genera proyectos compartidos.",
    boton: "Ver proyecto",
  },
  {
    titulo: "Laboratorio de Innovación",
    descripcion:
      "Crea soluciones educativas junto a expertos en tecnología y pedagogía.",
    boton: "Explorar laboratorio",
  },
  {
    titulo: "Proyectos entre Escuelas",
    descripcion:
      "Desarrolla propuestas entre escuelas para transformar la enseñanza.",
    boton: "Colaborar",
  },
];

const Colaboraciones = () => {
  return (
    <Layout>
      <div className="colaboraciones-header">
        <h1 className="colaboraciones-title">Colaboraciones</h1>
        <p className="colaboraciones-subtitle">
        Conecta con otros docentes, postula ideas y construyan juntos recursos educativos!
        </p>
      </div>

      <div className="cards-container">
        {proyectos.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <button>{item.boton}</button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Colaboraciones;
