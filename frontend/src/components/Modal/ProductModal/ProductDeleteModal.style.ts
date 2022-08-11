import styled from 'styled-components';
import color from '../../../styles/variables/color';

export const StyledProductDeleteModal = styled.div`
  .delete-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    svg path {
      fill: ${color.red};
    }
  }
`;
