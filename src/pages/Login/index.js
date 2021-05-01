import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';

import AuthPage from "../../components/templates/AuthPage";
import LoginForm from '../../components/molecules/LoginForm'

import { login } from "../../service/auth";
import { sendLoginSuccessful } from "../../service/analytics";

import { Context } from '../../store'
import { setUser, setLoading } from "../../store/actions"

import { Anchor } from './styles'

function Login() {

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true))
    try {

      const data = await login(email, password)

      const { user } = data;

      if (user) {
        toast.success('Login realizado com sucesso.')
        await sendLoginSuccessful(user)
        dispatch(setUser(user))
      }
    } catch (err) {
      toast.error(err.message)
    } finally {
      dispatch(setLoading(false))
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