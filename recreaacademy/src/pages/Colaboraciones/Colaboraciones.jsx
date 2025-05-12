import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Colaboraciones.css";
import {
  TextField,
  InputAdornment,
  Button,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";

const users = [
  { id: 1, color: "#FFB127" },
  { id: 2, color: "#FC7D04" },
  { id: 3, color: "#FC083B" },
  { id: 4, color: "#FFB127" },
  { id: 5, color: "#FC7D04" },
  { id: 6, color: "#FC083B" },
];

const initialProjects = [
  {
    id: 1,
    title: "Aplicación de IA para el aula",
    description: "Desarrollar una aplicación móvil basada en inteligencia artificial para promover el aprendizaje en estudiantes",
    category: "Destacados",
  },
  {
    id: 2,
    title: "Recurso abierto de historia",
    description: "Crear un recurso educativo interactivo para enseñar historia antigua",
    category: "Nuevos",
  },
];

function Colaboraciones() {
  const [selectedTab, setSelectedTab] = useState("Destacados");
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [openDialog, setOpenDialog] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "", category: "Destacados" });

  const handleAddProject = () => {
    const id = projects.length + 1;
    const updatedProjects = [...projects, { id, ...newProject }];
    setProjects(updatedProjects);
    setOpenDialog(false);
    setNewProject({ title: "", description: "", category: "Destacados" });
  };

  const filteredProjects = projects.filter(
    (proj) =>
      proj.category === selectedTab &&
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "Todos" || proj.category === filter)
  );

  return (
    <Layout>
      <div className="colaboraciones-header">
        <h1 className="colaboraciones-title">Colaboraciones</h1>
        <p className="colaboraciones-subtitle">
          Conecta con otros docentes, postula ideas y construyan juntos recursos educativos!
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
          onClick={() => setOpenDialog(true)}
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
          {["Destacados", "Nuevos", "Participando", "Mis propuestas"].map((tab) => (
            <span
              key={tab}
              className={`tab ${selectedTab === tab ? "active" : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </span>
          ))}

          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            size="small"
            sx={{
              marginLeft: "auto",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#B0B0B0",
              borderColor: "#B0B0B0",
            }}
          >
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="Primaria">Primaria</MenuItem>
            <MenuItem value="Secundaria">Secundaria</MenuItem>
          </Select>
        </div>

        {filteredProjects.map((project) => (
          <div className="proyecto-card" key={project.id}>
            <div className="proyecto-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="proyecto-actions">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  textTransform: "none",
                  color: "#B0B0B0",
                  borderColor: "#B0B0B0",
                  "&:hover": {
                    backgroundColor: "#fff",
                    borderColor: "#B0B0B0",
                  },
                }}
              >
                Ver proyecto
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF004C",
                  borderRadius: "10px",
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
        ))}
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Nuevo Proyecto</DialogTitle>
        <DialogContent>
          <TextField
            label="Título"
            fullWidth
            margin="normal"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          />
          <TextField
            label="Descripción"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          />
          <Select
            fullWidth
            value={newProject.category}
            onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
            sx={{ marginTop: 2 }}
          >
            <MenuItem value="Destacados">Destacados</MenuItem>
            <MenuItem value="Nuevos">Nuevos</MenuItem>
            <MenuItem value="Participando">Participando</MenuItem>
            <MenuItem value="Mis propuestas">Mis propuestas</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button onClick={handleAddProject} variant="contained" color="primary">
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
}

export default Colaboraciones;
