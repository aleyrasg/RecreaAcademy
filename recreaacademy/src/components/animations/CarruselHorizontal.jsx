import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const videos = [
  { id: 'Zrcjl_FLn30', color: '#1F9CD0' },
  { id: 'cHlRSPYmVig', color: '#02B6BD' },
  { id: 'nSoXzyVWo0w', color: '#FEB101' },
  { id: 'aAkmFEhYONE', color: '#FE8A12' },
  { id: 'Bfi2oYWEeKI', color: '#FE6F60' },
  { id: 'B6qaG5aEsb8', color: '#A3A804' },
  { id: 'fallback', color: '#E54EB5' },
];

const Congreso = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <Box sx={{ py: 4 }}>
      {/* Large color box */}
      <Box
        sx={{
          width: '80%',
          height: '300px',
          mx: 'auto',
          mb: 4,
          backgroundColor: selectedVideo.color,
          borderRadius: 4,
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.4s ease',
          transform: 'scale(1.03)',
          cursor: 'pointer',
        }}
        onClick={() => navigate(`/congreso/detalle/${selectedVideo.color.replace('#', '')}`)}
      >
        <Typography
          sx={{
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Este es un ejemplo (ID: {selectedVideo.id})
        </Typography>
      </Box>

      {/* Carousel of color blocks */}
      <Box
        sx={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          px: 2,
        }}
      >
        {videos.map((video, index) => (
          <Box
            key={index}
            onClick={() => {
              setSelectedVideo(video);
              navigate(`/congreso/detalle/${video.color.replace('#', '')}`);
            }}
            sx={{
              width: 80,
              height: 80,
              backgroundColor: video.color,
              borderRadius: 2,
              display: 'inline-block',
              cursor: 'pointer',
              border: '2px solid white',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Congreso;