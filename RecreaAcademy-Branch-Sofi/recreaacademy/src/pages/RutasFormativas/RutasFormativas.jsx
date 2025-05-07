import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./RutasFormativas.css";
import Card from '@mui/material/Card';

const iconos = [
  { icon: "local_library", title: "Biblioteca", description: "Accede a contenido educativo digital" },
  { icon: "school", title: "Escuela", description: "Formación continua para docentes" },
  { icon: "model_training", title: "Entrenamiento", description: "Capacitación práctica en nuevas tecnologías" },
  { icon: "labs", title: "Laboratorio", description: "Espacios para experimentar e innovar" },
  { icon: "digital_wellbeing", title: "Bienestar Digital", description: "Equilibrio y salud en el entorno digital" },
  { icon: "network_intel_node", title: "Redes", description: "Conecta con otros docentes y comparte" },
  { icon: "rewarded_ads", title: "Reconocimientos", description: "Premios por participación y logros" },
  { icon: "emoji_objects", title: "Ideas", description: "Inspírate con buenas prácticas educativas" },
];

function RutasFormativas() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Layout>
      <div className="rutas-formativas-header">
        <h1>Rutas Formativas</h1>
        <p>¡Conoce cada una de nuestras rutas formativas!</p>
      </div>

      <div className="rotating-circle-container">
        <div className="rotating-circle">
          {iconos.map((item, index) => (
            <div
              key={index}
              className={`icon ${selectedIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
          ))}
        </div>

        <div className="center-circle">
          <div className={`flip-card ${selectedIndex !== null ? 'flipped' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Card className="card" sx={{ maxWidth: 300 }}>
                  <div className="card-content">
                    <h2>Rutas Formativas</h2>
                    <p>¡Conoce cada una de nuestras rutas formativas!</p>
                  </div>
                </Card>
              </div>
              <div className="flip-card-back">
                <Card className="card" sx={{ maxWidth: 300 }}>
                  <div className="card-content">
                    <h2>{selectedIndex !== null ? iconos[selectedIndex].title : ''}</h2>
                    <p>{selectedIndex !== null ? iconos[selectedIndex].description : ''}</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RutasFormativas;
