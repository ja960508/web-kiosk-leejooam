import styled from 'styled-components';
import color from '../../../../styles/variables/color';
import shadow from '../../../../styles/variables/shadow';

export const StyledReceiptModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  box-shadow: ${shadow.normalShadow};
  min-width: 480px;

  strong {
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .product {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid ${color.gray};
  }

  .product:last-child {
    margin-bottom: 3rem;
  }

  .receipt-meta {
    font-weight: 600;
    font-size: 1.25rem;
    color: ${color.deppGray};
    margin-bottom: 0.25rem;
  }

  .payment-amount {
    color: ${color.red};
  }
`;
