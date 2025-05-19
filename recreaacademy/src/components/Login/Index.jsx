import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, getUser } from './utils';
import './login.css'

function Login() {
  const navigate = useNavigate();

  const autoLogin = async () => {
    const user = await getUser();
    if (user?.email) {
      navigate('/')
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <div>
      <button onClick={signIn} className='loginButton'>
        <img src="/RecreaAcademy/logo_google_signin.png" width='20px' height='20px' salt="G" />
        <span> Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;

