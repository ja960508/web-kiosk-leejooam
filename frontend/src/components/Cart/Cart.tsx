import React, { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import { CartType } from '../../types/cart';
import PaymentSelectModalTrigger from '../Modal/PaymentModal/PaymentSelectModalTrigger';
import { StyledCartContainer, StyledCartList } from './Cart.style';
import CartItem from './CartItem';

function Cart() {
  const { cart, deleteCartItem, clearCart } = useContext(cartContext);
  const totalPrice = cart.reduce((prev, cartItem) => {
    return prev + parseInt(cartItem.product.price) * cartItem.quantity;
  }, 0);
  const isCartEmpty = !cart.length;

  const handleProductFromCart = (cartItem: CartType) => {
    deleteCartItem(cartItem);
  };

  if (isCartEmpty) return <></>;

  return (
    <StyledCartContainer>
      <div className="cart-controller">
        <button type="button" onClick={clearCart}>
          전체삭제
        </button>
        <PaymentSelectModalTrigger />
        <span>{`${totalPrice}원`}</span>
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
