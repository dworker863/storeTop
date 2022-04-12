import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import {
  StyledEyeIcon,
  StyledUserCabinet,
  StyledUserCabinetAddressWrapper,
  StyledUserCabinetDate,
  StyledUserCabinetEmail,
  StyledUserCabinetName,
  StyledUserCabinetSubtitle,
  StyledUserCabinetTel,
} from './StyledUserCabinet';
import eyeIcon from '../../../../assets/images/eye-icon.png';
import UserAvatar from '../../Blocks/UserAvatar/UserAvatar';
import { cabinetButtonsText } from '../../../utils/staticData';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import { StyledTextSimple } from '../../../commonStyles/StyledTextSimple';
import Note from '../../Elements/Note/Note';
import { useSelector } from 'react-redux';
import { IUser } from '../../../commonInterfaces/IUser';
import { RootState } from '../../../redux/store';

const UserCabinet: FC = () => {
  const users: IUser[] = useSelector((state: RootState) => state.users.users);
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);
  const user = users.filter((user) => user.email === userEmail)[0];

  return (
    <Container type="common">
      <StyledUserCabinet>
        <SectionTitle text="Личный кабинет" primary={false} />
        <StyledInfoWrapper>
          <UserAvatar buttonsText={cabinetButtonsText} mode="between" />

          <StyledInfo>
            <StyledUserCabinetName>{user.username}</StyledUserCabinetName>
            <StyledUserCabinetDate>
              <TextOrange text="Дата регистрации на сайте: " />
              <span>20 сентября 2022 г.</span>
            </StyledUserCabinetDate>
            <StyledUserCabinetEmail>
              <StyledUserCabinetSubtitle>
                Адрес электронной почты
              </StyledUserCabinetSubtitle>
              {user.email}
            </StyledUserCabinetEmail>
            <StyledUserCabinetTel>
              <StyledUserCabinetSubtitle>
                Контактный номер телефона
              </StyledUserCabinetSubtitle>
              {user.phone}
              <StyledEyeIcon src={eyeIcon} />
              <Note>
                <StyledTextGrey>Примечание:</StyledTextGrey>
                <br />
                Просим Вас указывать действительный номер телефона для связи.
                Номер телефона используется только для связи с клиентом в целях
                подтвержения заказа товара
              </Note>
            </StyledUserCabinetTel>
            <StyledUserCabinetAddressWrapper>
              <StyledUserCabinetSubtitle>
                Адрес и почтовый индекс
              </StyledUserCabinetSubtitle>
              <StyledTextSimple>Республика Казахстан,</StyledTextSimple>
              <StyledTextSimple>{user.street}</StyledTextSimple>
              <StyledTextSimple>
                {`${user.street}, д.${user.houseNumber}, кв.${user.flatNumber}, ${user.floor} этаж`}
              </StyledTextSimple>
              Почтовый индекс: {user.postIndex}
              <Note>
                <StyledTextGrey>Примечание:</StyledTextGrey>
                <br />
                Адрес используется только для доставки курьером или опредения
                ближней почтовой точки для доставки.
              </Note>
            </StyledUserCabinetAddressWrapper>
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledUserCabinet>
    </Container>
  );
};

export default UserCabinet;
