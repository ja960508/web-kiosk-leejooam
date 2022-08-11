import styled from 'styled-components';
import color from '../variables/color';

export const DeleteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  svg path {
    fill: ${color.red};
  }
`;
