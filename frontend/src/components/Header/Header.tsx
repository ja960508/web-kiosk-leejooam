import React from 'react';
import { HeaderContent, StyledHeader } from './Header.style';

function Header({ children }: { children: React.ReactNode }) {
  return (
    <StyledHeader>
      <HeaderContent>{children}</HeaderContent>
    </StyledHeader>
  );
}

export default Header;
