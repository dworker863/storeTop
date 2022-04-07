import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { navData } from '../../../utils/staticData';
import AuthorizedButtons from '../../Elements/AuthorizedButtons/AuthorizedButtons';
import NavItem from '../../Elements/NavItem/NavItem';
import UnauthorizedButtons from '../../Elements/UnauthorizedButtons/UnauthorizedButtons';
import { INavMobile } from './INavMobile';
import { StyledNavMobile, StyledNavMobileWrapper } from './StyledNavMobile';

const NavMobile: FC<INavMobile> = ({ isActive, authButtonHandler }) => {
  const username = useSelector((state: RootState) => state.auth.userName);

  return (
    <StyledNavMobileWrapper isActive={isActive}>
      <StyledNavMobile>
        {navData.map((text, index) => (
          <NavItem key={index + text[1]} text={text[1]} type="mobile" />
        ))}
        {username.length > 0 ? (
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
