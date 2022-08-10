import React, { createContext, useState } from 'react';
import { CartType } from '../types/Cart';

interface CartContextType {
  cart: CartType[];
  changeCart: React.Dispatch<React.SetStateAction<CartType[]>>;
}

export const cartContext = createContext<CartContextType>({
  cart: [],
  changeCart: () => undefined,
});

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setcart] = useState<CartType[]>([]);

  const cartContextValue = {
    cart,
    changeCart: setcart,
  };

  return (
    <cartContext.Provider value={cartContextValue}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
