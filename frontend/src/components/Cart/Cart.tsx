import React, { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import { PrimaryButton } from '../../styles/commons/PrimaryButton';
import { CartType } from '../../types/cart';
import PaymentSelectModalTrigger from '../Modal/PaymentModal/PaymentSelect/PaymentSelectModalTrigger';
import { StyledCartContainer, StyledCartList } from './Cart.style';
import CartItem from './CartItem';

function Cart() {
  const { cart, deleteCartItem, clearCart, getTotalPrice } =
    useContext(cartContext);
  const isCartEmpty = !cart.length;

  const handleProductFromCart = (cartItem: CartType) => {
    deleteCartItem(cartItem);
  };

  if (isCartEmpty) return <></>;

  return (
    <StyledCartContainer>
      <StyledCartList>
        {cart.map((cartItem, idx) => (
          <CartItem
            cartItem={cartItem}
            key={idx}
            handleProductFromCart={handleProductFromCart}
          />
        ))}
      </StyledCartList>
      <div className="cart-controller">
        <PrimaryButton type="button" onClick={clearCart}>
          전체삭제
        </PrimaryButton>
        <PaymentSelectModalTrigger />
        <div className="total-price">{`${getTotalPrice()} 원`}</div>
      </div>
    </StyledCartContainer>
  );
}

export default Cart;
