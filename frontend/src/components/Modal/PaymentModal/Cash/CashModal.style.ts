import styled from 'styled-components';
import { StyledModalForm } from '../../../../styles/commons/StyledModalForm';
import color from '../../../../styles/variables/color';
import shadow from '../../../../styles/variables/shadow';

export const StyledCashModal = styled(StyledModalForm)`
  button {
    font-size: 1.5rem;
  }

  .cash-select {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    button {
      flex: 1 1 45%;
      padding: 1rem;
      box-shadow: ${shadow.lowShadow};
      border-radius: 10px;
    }
  }

  .amount-info {
    margin-top: 1rem;
    font-size: 1.25rem;

    .input-amount {
      margin-bottom: 0.5rem;
    }

    .input-amount.lack {
      color: ${color.red};
    }
  }
`;
