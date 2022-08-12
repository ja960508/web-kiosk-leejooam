import React from 'react';
import { XButton } from '../../assets/icons';
import { DeleteButton } from '../../styles/commons/DeleteButton';
import { CartType } from '../../types/cart';
import ProductThumbnail from '../ProductList/ProductThumbnail/ProductThumbnail';
import CartItemOption from './CartItemOption';

interface Props {
  cartItem: CartType;
  handleProductFromCart: (cartItem: CartType) => void;
}

function CartItem({ cartItem, handleProductFromCart }: Props) {
  const { quantity, options, product } = cartItem;

  const onDelete = () => handleProductFromCart(cartItem);

  return (
    <li className="cart-item">
      <DeleteButton onClick={onDelete}>
        <XButton />
      </DeleteButton>
      <ProductThumbnail thumbnail={product.thumbnail} />
      <div className="product-meta">
        <div className="product-name">{product.name}</div>
        <div className="product-quantity">{`${quantity} 개`}</div>
        {Object.entries(options).map(([optionName, value], idx) => (
          <CartItemOption key={idx} optionName={optionName} value={value} />
        ))}
      </div>
    </li>
  );
}

export default CartItem;
