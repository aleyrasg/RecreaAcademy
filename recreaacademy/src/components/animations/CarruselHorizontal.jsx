import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const colors = [
  '#1F9CD0',
  '#02B6BD',
  '#FEB101',
  '#FE8A12',
  '#FE6F60',
  '#A3A804',
  '#E54EB5',
];

const Congreso = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <Box sx={{ py: 4 }}>
      {/* Large color box */}
      <Box
        sx={{
          width: '80%',
          height: '300px',
          mx: 'auto',
          mb: 4,
          backgroundColor: selectedColor,
          borderRadius: 4,
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.4s ease',
          transform: 'scale(1.03)',
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Este es un ejemplo (aquí irá el video de Congreso)
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
        {colors.map((color, index) => (
          <Box
            key={index}
            onClick={() => setSelectedColor(color)}
            sx={{
              width: 80,
              height: 80,
              backgroundColor: color,
              borderRadius: 2,
              display: 'inline-block',
              cursor: 'pointer',
              border: selectedColor === color ? '4px solid black' : '2px solid white',
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