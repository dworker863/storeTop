import { FC } from 'react';
import { navData } from '../../../utils/staticData';
import NavItem from '../../Elements/NavItem/NavItem';
import { INavMobile } from './INavMobile';
import { StyledNavMobile, StyledNavMobileWrapper } from './StyledNavMobile';

const NavMobile: FC<INavMobile> = ({ isActive }) => {
  return (
    <StyledNavMobileWrapper isActive={isActive}>
      <StyledNavMobile>
        {navData.map((text, index) => (
          <NavItem key={index + text} text={text} type="mobile" />
        ))}
      </StyledNavMobile>
    </StyledNavMobileWrapper>
  );
};

export default NavMobile;
