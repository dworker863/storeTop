import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../redux/reducers/auth/authReducer';
import Button from '../../Elements/Button/Button';
import { IAuthModal } from './IAuthModal';
import {
  StyledAuthInput,
  StyledAuthLabel,
  StyledAuthModal,
} from './StyledAuthModal';

const AuthModal: FC<IAuthModal> = ({ active, authButtonHandler }) => {
  const [authValue, setAuthValue] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setAuthValue({ ...authValue, email: event.target.value });
  };

  const passwordChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setAuthValue({ ...authValue, password: event.target.value });
  };

  const authClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(setLogin(authValue.email, authValue.password));
    authButtonHandler(false);
  };

  return (
    <StyledAuthModal active={active}>
      <StyledAuthLabel htmlFor="#email">Email</StyledAuthLabel>
      <StyledAuthInput
        id="email"
        type="text"
        name="email"
        value={authValue.email}
        onChange={emailChangeHandler}
      />
      <StyledAuthLabel htmlFor="#password">Password</StyledAuthLabel>
      <StyledAuthInput
        id="password"
        type="password"
        name="password"
        value={authValue.password}
        onChange={passwordChangeHandler}
      />
      <Button text="Войти" clickHandler={authClickHandler} />
    </StyledAuthModal>
  );
};

export default AuthModal;
