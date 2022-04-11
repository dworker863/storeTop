import { FC } from 'react';
import { INavItem } from './INavItem';
import { StyledNavItem } from './StyledNavItem';

const NavItem: FC<INavItem> = ({ text, type, clickHandler }) => {
  return (
    <StyledNavItem type={type} className="menuItem" onClick={clickHandler}>
      {text}
    </StyledNavItem>
  );
};

export default NavItem;
