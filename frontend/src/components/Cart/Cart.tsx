import React, { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import { CartType } from '../../types/Cart';
import { StyledCartList } from './Cart.style';
import CartItem from './CartItem';

function Cart() {
  const { cart, deleteCartItem } = useContext(cartContext);

  const handleProductFromCart = (cartItem: CartType) => {
    deleteCartItem(cartItem);
  };

  return (
    <StyledCartList>
      {cart.map((cartItem, idx) => (
        <CartItem
          cartItem={cartItem}
          key={idx}
          handleProductFromCart={handleProductFromCart}
        />
      ))}
    </StyledCartList>
  );
}

export default Cart;
