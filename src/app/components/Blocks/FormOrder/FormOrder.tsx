import { Form, Formik } from 'formik';
import { FC } from 'react';
import { StyledForm } from '../../../commonStyles/StyledForm';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import * as Yup from 'yup';
import { phoneRegExp } from '../../../utils/staticData';
import { StyledField } from '../../../commonStyles/StyledField';
import { useDispatch } from 'react-redux';

const FormOrder: FC = () => {
  
  return (
    <Formik
    initialValues={{
      username: '',
      email: '',
      phone: ''
    }}
    validationSchema={Yup.object({
      username: Yup.string().min(2, 'Введите корректное имя'),
      email: Yup.string().email('Введите корректный email'),
      phone: Yup.string().matches(phoneRegExp, 'Неккоректный номер телефона'),
    })}
    onSubmit={(values, {setSubmitting}) => {
      console.log(values);
      setSubmitting(false);      
    }}
    >
      <Form>
        <Label id="#username" text="Ваше имя и фамилия"/>
        <StyledField name="phone" type="text" placeholder="Ваше имя и фамилия"/>
        <Label id="#phone" text="Номер мобильного телефона для связи"/>
        <StyledField name="phone" type="text" placeholder="+7 (...) ...  ..  .."/>
        <Label id="#email" text="Адрес электронной почты"/>
        <StyledField name="email" type="email" placeholder="mail@email.kz"/>
      <Button type="submit" text="Отправить заявку" />
      </Form>
    </Formik>
  //   <StyledForm>
  //     <Label id="#name" text="Ваше имя и фамилия" />
  //     <Label id="#phone" text="Номер мобильного телефона для связи" />
  //     <Label id="#email" text="Адрес электронной почты" /> (опционально)
  //   </StyledForm>
  // );
};

export default FormOrder;
