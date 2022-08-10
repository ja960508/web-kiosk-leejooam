import React, { createContext, useState } from 'react';
import { CartType } from '../types/Cart';

interface CartContextType {
  cart: CartType[];
  addCartItem: (newCartItem: CartType) => void;
  deleteCartItem: (cartItem: CartType) => void;
}

export const cartContext = createContext<CartContextType>({
  cart: [],
  addCartItem: () => undefined,
  deleteCartItem: () => undefined,
});

function isSameProduct(cartItem: CartType, newCartItem: CartType) {
  if (cartItem.product.name === cartItem.product.name) {
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
        newCart[idx].options.quantity += 1;

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

  const cartContextValue = {
    cart,
    addCartItem,
    deleteCartItem,
  };

  return (
    <cartContext.Provider value={cartContextValue}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
