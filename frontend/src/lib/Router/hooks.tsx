import { useContext } from 'react';
import { routerContext } from './ContextProvider';

export function useNavigate(path: string) {
  const { changePath } = useContext(routerContext);

  changePath(path);
}
