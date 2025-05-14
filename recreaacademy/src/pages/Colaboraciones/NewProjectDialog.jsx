import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

function NewProjectDialog({ open, onClose, newProject, setNewProject, onCreate }) {
  return (
    <Dialog open={open} onClose={onClose}>
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
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onCreate} variant="contained" color="primary">
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewProjectDialog;
