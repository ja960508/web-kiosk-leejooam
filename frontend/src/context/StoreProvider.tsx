import React, { createContext, useState } from 'react';

interface storeType {
  id: string;
  storeId: string;
  name: string;
  branchName: string;
}

interface storeContextType {
  store: storeType;
  changeStoreInfo: (prev: storeType) => void;
}

const initialStoreValue = {
  id: '',
  storeId: '',
  name: '',
  branchName: '',
};

export const storeContext = createContext<storeContextType>({
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
