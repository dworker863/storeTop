import { FC } from 'react';
import { navData } from '../../../utils/staticData';
import NavItem from '../../Elements/NavItem/NavItem';
import { StyledNav } from './StyledNav';

const Nav: FC = () => {
  return (
    <nav>
      <StyledNav>
        {navData.map((text, index) => (
          <NavItem key={index + text} text={text} />
        ))}
      </StyledNav>
    </nav>
  );
};

export default Nav;
