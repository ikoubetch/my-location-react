import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'

import AuthPage from "../../components/templates/AuthPage";
import LoginForm from '../../components/molecules/LoginForm'

import { register } from "../../service/auth";
import { sendLoginSuccessful } from "../../service/analytics";
import { Context } from '../../store'
import { setUser, setLoading } from "../../store/actions";

function Register() {

  const [state, dispatch] = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))

    try {
      const data = await register(email, password)

      const { user } = data;

      if (user) {
        await sendLoginSuccessful(user)

        dispatch(setUser(user))
        toast.success('Registrado com sucesso.')
      }
    } catch (err) {
      toast.error(err.message)
    } finally {
      dispatch(setLoading(false))

    }
  }

  const home = <Redirect to="/" />

  return !state.user ?
    <AuthPage>
      <LoginForm
        submitFunciton={handleSubmit}
        login={email}
        setLogin={setEmail}
        password={password}
        setPassword={setPassword}
        labelButton="REGISTRAR"
      />
    </AuthPage> : home;
}

export default Register;