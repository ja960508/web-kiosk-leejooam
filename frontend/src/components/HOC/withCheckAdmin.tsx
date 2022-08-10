import React, { useContext } from 'react';
import { adminAuthorityContext } from '../../context/AdminAuthorityProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withCheckAdmin(Component: React.ComponentType<any>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function WithCheckAdmin(props: any) {
    const { adminAuthority } = useContext(adminAuthorityContext);

    if (!adminAuthority) return <></>;

    return <Component {...props} />;
  };
}

export default withCheckAdmin;
