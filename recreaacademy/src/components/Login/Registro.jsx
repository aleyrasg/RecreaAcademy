import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Stack, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { createRecord, getTable } from "../../utils/db";
import RAinput from "../../components/form/RAinput";
import RAselect from "../../components/form/RAselect";
import './login.css'

const DEFAULT_REGISTRO = {
  nombre: '',
  correo: '',
  contrasena: '',
  contrasena2: '',
  institucion_id: '',
  nivel_educativo_id: '',
  nombre: ""
};

function Registro() {
  const navigate = useNavigate();
  const [datos, setDatos] = useState(DEFAULT_REGISTRO);
  const [insitituciones, setInsitituciones] = useState(undefined);
  const [openMsg, setOpenMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({ text: '', severity: 'success' });
  const [niveles, setNiveles] = useState(undefined);

  const getIntsOptions = () =>
    insitituciones?.map((i) => ({ value: i.id_institucion, label: i.nombre }));

  const getNivelesOptions = () =>
    niveles?.map((i) => ({ value: i.id_nivel_educativo, label: i.nombre }));

  const getNiveles = useCallback(async () => {
    const niv = await getTable("niveles_educativos");
    setNiveles(niv);
  }, []);

  const getInstituciones = useCallback(async () => {
    const inst = await getTable("instituciones");
    setInsitituciones(inst);
  }, []);

  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const salir = async () => {
    await delay(2000);
    navigate('/login')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      if (datos.contrasena !== datos.contrasena2) {
        setMsg({ text: "La contraseña no coincide con su confirmación", severity: 'warning' });
        setIsLoading(false);
      } else {
        setIsLoading(true);
        const response = await createRecord('usuarios', {
          nombre: datos.nombre,
          correo: datos.correo,
          contrasena: datos.contrasena,
          institucion_id: datos.institucion_id,
          nivel_educativo_id: datos.nivel_educativo_id,
          nombre: datos.nombre,
          tipo: 1,
          isGoogleAcount: false
        });
        if (response.status === 200 || response.status === 201) {
          setMsg({ text: "Registro Creado", severity: 'success' });
          salir();
        } else {
          setMsg({ text: 'Error al crear el usuario: ' + response.error.message, severity: 'error' });
          setIsLoading(false);
        }
        
      }

    } else {
      setMsg({ text: "Por favor ingrese todos los datos requeridos *", severity: 'warning' });
    }

    handleOpenMsg();
  };

  const handleChange = (e) => {
    const newDatos = datos;
    newDatos[e.target.name] = e.target.value;
    console.log('nuevos: ', newDatos)
    setDatos(newDatos)
  };

  const handleOpenMsg = () => setOpenMsg(true);
  const handleCloseMsg = () => setOpenMsg(false);

  const getInfoForSelects = async () => {
    setIsLoading(true);
    await getInstituciones();
    await getNiveles();
    setIsLoading(false);
  };

  useEffect(() => {
    getInfoForSelects();
  }, []);

  return (
    <>
      <Box justifyItems='center' marginTop='100px' component="form" onSubmit={handleSubmit} noValidate>
        <Stack
          minWidth='400px'
          direction="column"
          spacing='0'
          useFlexGap
          sx={{ flexWrap: 'wrap' }}
        >
          <RAinput
            autoFocus
            required
            label="Nombre"
            name="nombre"
            value={datos?.nombre}
            onChange={handleChange}
          />
          <RAinput
            required
            name="correo"
            label="Correo"
            type="email"
            value={datos?.correo}
            onChange={handleChange}
          />
          <RAinput
            required
            name="contrasena"
            label="Contraseña"
            type="password"
            onChange={handleChange}
          />
          <RAinput
            required
            name="contrasena2"
            label="Confirmar Contraseña"
            type="password"
            onChange={handleChange}
          />
          <RAselect
            required
            name="institucion_id"
            label="Institución"
            value={datos?.institucion_id}
            options={getIntsOptions()}
            onChange={handleChange}
          />
          <RAselect
            required
            name="nivel_educativo_id"
            label="Nivel Educativo"
            value={datos?.nivel_educativo_id}
            options={getNivelesOptions()}
            onChange={handleChange}
          />

          <Stack marginTop='20px'>
            <LoadingButton type='submit' variant='contained' minWidth='100%' loading={isLoading}>
              <span> Registrar</span>
            </LoadingButton>
          </Stack>
        </Stack>
      </Box>
      <Snackbar
        autoHideDuration={2000}
        open={openMsg}
        onClose={handleCloseMsg}
      >
        <Alert
          onClose={handleCloseMsg}
          severity={msg.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {msg.text}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Registro;

