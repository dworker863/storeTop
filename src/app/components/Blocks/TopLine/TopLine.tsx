import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuth } from '../../../redux/reducers/auth/authReducer';
import { RootState } from '../../../redux/store';
import Logo from '../../Elements/Logo/Logo';
import Nav from '../Nav/Nav';
import { ITopLine } from './ITopLine';
import {
  StyledAuthButton,
  StyledLogoutButton,
  StyledRegistrationButton,
  StyledTopLine,
} from './StyledTopLine';

const TopLine: FC<ITopLine> = ({ authButtonHandler }) => {
  const username = useSelector((state: RootState) => state.auth.userName);
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    dispatch(setAuth({ userName: '', userEmail: '' }));
    authButtonHandler(false);
  };

  const logInClickHandler = () => {
    dispatch(setAuth({ userName: '', userEmail: '' }));
    authButtonHandler(true);
  };

  return (
    <StyledTopLine>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
      {username.length > 0 ? (
        <div>
          <Link to="/cabinet">{username}</Link>
          <StyledLogoutButton onClick={logoutClickHandler}>
            Выйти
          </StyledLogoutButton>
        </div>
      ) : (
        <div>
          <StyledAuthButton onClick={logInClickHandler}>Войти</StyledAuthButton>
          <Link to="registration">
            <StyledRegistrationButton>
              Зарегистрироваться
            </StyledRegistrationButton>
          </Link>
        </div>
      )}
    </StyledTopLine>
  );
};

export default TopLine;
