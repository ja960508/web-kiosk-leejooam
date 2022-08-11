import styled from 'styled-components';
import shadow from '../../styles/variables/shadow';

export const StyledProductList = styled.div``;

export const StyledProductItem = styled.li`
  position: relative;
  box-shadow: ${shadow.lowShadow};
  border-radius: 10px;
  padding: 1rem;
  margin: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 12rem;
  }

  .product-name {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .product-price {
    font-size: 1.5rem;
  }
`;
