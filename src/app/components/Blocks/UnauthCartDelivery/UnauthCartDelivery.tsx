import { Form, Formik } from 'formik';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { addOrder } from '../../../api/api';
import { useAppDispatch } from '../../../hooks';
import { setRegistration } from '../../../redux/reducers/auth/authReducer';
import { StyledRegistrationTitle } from '../../Pages/RegistrationPage/StyledRegistrationPage';
import { StyledCartPageDeliveryTitle } from '../AuthСartDelivery/StyledAuthCartDelivery';
import { StyledUnauthCartPageDelivery } from './StyledUnauthCartDelivery';

const UnauthCartDelivery: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
          addOrder(
            values.username,
            values.phone,
            values.city,
            values.street,
            values.houseNumber,
            values.floor,
            values.flatNumber,
            values.postIndex,
          );
          setSubmitting(false);
        }}
      >
        <Form></Form>
      </Formik>
    </StyledUnauthCartPageDelivery>
  );
};

export default UnauthCartDelivery;
