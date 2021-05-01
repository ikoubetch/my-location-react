import React from 'react'
import * as S from './styles'

import Button from '../../atoms/Button'

const Header = ({ onClick }) => {
  return (
    <S.Wrapper>
      <Button type="button" onClick={onClick}>SAIR</Button>
    </S.Wrapper>
  )
}

export default Header
