import styled from 'styled-components';
import color from '../../styles/variables/color';
import shadow from '../../styles/variables/shadow';

export const StyledCartContainer = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0;
  background-color: rgba(32, 11, 11, 0.8);
  display: flex;
  padding: 1rem;

  .cart-controller {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;

    button {
      margin-top: 0;
      font-size: 1.5rem;
    }

    .total-price {
      padding: 0.5rem 1rem;
      border-radius: 10px;
      background-color: ${color.white};
      text-align: center;
      font-size: 1.25rem;
    }
  }
`;

export const StyledCartList = styled.ul`
  flex: 1 1 1%;
  display: flex;
  overflow-x: scroll;

  li {
    background-color: ${color.lightGray};
    border-radius: 10px;
    box-shadow: ${shadow.normalShadow};
    padding: 1.5rem 0;
    padding-right: 2.5rem;
    margin-right: 1rem;
    position: relative;
    color: ${color.black};
    opacity: 1;
    min-width: 300px;
    display: flex;

    .product-meta {
      flex: 1 1 100%;

      .product-name {
        font-size: 1.25rem;
        font-weight: 600;
      }

      .product-quantity {
        font-weight: 600;
        color: ${color.red};
        margin-bottom: 0.25rem;
      }
    }

    .product-option {
      font-size: 0.8rem;
      color: ${color.deppGray};
    }

    img {
      width: 8rem;
    }

    svg path {
      fill: ${color.red};
    }
  }
`;
