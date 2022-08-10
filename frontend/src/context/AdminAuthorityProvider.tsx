import React, { createContext, useState } from 'react';

interface AdminAuthorityContextType {
  adminAuthority: boolean;
  changeAdminAuthority: (prev: boolean) => void;
}

export const adminAuthorityContext = createContext<AdminAuthorityContextType>({
  adminAuthority: false,
  changeAdminAuthority: () => undefined,
});

function AdminAuthorityProvider({ children }: { children: React.ReactNode }) {
  const [adminAuthority, setAdminAuthority] = useState<boolean>(false);

  const adminAuthorityContextValue = {
    adminAuthority,
    changeAdminAuthority: setAdminAuthority,
  };

  return (
    <adminAuthorityContext.Provider value={adminAuthorityContextValue}>
      {children}
    </adminAuthorityContext.Provider>
  );
}

export default AdminAuthorityProvider;
