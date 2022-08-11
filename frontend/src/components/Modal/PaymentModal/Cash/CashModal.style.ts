import styled from 'styled-components';
import shadow from '../../../../styles/variables/shadow';

export const StyledCashModal = styled.form`
  .cash-select {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    button {
      flex: 1 1 45%;
      padding: 1rem;
      box-shadow: ${shadow.normalShadow};
    }

    .submit-btn {
      margin-top: 1rem;
    }
  }
`;
