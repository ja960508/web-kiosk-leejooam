import React, { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import { CartType } from '../../types/Cart';
import PaymentSelectModalTrigger from '../Modal/PaymentModal/PaymentSelectModalTrigger';
import { StyledCartContainer, StyledCartList } from './Cart.style';
import CartItem from './CartItem';

function Cart() {
  const { cart, deleteCartItem, clearCart } = useContext(cartContext);

  const handleProductFromCart = (cartItem: CartType) => {
    deleteCartItem(cartItem);
  };

  return (
    <StyledCartContainer>
      <div className="cart-controller">
        <button type="button" onClick={clearCart}>
          전체삭제
        </button>
        <PaymentSelectModalTrigger />
      </div>
      <StyledCartList>
        {cart.map((cartItem, idx) => (
          <CartItem
            cartItem={cartItem}
            key={idx}
            handleProductFromCart={handleProductFromCart}
          />
        ))}
      </StyledCartList>
    </StyledCartContainer>
  );
}

export default Cart;
