import React, { useEffect } from 'react';
import { useNavigate } from '../../lib/Router';
import { getItemFromLocalStorage } from '../../lib/storage';

function withCheckPermission(Component: React.ComponentType) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function WithCheckPermission(props: any) {
    const navigate = useNavigate();

    useEffect(() => {
      const storeId = getItemFromLocalStorage('storeId');

      if (!storeId) {
        navigate('/');
      }
    }, [navigate]);

    return <Component {...props} />;
  };
}

export default withCheckPermission;
