import { ChangeEvent, FC, useState } from 'react';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import Container from '../../Blocks/Container/Container';
import FormRegistration from '../../Blocks/FormRegistration/FormRegistration';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledRegistrationPage,
  StyledRegistrationTitle,
} from './StyledRegistrationPage';
import Image from '../../Blocks/Image/Image';

const RegistrationPage: FC = () => {
  const [userAvatar, setUserAvatar] = useState(null);

  return (
    <Container type="common">
      <StyledRegistrationPage>
        <SectionTitle text="Регистрация" primary={false} />
        <StyledInfoWrapper>
          <Image
            mode="registration"
            buttonMode="center"
            changeHandler={setUserAvatar}
          />
          <StyledInfo>
            <StyledRegistrationTitle>
              Звездочкой (*) отмечены поля обязательные к заполнению
            </StyledRegistrationTitle>
            <FormRegistration image={userAvatar} />
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledRegistrationPage>
    </Container>
  );
};

export default RegistrationPage;
