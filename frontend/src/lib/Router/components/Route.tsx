import React from 'react';
import { invariant } from '../util';

interface RouteType {
  path: string;
  element: React.ReactNode;
}

function Route(_props: RouteType): React.ReactElement | null {
  invariant(
    false,
    `Route 컴포넌트는 Routes 컴포넌트의 자식이어야 합니다. 직접 호출될 수 없습니다.`,
  );

  return null;
}
export default Route;
