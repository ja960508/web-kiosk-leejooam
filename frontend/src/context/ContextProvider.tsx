import React from 'react';
import AdminAuthorityProvider from './AdminAuthorityProvider';
import StoreProvider from './StoreProvider';

function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <AdminAuthorityProvider>{children}</AdminAuthorityProvider>
    </StoreProvider>
  );
}

export default ContextProvider;
