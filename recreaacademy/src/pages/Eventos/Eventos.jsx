import React from "react";
import Layout from "../../components/Layout/Layout";
import MotionReveal from "../../components/animations/MotionReveal";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/autoplay";

import Tilt from "react-parallax-tilt";

import carlosImg from "../../assets/carlos-anaya.png";
import elisaImg from "../../assets/elisa-guerra.png";
import manuelImg from "../../assets/manuel-obrien.png";

const eventos = [
  { fecha: "9 de mayo", titulo: "Encuentro de Liderazgo Educativo" },
  { fecha: "11 de junio", titulo: "Asamblea de Academia" },
  { fecha: "22 de agosto", titulo: "Congreso Internacional" },
];

const conferencistas = [
  {
    nombre: "Carlos Anaya",
    descripcion:
      "Gerente para el Sector Público en Google for Education en México, Centroamérica y el Caribe.",
    color: "#e53935",
    imagen: carlosImg,
  },
  {
    nombre: "Elisa Guerra",
    descripcion: "Maestra, autora, conferencista",
    color: "#fb8c00",
    imagen: elisaImg,
  },
  {
    nombre: "Manuel O´Brien Hughes",
    descripcion:
      "Líder de Asuntos Gubernamentales y Regulatorios IBM México, Chile y Costa Rica",
    color: "#d32f2f",
    imagen: manuelImg,
  },
];

export default function Eventos() {
  return (
    <Layout>
      <Box className="eventos-container" sx={{ px: 2, pt: 4, pb: 2, width: "100%", maxWidth: "960px", margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* IZQUIERDA: Eventos */}
          <Box sx={{ flex: 1, minWidth: "60%" }}>
            <MotionReveal index={1}>
              <h1>
                Próximos eventos
              </h1>
            </MotionReveal>
            <MotionReveal index={2}>
              <p>
                Eventos Institucionales
              </p>
            </MotionReveal>
            <MotionReveal index={3}>
              {eventos.map((e, i) => (
                <Box key={i} sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                    <CalendarMonthIcon sx={{ color: "#FC083B", mr: 1 }} />
                    <Typography variant="body1">
                      <b>{e.fecha}</b> — {e.titulo}
                    </Typography>
                  </Box>
                  <Box sx={{ borderBottom: "1px solid #ccc", ml: 4 }} />
                </Box>
              ))}
            </MotionReveal>
          </Box>

          {/* DERECHA: Calendario */}
          <MotionReveal index={4}>
            <Box sx={{ flex: 1, minWidth: "300px", padding: 2 }}>
              <Typography
                variant="h6"
                color="orange"
                textAlign="center"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Abril 2024
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  defaultValue={dayjs("2024-04-15")}
                  disableFuture
                  views={["day"]}
                  sx={{
                    "& .MuiPickersArrowSwitcher-root": {
                      display: "none",
                    },
                    "& .MuiPickersDay-root.Mui-selected": {
                      backgroundColor: "#FB8C00",
                    },
                    "& .MuiPickersDay-root:not(.Mui-selected)": {
                      color: "#000",
                    },
                    "& .MuiPickersDay-today": {
                      border: "1px solid #FB8C00",
                    },
                    "& .MuiTypography-root": {
                      fontFamily: "inherit",
                    },
                    "& .MuiPickersCalendarHeader-label": {
                      display: "none",
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
          </MotionReveal>
        </Box>

        {/* CONFERENCISTAS */}
        <MotionReveal index={5}>
          <h2>
            Conferencistas
          </h2>
        </MotionReveal>
        <MotionReveal index={6}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={1}
            slidesPerView={3}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            style={{ paddingBottom: 40 }}
          >
            {conferencistas.map((c, i) => (
              <SwiperSlide key={i}>
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  scale={1.05}
                  transitionSpeed={2500}
                  style={{ borderRadius: "12px", width: "250px", height: "420px" }}
                >
                  <Card
                    sx={{
                      backgroundColor: c.color,
                      color: "white",
                      borderRadius: 3,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={c.imagen}
                      alt={c.nombre}
                      sx={{
                        objectFit: "cover",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {c.nombre}
                      </Typography>
                      <Typography variant="body2">{c.descripcion}</Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionReveal>
      </Box>
    </Layout>
  );
}
