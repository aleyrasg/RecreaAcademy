import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, InputAdornment, Grid, Chip, Button, Dialog, DialogContent, Tooltip, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Layout from '../../components/Layout/Layout';
import MotionReveal from '../../components/animations/MotionReveal';
import Adriana from '../../assets/AdrianaVillagomez.png';
import Carmen from '../../assets/CarmenPellicer.png';
import Jose from '../../assets/JoseMartinez.png';
import Mariana from '../../assets/MariaTrinidad.png';
import Simon from '../../assets/SimonDuque.png';

const Congreso = () => {
  // IDs para el collage de videos
  const allYoutubeLiveIds = [
    '1S-XDcHJPBA', 'Zrcjl_FLn30', '87CMFz-mTC4', 'B6qaG5aEsb8', 'S7TPhQl0rOw',
    '74mIw7M4Z_I', 'cHlRSPYmVig', 'nSoXzyVWo0w', 'nSoXzyVWo0w', 'CS4CSCaQ2Kk',
    'B6qaG5aEsb8', 'S7TPhQl0rOw', '74mIw7M4Z_I', '74mIw7M4Z_I', 'nFe1xf4l-W8',
    'BYstZHut9CM', 'bIGCZU3Fk4c', '_aS6OOOFWDY', 'q9lRKa_xb7w', 'RGm-8tPfh4o'
  ];
  // Arreglo de ponentes destacados
  const ponentes = [
    {
      nombre: "Adriana Villagómez",
      imagen: Adriana,
      cita: "La tecnología debe servir como un puente hacia una educación más inclusiva."
    },
    {
      nombre: "Carmen Pellicer",
      imagen: Carmen,
      cita: "Educar con propósito transforma el futuro."
    },
    {
      nombre: "José Martínez",
      imagen: Jose,
      cita: "Innovar en el aula es construir esperanza."
    },
    {
      nombre: "Mariana Trinidad",
      imagen: Mariana,
      cita: "La educación emocional es la base del aprendizaje integral."
    },
    {
      nombre: "Simón Duque",
      imagen: Simon,
      cita: "La inteligencia artificial puede ser una aliada del docente."
    }
  ];
  const timelineColors = ['#1F9CD0', '#02B6BD', '#FEB101', '#FE8A12', '#FE6F60', '#A3A804', '#E54EB5'];
  const timelineYears = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const youtubeIds = ['eleV4x9eEq0', 'cchEUhngvsM', 'iSCNO3AGkNg', 'BrCGHmITFdY', '0aVDBQucaKo'];

  const videosPorAno = {
    2018: ['eleV4x9eEq0'],
    2019: ['cchEUhngvsM'],
    2020: ['iSCNO3AGkNg'],
    2021: ['BrCGHmITFdY'],
    2022: ['0aVDBQucaKo'],
    2023: ['eleV4x9eEq0'],
    2024: ['cchEUhngvsM']
  };

  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleOpen = (id) => {
    setSelectedVideo(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <Layout>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <MotionReveal index={1}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'red' }}>Congreso</Typography>
        </MotionReveal>

        {/* Timeline */}
        <MotionReveal index={2}>
          <Box sx={{ my: 4, position: 'relative' }}>
            <Box sx={{ height: 5, display: 'flex', borderRadius: 5, overflow: 'hidden' }}>
              {timelineColors.map((color, index) => (
                <Box key={index} sx={{ flex: 1, bgcolor: color }} />
              ))}
            </Box>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
              {timelineYears.map((year) => (
                <Grid item key={year} sx={{ textAlign: 'center' }}>
                  <Tooltip
                    placement="top"
                    arrow
                    enterDelay={500}
                    title={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img src="/assets/profesora_animada.png" alt="Profesora" width="40" />
                        <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                          ¡Haz clic en este año para ver sus videos!
                        </Typography>
                      </Box>
                    }
                  >
                    <Box
                      className={selectedYear === year ? 'selected-year' : ''}
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: selectedYear === year ? '#E6007E' : '#ccc',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#FE8A12',
                          boxShadow: '0 0 8px rgba(0,0,0,0.2)',
                        },
                      }}
                      onClick={() => setSelectedYear(year)}
                    />
                  </Tooltip>
                  <Typography>{year}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </MotionReveal>

        {/* Multimedia Content */}
        <MotionReveal index={3}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'red' }}>Contenido multimedia</Typography>
        </MotionReveal>

        <MotionReveal index={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            {/* Barras izquierda */}
            <Box className="video-bar-group">
              {[...Array(8)].map((_, i) => (
                <Box key={`left-${i}`} className="video-bar" />
              ))}
            </Box>

            {/* Video carousel */}
            <Box sx={{ display: 'flex' }}>
              {(selectedYear ? videosPorAno[selectedYear] : youtubeIds).map((id, i) => (
                <Box
                  key={i}
                  onClick={() => handleOpen(id)}
                  className="video-flop-container"
                  sx={{
                    width: i === 2 ? 320 : 80,
                    height: i === 2 ? 180 : 80,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transform: i === 2 ? 'scale(1)' : 'scale(0.9)',
                    transition: 'transform 0.4s ease, z-index 0.4s ease',
                    position: 'relative',
                    zIndex: i === 2 ? 2 : 1,
                    cursor: 'pointer',
                    backgroundImage: `url(https://img.youtube.com/vi/${id}/0.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    animation: 'fadeIn 0.6s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      zIndex: 3,
                    },
                  }}
                />
              ))}
            </Box>

            {/* Barras derecha */}
            <Box className="video-bar-group">
              {[...Array(8)].map((_, i) => (
                <Box key={`right-${i}`} className="video-bar" />
              ))}
            </Box>
          </Box>
        </MotionReveal>

        <MotionReveal index={4.5}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.92) 60%, transparent 90%)',
              m: 0,
              p: 0,
              pl: 10,
            }}
          >
            {allYoutubeLiveIds.map((id, index) => (
              <Box
                key={index}
                sx={{
                  width: 280,
                  height: 158,
                  backgroundColor: '#000',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 0 0 4px white',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transformOrigin: 'center center',
                  transform: `rotate(${index * (360 / allYoutubeLiveIds.length)}deg) translate(480px) rotate(-${index * (360 / allYoutubeLiveIds.length)}deg)`,
                  animation: 'fadeInUp 0.6s ease',
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}`}
                  allow="autoplay; encrypted-media"
                  title={`Video ${index}`}
                  frameBorder="0"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            ))}
            {allYoutubeLiveIds.slice(0,6).map((id, index) => (
              <Box
                key={`inner-${index}`}
                sx={{
                  width: 280,
                  height: 158,
                  backgroundColor: '#000',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 0 0 4px white',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transformOrigin: 'center center',
                  transform: `rotate(${index * (360 / 6)}deg) translate(240px) rotate(-${index * (360 / 6)}deg)`,
                  animation: 'fadeInUp 0.6s ease',
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}`}
                  allow="autoplay; encrypted-media"
                  title={`Inner Video ${index}`}
                  frameBorder="0"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            ))}
          </Box>
        </MotionReveal>

        {/* Nueva sección: Categorías, Ediciones y Ponente destacado */}
        <MotionReveal index={5}>
          <Box sx={{ mt: 5 }}>
            {/* Categorías */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <Chip label="IA" sx={{ backgroundColor: '#1F9CD0', color: 'white', fontWeight: 'bold' }} />
              <Chip label="Gamificación" sx={{ backgroundColor: '#3CB043', color: 'white', fontWeight: 'bold' }} />
              <Chip label="Neuroeducación" sx={{ backgroundColor: '#D32F2F', color: 'white', fontWeight: 'bold' }} />
            </Box>

            {/* Contenido dividido */}
            <Grid container spacing={4}>
              {/* Ediciones */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ position: 'relative' }}>
                      <Box sx={{ bgcolor: 'red', color: 'white', px: 2, py: 0.5, borderRadius: '10px 10px 0 0', width: 'fit-content', mb: 1 }}>
                        Edición 2022
                      </Box>
                      <Paper sx={{ borderRadius: 2, overflow: 'hidden', width: '100%', height: 300 }}>
                        <img src={Carmen} alt="Carmen Pellicer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </Paper>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Typography variant="body1" fontWeight="bold">
                          Edición
                        </Typography>
                        <Chip label="2022" color="success" size="small" sx={{ mx: 1 }} />
                        <Typography variant="body1" fontWeight="bold">
                          IA en el Aula
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#E0F2F1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <img src={Simon} alt="Simón Duque" style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }} />
                      <Typography mt={2} fontWeight="bold">Edición 2023</Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

              {/* Ponente destacado */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" fontWeight="bold">Ponente destacado</Typography>
                <Paper sx={{ mt: 2, p: 2, borderRadius: 2, textAlign: 'center' }}>
                  <Box sx={{ height: 250, overflow: 'hidden', borderRadius: '10px' }}>
                    <img src={ponentes[0].imagen} alt={ponentes[0].nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                  <Typography fontWeight="bold" mt={2}>{ponentes[0].nombre}</Typography>
                  <Typography variant="body2" mt={1}>
                    “{ponentes[0].cita}”
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: '#E6007E' }}>Ver su charla</Button>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </MotionReveal>

        {/* Search Bar */}
        <MotionReveal index={6}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, alignItems: 'center' }}>
            <TextField
              placeholder="Buscar"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ mt: '-4px' }}>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              sx={{ width: 200 }}
            />
          </Box>
        </MotionReveal>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0 }}>
          {selectedVideo && (
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Congreso;