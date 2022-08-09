import React, { createContext, useState } from 'react';
import { initialStoreValue, StoreType } from '../types/store';

interface StoreContextType {
  store: StoreType;
  changeStoreInfo: (prev: StoreType) => void;
}

export const storeContext = createContext<StoreContextType>({
  store: { ...initialStoreValue },
  changeStoreInfo: () => undefined,
});

function StoreProvider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState({ ...initialStoreValue });

  const storeContextValue = {
    store,
    changeStoreInfo: setStore,
  };

  return (
    <storeContext.Provider value={storeContextValue}>
      {children}
    </storeContext.Provider>
  );
}

export default StoreProvider;
