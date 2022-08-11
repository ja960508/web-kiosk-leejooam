import React, { createContext, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
}

interface ChangeLoadingContextType {
  changeIsLoading: (prev: boolean) => void;
}

export const loadingContext = createContext<LoadingContextType>({
  isLoading: false,
});

export const changeLoadingContext = createContext<ChangeLoadingContextType>({
  changeIsLoading: () => undefined,
});

function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadingContextValue = {
    isLoading,
  };

  const changeLoadingContextValue = {
    changeIsLoading: setIsLoading,
  };

  return (
    <loadingContext.Provider value={loadingContextValue}>
      <changeLoadingContext.Provider value={changeLoadingContextValue}>
        {children}
      </changeLoadingContext.Provider>
    </loadingContext.Provider>
  );
}

export default LoadingProvider;
