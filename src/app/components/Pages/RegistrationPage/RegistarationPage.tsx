import { FC } from 'react';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import { registrationButtonsText } from '../../../utils/staticData';
import Container from '../../Blocks/Container/Container';
import FormRegistration from '../../Blocks/FormRegistration/FormRegistration';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import UserAvatar from '../../Elements/UserAvatar/UserAvatar';
import {
  StyledRegistrationPage,
  StyledRegistrationTitle,
} from './StyledRegistrationPage';

const RegistrationPage: FC = () => {
  return (
    <Container type="common">
      <StyledRegistrationPage>
        <SectionTitle text="Регистрация" primary={false} />
        <StyledInfoWrapper>
          <UserAvatar buttonsText={registrationButtonsText} mode="center" />
          <StyledInfo>
            <StyledRegistrationTitle>
              Звездочкой (*) отмечены поля обязательные к заполнению
            </StyledRegistrationTitle>
            <FormRegistration />
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledRegistrationPage>
    </Container>
  );
};

export default RegistrationPage;
