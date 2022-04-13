import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogoutModalContext } from '../../../../App';
import NavItem from '../NavItem/NavItem';
import TextOrange from '../TextOrange/TextOrange';
import { IAuthorizedButtons } from './IAuthorizedButtons';
import {
  StyledAuthButtons,
  StyledAuthTitle,
  StyledCabinetLink,
} from './StyledAuthButtons';

const AuthorizedButtons: FC<IAuthorizedButtons> = ({ username }) => {
  const setLogoutModalActive = useContext(LogoutModalContext);

  return (
    <StyledAuthButtons>
      <StyledAuthTitle>
        Добро пожаловать, <TextOrange text={username} />
      </StyledAuthTitle>

      <Link to="/cabinet">
        <StyledCabinetLink>Мой профиль</StyledCabinetLink>
      </Link>
      <div>
        <NavItem
          text="Выйти"
          type="desktop"
          clickHandler={() => setLogoutModalActive(true)}
        />
      </div>
    </StyledAuthButtons>
  );
};

export default AuthorizedButtons;
