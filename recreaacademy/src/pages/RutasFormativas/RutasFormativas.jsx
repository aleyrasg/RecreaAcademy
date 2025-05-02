import React from 'react';
import Layout from '../../components/Layout/Layout';
import './RutasFormativas.css';
import {
  FaBook,
  FaGraduationCap,
  FaFire,
  FaTrophy,
  FaTools,
  FaHeart,
  FaVial,
  FaUserGraduate,
} from 'react-icons/fa';

function RutasFormativas() {
  return (
    <Layout>
      <h1>Rutas Formativas</h1>
      <p>¡Conoce cada una de nuestras rutas formativas!</p>

      <div className="rotating-circle-container">
        <div className="rotating-circle">
          <div className="icon"><FaBook /></div>
          <div className="icon"><FaGraduationCap /></div>
          <div className="icon"><FaFire /></div>
          <div className="icon"><FaTrophy /></div>
          <div className="icon"><FaTools /></div>
          <div className="icon"><FaHeart /></div>
          <div className="icon"><FaVial /></div>
          <div className="icon"><FaUserGraduate /></div>
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
