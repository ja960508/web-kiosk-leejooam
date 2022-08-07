import React from 'react';
import styled from 'styled-components';
import { Link } from './lib/Router';
import AdminStore from './pages/AdminStore';
import CustomerOrder from './pages/CustomerOrder';
import Entrance from './pages/Entrance';
import List from './pages/List';
import ListId from './pages/ListId';
import ListIdId from './pages/ListIdId';
import GlobalStyle from './styles/global';
import { Routes, Route } from './lib/Router';

const Wrapper = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Link to="/admin">a</Link>
        <Link to="/customer">b</Link>
        <Link to="/list">c</Link>
        <Link to="/list/:id">d</Link>
        <Link to="/list/:id/:toId">e</Link>
        <Link to="/">f</Link>
      </header>
      <Wrapper>
        <Routes>
          <Route path="/admin" element={<AdminStore />} />
          <Route path="/customer" element={<CustomerOrder />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<ListId />} />
          <Route path="/list/:id/:toId" element={<ListIdId />} />
          <Route path="/" element={<Entrance />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
