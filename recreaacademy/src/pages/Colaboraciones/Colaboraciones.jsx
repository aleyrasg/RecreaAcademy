import React from "react";
import Layout from "../../components/Layout/Layout"; // Ajusta si la ruta cambia
import "./Colaboraciones.css";
import { TextField, InputAdornment, Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

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
      <div className="card-container">
        {users.map((user) => (
          <div
            className="user-card"
            key={user.id}
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
      <div className="search-container">
      <TextField
        placeholder="Buscar proyectos"
        variant="outlined"
        size="small"
        width= "500px"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#B0B0B0' }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: '10px',
            backgroundColor: '#fff',
            paddingLeft: '8px'
          }
        }}
        inputProps={{
          style: {
            fontWeight: 600,
            color: '#B0B0B0'
          }
        }}
      />

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          borderRadius: '10px',
          backgroundColor: '#FF004C',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#d60042'
          }
        }}
      >
        Nuevo proyecto
      </Button>

      </div>
    </Layout>
  );
}

export default Colaboraciones;
