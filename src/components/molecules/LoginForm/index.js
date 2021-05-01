import React from 'react'
import * as S from './styles'

import Form from '../../atoms/Form'
import TextField from '../../atoms/TextField'
import Button from '../../atoms/Button'

const LoginForm = ({ login, setLogin, password, setPassword, submitFunciton }) => {
  return (
    <S.Wrapper>
      <Form onSubmit={submitFunciton}>
        <TextField type="text" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} />
        <TextField type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit">ACESSAR</Button>
      </Form>
    </S.Wrapper>
  )
}

export default LoginForm
