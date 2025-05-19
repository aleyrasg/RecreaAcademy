// src/pages/Login/LoginPage.jsx
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';

export default function LoginPage() {
  return (
    <div>
      <h2>Inicia sesión o regístrate</h2>
      <Login />
      <hr />
      <SignUp />
    </div>
  );
}
