import React, { useContext, useEffect } from 'react';
import Admin from './pages/Admin';
import CustomerOrder from './pages/CustomerOrder';
import Entrance from './pages/Entrance/Entrance';
import GlobalStyle from './styles/global';
import { Routes, Route } from './lib/Router';
import { storeContext } from './context/StoreProvider';
import { getStoreInfo } from './api/auth/request';
import { getItemFromLocalStorage } from './lib/storage';

function App() {
  const { changeStoreInfo } = useContext(storeContext);

  useEffect(() => {
    async function setStoreInfo(storeId: string) {
      const response = await getStoreInfo(storeId);
      changeStoreInfo(response);
    }

    const storeId = getItemFromLocalStorage('storeId');

    if (storeId) {
      setStoreInfo(storeId);
    }
  }, [changeStoreInfo]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer" element={<CustomerOrder />} />
        <Route path="/" element={<Entrance />} />
      </Routes>
    </>
  );
}

export default App;
