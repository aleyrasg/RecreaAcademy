import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  ListItemIcon,
  ListSubheader,
  GlobalStyles,
} from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Layout from '../../components/Layout/Layout';

// Estilos y colores por categoría
const categoryStyles = {
  "General": {
    icon: <VolumeUpIcon sx={{ mr: 1, color: '#f50057' }} />,
    color: '#f50057',
  },
  "Anuncios Oficiales": {
    icon: <CampaignIcon sx={{ mr: 1, color: '#FE8A12' }} />,
    color: '#FE8A12',
  },
  "Charla Docente": {
    icon: <ChatIcon sx={{ mr: 1, color: '#A3A804' }} />,
    color: '#A3A804',
  },
  "Convocatorias": {
    icon: <HowToVoteIcon sx={{ mr: 1, color: '#1F9CD0' }} />,
    color: '#1F9CD0',
  },
};

// Conversaciones de ejemplo
const conversacionesMock = [
  {
    icon: '🎉',
    titulo: '¡Bienvenidas y bienvenidos a Comunidad Recrea!',
    autor: 'Sofía Castellanos',
    hace: 'hace 2 hrs',
    respuestas: 32,
    categoria: 'General',
  },
  {
    icon: '☕',
    titulo: '¿Qué te inspira a seguir enseñando?',
    autor: 'Alejandra Sánchez',
    hace: 'hace 2 días',
    respuestas: 30,
    categoria: 'Charla Docente',
  },
  {
    icon: '🛠️',
    titulo: 'Herramientas digitales que realmente te han funcionado',
    autor: 'Luis Castañeda',
    hace: 'hace 2 días',
    respuestas: 22,
    categoria: 'Anuncios Oficiales',
  },
  {
    icon: '📢',
    titulo: 'Convocatoria al reto de innovación educativa',
    autor: 'Dirección de Formación',
    hace: 'hace 3 días',
    respuestas: 18,
    categoria: 'Convocatorias',
  },
];

// Lista reutilizable
function ListaConversaciones({ conversaciones }) {
  return (
    <List>
      {conversaciones.map((conv, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start" sx={{ bgcolor: '#fff', mb: 1, borderRadius: 2 }}>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {`${conv.icon} ${conv.titulo}`}
                </Typography>
              }
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {conv.autor}
                  </Typography>
                  {` — ${conv.hace} — ${conv.respuestas} Respuestas`}
                </>
              }
            />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}

export default function ComunidadRecrea() {
  const [convs, setConvs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('General');

  useEffect(() => {
    setConvs(conversacionesMock);
  }, []);

  const conversacionesFiltradas = convs.filter(
    (conv) => conv.categoria === selectedCategory
  );

  const categoryColor = categoryStyles[selectedCategory]?.color || '#1976d2';

  return (
    <Layout>
      <h1>Comunidad Recrea</h1>
      {/* Animación global */}
      <GlobalStyles
        styles={`
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateX(-8px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      />


      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* Contenido principal */}
        <Box sx={{ flexGrow: 1, p: 4, bgcolor: '#fdfdfd' }}>


          <Box
            key={selectedCategory}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              animation: 'fadeSlide 0.4s ease',
              color: categoryColor,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {categoryStyles[selectedCategory]?.icon}
              <Typography variant="h6" sx={{ color: 'inherit' }}>
                {selectedCategory}
              </Typography>
            </Box>

            <TextField variant="outlined" placeholder="Buscar" size="small" />
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: categoryColor,
              color: '#fff',
              mt: 2,
              mb: 2,
              transition: 'background-color 0.3s ease',
              '&:hover': {
                bgcolor: categoryColor,
                opacity: 0.9,
              },
            }}
          >
            + Nueva Conversación
          </Button>

          <ListaConversaciones conversaciones={conversacionesFiltradas} />
        </Box>

        {/* Sidebar derecho */}
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
          }}
        >
          <Box sx={{ mt: 8 }}>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Categorías
                </ListSubheader>
              }
            >
              <ListItem button onClick={() => setSelectedCategory('General')}>
                <ListItemIcon><VolumeUpIcon /></ListItemIcon>
                <ListItemText primary="General" />
              </ListItem>
              <ListItem button onClick={() => setSelectedCategory('Anuncios Oficiales')}>
                <ListItemIcon><CampaignIcon /></ListItemIcon>
                <ListItemText primary="Anuncios Oficiales" />
              </ListItem>
              <ListItem button onClick={() => setSelectedCategory('Charla Docente')}>
                <ListItemIcon><ChatIcon /></ListItemIcon>
                <ListItemText primary="Charla Docente" />
              </ListItem>
              <ListItem button onClick={() => setSelectedCategory('Convocatorias')}>
                <ListItemIcon><HowToVoteIcon /></ListItemIcon>
                <ListItemText primary="Convocatorias" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Layout>
  );
}
