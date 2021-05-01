import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.input`
  margin: ${theme.spacings.small} 0;
  background: ${theme.colors.white};
  padding: ${theme.spacings.small};
  border: 1px solid ${theme.colors.border};
  box-sizing: border-box;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.main};
`