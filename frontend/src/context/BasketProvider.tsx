import React, { createContext, useState } from 'react';
import { BasketType } from '../types/basket';

interface BasketContextType {
  basket: BasketType[];
  changeBasket: React.Dispatch<React.SetStateAction<BasketType[]>>;
}

export const basketContext = createContext<BasketContextType>({
  basket: [],
  changeBasket: () => undefined,
});

function BasketProvider({ children }: { children: React.ReactNode }) {
  const [basket, setBasket] = useState<BasketType[]>([]);

  const basketContextValue = {
    basket,
    changeBasket: setBasket,
  };

  return (
    <basketContext.Provider value={basketContextValue}>
      {children}
    </basketContext.Provider>
  );
}

export default BasketProvider;
