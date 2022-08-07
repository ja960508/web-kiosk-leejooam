import React from 'react';
import ContextProvider from '../ContextProvider';

interface RouterProps {
  children: React.ReactNode;
}

function Router({ children }: RouterProps) {
  return <ContextProvider>{children}</ContextProvider>;
}

export default Router;
