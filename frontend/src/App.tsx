import React from 'react';
import styled from 'styled-components';
import Route from './lib/Router/Route';
import Routes from './lib/Router/Routes';
import AdminStore from './pages/AdminStore';
import CustomerOrder from './pages/CustomerOrder';
import Entrance from './pages/Entrance';
import GlobalStyle from './styles/global';

const Wrapper = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Routes>
          <Route path="/admin" element={<AdminStore />} />
          <Route path="/customer" element={<CustomerOrder />} />
          <Route path="/" element={<Entrance />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
