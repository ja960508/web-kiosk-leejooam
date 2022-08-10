import React from 'react';
import AdminAuthorityProvider from './AdminAuthorityProvider';
import CartProvider from './CartProvider';
import StoreProvider from './StoreProvider';

function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <CartProvider>
        <AdminAuthorityProvider>{children}</AdminAuthorityProvider>
      </CartProvider>
    </StoreProvider>
  );
}

export default ContextProvider;
