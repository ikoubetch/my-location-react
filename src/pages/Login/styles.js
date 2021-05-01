import styled from 'styled-components';
import { Link } from "react-router-dom";

import theme from '../../styles/theme'


export const Anchor = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: ${theme.colors.primary};
  margin-top: ${theme.spacings.large};
`;
