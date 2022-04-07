import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuth } from '../../../redux/reducers/auth/authReducer';
import NavItem from '../NavItem/NavItem';
import { IUnauthorizedButtons } from './IUnauthorizedButtons';
import { StyledUnauthButtons } from './StyledUnauthButtons';

const UnauthorizedButtons: FC<IUnauthorizedButtons> = ({
  authButtonHandler,
}) => {
  const dispatch = useDispatch();

  const logInClickHandler = () => {
    dispatch(setAuth({ userName: '', userEmail: '' }));
    authButtonHandler(true);
  };
  return (
    <StyledUnauthButtons>
      <a href="#">
        <NavItem text="Войти" type="desktop" />
      </a>
      <Link to="registration">
        <NavItem text="Зарегистрироваться" type="desktop" />
      </Link>
    </StyledUnauthButtons>
  );
};

export default UnauthorizedButtons;
