import React from 'react';
import AdminAuthorityProvider from './AdminAuthorityProvider';
import BasketProvider from './BasketProvider';
import StoreProvider from './StoreProvider';

function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <BasketProvider>
        <AdminAuthorityProvider>{children}</AdminAuthorityProvider>
      </BasketProvider>
    </StoreProvider>
  );
}

export default ContextProvider;
