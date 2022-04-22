import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import { RootState } from '../../../redux/store';
import Container from '../../Blocks/Container/Container';
import FormEditProfile from '../../Blocks/FormEditProfile/FormEditProfile';
import Image from '../../Blocks/Image/Image';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { StyledUserCabinet } from '../UserCabinet/StyledUserCabinet';

const EditProfilePage: FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);
  const user = users.filter((user: any) => user.email === userEmail)[0];
  const [userAvatar, setUserAvatar] = useState(user?.image);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);

    !user && navigate('/');
  }, [user]);

  return (
    <Container type="common">
      <StyledUserCabinet>
        <SectionTitle text="Редактировать профиль" primary={false} />
        <StyledInfoWrapper>
          <Image
            mode="edit"
            buttonMode="center"
            image={user?.image}
            changeHandler={setUserAvatar}
          />
          <StyledInfo>
            <FormEditProfile user={user} image={userAvatar} />
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledUserCabinet>
    </Container>
  );
};

export default EditProfilePage;
