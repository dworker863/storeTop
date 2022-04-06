import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import FormRegistration from '../../Blocks/FormRegistration/FormRegistration';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { StyledRegistrationPage } from './StyledRegistrationPage';

const RegistrationPage: FC = () => {
  return (
    <Container type="common">
      <StyledRegistrationPage>
        <SectionTitle text="Регистрация" primary={false} />
        <FormRegistration />
      </StyledRegistrationPage>
    </Container>
  );
};

export default RegistrationPage;
