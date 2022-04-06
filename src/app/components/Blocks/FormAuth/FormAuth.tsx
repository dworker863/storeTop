import { ChangeEvent, MouseEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledForm } from '../../../commonStyles/StyledForm';
import { setLogin } from '../../../redux/reducers/auth/authReducer';
import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Input/Input';
import Label from '../../Elements/Label/Label';
import { IFormAuth } from './IFormAuth';

const FormAuth: FC<IFormAuth> = ({ authButtonHandler }) => {
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
    <StyledForm>
      <Label id="#email" text="Email" />
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={authValue.email}
        onChange={emailChangeHandler}
      />
      <Label id="#password" text="Пароль" />
      <Input
        id="password"
        type="password"
        name="password"
        placeholder="Пароль"
        value={authValue.password}
        onChange={passwordChangeHandler}
      />
      <Button text="Войти" clickHandler={authClickHandler} />
    </StyledForm>
  );
};

export default FormAuth;
