import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegistration } from '../../../redux/reducers/auth/authReducer';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import { StyledTextSimple } from '../../../commonStyles/StyledTextSimple';
import { StyledFlexWrapper } from '../../../commonStyles/StyledFlexWrapper';
import Note from '../../Elements/Note/Note';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { StyledBlockLine } from '../../../commonStyles/StyledBlockLine';
import InputMask from 'react-input-mask';

const FormRegistration: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
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
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(2, 'Пароль должен содержать не меньше 2 букв')
          .required('Введите имя'),
        email: Yup.string()
          .email('Некорректный email')
          .required('Введите email'),
        password: Yup.string()
          .min(4, 'Пароль должен быть не меньше 4 символов')
          .required('Введите пароль'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
          .required('Подтвердите пароль'),
        phone: Yup.string()
          .test('minLength', 'Введите корректный номер телефона', (val) => {
            const valLengthWithoutDashes = val?.replace(/-|_/g, '').length;
            return valLengthWithoutDashes === 18;
          })
          .required('Укажите номер телефона'),
        city: Yup.string(),
        street: Yup.string(),
        houseNumber: Yup.string(),
        floor: Yup.string(),
        flatNumber: Yup.string(),
        postIndex: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values.phone.length);

        dispatch(
          setRegistration(
            values.username,
            values.email,
            values.password,
            values.phone,
            values.city,
            values.street,
            values.houseNumber,
            values.floor,
            values.flatNumber,
            values.postIndex,
            'User',
          ),
        );
        navigate('/');
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Label id="#username" text="Имя и Фамилия *" />
          <StyledField
            id="username"
            name="username"
            type="text"
            placeholder="Имя и фамилия"
          />
          <ErrorMessage name="username">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          <StyledBlockLine></StyledBlockLine>
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
          <StyledBlockLine></StyledBlockLine>
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
          <StyledBlockLine></StyledBlockLine>
          <Label id="#phone" text="Контактный номер телефона *" simple />
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
          <Note>
            <StyledTextGrey>Примечание:</StyledTextGrey>
            <br />
            Просим Вас указывать действительный номер телефона для связи. Номер
            телефона используется только для связи с клиентом в целях
            подтвержения заказа товара.
          </Note>
          <StyledBlockLine></StyledBlockLine>
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
            Адрес используется только для доставки курьером или опредения
            ближней почтовой точки для доставки.
          </Note>
          <StyledBlockLine></StyledBlockLine>
          <Button type="submit" text="Зарегистрироваться" />
        </Form>
      )}
    </Formik>
  );
};

export default FormRegistration;
