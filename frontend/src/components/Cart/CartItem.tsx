import React from 'react';
import { CartType } from '../../types/Cart';
import ProductThumbnail from '../Modal/ProductModal/ProductThumbnail/ProductThumbnail';
import CartItemOption from './CartItemOption';

interface Props {
  cartItem: CartType;
  handleProductFromCart: (cartItem: CartType) => void;
}

function CartItem({ cartItem, handleProductFromCart }: Props) {
  const { quantity, ...options } = cartItem.options;
  const { product } = cartItem;

  return (
    <li>
      <button
        className="delete-cart-btn"
        onClick={() => handleProductFromCart(cartItem)}
      >
        X
      </button>
      <ProductThumbnail thumbnail={product.thumbnail} />
      <div className="product-meta">
        <div>{product.name}</div>
        <div>{quantity} 개</div>
        {Object.entries(options).map(([optionName, value], idx) => (
          <CartItemOption key={idx} optionName={optionName} value={value} />
        ))}
      </div>
    </li>
  );
}

export default CartItem;
