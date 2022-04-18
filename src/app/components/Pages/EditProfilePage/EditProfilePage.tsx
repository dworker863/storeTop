import { FC } from 'react';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import Container from '../../Blocks/Container/Container';
import FormEditProfile from '../../Blocks/FormEditProfile/FormEditProfile';
import UserAvatar from '../../Blocks/Image/Image';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { StyledUserCabinet } from '../UserCabinet/StyledUserCabinet';

const EditProfilePage: FC = () => {
  return (
    <Container type="common">
      <StyledUserCabinet>
        <SectionTitle text="Редактировать профиль" primary={false} />
        <StyledInfoWrapper>
          <UserAvatar mode="edit" buttonMode="center" />
          <StyledInfo>
            <FormEditProfile />
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledUserCabinet>
    </Container>
  );
};

export default EditProfilePage;
