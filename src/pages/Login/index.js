import React, { useState } from 'react';

import AuthPage from "../../components/templates/AuthPage";
import LoginForm from '../../components/molecules/LoginForm'

function Login() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')

  return <AuthPage>
    <LoginForm
      login={login}
      setLogin={setLogin}
      password={password}
      setPassword={setPassword}
    />
  </AuthPage>;
}

export default Login;