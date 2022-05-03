import { ErrorMessage, Formik } from 'formik';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StyledBlockLine } from '../../../commonStyles/StyledBlockLine';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledFlexWrapper } from '../../../commonStyles/StyledFlexWrapper';
import { StyledTextSimple } from '../../../commonStyles/StyledTextSimple';
import { RootState } from '../../../redux/store';
import Button from '../../Elements/Button/Button';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import Label from '../../Elements/Label/Label';
import Note from '../../Elements/Note/Note';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import { StyledRegistrationTitle } from '../../Pages/RegistrationPage/StyledRegistrationPage';
import { StyledCartPageDeliveryTitle } from '../AuthСartDelivery/StyledAuthCartDelivery';
import { StyledUnauthCartPageDelivery } from './StyledUnauthCartDelivery';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../hooks';
import { setRegistration } from '../../../redux/reducers/auth/authReducer';
import { useNavigate } from 'react-router-dom';

const UnauthCartDelivery: FC = () => {
  const error = useSelector((state: RootState) => state.auth.errorRegistr);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const image = 'http://localhost/5000';

  return (
    <StyledUnauthCartPageDelivery>
      <StyledCartPageDeliveryTitle>
        Информация и способ доставки
      </StyledCartPageDeliveryTitle>
      <StyledRegistrationTitle>
        Звездочкой (*) отмечены поля обязательные к заполнению
      </StyledRegistrationTitle>
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
              image,
            ),
          ).then((res) => {
            if (res.payload.errorRegistr.length === 0) {
              navigate('/');
            }
          });

          setSubmitting(false);
        }}
      >
        <TextOrange text="Адрес и почтовый индекс *" />
        <StyledTextSimple>Республика Казахстан</StyledTextSimple>
        <Label id="city" text="Город или поселок" simple />
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
            <Label id="street" text="Улица" simple />
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
            <Label id="houseNumber" text="Номер дома" simple />
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
            <Label id="floor" text="Этаж" simple />
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
            <Label id="flatNumber" text="Номер квартиры" simple />
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
        <Label id="postIndex" text="Почтовый индекс" simple />
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
        <StyledBlockLine></StyledBlockLine>
        {error?.length > 0 && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <Button type="submit" text="Зарегистрироваться" />
      </Formik>
    </StyledUnauthCartPageDelivery>
  );
};

export default UnauthCartDelivery;
