import styled from 'styled-components';
import shadow from '../../styles/variables/shadow';

export const StyledContainer = styled.div`
  li {
    cursor: pointer;
    border: 1px solid black;
    box-shadow: ${shadow.normalShadow};
    text-align: center;
    padding: 1.5rem 0;
    position: relative;
  }

  .categoryEdit {
    position: absolute;
    right: 0rem;
    top: 0;

    button {
      margin-right: 0.5rem;
    }
  }
`;
