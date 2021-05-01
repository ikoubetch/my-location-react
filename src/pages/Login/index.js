import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import AuthPage from "../../components/templates/AuthPage";
import LoginForm from '../../components/molecules/LoginForm'

import { login } from "../../service/auth";
import { Context } from '../../store'
import { setUser } from "../../store/actions"

import { Anchor } from './styles'

function Login() {

  const [state, dispatch] = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (state.user) {
      console.log('ok')
    }
  }, [state])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(email, password)

    const { user } = data;

    if (user) {
      toast.success('Login realizado com sucesso.')
      dispatch(setUser(user))
    }
  }

  return <AuthPage>
    <LoginForm
      submitFunciton={handleSubmit}
      login={email}
      setLogin={setEmail}
      password={password}
      setPassword={setPassword}
    >
      <Anchor to="/register">Não tem login? Registre aqui!</Anchor>
    </LoginForm>
  </AuthPage>;
}

export default Login;