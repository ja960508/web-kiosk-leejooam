import React from 'react';
import AdminAuthorityProvider from './AdminAuthorityProvider';
import CartProvider from './CartProvider';
import LoadingProvider from './LoadingProvider';
import StoreProvider from './StoreProvider';

function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <CartProvider>
        <LoadingProvider>
          <AdminAuthorityProvider>{children}</AdminAuthorityProvider>
        </LoadingProvider>
      </CartProvider>
    </StoreProvider>
  );
}

export default ContextProvider;
