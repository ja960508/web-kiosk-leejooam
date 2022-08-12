import styled, { css } from 'styled-components';
import { fadein } from '../../styles/animation';
import shadow from '../../styles/variables/shadow';

export const StyledProductList = styled.div``;

export const StyledProductItem = styled.li<{ duration: number }>`
  position: relative;
  box-shadow: ${shadow.lowShadow};
  border-radius: 10px;
  padding: 1rem;
  margin: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ duration }) =>
    css`
      ${fadein} ${duration > 1.5 ? 1.5 : duration}s;
    `};

  img {
    width: 8rem;
  }

  .product-name {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .product-price {
    font-size: 1.25rem;
  }
`;
