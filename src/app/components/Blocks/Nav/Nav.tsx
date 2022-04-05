import { FC } from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../../../utils/staticData';
import NavItem from '../../Elements/NavItem/NavItem';
import { StyledNav, StyledNavWrapper } from './StyledNav';

const Nav: FC = () => {
  return (
    <StyledNavWrapper>
      <StyledNav>
        {navData.map((item, index) => (
          <Link to={item[0]}>
            <NavItem key={index + item[1]} text={item[1]} type="desktop" />
          </Link>
        ))}
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default Nav;
