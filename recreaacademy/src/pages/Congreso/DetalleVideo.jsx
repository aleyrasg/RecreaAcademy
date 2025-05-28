import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

const DetalleVideo = () => {
  const { color } = useParams();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Video del Congreso - Color: #{color}
      </Typography>
      <Box component="iframe"
        src={`https://www.youtube.com/embed/${color}`}
        width="100%" height="400px"
        style={{ borderRadius: 12, marginBottom: 24 }}
      />
      <Typography>
        Este es el detalle del video correspondiente al color: #{color}. Aquí se mostraría la información relevante del congreso, el video embebido y su descripción.
      </Typography>
    </Box>
  );
};

export default DetalleVideo;