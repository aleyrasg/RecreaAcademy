import React from 'react';
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
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Layout from '../../components/Layout/Layout'

const conversaciones = [
  {
    icon: '🎉',
    titulo: '¡Bienvenidas y bienvenidos a Comunidad Recrea!',
    autor: 'Sofía Castellanos',
    hace: 'hace 2 hrs',
    respuestas: 32,
  },
  {
    icon: '☕',
    titulo: '¿Qué te inspira a seguir enseñando?',
    autor: 'Alejandra Sánchez',
    hace: 'hace 2 días',
    respuestas: 30,
  },
  {
    icon: '🛠️',
    titulo: 'Herramientas digitales que realmente te han funcionado',
    autor: 'Luis Castañeda',
    hace: 'hace 2 días',
    respuestas: 22,
  },
];

export default function ComunidadRecrea() {
  return (
    <Layout>
        <h1>Comunidad Recrea</h1>
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#fdfdfd' }}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">General</Typography>
          <TextField variant="outlined" placeholder="Buscar" size="small" />
        </Box>

        <Button
          variant="contained"
          sx={{ bgcolor: '#f50057', color: '#fff', mt: 2, mb: 2 }}
        >
          + Nueva Conversación
        </Button>

        {/* Lista de conversaciones */}
        <List>
          {conversaciones.map((conv, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start" sx={{ bgcolor: '#fff', mb: 1, borderRadius: 2 }}>
                <ListItemText
                  primary={`${conv.icon} ${conv.titulo}`}
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
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Sidebar derecho */}
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ mt: 8 }}>
          <List>
            <ListItem button>
              <ListItemIcon><VolumeUpIcon /></ListItemIcon>
              <ListItemText primary="General" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><CampaignIcon /></ListItemIcon>
              <ListItemText primary="Anuncios Oficiales" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ChatIcon /></ListItemIcon>
              <ListItemText primary="Charla Docente" />
            </ListItem>
            <ListItem button>
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
