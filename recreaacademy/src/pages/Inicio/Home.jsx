import React from 'react';
import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
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
];

const Home = () => {

  return (
    <LayoutSubmenu>
      <div className="inicio-container">
        <video
          className="video-inicio"
          src={`${import.meta.env.BASE_URL}src/assets/video-intro.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />

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
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
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
                  <p className="estrellas">{'⭐'.repeat(t.estrellas)}</p>
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