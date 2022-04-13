import { FC } from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../../../utils/staticData';
import AuthorizedButtons from '../../Elements/AuthorizedButtons/AuthorizedButtons';
import NavItem from '../../Elements/NavItem/NavItem';
import UnauthorizedButtons from '../../Elements/UnauthorizedButtons/UnauthorizedButtons';
import { INavMobile } from './INavMobile';
import { StyledNavMobile, StyledNavMobileWrapper } from './StyledNavMobile';

const NavMobile: FC<INavMobile> = ({
  isActive,
  username,
  authButtonHandler,
}) => {
  return (
    <StyledNavMobileWrapper isActive={isActive}>
      <StyledNavMobile>
        {navData.map((text, index) => (
          <Link key={index + text[0]} to={text[0]}>
            <NavItem text={text[1]} type="mobile" />
          </Link>
        ))}
        {username?.length > 0 ? (
          <AuthorizedButtons
            username={username}
            authButtonHandler={authButtonHandler}
          />
        ) : (
          <UnauthorizedButtons authButtonHandler={authButtonHandler} />
        )}
      </StyledNavMobile>
    </StyledNavMobileWrapper>
  );
};

export default NavMobile;
