import React from 'react'
import * as S from './styles'

const AuthPage = ({ ...props }) => {
  return (
    <S.Wrapper {...props}>
      {props.children}
    </S.Wrapper>
  )
}

export default AuthPage
