import React, { createContext, useState } from 'react';
import { CartType } from '../types/cart';

interface CartContextType {
  cart: CartType[];
  addCartItem: (newCartItem: CartType) => void;
  deleteCartItem: (cartItem: CartType) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
}

export const cartContext = createContext<CartContextType>({
  cart: [],
  addCartItem: () => undefined,
  deleteCartItem: () => undefined,
  clearCart: () => undefined,
  getTotalPrice: () => 0,
});

function isSameProduct(cartItem: CartType, newCartItem: CartType) {
  if (cartItem.product.id === newCartItem.product.id) {
    return (
      JSON.stringify(cartItem.options) === JSON.stringify(newCartItem.options)
    );
  }
}

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartType[]>([]);
  let isAlreadyIn = false;

  const addCartItem = (newCartItem: CartType) => {
    cart.forEach((cartItem, idx) => {
      if (isSameProduct(newCartItem, cartItem)) {
        const newCart = [...cart];
        newCart[idx].quantity += 1;

        setCart(newCart);
        isAlreadyIn = true;
        return;
      }
    });

    if (isAlreadyIn) {
      return;
    }

    setCart((prev) => [...prev, newCartItem]);
  };

  const deleteCartItem = (cartItem: CartType) => {
    setCart((prev) => prev.filter((v) => v.product.id !== cartItem.product.id));
  };

  const getTotalPrice = () =>
    cart.reduce(
      (acc, cartItem) =>
        acc + Number(cartItem.product.price) * cartItem.quantity,
      0,
    );

  const clearCart = () => {
    setCart([]);
  };

  const cartContextValue = {
    cart,
    addCartItem,
    deleteCartItem,
    clearCart,
    getTotalPrice,
  };

  return (
    <cartContext.Provider value={cartContextValue}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
