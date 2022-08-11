import styled from 'styled-components';
import color from '../../../styles/variables/color';

export const StyledCategoryDeleteModal = styled.div`
  .delete-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    svg path {
      fill: ${color.red};
    }
  }
`;
