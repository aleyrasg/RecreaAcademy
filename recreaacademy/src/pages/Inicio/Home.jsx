import { useState } from 'react';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import parabotonempieza from "../../assets/parabotonempieza.jpeg";
import Layout from '../../components/Layout/Layout';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ArcoRecrea from '../../components/ArcoRecrea/ArcoRecrea';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import MotionReveal from "../../components/animations/MotionReveal";

const testimonios = [
  {
    usuario: 'María López',
    texto: 'Una plataforma innovadora que impulsa el trabajo colaborativo y el liderazgo educativo.',
    estrellas: 5,
  },
  {
    usuario: 'Carlos Méndez',
    texto: 'Recrea Academy me conectó como un espacio donde puedo compartir y aprender con colegas.',
    estrellas: 4,
  },
  {
    usuario: 'Ana Gómez',
    texto: 'Me encantó el diseño y organización de los módulos. ¡Muy útil para fortalecer mi práctica!',
    estrellas: 5,
  },
  {
    usuario: 'Luis Fernández',
    texto: 'Gracias a Recrea ahora tengo acceso a recursos actualizados y confiables.'
  },
  {
    usuario: 'Sofía Ramírez',
    texto: 'Las recomendaciones que ofrece la plataforma han mejorado mi planeación diaria.'
  },
  {
    usuario: 'Jorge Martínez',
    texto: 'Siento que pertenezco a una comunidad real de aprendizaje entre docentes.'
  },
  {
    usuario: 'Elena Torres',
    texto: 'La sección de innovaciones me inspira a probar nuevas metodologías cada semana.'
  },
  {
    usuario: 'Miguel Sánchez',
    texto: 'Gracias a esta plataforma, he podido compartir recursos útiles con colegas.'
  },
  {
    usuario: 'Laura Castillo',
    texto: 'Una excelente herramienta para el desarrollo profesional docente.'
  },
  {
    usuario: 'Diego Herrera',
    texto: 'La navegación es sencilla y las actividades están muy bien estructuradas.'
  },
  {
    usuario: 'Valeria Cruz',
    texto: 'Recrea Academy me ha motivado a innovar en mis clases con nuevas metodologías.'
  }
];

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [nuevoComentario, setNuevoComentario] = useState({ usuario: '', texto: '' });
  const [mostrarImagen, setMostrarImagen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nuevoComentario);
    setShowModal(false);
    setNuevoComentario({ usuario: '', texto: '' });
  };

  return (
    <Layout>
    <MotionReveal index={1}>
      <div className="inicio-container">
        <ArcoRecrea isOnClickDisabled displayHalf>
          <div className="texto-centro-arco">
            <h1>Recrea <span>Academy</span></h1>
            <div class='anio-container'><p className="anio">2025</p></div>
          </div>
        </ArcoRecrea>

        <div className="inicio-content">
          <img src={`${import.meta.env.BASE_URL}src/assets/portada-docentes.jpg`} alt="Docentes" className="portada-img" />
          <h2 className="frase-principal">
            Una comunidad para docentes que inspiran y transforman
          </h2>
          <button className="btn-empezar" onClick={() => setMostrarImagen(true)}>Empieza</button>
          <div className="subtitulo-descripcion-container centrado">
            <h3 className="subtitulo">Más que una plataforma</h3>
            <p className="descripcion">
              Un espacio creado por y para docentes de Jalisco que creen en el poder de la educación con propósito en comunidad.
            </p>
          </div>
        </div>

        <div className="testimonios-section">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 3,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonios-swiper"
          >
            {testimonios.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonio-card">
                  <h4>{t.usuario}</h4>
                  <p>{t.texto}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="opinion-btn-container">
          <button className="btn-opinion" onClick={() => setShowModal(true)}>Déjanos tu opinión</button>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Tu Testimonio</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={nuevoComentario.usuario}
                  onChange={(e) => setNuevoComentario({ ...nuevoComentario, usuario: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Escribe tu comentario"
                  value={nuevoComentario.texto}
                  onChange={(e) => setNuevoComentario({ ...nuevoComentario, texto: e.target.value })}
                  required
                />
                <div className="modal-buttons">
                  <button type="submit">Enviar</button>
                  <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {mostrarImagen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "fadeIn 0.5s ease-in-out"
            }}
            onClick={() => setMostrarImagen(false)}
          >
            <div style={{ position: "relative" }}>
              <img
                src={parabotonempieza}
                alt="Vista previa"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  borderRadius: "12px",
                  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                  animation: "scaleIn 0.5s ease-in-out"
                }}
              />
              <PlayArrowIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: 80,
                  color: "#fff",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  borderRadius: "50%",
                  padding: "10px"
                }}
              />
            </div>
          </div>
        )}
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes scaleIn {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}
        </style>
        <div className="faq-section">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <div className="faq-container">
            {[
              {
                pregunta: "¿Qué es Recrea Academy?",
                respuesta:
                  "Recrea Academy es una plataforma creada por y para docentes de Jalisco para fortalecer su práctica educativa a través de rutas formativas, retos pedagógicos y recursos innovadores.",
              },
              {
                pregunta: "¿Es gratuita la plataforma?",
                respuesta:
                  "Sí, es completamente gratuita para los docentes registrados en la Red Recrea.",
              },
              {
                pregunta: "¿Puedo compartir mis propios recursos?",
                respuesta:
                  "Sí, puedes compartir experiencias, actividades o materiales con otros docentes desde tu perfil.",
              },
              {
                pregunta: "¿Necesito conocimientos técnicos para usarla?",
                respuesta:
                  "No. Recrea Academy está diseñada para ser intuitiva y fácil de usar, incluso sin experiencia técnica previa.",
              },
              {
                pregunta: "¿Cómo inicio sesión?",
                respuesta:
                  "Para iniciar sesión, da clic en el botón 'Iniciar sesión' en la esquina superior derecha e ingresa tu cuenta institucional o correo registrado en la plataforma.",
              },
            ].map((item, index) => (
              <details key={index} className="faq-item">
                <summary>{item.pregunta}</summary>
                <p>{item.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
         <img
          src={`${import.meta.env.BASE_URL}src/assets/Escenario-scaled.jpg `}
          alt="Logo Recrea"
          className="logo-recrea"
          style={{ width: 950, height: 500 }}
        />
         <div className="footer">
          <p>© 2024 Recrea Academy. Todos los derechos reservados.</p>
        </div>
       
      </div>
      </MotionReveal>
    </Layout>
  );
};

export default Home;