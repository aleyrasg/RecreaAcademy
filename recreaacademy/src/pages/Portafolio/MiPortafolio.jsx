import "./MiPortafolio.css";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import {
  CalendarToday,
  EmojiEvents,
  Groups,
  Star,
  Person,
} from "@mui/icons-material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Layout from "../../components/Layout/Layout";
import MotionReveal from "../../components/animations/MotionReveal";
import { motion } from "framer-motion";

const MetricaCard = ({ icon, value, label, color }) => (
  <Box sx={{ textAlign: "center", minWidth: 120 }}>
    {icon}
    <Typography variant="h6" sx={{ color }}>
      {value}
    </Typography>
    <Typography variant="body2" sx={{ color }}>
      {label}
    </Typography>
  </Box>
);

const RutaFormativaCard = ({ titulo, descripcion, icono, color }) => (
  <motion.div whileHover={{ scale: 1.05 }} style={{ flexGrow: 1 }}>
    <Paper
      elevation={4}
      sx={{
        backgroundColor: color,
        borderRadius: 3,
        padding: 3,
        textAlign: "center",
        color: "white",
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 180,
      }}
    >
      <Box mb={2} display="flex" justifyContent="center">
        {icono}
      </Box>
      <Typography variant="h6" fontWeight="bold">
        {titulo}
      </Typography>
      <Typography variant="body2" mt={1}>
        {descripcion}
      </Typography>
    </Paper>
  </motion.div>
);

function MiPortafolio() {
  const rutas = [
    {
      titulo: "Challenges",
      descripcion: "Continúa con tus 2 challenges",
      icono: <EmojiEvents sx={{ fontSize: 48, color: 'white' }} />,
      color: "#FFB127"
    },
    {
      titulo: "Innova CAD",
      descripcion: "Continúa innovando",
      icono: <EmojiObjectsIcon sx={{ fontSize: 48, color: 'white' }} />,
      color: "#FC7D04"
    },
    {
      titulo: "Comunidad Normalista",
      descripcion: "Explora más Comunidad Normalista",
      icono: <MenuBookIcon sx={{ fontSize: 48, color: 'white' }} />,
      color: "#EA7064"
    },
    {
      titulo: "Fractal Educativo",
      descripcion: "Explora Fractal Educativo",
      icono: <AutoStoriesIcon sx={{ fontSize: 48, color: 'white' }} />,
      color: "#C4DC2F"
    }
  ];

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <MotionReveal index={1}>
          <div className="mi-portafolio-header">
            <h1>Mi portafolio</h1>
            <p>
              ¡Bienvenido a tu portafolio! Aquí podrás ver tus proyectos y rutas
              formativas.
            </p>
          </div>
        </MotionReveal>

        {/* Usuario y Métricas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            justifyContent: "center",
            mb: 4,
          }}
        >
          {/* Usuario a la izquierda */}
          <Box sx={{ textAlign: "center", minWidth: 120 }}>
            <Person sx={{ fontSize: 60, color: "#FF004C" }} />
            <Typography variant="subtitle1" fontWeight="bold">
              Usuario
            </Typography>
          </Box>

          {/* Métricas centradas */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            <MetricaCard
              icon={<CalendarToday sx={{ color: "#FF9800", mb: 1 }} aria-label="Calendario" />}
              value={15}
              label="Días de racha"
              color="#FF9800"
            />
            <MetricaCard
              icon={<Groups sx={{ color: "#FF004C", fontSize: 40 }} aria-label="Grupos" />}
              value={3}
              label="Proyectos Activos"
              color="#FF004C"
            />
            <MetricaCard
              icon={<Star sx={{ color: "#FFC107", fontSize: 40 }} aria-label="Estrella" />}
              value={20}
              label="Ranking"
              color="#FFC107"
            />
          </Box>
        </Box>

        {/* Rutas Formativas */}
        <MotionReveal index={2}>
          <h2>Mis Rutas Formativas</h2>
          <Grid container spacing={2} mb={4}>
            {rutas.map((ruta, index) => (
              <Grid xs={12} md={4} key={index}>
                <Box sx={{ p: 2 }}>
                  <RutaFormativaCard {...ruta} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </MotionReveal>

        {/* Proyectos */}
        <MotionReveal index={3}>
          <h2>Mis Proyectos</h2>
          <Grid container spacing={2}>
            {[{ title: "Aplicación de IA para el aula", tag: "Hoy" },
              { title: "Recurso abierto de historia", tag: "Hace 2 días" },
              { title: "Propuesta de Laboratorio", tag: "Hace 5 días" },
            ].map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ p: 2 }}>
                  <Typography fontWeight="bold">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.tag}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: "#FF004C",
                      borderRadius: "20px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#d60042" },
                    }}
                  >
                    Continuar
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </MotionReveal>
      </Box>
    </Layout>
  );
}

export default MiPortafolio;
