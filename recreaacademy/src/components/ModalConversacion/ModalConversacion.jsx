import React from 'react';
import './ModalConversacion.css';
import { TextField, Button } from '@mui/material';

const ModalConversacion = ({ isOpen, onClose, onStartConversation, nuevoTitulo, setNuevoTitulo, nuevoMensaje, setNuevoMensaje }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Iniciar nueva conversación</h2>
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
        />
        <div className="modal-actions">
          <Button variant="contained" color="primary" onClick={onStartConversation}>
            Iniciar
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalConversacion;