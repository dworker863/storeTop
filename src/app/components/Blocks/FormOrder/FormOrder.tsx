import { ErrorMessage, Form, Formik } from 'formik';
import { FC, useContext } from 'react';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import * as Yup from 'yup';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import InputMask from 'react-input-mask';
import { OrderModalContext } from '../../../../App';

const FormOrder: FC = () => {
  const setOrderModalActive = useContext(OrderModalContext);

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
        email: Yup.string().email('Введите корректный email'),
        phone: Yup.string()
          .test('minLength', 'Введите корректный номер телефона', (val) => {
            const valLengthWithoutDashes = val?.replace(/-|_/g, '').length;
            return valLengthWithoutDashes === 18;
          })
          .required('Введите номер телефона'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setOrderModalActive(true);
        console.log(values);
        setSubmitting(false);
      }}
    >
      {(props) => (
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
          <InputMask
            mask="+7 (799) 999 99 99"
            value={props.values.phone}
            onChange={props.handleChange}
          >
            <StyledField
              name="phone"
              type="text"
              placeholder="+7 (...) ...  ..  .."
            />
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
      )}
    </Formik>
  );
};

export default FormOrder;
