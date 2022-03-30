import { FC } from 'react';
import { navData } from '../../../utils/staticData';
import NavItem from '../../Elements/NavItem/NavItem';
import { StyledNav, StyledNavWrapper } from './StyledNav';

const Nav: FC = () => {
  return (
    <StyledNavWrapper>
      <StyledNav>
        {navData.map((text, index) => (
          <NavItem key={index + text} text={text} type="desktop" />
        ))}
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default Nav;
