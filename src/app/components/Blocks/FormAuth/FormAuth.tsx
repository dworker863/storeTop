import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../redux/reducers/auth/authReducer';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import { IFormAuth } from './IFormAuth';
import * as Yup from 'yup';
import { StyledField } from '../../../commonStyles/StyledField';
import { ErrorMessage, Form, Formik } from 'formik';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';

const FormAuth: FC<IFormAuth> = ({ authButtonHandler }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Введите корректный email')
          .required('Введите email'),
        password: Yup.string().required('Введите пароль'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(setLogin(values.email, values.password));
        authButtonHandler(false);
        setSubmitting(false);
      }}
    >
      <Form>
        <Label id="#email" text="Email" />
        <StyledField id="email" name="email" type="text" />
        <ErrorMessage name="email">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <Label id="#password" text="Пароль" />
        <StyledField id="password" name="password" type="text" />
        <ErrorMessage name="password">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <Button text="Войти" type="submit" />
      </Form>
    </Formik>
  );
};

export default FormAuth;
