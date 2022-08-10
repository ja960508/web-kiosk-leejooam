import styled from 'styled-components';

export const StyledBasketList = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  overflow-x: scroll;
  background-color: rgba(32, 11, 11, 0.8);

  li {
    position: relative;
    color: white;
    opacity: 1;
    min-width: 300px;
    border: 1px solid red;
    display: flex;

    .product-meta,
    img {
      width: 50%;
    }

    .delete-basket-btn {
      color: black;
      position: absolute;
      top: -1rem;
      right: 0;
    }
  }
`;
