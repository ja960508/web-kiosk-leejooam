import React, { createContext, useEffect, useState } from 'react';

interface RouterProps {
  children: React.ReactNode;
}

interface routerContextType {
  path: string;
  changePath: (prev: string) => void;
}

export const routerContext = createContext<routerContextType>({
  path: '',
  changePath: () => undefined,
});

function Router({ children }: RouterProps) {
  const [path, setPath] = useState<string>(window.location.pathname);

  const changePath = (path: string) => {
    setPath(path);
    window.history.pushState(path, '', path);
  };

  const contextValue = {
    path,
    changePath,
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      setPath(event.state || '/');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <routerContext.Provider value={contextValue}>
      {children}
    </routerContext.Provider>
  );
}

export default Router;
