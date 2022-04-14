import { FC, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  setLogin,
  setRemember,
} from '../../../redux/reducers/auth/authReducer';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import { IFormAuth } from './IFormAuth';
import * as Yup from 'yup';
import { StyledField } from '../../../commonStyles/StyledField';
import { ErrorMessage, Form, Formik } from 'formik';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { RootState } from '../../../redux/store';
import { useAppDispatch } from '../../../hooks';
import { StyledFormAuthFlexWrapper } from './StyledFormAuth';
import { StyledEyeIcon } from '../../../commonStyles/StyledEyeIcon';
import eyeIcon from '../../../../assets/images/eye-icon.png';

const FormAuth: FC<IFormAuth> = ({ authButtonHandler }) => {
  const error = useSelector((state: RootState) => state.auth.error);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const eyeIconMouseDownHandler = (event: MouseEvent<HTMLImageElement>) => {
    setShowPassword(true);
  };

  const eyeIconMouseUpHandler = (event: MouseEvent<HTMLImageElement>) => {
    setShowPassword(false);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        remember: false,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Введите корректный email')
          .required('Введите email'),
        password: Yup.string().required('Введите пароль'),
        remember: Yup.boolean(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(setRemember(values.remember));
        dispatch(setLogin(values.email, values.password)).then((res) => {
          if (res.payload.error.length > 0) {
            authButtonHandler(true);
          } else {
            authButtonHandler(false);
          }
        });
        setSubmitting(false);
      }}
    >
      <Form>
        <Label id="email" text="Email" />
        <StyledField id="email" name="email" type="text" />
        <ErrorMessage name="email">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <Label id="password" text="Пароль" />
        <StyledFormAuthFlexWrapper>
          <StyledField
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
          />
          <StyledEyeIcon
            src={eyeIcon}
            position="absolute"
            onMouseDown={eyeIconMouseDownHandler}
            onMouseUp={eyeIconMouseUpHandler}
          />
        </StyledFormAuthFlexWrapper>
        <ErrorMessage name="password">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        {error?.length > 0 && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <StyledFormAuthFlexWrapper>
          <StyledField id="remember" name="remember" type="checkbox" inline />
          <Label id="remember" text="Запомнить меня" simple />
        </StyledFormAuthFlexWrapper>
        <Button text="Войти" type="submit" />
      </Form>
    </Formik>
  );
};

export default FormAuth;
