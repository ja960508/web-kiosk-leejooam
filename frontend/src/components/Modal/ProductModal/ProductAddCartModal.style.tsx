import styled from 'styled-components';
import { StyledModalForm } from '../../../styles/commons/StyledModalForm';
import color from '../../../styles/variables/color';

export const StyledProductAddCartModal = styled(StyledModalForm)`
  flex-direction: row;
  min-width: 480px;

  strong {
    font-size: 1.5rem;
    margin-right: 0.25rem;
  }

  .price {
    font-size: 1.25rem;
    color: ${color.deppGray};
    margin-bottom: 0.5rem;
  }

  img {
    width: 14rem;
    margin-right: 2rem;
    flex: 1 1 50%;
  }

  .product-meta {
    flex: 1 1 50%;
  }

  button[type='submit'] {
    width: 100%;
  }
`;
