import { useContext } from 'react';
import { routerContext } from './ContextProvider';

export function useNavigate() {
  const { changePath } = useContext(routerContext);

  return (path: string) => changePath(path);
}
