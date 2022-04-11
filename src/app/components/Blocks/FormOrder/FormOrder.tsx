import { ErrorMessage, Form, Formik } from 'formik';
import { FC } from 'react';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import * as Yup from 'yup';
import { phoneRegExp } from '../../../utils/staticData';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import InputMask from 'react-input-mask';

const FormOrder: FC = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        phone: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(2, 'Введите корректное имя')
          .required('Введите имя'),
        email: Yup.string()
          .email('Введите корректный email')
          .required('Введите email'),
        phone: Yup.string()
          .matches(phoneRegExp, 'Неккоректный номер телефона')
          .required('Введите номер телефона'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <Label id="#username" text="Ваше имя и фамилия" />
        <StyledField
          name="username"
          type="text"
          placeholder="Ваше имя и фамилия"
        />
        <ErrorMessage name="username">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <Label id="#phone" text="Номер мобильного телефона для связи" />
        <InputMask mask="+7 (799) 999 99 99">
          {(inputProps: any) => (
            <StyledField
              name="phone"
              type="text"
              value={inputProps.value}
              placeholder="+7 (...) ...  ..  .."
            />
          )}
        </InputMask>

        <ErrorMessage name="phone">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <Label id="#email" text="Адрес электронной почты" />
        <StyledField name="email" type="email" placeholder="mail@email.kz" />
        <ErrorMessage name="email">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <Button type="submit" text="Отправить заявку" />
      </Form>
    </Formik>
  );
};

export default FormOrder;
