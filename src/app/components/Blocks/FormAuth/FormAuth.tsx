import { ChangeEvent, MouseEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledForm } from '../../../commonStyles/StyledForm';
import { setLogin } from '../../../redux/reducers/auth/authReducer';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import { IFormAuth } from './IFormAuth';

const FormAuth: FC<IFormAuth> = ({ authButtonHandler }) => {
  const [authValue, setAuthValue] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(authValue.email);
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

      <Label id="#password" text="Пароль" />

      <Button text="Войти" clickHandler={authClickHandler} />
    </StyledForm>
  );
};

export default FormAuth;
