import React from 'react';
import ReactDOM from 'react-dom';

interface LoadingPortalProps {
  children: React.ReactNode;
}

function LoadingPortal({ children }: LoadingPortalProps) {
  const modalElement = document.getElementById('loading') as Element;
  return ReactDOM.createPortal(children, modalElement);
}

export default LoadingPortal;
