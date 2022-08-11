import React, { createContext, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  changeIsLoading: (prev: boolean) => void;
}

export const loadingContext = createContext<LoadingContextType>({
  isLoading: false,
  changeIsLoading: () => undefined,
});

function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadingContextValue = {
    isLoading,
    changeIsLoading: setIsLoading,
  };

  return (
    <loadingContext.Provider value={loadingContextValue}>
      {children}
    </loadingContext.Provider>
  );
}

export default LoadingProvider;
