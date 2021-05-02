import React from 'react'
import * as S from './styles'

import Form from '../../atoms/Form'
import TextField from '../../atoms/TextField'
import Button from '../../atoms/Button'

const LoginForm = ({ login, setLogin, password, setPassword, submitFunciton, labelButton = 'ACESSAR', children }) => {
  return (
    <S.Wrapper>
      <Form onSubmit={submitFunciton}>
        <TextField type="email" aria-label="email" required placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} />
        <TextField type="password" aria-label="password" required placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit">{labelButton}</Button>
        {children}
      </Form>
    </S.Wrapper>
  )
}

export default LoginForm
