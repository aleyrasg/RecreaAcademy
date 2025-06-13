import confetti from 'canvas-confetti';
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import { keyframes } from '@mui/material/styles';
import './Ranking.css';
import Layout from '../../components/Layout/Layout';
import medalla from '../../assets/medalla.png';
// Descripciones aleatorias para la medalla
const descripcionesMedalla = [
  'Obtuviste esta medalla por tu compromiso excepcional en los retos semanales.',
  'Tu liderazgo y constancia en las actividades colaborativas te hicieron destacar.',
  'Has demostrado habilidades sobresalientes en innovación y resolución de problemas.',
];
const descripcionAleatoria = descripcionesMedalla[Math.floor(Math.random() * descripcionesMedalla.length)];
import EncabezadoRanking from '../../components/EncabezadoRanking/EncabezadoRanking';
import ListaMiembrosAnimada from '../../components/ListaMiembrosAnimada/ListaMiembrosAnimada';
import ResumenRankingDerecha from '../../components/ResumenRankingDerecha/ResumenRankingDerecha';

const subirRebote = keyframes`
  0% { transform: translateY(100px); opacity: 0; }
  60% { transform: translateY(-10px); opacity: 1; }
  80% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const coloresPodio = ['#FC083B', '#FC7D04', '#FFB127'];

const miembros = [
  { nombre: 'Luis Castañeda', porcentaje: 78 },
  { nombre: 'Sofia Castellanos', porcentaje: 82, destacado: true },
  { nombre: 'Alejandra Sánchez', porcentaje: 69 },
]
  .sort((a, b) => b.porcentaje - a.porcentaje)
  .map((m, i) => ({
    ...m,
    medalla: i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : ''
  }));

const Ranking = () => {
  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);
  const ordenPodio = [1, 0, 2]; // Segundo, Primero, Tercero

  return (
    <Layout>
      <Box sx={{
        px: 4,
        py: 3,
        position: 'relative',
        '& *:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.3s ease-in-out',
        }
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
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
          <Typography variant="h1" fontWeight="bold" sx={{ color: '#FC083B', textAlign: 'left' }}>
            Mis logros
          </Typography>
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

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 4, mb: 4 }}>
          {ordenPodio.map((_, i) => {
            const m = miembros[ordenPodio[i]];
            return (
              <Box
                key={m.nombre}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  height: [140, 180, 120][i],
                  width: 80,
                  bgcolor: coloresPodio[i],
                  borderRadius: 2,
                  p: 1,
                  color: '#fff',
                  fontWeight: 'bold',
                  boxShadow: 3,
                  animation: `${fadeIn} 0.8s ease ${i * 0.2}s forwards`,
                  animationFillMode: 'forwards',
                  opacity: 0,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <Typography variant="body2" textAlign="center">{m.nombre}</Typography>
                <Typography variant="caption" sx={{ fontSize: '2rem' }}>{m.medalla}</Typography>
              </Box>
            )
          })}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListaMiembrosAnimada miembros={miembros} medalla={medalla} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Box
              component="img"
              src={medalla}
              alt="Medalla"
              sx={{
                width: 240,
                height: 240,
                marginBottom: 8,
                cursor: 'pointer',
                alignSelf: 'center'
              }}
              onMouseEnter={(e) => {
                const tooltip = document.createElement('div');
                tooltip.innerText = descripcionAleatoria;
                tooltip.style.position = 'absolute';
                tooltip.style.top = `${e.clientY + 10}px`;
                tooltip.style.left = `${e.clientX}px`;
                tooltip.style.background = '#333';
                tooltip.style.color = '#fff';
                tooltip.style.padding = '6px 12px';
                tooltip.style.borderRadius = '8px';
                tooltip.style.zIndex = 9999;
                tooltip.style.fontSize = '0.9rem';
                tooltip.className = 'custom-medal-tooltip';
                document.body.appendChild(tooltip);
              }}
              onMouseLeave={() => {
                const existing = document.querySelector('.custom-medal-tooltip');
                if (existing) existing.remove();
              }}
            />
            <Box sx={{ mt: 2 }}>
              <ResumenRankingDerecha miembros={miembros} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Ranking;