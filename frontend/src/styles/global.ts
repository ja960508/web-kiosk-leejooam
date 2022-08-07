import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import color from './variables/color';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    ${color}
  }
`;

export default GlobalStyle;
