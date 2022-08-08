import { useContext } from 'react';
import { routerContext } from './ContextProvider';

export function useNavigate() {
  const { changePath } = useContext(routerContext);

  return (path: string) => changePath(path);
}

export function useQuery() {
  const location = new URLSearchParams(window.location.search);

  return (query: string) => {
    return location.get(query);
  };
}
