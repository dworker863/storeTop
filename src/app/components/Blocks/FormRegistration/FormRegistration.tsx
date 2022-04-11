import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import { StyledForm } from '../../../commonStyles/StyledForm';
import { MouseEvent, FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegistration } from '../../../redux/reducers/auth/authReducer';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import { StyledTextSimple } from '../../../commonStyles/StyledTextSimple';
import { StyledFlexWrapper } from '../../../commonStyles/StyledFlexWrapper';
import { StyledTextLightGrey } from '../../../commonStyles/StyledTextLightGrey';
import Note from '../../Elements/Note/Note';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styled, { css } from 'styled-components';
import { IStyledInput } from '../../../commonInterfaces/IInput';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { StyledFormRegistrationLine } from './StyledFormRegistration';

const FormRegistration: FC = () => {
  const [registr, setRegistr] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    city: '',
    street: '',
    houseNumber: '',
    floor: '',
    flatNumber: '',
    postIndex: '',
    role: 'User',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registrClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      setRegistration(
        registr.username,
        registr.email,
        registr.password,
        registr.phone,
        registr.city,
        registr.street,
        registr.houseNumber,
        registr.floor,
        registr.flatNumber,
        registr.postIndex,
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

      case 'email': {
        setRegistr({ ...registr, email: event.target.value });
        break;
      }

      case 'password': {
        setRegistr({ ...registr, password: event.target.value });
        break;
      }

      case 'passwordConfirm': {
        setRegistr({ ...registr, passwordConfirm: event.target.value });
        break;
      }

      case 'phone': {
        setRegistr({ ...registr, phone: event.target.value });
        break;
      }

      case 'city': {
        setRegistr({ ...registr, city: event.target.value });
        break;
      }

      case 'street': {
        setRegistr({ ...registr, street: event.target.value });
        break;
      }

      case 'houseNumber': {
        setRegistr({ ...registr, houseNumber: event.target.value });
        break;
      }

      case 'floor': {
        setRegistr({ ...registr, floor: event.target.value });
        break;
      }

      case 'flatNumber': {
        setRegistr({ ...registr, flatNumber: event.target.value });
        break;
      }

      case 'postIndex': {
        setRegistr({ ...registr, postIndex: event.target.value });
        break;
      }

      default:
        return;
    }
  };

  return (
    <Formik
      initialValues={{
        userName: '',
      }}
      validationSchema={Yup.object({
        userName: Yup.string().min(2, 'Min 2 characters').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values));
        setSubmitting(false);
      }}
    >
      <Form>
        <Label id="#userName" text="Имя и Фамилия *" />
        <StyledField
          id="userName"
          name="userName"
          type="text"
          placeholder="Имя и фамилия"
        />
        <ErrorMessage name="userName">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <StyledFormRegistrationLine></StyledFormRegistrationLine>
        <Label id="#email" text="Адрес электронной почты *" />
        <Note>Будет использоваться для авторизации на сайте</Note>
        <StyledField
          id="email"
          name="email"
          type="email"
          placeholder="mail@email.kz"
        />
        <ErrorMessage name="email">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <StyledFormRegistrationLine></StyledFormRegistrationLine>
        <Label id="#password" text="Пароль *" />
        <Note>
          Будет использоваться для авторизации на сайте. От 6 до 14 символов
        </Note>
        <StyledField
          id="password"
          name="password"
          type="password"
          placeholder="********"
        />
        <ErrorMessage name="password">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <Label id="#passwordConfirm" text="Повторите пароль *" simple />
        <StyledField
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          placeholder="********"
        />
        <ErrorMessage name="passwordConfirm">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <StyledFormRegistrationLine></StyledFormRegistrationLine>
        <Label id="#phone" text="Контактный номер телефона *" simple />
        <StyledField
          id="phone"
          name="phone"
          type="phone"
          placeholder="+7 (...) .. .."
        />
        <Note>
          <StyledTextGrey>Примечание:</StyledTextGrey>
          <br />
          Просим Вас указывать действительный номер телефона для связи. Номер
          телефона используется только для связи с клиентом в целях подтвержения
          заказа товара.
        </Note>
        <ErrorMessage name="phone">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <StyledFormRegistrationLine></StyledFormRegistrationLine>
        <TextOrange text="Адрес и почтовый индекс *" />
        <StyledTextSimple>Республика Казахстан</StyledTextSimple>
        <Label id="#city" text="Город или поселок" simple />
        <StyledField
          id="city"
          name="city"
          type="text"
          placeholder="Ваш город"
        />
        <ErrorMessage name="city">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <StyledFlexWrapper>
          <div>
            <Label id="#street" text="Улица" simple />
            <StyledField
              id="street"
              name="street"
              type="text"
              placeholder="-"
            />
            <ErrorMessage name="street">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </div>
          <div>
            <Label id="#houseNumber" text="Номер дома" simple />
            <StyledField
              id="houseNumber"
              name="houseNumber"
              type="text"
              placeholder="-"
              width={'85px'}
            />
            <ErrorMessage name="houseNumber">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </div>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <div>
            <Label id="#floor" text="Этаж" simple />
            <StyledField
              id="floor"
              name="floor"
              type="text"
              placeholder="-"
              width={'85px'}
            />
            <ErrorMessage name="floor">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </div>
          <div>
            <Label id="#flatNumber" text="Номер квартиры" simple />
            <StyledField
              id="flatNumber"
              name="flatNumber"
              type="text"
              placeholder="-"
              width={'85px'}
            />
            <ErrorMessage name="flatNumber">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </div>
        </StyledFlexWrapper>
        <Label id="#postIndex" text="Почтовый индекс" simple />
        <StyledField
          id="postIndex"
          name="postIndex"
          type="text"
          placeholder="-"
        />
        <ErrorMessage name="postIndex">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>
        <Note>
          <StyledTextGrey>Примечание:</StyledTextGrey>
          <br />
          Адрес используется только для доставки курьером или опредения ближней
          почтовой точки для доставки.
        </Note>
        <StyledFormRegistrationLine></StyledFormRegistrationLine>
        <Button type="submit" text="Зарегистрироваться" />
      </Form>
    </Formik>
    //  <StyledForm>
    //   <Label id="#username" text="Имя и Фамилия *" />
    //   <Input
    //     id="username"
    //     type="text"
    //     name="username"
    //     placeholder="Ваши имя и фамилия"
    //     value={registr.username}
    //     onChange={inputChangeHandler}
    //   />
    //   <StyledFormRegistration></StyledFormRegistration>
    //   <Label id="#email" text="Адрес электронной почты *" />
    //   <Note>Будет использоваться для авторизации на сайте</Note>
    //   <Input
    //     id="email"
    //     type="email"
    //     name="email"
    //     placeholder="mail@email.kz"
    //     value={registr.email}
    //     onChange={inputChangeHandler}
    //   />
    //   <StyledFormRegistration></StyledFormRegistration>
    //   <Label id="#password" text="Пароль *" />
    //   <Note>
    //     Будет использоваться для авторизации на сайте. От 6 до 14 символов
    //   </Note>
    //   <Input
    //     id="password"
    //     type="password"
    //     name="password"
    //     placeholder="********"
    //     value={registr.password}
    //     onChange={inputChangeHandler}
    //   />
    //   <Label id="#passwordConfirm" text="Повторите пароль *" simple />
    //   <Input
    //     id="passwordConfirm"
    //     type="password"
    //     name="passwordConfirm"
    //     placeholder="********"
    //     value={registr.passwordConfirm}
    //     onChange={inputChangeHandler}
    //   />
    //   <StyledFormRegistration></StyledFormRegistration>
    //   <Label id="#phone" text="Контактный номер телефона *" />
    //   <Input
    //     id="phone"
    //     type="text"
    //     name="phone"
    //     placeholder="+7 (...) .. .."
    //     value={registr.phone}
    //     onChange={inputChangeHandler}
    //   />
    //   <Note>
    //     <StyledTextGrey>Примечание:</StyledTextGrey>
    //     <br />
    //     Просим Вас указывать действительный номер телефона для связи. Номер
    //     телефона используется только для связи с клиентом в целях подтвержения
    //     заказа товара.
    //   </Note>
    //   <TextOrange text="Адрес и почтовый индекс *" />
    //   <StyledTextSimple>Республика Казахстан</StyledTextSimple>
    //   <Label id="#city" text="Город или поселок" simple />
    //   <Input
    //     id="city"
    //     type="text"
    //     name="city"
    //     placeholder="Ваш город"
    //     value={registr.city}
    //     onChange={inputChangeHandler}
    //   />
    //   <StyledFlexWrapper>
    //     <div>
    //       <Label id="#street" text="Улица" simple />
    //       <Input
    //         id="street"
    //         type="text"
    //         name="street"
    //         placeholder="Наименование улицы"
    //         value={registr.street}
    //         onChange={inputChangeHandler}
    //       />
    //     </div>
    //     <div>
    //       <Label id="#houseNumber" text="Номер дома" simple />
    //       <Input
    //         id="houseNumber"
    //         type="text"
    //         name="houseNumber"
    //         placeholder="-"
    //         value={registr.houseNumber}
    //         width={'85px'}
    //         onChange={inputChangeHandler}
    //       />
    //     </div>
    //   </StyledFlexWrapper>
    //   <StyledFlexWrapper>
    //     <div>
    //       <Label id="#floor" text="Этаж" simple />
    //       <Input
    //         id="floor"
    //         type="text"
    //         name="floor"
    //         placeholder="-"
    //         value={registr.floor}
    //         width={'85px'}
    //         onChange={inputChangeHandler}
    //       />
    //     </div>
    //     <div>
    //       <Label id="#flatNumber" text="Номер квартиры" simple />
    //       <StyledTextLightGrey>(если есть)</StyledTextLightGrey>
    //       <Input
    //         id="flatNumber"
    //         type="text"
    //         name="flatNumber"
    //         placeholder="-"
    //         value={registr.flatNumber}
    //         width={'85px'}
    //         onChange={inputChangeHandler}
    //       />
    //     </div>
    //   </StyledFlexWrapper>
    //   <Label id="#postIndex" text="Почтовый индекс" simple />
    //   <Input
    //     id="postIndex"
    //     type="text"
    //     name="postIndex"
    //     placeholder="-"
    //     value={registr.postIndex}
    //     onChange={inputChangeHandler}
    //   />
    //   <Note>
    //     <StyledTextGrey>Примечание:</StyledTextGrey>
    //     <br />
    //     Просим Вас указывать действительный номер телефона для связи. Номер
    //     телефона используется только для связи с клиентом в целях подтвержения
    //     заказа товара.
    //   </Note>
    //   <Button
    //     type="submit"
    //     text="Зарегистрироваться"
    //     clickHandler={registrClickHandler}
    //   />
    // </StyledForm>
  );
};

export default FormRegistration;
