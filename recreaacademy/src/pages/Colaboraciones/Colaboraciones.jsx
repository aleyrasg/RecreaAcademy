import React from "react";
import Layout from "../../components/Layout/Layout"; // Ajusta si la ruta cambia
import "./Colaboraciones.css";
import { TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList"; // Agrega esto arriba con los demás imports

const users = [
  { id: 1, color: "#FFB127" },
  { id: 2, color: "#FC7D04" },
  { id: 3, color: "#FC083B" },
  { id: 4, color: "#FFB127" },
  { id: 5, color: "#FC7D04" },
  { id: 6, color: "#FC083B" },
];

function Colaboraciones() {
  return (
    <Layout>
      <div className="colaboraciones-header">
        <h1 className="colaboraciones-title">Colaboraciones</h1>
        <p className="colaboraciones-subtitle">
          Conecta con otros docentes, postula ideas y construyan juntos recursos
          educativos!
        </p>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[...users, ...users].map((user, index) => (
            <div
              className="user-card"
              key={index}
              style={{ backgroundColor: user.color }}
            >
              <div className="user-icon">👤</div>
              <div className="user-name">Usuario</div>
              <button className="follow-btn" style={{ color: user.color }}>
                Seguir
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="search-container">
        <TextField
          placeholder="Buscar proyectos"
          variant="outlined"
          size="small"
          width="500px"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#B0B0B0" }} />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "10px",
              backgroundColor: "#fff",
              paddingLeft: "8px",
            },
          }}
          inputProps={{
            style: {
              fontWeight: 600,
              color: "#B0B0B0",
            },
          }}
        />

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#FF004C",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#d60042",
            },
          }}
        >
          Nuevo proyecto
        </Button>
      </div>
      <div className="proyectos-section">
        <div className="proyectos-tabs">
          <span className="tab active">Destacados</span>
          <span className="tab">Nuevos</span>
          <span className="tab">Participando</span>
          <span className="tab">Mis propuestas</span>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              marginLeft: "auto",
            }}
          >
            Filtros
          </Button>
        </div>

        <div className="proyecto-card">
          <div className="proyecto-info">
            <h3>Aplicación de IA para el aula</h3>
            <p>
              Desarrollar una aplicación móvil basada en inteligencia artificial
              para promover el aprendizaje en estudiantes
            </p>
          </div>
          <div className="proyecto-actions">
            <Button
              variant="outlined"
              sx={{ borderRadius: "20px", textTransform: "none" }}
            >
              Ver proyecto
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF004C",
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#d60042",
                },
              }}
            >
              Unirme
            </Button>
          </div>
        </div>

        <div className="proyecto-card">
          <div className="proyecto-info">
            <h3>Recurso abierto de historia</h3>
            <p>
              Crear un recurso educativo interactivo para enseñar historia
              antigua
            </p>
          </div>
          <div className="proyecto-actions">
            <Button
              variant="outlined"
              sx={{ borderRadius: "20px", textTransform: "none" }}
            >
              Ver proyecto
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF004C",
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#d60042",
                },
              }}
            >
              Unirme
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Colaboraciones;
