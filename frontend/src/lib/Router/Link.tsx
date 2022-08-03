import React, { useContext } from 'react';
import { routerContext } from './Router';

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

function Link({ children, to }: LinkProps) {
  const { changePath } = useContext(routerContext);

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    changePath(to);
  };

  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;
