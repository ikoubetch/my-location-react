import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.div`
  border: 16px solid ${theme.colors.white}; 
  border-top: 16px solid ${theme.colors.primary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 45%;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`