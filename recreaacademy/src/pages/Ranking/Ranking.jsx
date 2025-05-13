import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Ranking.css';
import LayoutSubmenu from '../../components/Layout/LayoutSubmenu';
import medalla from '../../assets/medalla.png';

const miembros = [
  { nombre: 'Luis Castañeda', porcentaje: 78 },
  { nombre: 'Sofia Castellanos', porcentaje: 82, destacado: true },
  { nombre: 'Alejandra Sánchez', porcentaje: 69 },
];

const Ranking = () => {
  return (
    <LayoutSubmenu>
      <Box sx={{ px: 4, py: 3, position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" fontWeight="bold">Brújula Creativa</Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium" sx={{ color: '#FC083B' }}>Proyectos Activos</Typography>
              <Typography variant="h6" fontWeight="bold">16</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium" sx={{ color: '#FB8C00' }}>Próximos Proyectos</Typography>
              <Typography variant="h6" fontWeight="bold">08</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#ccc', width: 40, height: 40 }} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 3 }}>
          <Typography variant="h3" sx={{ color: '#f44336', fontWeight: 700 }}>Ranking</Typography>
          <Box>
            <Typography variant="body2" fontWeight="medium">Integrantes del equipo (26)</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} sx={{ width: 30, height: 30, bgcolor: '#ddd' }} />
              ))}
              <Box sx={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                bgcolor: 'orange',
                color: '#fff',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                20+
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography variant="h6" sx={{ mb: 2 }}>Desempeño del equipo</Typography>

        {miembros.map((miembro, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              mb: 2,
              borderColor: miembro.destacado ? 'orange' : '#e0e0e0',
              boxShadow: miembro.destacado ? '0 0 12px rgba(255,165,0,0.3)' : '',
              borderWidth: miembro.destacado ? '2px' : '1px',
              backgroundColor: miembro.destacado ? '#fffdf7' : '#fff',
            }}
          >
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src={medalla} alt="medalla" style={{ width: 40 }} />

              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2, bgcolor: '#ccc' }} />
                  <Typography fontWeight={miembro.destacado ? 'bold' : 'normal'}>
                    {miembro.nombre}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    {miembro.porcentaje}%
                  </Typography>
                  <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </LayoutSubmenu>
  );
};

export default Ranking;