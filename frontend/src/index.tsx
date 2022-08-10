import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './context/ContextProvider';
import { Router } from './lib/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
);
