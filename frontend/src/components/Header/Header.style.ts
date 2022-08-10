import styled from 'styled-components';
import color from '../../styles/variables/color';

export const StyledHeader = styled.header`
  background: #1e2222;
  color: #fcfcfc;
  padding: 1rem;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1rem;
  }

  .header-btns {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    button {
      background-color: ${color.white};
      padding: 0.25rem;
      margin-bottom: 1rem;
    }
  }
`;