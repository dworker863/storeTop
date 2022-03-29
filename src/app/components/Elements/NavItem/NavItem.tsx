import { FC } from 'react';
import { INavItem } from './INavItem';
import { StyledNavItem } from './StyledNavItem';

const NavItem: FC<INavItem> = ({ text }) => {
  return <StyledNavItem>{text}</StyledNavItem>;
};

export default NavItem;
