import React, { useContext } from 'react';
import { routerContext } from './Router';

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  to: string;
}

function Link({ className, children, to }: LinkProps) {
  const { changePath } = useContext(routerContext);

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    changePath(to);
  };

  return (
    <a className={className} href={to} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;
