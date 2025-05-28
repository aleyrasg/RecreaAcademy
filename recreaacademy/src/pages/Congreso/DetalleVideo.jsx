import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const DetalleVideo = () => {
  const { color } = useParams();

  return (
    <Layout>
      <Box sx={{ display: "flex", p: 4 }}>
        {/* Contenido principal a la izquierda */}
        <Box sx={{ flex: 1, pr: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Congreso
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "300px",
              backgroundColor: `#${color}`,
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              mb: 2,
            }}
          />
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Este es un ejemplo de visualización con el color seleccionado
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Esta página es un prototipo y solo representa el color elegido desde el carrusel.
          </Typography>
        </Box>

        {/* Transcripción a la derecha */}
        <Paper
          elevation={3}
          sx={{
            width: "300px",
            height: "100%",
            p: 2,
            borderRadius: 2,
            ml: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="error" mb={2}>
            Transcripción
          </Typography>
          <Box
            component="input"
            type="text"
            placeholder="Buscar en el video"
            sx={{
              mb: 2,
              px: 1,
              py: 1,
              borderRadius: 1,
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
          <Box sx={{ overflowY: "auto", flex: 1 }}>
            {["1:35", "1:38", "1:40", "1:42", "1:44", "1:46", "1:48", "1:50", "1:52", "1:54", "1:56"].map((time) => (
              <Box key={time} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    backgroundColor: "#E50914",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "12px",
                    borderRadius: 1,
                    px: 1,
                    py: "2px",
                    mr: 1,
                    minWidth: "30px",
                    textAlign: "center",
                  }}
                >
                  {time}
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Texto de ejemplo para el minuto {time}.
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default DetalleVideo;