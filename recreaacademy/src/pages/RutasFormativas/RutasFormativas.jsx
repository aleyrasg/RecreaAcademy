import React from "react";
import Layout from "../../components/Layout/Layout";
import "./RutasFormativas.css";
import {
  FaBook,
  FaGraduationCap,
  FaFire,
  FaTrophy,
  FaTools,
  FaHeart,
  FaVial,
  FaUserGraduate,
} from "react-icons/fa";

function RutasFormativas() {
  return (
    <Layout>
      <h1>Rutas Formativas</h1>
      <p>¡Conoce cada una de nuestras rutas formativas!</p>

      <div className="rotating-circle-container">
        <div className="rotating-circle">
          <div className="icon">
            <span className="material-symbols-outlined">local_library</span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">model_training</span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">labs</span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">digital_wellbeing</span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">network_intel_node</span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">rewarded_ads</span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">emoji_objects</span>
          </div>
        </div>

        <div className="center-circle">
          <div className="center-text">
            <h2>Acércate para conocer</h2>
            <p>¿Qué son las Rutas Formativas?</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RutasFormativas;
