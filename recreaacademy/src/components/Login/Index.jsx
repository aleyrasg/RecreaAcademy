import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Box, Stack, Snackbar, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { signIn } from './utils';
import { getRecord, login } from "../../utils/db";
import { useGetUser } from '../../hooks/useGetUser';
import RAinput from "../../components/form/RAinput";
import './login.css'


const DEFAULT_LOGIN = {
  correo: "",
  contrasena: "",
};

function Login() {
  const navigate = useNavigate();
  const [openMsg, setOpenMsg] = useState(false);
  const [msg, setMsg] = useState({ text: '', severity: 'success' });
  const [datos, setDatos] = useState(DEFAULT_LOGIN);
  const [isLogin, setIsLogin] = useState(false);
  const { user, isLoading } = useGetUser()

  const handleOpenMsg = () => setOpenMsg(true);
  const handleCloseMsg = () => setOpenMsg(false);

  const autoLogin = async () => {
    if (!isLoading && user?.email) {
      navigate('/')
    }
  };

  const handleChange = (e) => {
    const newDatos = datos;
    newDatos[e.target.name] = e.target.value;
    console.log('nuevos: ', newDatos)
    setDatos(newDatos)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogin(true)
    if (e.target.checkValidity()) {
      const usr = await login(datos.correo, datos.contrasena);
      if (usr?.id_usuario) {
        setMsg({ text: "Usuario autentificado", severity: 'success' });
      } else {
        setMsg({ text: "Datos Incorrectos", severity: 'error' });
      }
    } else {
      setMsg({ text: "Por favor ingrese todos los datos requeridos *", severity: 'warning' });
    }
    handleOpenMsg();
    setIsLogin(false)
  };

  useEffect(() => {
    autoLogin();
  }, []);


  //console.log(datos)
  return (
    <Box justifyItems='center' marginTop='100px' component="form" onSubmit={handleSubmit} noValidate>
      <Stack
        minWidth='400px'
        direction="column"
        spacing='10px'
        useFlexGap
        sx={{ flexWrap: 'wrap' }}
      >

        <RAinput
          required
          name="correo"
          label="Correo"
          type="email"
          onChange={handleChange}
        />
        <RAinput
          required
          name="contrasena"
          label="Contraseña"
          type="password"
          onChange={handleChange}
        />
        <LoadingButton variant='contained' type='submit' loading={isLogin || isLoading}>
          <span> Login</span>
        </LoadingButton>

        <Stack
          direction="row"
          useFlexGap
          sx={{ flexWrap: 'wrap' }}
        >

          <Box width='50%'>
            <Link to="#" >
              <Typography sx={{ m: 2 }}>Olvide mi crontraseña</Typography>
            </Link>
          </Box>
          <Box width='50%'>
            <Link to="/Registro" >
              <Typography sx={{ m: 2 }} align='right'>Registrarse</Typography>
            </Link>
          </Box>

        </Stack>

        <Button onClick={signIn} variant='contained' color='white'>
          <img src="/RecreaAcademy/logo_google_signin.png" width='20px' height='20px' salt="G" />
          <span> Sign in with Google</span>
        </Button>
      </Stack>

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
    </Box>
  );
}

export default Login;

