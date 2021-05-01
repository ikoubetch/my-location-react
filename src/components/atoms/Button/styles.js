import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.button`
  margin: ${theme.spacings.small} 0;
  border: 0px;
  background-color: ${theme.colors.primary};
  padding: ${theme.spacings.small} 0;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.medium};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`