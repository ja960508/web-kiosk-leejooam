import React from 'react';
import styled from 'styled-components';
import AdminStore from './pages/AdminStore';
import CustomerOrder from './pages/CustomerOrder';
import Entrance from './pages/Entrance/Entrance';
import List from './pages/List';
import ListId from './pages/ListId';
import ListIdId from './pages/ListIdId';
import GlobalStyle from './styles/global';
import { Routes, Route } from './lib/Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/admin" element={<AdminStore />} />
        <Route path="/customer" element={<CustomerOrder />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<ListId />} />
        <Route path="/list/:id/:toId" element={<ListIdId />} />
        <Route path="/" element={<Entrance />} />
      </Routes>
    </>
  );
}

export default App;
