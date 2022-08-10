import React, { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import { CartType } from '../../types/Cart';
import ProductThumbnail from '../Modal/ProductModal/ProductThumbnail/ProductThumbnail';
import { StyledCartList } from './Cart.style';

function Cart() {
  const { cart, changeCart } = useContext(cartContext);

  const handleProductFromCart = (item: CartType) => {
    changeCart((prev) => prev.filter((v) => v.product.id !== item.product.id));
  };

  return (
    <StyledCartList>
      {cart.map((item, idx) => {
        return (
          <li key={idx}>
            <button
              className="delete-cart-btn"
              onClick={() => handleProductFromCart(item)}
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
    </StyledCartList>
  );
}

export default Cart;
