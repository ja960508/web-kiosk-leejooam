import { css } from 'styled-components';
import color from './variables/color';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${color.white};
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    border: none;
    outline: none;
  }
`;

export default reset;
