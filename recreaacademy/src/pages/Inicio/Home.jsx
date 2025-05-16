import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ArcoRecrea from '../../components/ArcoRecrea/ArcoRecrea';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
  {
    usuario: 'Usuario',
    texto: 'Gracias a Recrea ahora tengo acceso a recursos actualizados y confiables.'
  },
  {
    usuario: 'Usuario',
    texto: 'Las recomendaciones que ofrece la plataforma han mejorado mi planeación diaria.'
  },
  {
    usuario: 'Usuario',
    texto: 'Siento que pertenezco a una comunidad real de aprendizaje entre docentes.'
  },
  {
    usuario: 'Usuario',
    texto: 'La sección de innovaciones me inspira a probar nuevas metodologías cada semana.'
  },
  {
    usuario: 'Usuario',
    texto: 'Gracias a esta plataforma, he podido compartir recursos útiles con colegas.'
  },
  {
    usuario: 'Usuario',
    texto: 'Una excelente herramienta para el desarrollo profesional docente.'
  },
  {
    usuario: 'Usuario',
    texto: 'La navegación es sencilla y las actividades están muy bien estructuradas.'
  },
  {
    usuario: 'Usuario',
    texto: 'Recrea Academy me ha motivado a innovar en mis clases con nuevas metodologías.'
  }
];

const Home = () => {

  return (
    <LayoutSubmenu>
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
          <button className="btn-empezar">Empieza</button>
          <h3 className="subtitulo">Más que una plataforma</h3>
          <p className="descripcion">
            Un espacio creado por y para docentes de Jalisco que creen en el poder de la educación con propósito en comunidad.
          </p>
        </div>

        <div className="testimonios-section">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
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
          <button className="btn-opinion">Déjanos tu opinión</button>
        </div>
      </div>
    </LayoutSubmenu>
  );
};

export default Home;