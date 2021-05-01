import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.div`
  button {
    width: 70px;
    position: absolute;
    top: 0px;
    right: ${theme.spacings.small};
    z-index: 1;
  }
`