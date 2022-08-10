import React, { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import { CartType } from '../../types/Cart';
import ProductThumbnail from '../Modal/ProductModal/ProductThumbnail/ProductThumbnail';
import { StyledBasketList } from './Cart.style';

function Basket() {
  const { cart, changeCart } = useContext(cartContext);

  const handleProductFromBasket = (item: CartType) => {
    changeCart((prev) => prev.filter((v) => v.product.id !== item.product.id));
  };

  return (
    <StyledBasketList>
      {cart.map((item, idx) => {
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
