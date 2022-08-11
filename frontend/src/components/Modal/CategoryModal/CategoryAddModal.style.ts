import styled from 'styled-components';
import color from '../../../styles/variables/color';
import shadow from '../../../styles/variables/shadow';

export const StyledCategoryAddModal = styled.div`
  .add-category-btn {
    background-color: ${color.red};
    color: ${color.white};
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    box-shadow: ${shadow.normalShadow};
    font-size: 1rem;
    display: flex;
    align-items: center;
    svg {
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 0.25rem;
    }
  }
`;
