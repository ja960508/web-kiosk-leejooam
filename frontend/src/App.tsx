import React from 'react';
import AdminStore from './pages/AdminStore';
import CustomerOrder from './pages/CustomerOrder';
import Entrance from './pages/Entrance/Entrance';
import GlobalStyle from './styles/global';
import { Routes, Route } from './lib/Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/admin" element={<AdminStore />} />
        <Route path="/customer" element={<CustomerOrder />} />
        <Route path="/" element={<Entrance />} />
      </Routes>
    </>
  );
}

export default App;
