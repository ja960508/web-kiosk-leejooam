import { isValidElement } from 'react';

export function isValidChild(
  element: React.ReactNode,
): element is React.ReactElement {
  if (!isValidElement(element)) {
    return false;
  }

  if (!(element.props.path && element.props.element)) {
    return false;
  }

  return true;
}

export function hasPathVariable(routePath: string) {
  return routePath.search(':') !== -1;
}

export function isExactPath(routePath: string, path: string) {
  return routePath === path;
}

export function getBasePath(routePath: string) {
  return routePath.substring(0, routePath.search(':'));
}

export function isSameDepth(path: string, basePath: string) {
  const basePathRegex = new RegExp(`^${basePath}[a-zA-Z0-9]+$`);
  return basePathRegex.test(path);
}
