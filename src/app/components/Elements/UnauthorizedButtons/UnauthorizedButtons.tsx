import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import { IUnauthorizedButtons } from './IUnauthorizedButtons';
import { StyledUnauthButtons } from './StyledUnauthButtons';

const UnauthorizedButtons: FC<IUnauthorizedButtons> = ({
  authButtonHandler,
}) => {
  const logInClickHandler = () => {
    authButtonHandler(true);
  };
  return (
    <StyledUnauthButtons>
      <div>
        <NavItem text="Войти" type="desktop" clickHandler={logInClickHandler} />
      </div>
      <Link to="registration">
        <NavItem text="Зарегистрироваться" type="desktop" />
      </Link>
    </StyledUnauthButtons>
  );
};

export default UnauthorizedButtons;
