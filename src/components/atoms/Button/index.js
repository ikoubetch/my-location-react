import React from 'react'
import * as S from './styles'

const Button = ({ ...props }) => {
  return (
    <S.Wrapper {...props}>
      {props.children}
    </S.Wrapper>
  )
}

export default Button
