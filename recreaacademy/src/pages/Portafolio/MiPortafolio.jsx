import "./MiPortafolio.css";
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { CalendarToday, EmojiEvents, Groups, Star, Person } from '@mui/icons-material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Layout from '../../components/Layout/Layout';

function MiPortafolio() {
  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <div className="mi-portafolio-header">
        <h1>Mi portafolio</h1>
        <p>¡Bienvenido a tu portafolio! Aquí podrás ver tus proyectos y rutas formativas.</p>
        </div>

        {/* Perfil y métricas */}
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap', mb: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Person sx={{ fontSize: 60, color: '#FF004C' }} />
            <Typography variant="subtitle1" fontWeight="bold">Usuario</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            <Box sx={{ borderRadius: 2, p: 2, minWidth: 120, textAlign: 'center' }}>
              <CalendarToday sx={{ color: '#FF9800', mb: 1 }} />
              <Typography variant="h6" sx={{ color: '#FF9800' }}>15</Typography>
              <Typography variant="body2" sx={{ color: '#FF9800' }}>Días de racha</Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Groups sx={{ color: '#FF004C', fontSize: 40 }} />
              <Typography sx={{ fontWeight: 'bold', color: '#FF004C' }}>3</Typography>
              <Typography variant="body2">Proyectos Activos</Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Star sx={{ color: '#FFC107', fontSize: 40 }} />
              <Typography sx={{ fontWeight: 'bold', color: '#FFC107' }}>20</Typography>
              <Typography variant="body2">Ranking</Typography>
            </Box>
          </Box>
        </Box>

        {/* Rutas Formativas */}
        <h2>
          Mis Rutas Formativas
        </h2>

        <Grid container spacing={2} mb={4}>
          <Grid item xs={6} md={3}>
            <Paper sx={{ backgroundColor: '#FFB127', p: 2 }}>
              <EmojiEvents fontSize="large" sx={{ color: '#fff' }} />
              <Typography fontWeight="bold">Challenges</Typography>
              <Typography variant="body2">Continúa con tus 2 challenges</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper sx={{ backgroundColor: '#FC7D04', p: 2 }}>
              <EmojiObjectsIcon fontSize="large" sx={{ color: '#fff' }} />
              <Typography fontWeight="bold">Innova CAD</Typography>
              <Typography variant="body2">Continúa innovando</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper sx={{ backgroundColor: '#EA7064', p: 2 }}>
              <MenuBookIcon fontSize="large" sx={{ color: '#fff' }} />
              <Typography fontWeight="bold">Comunidad Normalista</Typography>
              <Typography variant="body2">Explora más Comunidad Normalista</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper sx={{ backgroundColor: '#C4DC2F', p: 2 }}>
              <AutoStoriesIcon fontSize="large" sx={{ color: '#fff' }} />
              <Typography fontWeight="bold">Fractal Educativo</Typography>
              <Typography variant="body2">Explora Fractal Educativo</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Proyectos */}
        <h2>
          Mis Proyectos
        </h2>

        <Grid container spacing={2}>
          {[
            { title: 'Aplicación de IA para el aula', tag: 'Hoy' },
            { title: 'Recurso abierto de historia', tag: 'Hace 2 días' },
            { title: 'Propuesta de Laboratorio', tag: 'Hace 5 días' }
          ].map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 2 }}>
                <Typography fontWeight="bold">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">{project.tag}</Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: '#FF004C',
                    borderRadius: '20px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#d60042'
                    }
                  }}
                >
                  Continuar
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export default MiPortafolio;
