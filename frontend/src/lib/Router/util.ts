import { isValidElement } from 'react';

export function invariant(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

export const ROUTE_PARAMETER_REGEX = /:(\w+)/g;
export const URL_FRAGMENT_REGEXP = '([^\\/]+)';
export const QUERY_STRING_REGEXP = /\?[\w=&]+/g;

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

export function extractPathAndParams(routePath: string): [string, string[]] {
  const params: string[] = [];

  const parsedPath = routePath
    .replace(ROUTE_PARAMETER_REGEX, (_match: string, paramName: string) => {
      params.push(paramName);
      return URL_FRAGMENT_REGEXP;
    })
    .replace(QUERY_STRING_REGEXP, '')
    .replace(/\//g, '\\/');

  return [parsedPath, params];
}

export function isCurrentRoute(path: string, parsedPath: string) {
  const URLRegExp = new RegExp(`^${parsedPath}$`);

  return URLRegExp.test(path);
}
