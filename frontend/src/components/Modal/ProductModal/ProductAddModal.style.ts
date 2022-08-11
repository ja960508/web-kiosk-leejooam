import styled from 'styled-components';
import { StyledModalForm } from '../../../styles/commons/StyledModalForm';
import color from '../../../styles/variables/color';

export const StyledProductAddForm = styled(StyledModalForm)`
  .option-btn-container {
    display: flex;
    margin-bottom: 0.5rem;

    button {
      border-radius: 10px;
      flex: 1 1 40%;
      padding: 1rem;
      background-color: ${color.red};
      color: ${color.white};
    }

    button:first-child {
      margin-right: 0.5rem;
    }
  }

  .add-options {
    font-size: 0.9rem;
    color: ${color.black};
    margin-bottom: 0.5rem;
  }
`;
