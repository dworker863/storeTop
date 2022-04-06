import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Input/Input';
import Label from '../../Elements/Label/Label';
import { StyledForm } from '../../../commonStyles/StyledForm';
import { MouseEvent, FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegistration } from '../../../redux/reducers/auth/authReducer';

const FormRegistration: FC = () => {
  const [registr, setRegistr] = useState({
    username: '',
    email: '',
    tel: '',
    password: '',
    role: 'User',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registrClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      setRegistration(
        registr.username,
        registr.tel,
        registr.email,
        registr.password,
        registr.role,
      ),
    );
    navigate('/');
  };

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    switch (event.target.name) {
      case 'username': {
        setRegistr({ ...registr, username: event.target.value });
        break;
      }

      case 'tel': {
        setRegistr({ ...registr, tel: event.target.value });
        break;
      }

      case 'email': {
        setRegistr({ ...registr, email: event.target.value });
        break;
      }

      case 'password': {
        setRegistr({ ...registr, password: event.target.value });
        break;
      }

      default:
        return;
    }
  };
  return (
    <StyledForm>
      <Label id="#username" text="Имя" />
      <Input
        id="username"
        type="text"
        name="username"
        placeholder="Имя"
        value={registr.username}
        onChange={inputChangeHandler}
      />
      <Label id="#tel" text="Телефон" />
      <Input
        id="phone"
        type="text"
        name="phone"
        placeholder="+7"
        value={registr.tel}
        onChange={inputChangeHandler}
      />
      <Label id="#email" text="Адрес электронной почты" />
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="E-mail адрес"
        value={registr.email}
        onChange={inputChangeHandler}
      />
      <Label id="#password" text="Пароль" />
      <Input
        id="password"
        type="password"
        name="password"
        placeholder="Пароль"
        value={registr.password}
        onChange={inputChangeHandler}
      />
      <Button
        type="submit"
        text="Зарегистрироваться"
        clickHandler={registrClickHandler}
      />
    </StyledForm>
  );
};

export default FormRegistration;
