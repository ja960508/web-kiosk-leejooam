import React, { useContext, useEffect } from 'react';
import Admin from './pages/Admin/Admin';
import CustomerOrder from './pages/Customer/CustomerOrder';
import Entrance from './pages/Entrance/Entrance';
import GlobalStyle from './styles/global';
import { Routes, Route } from './lib/Router';
import { storeContext } from './context/StoreProvider';
import storeAPI from './api/storeAPI';
import { getItemFromLocalStorage } from './lib/storage';

function App() {
  const { changeStoreInfo } = useContext(storeContext);

  useEffect(() => {
    async function setStoreInfo(storeId: number) {
      const response = await storeAPI.getStoreInfo(storeId);
      changeStoreInfo(response);
    }

    const storeId = Number(getItemFromLocalStorage('storeId'));

    if (storeId) {
      setStoreInfo(storeId);
    }
  }, [changeStoreInfo]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer-order" element={<CustomerOrder />} />
        <Route path="/" element={<Entrance />} />
      </Routes>
    </>
  );
}

export default App;
