import { FC } from 'react';
import { INavItem } from './INavItem';
import { StyledNavItem } from './StyledNavItem';

const NavItem: FC<INavItem> = ({ text, type }) => {
  return (
    <StyledNavItem type={type} className="menuItem">
      {text}
    </StyledNavItem>
  );
};

export default NavItem;
