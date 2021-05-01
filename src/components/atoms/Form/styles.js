import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.form`
  background: ${theme.colors.white};
  min-width: 250px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacings.large};
  border-radius: ${theme.border.radius};
`