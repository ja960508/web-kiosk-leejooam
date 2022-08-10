import React, { useContext } from 'react';
import { basketContext } from '../../context/BasketProvider';
import { BasketType } from '../../types/basket';
import ProductThumbnail from '../Modal/ProductModal/ProductThumbnail/ProductThumbnail';
import { StyledBasketList } from './Basket.style';

function Basket() {
  const { basket, changeBasket } = useContext(basketContext);

  const handleProductFromBasket = (item: BasketType) => {
    changeBasket((prev) =>
      prev.filter((v) => v.product.id !== item.product.id),
    );
  };

  return (
    <StyledBasketList>
      {basket.map((item, idx) => {
        return (
          <li key={idx}>
            <button
              className="delete-basket-btn"
              onClick={() => handleProductFromBasket(item)}
            >
              X
            </button>
            <ProductThumbnail thumbnail={item.product.thumbnail} />
            <div className="product-meta">
              <div>{item.product.name}</div>
              <div>{item.quantity} 개</div>
            </div>
          </li>
        );
      })}
    </StyledBasketList>
  );
}

export default Basket;
