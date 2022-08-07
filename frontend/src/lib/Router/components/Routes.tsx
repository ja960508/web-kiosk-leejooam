import React, { Children, useContext } from 'react';
import { routerContext } from '../ContextProvider';
import {
  extractPathAndParams,
  isCurrentRoute,
  isValidChild,
  invariant,
} from '../util';

function Routes({ children }: { children: React.ReactNode }) {
  const { path } = useContext(routerContext);

  let currentRoute;

  Children.forEach(children, (element: React.ReactNode) => {
    if (!isValidChild(element)) {
      invariant(isValidChild(element), `올바른 Route 컴포넌트가 아닙니다.`);
      return;
    }

    const { path: routePath, element: component } = element.props;
    const [parsedPath, params] = extractPathAndParams(routePath);

    if (isCurrentRoute(path, parsedPath)) {
      currentRoute = component;
    }
  });

  if (!currentRoute) {
    return <></>;
  }

  return currentRoute;
}

export default Routes;
