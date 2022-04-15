import { ErrorMessage, Form, Formik } from 'formik';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import { StyledBlockLine } from '../../../commonStyles/StyledBlockLine';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { StyledField } from '../../../commonStyles/StyledField';
import { RootState } from '../../../redux/store';
import Label from '../../Elements/Label/Label';
import Note from '../../Elements/Note/Note';
import { StyledFlexWrapper } from '../../../commonStyles/StyledFlexWrapper';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import Button from '../../Elements/Button/Button';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import { StyledTextSimple } from '../../../commonStyles/StyledTextSimple';
import { StyledEditProfileButtonsWrapper } from './StyledEditProfilePage';
import { updateUserInfo } from '../../../redux/reducers/users/usersReducer';
import { useNavigate } from 'react-router-dom';

const FormEditProfile: FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);
  const [buttonMode, setButtonMode] = useState(true);
  const dispatch = useDispatch();
  const user = users.filter((user: any) => user.email === userEmail)[0];
  const navigate = useNavigate();

  return (
    <Formik
      enableReinitialize
      initialValues={{
        username: user?.username,
        email: user?.email,
        password: user?.password,
        passwordConfirm: user?.passwordConfirm,
        phone: user?.phone,
        city: user?.city,
        street: user?.street,
        houseNumber: user?.houseNumber,
        floor: user?.floor,
        flatNumber: user?.flatNumber,
        postIndex: user?.postIndex,
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(2, 'Имя должен содержать не меньше 2 букв')
          .required('Введите имя'),
        email: Yup.string()
          .email('Некорректный email')
          .required('Введите email'),
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
        console.log(111);

        dispatch(
          updateUserInfo({
            id: user.id,
            username: values.username,
            email: values.email,
            password: user.password,
            phone: values.phone,
            city: values.city,
            street: values.street,
            houseNumber: values.houseNumber,
            floor: values.floor,
            flatNumber: values.flatNumber,
            postIndex: values.postIndex,
          }),
        );

        navigate('/cabinet');
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form
          onChange={(e: ChangeEvent<any>) => {
            setButtonMode(false);
            props.handleChange(e);
          }}
        >
          <Label id="username" text="Имя и Фамилия *" />
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
          <Label id="email" text="Адрес электронной почты *" />
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
          <Label id="phone" text="Контактный номер телефона *" simple />
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
            Адрес используется только для доставки курьером или опредения
            ближней почтовой точки для доставки.
          </Note>
          <StyledBlockLine></StyledBlockLine>
          <StyledEditProfileButtonsWrapper>
            <Button type="submit" text="Сохранить изменения" />
            <Button
              type="reset"
              text="Х Отмена"
              clickHandler={(e: ChangeEvent<any>) => {
                setButtonMode(true);
                props.handleReset();
              }}
              simple={buttonMode}
            />
          </StyledEditProfileButtonsWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default FormEditProfile;
