import styled, { createGlobalStyle } from 'styled-components';
import reset from './reset';
import color from './variables/color';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    ${color}
  }

`;

export const SectionContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export default GlobalStyle;
