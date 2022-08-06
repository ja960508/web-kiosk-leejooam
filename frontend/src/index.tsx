import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Router from './lib/Router/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Router>
    <App />
  </Router>,
);
