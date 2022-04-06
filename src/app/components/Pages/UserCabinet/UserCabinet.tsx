import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { IUserCabinet } from './IUserCabainet';
import {
  StyledUserCabinet,
  StyledUserCabinetAddress,
  StyledUserCabinetEmail,
  StyledUserCabinetName,
  StyledUserCabinetPostIndex,
  StyledUserCabinetTel,
} from './StyledUserCabinet';

const UserCabinet: FC<IUserCabinet> = ({ user }) => {
  return (
    <Container type="common">
      <StyledUserCabinet>
        <SectionTitle text="UserCabinet" primary={false} />
        <StyledUserCabinetName>Имя: {user.username}</StyledUserCabinetName>
        <StyledUserCabinetTel>Телефон: {user.tel}</StyledUserCabinetTel>
        <StyledUserCabinetEmail>Email: {user.email}</StyledUserCabinetEmail>
        <StyledUserCabinetAddress>
          Адрес: {user.address}
        </StyledUserCabinetAddress>
        <StyledUserCabinetPostIndex>
          Почтовый индекс: {user.postIndex}
        </StyledUserCabinetPostIndex>
      </StyledUserCabinet>
    </Container>
  );
};

export default UserCabinet;
