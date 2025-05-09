import React from 'react';
import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import ArcoRecrea from '../../components/ArcoRecrea/ArcoRecrea';
import './Home.css';
import portada from '../../assets/portada-docentes.jpg'; // Asegúrate de que exista

const testimonios = [
  {
    usuario: 'Usuario',
    texto: 'Una plataforma innovadora que impulsa el trabajo colaborativo y el liderazgo educativo.',
    estrellas: 5,
  },
  {
    usuario: 'Usuario',
    texto: 'Recrea Academy me conectó como un espacio donde puedo compartir y aprender con colegas.',
    estrellas: 4,
  },
  {
    usuario: 'Usuario',
    texto: 'Me encantó el diseño y organización de los módulos. ¡Muy útil para fortalecer mi práctica!',
    estrellas: 5,
  },
];

const Home = () => {
  return (
    <LayoutSubmenu>
      <div className="inicio-container">
        <ArcoRecrea />

        <div className="inicio-content">
          <img src={portada} alt="Docentes" className="portada-img" />
          <h2 className="frase-principal">
            Una comunidad para docentes que inspiran y transforman
          </h2>
          <button className="btn-empezar">Empieza</button>
          <h3 className="subtitulo">Más que una plataforma</h3>
          <p className="descripcion">
            Un espacio creado por y para docentes de Jalisco que creen en el poder de la educación con propósito en comunidad.
          </p>
        </div>

        <div className="testimonios-section">
          {testimonios.map((t, i) => (
            <div key={i} className="testimonio-card">
              <h4>{t.usuario}</h4>
              <p className="estrellas">{'⭐'.repeat(t.estrellas)}</p>
              <p>{t.texto}</p>
            </div>
          ))}
        </div>

        <div className="opinion-btn-container">
          <button className="btn-opinion">Déjanos tu opinión</button>
        </div>
      </div>
    </LayoutSubmenu>
  );
};

export default Home;