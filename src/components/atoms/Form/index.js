import React from 'react'
import * as S from './styles'

const Form = ({ ...props }) => {
  return (
    <S.Wrapper {...props}>
      {props.children}
    </S.Wrapper>
  )
}

export default Form
