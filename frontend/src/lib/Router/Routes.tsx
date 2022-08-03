import React, { Children, useContext } from 'react';
import invariant from './invariant';
import { routerContext } from './Router';
import {
  getBasePath,
  hasPathVariable,
  isExactPath,
  isSameDepth,
  isValidChild,
} from './util';

function Routes({ children }: { children: React.ReactNode }) {
  const { path } = useContext(routerContext);
  const matches: React.ReactElement[] = [];

  Children.forEach(children, (element: React.ReactNode) => {
    if (!isValidChild(element)) {
      invariant(isValidChild(element), `올바른 Route 컴포넌트가 아닙니다.`);
      return;
    }

    const routePath = element.props.path;

    if (isExactPath(routePath, path)) {
      matches.push(element.props.element);
      return;
    }

    if (!hasPathVariable(routePath)) {
      return;
    }

    const basePath = getBasePath(routePath);
    if (isSameDepth(path, basePath)) {
      matches.push(element.props.element);
    }
  });

  return matches[matches.length - 1];
}

export default Routes;
