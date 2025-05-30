import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function CuentaModal( { open, onClose } ) {

  return (
      <Dialog       
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              onClose();
            },
          },
        }}
      >
        <DialogTitle>Cuenta de Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Revise y actualice sus datos personales
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit">Actualizar</Button>
        </DialogActions>
      </Dialog>
  );
}
