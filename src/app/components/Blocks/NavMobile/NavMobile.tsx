import { FC } from 'react';
import { navData } from '../../../utils/staticData';
import NavItem from '../../Elements/NavItem/NavItem';
import UnauthorizedButtons from '../../Elements/UnauthorizedButtons/UnauthorizedButtons';
import { INavMobile } from './INavMobile';
import { StyledNavMobile, StyledNavMobileWrapper } from './StyledNavMobile';

const NavMobile: FC<INavMobile> = ({ isActive, authButtonHandler }) => {
  return (
    <StyledNavMobileWrapper isActive={isActive}>
      <StyledNavMobile>
        {navData.map((text, index) => (
          <NavItem key={index + text[1]} text={text[1]} type="mobile" />
        ))}
        <UnauthorizedButtons authButtonHandler={authButtonHandler} />
      </StyledNavMobile>
    </StyledNavMobileWrapper>
  );
};

export default NavMobile;
