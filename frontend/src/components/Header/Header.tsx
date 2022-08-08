import React from 'react';
import { StyledHeader } from './Header.style';

function Header({ children }: { children: React.ReactNode }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
