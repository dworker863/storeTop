import { FC } from 'react';
import RegistrationPage from '../../Pages/RegistrationPage/RegistarationPage';
import {
  StyledCartPageDelivery,
  StyledCartPageDeliveryTitle,
} from '../AuthСartDelivery/StyledAuthCartDelivery';

const UnauthCartDelivery: FC = () => {
  return (
    <StyledCartPageDelivery>
      <StyledCartPageDeliveryTitle>
        Информация и способ доставки
      </StyledCartPageDeliveryTitle>
      <RegistrationPage />
    </StyledCartPageDelivery>
  );
};

export default UnauthCartDelivery;
