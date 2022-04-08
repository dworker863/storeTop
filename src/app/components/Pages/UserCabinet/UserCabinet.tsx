import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import { IUserCabinet } from './IUserCabainet';
import {
  StyledEyeIcon,
  StyledUserCabinet,
  StyledUserCabinetAddressWrapper,
  StyledUserCabinetDate,
  StyledUserCabinetEmail,
  StyledUserCabinetName,
  StyledUserCabinetNote,
  StyledUserCabinetSubtitle,
  StyledUserCabinetTel,
} from './StyledUserCabinet';
import eyeIcon from '../../../../assets/images/eye-icon.png';
import UserAvatar from '../../Elements/UserAvatar/UserAvatar';
import { cabinetButtonsText } from '../../../utils/staticData';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import { StyledTextSimple } from '../../../commonStyles/StyledTextSimple';

const UserCabinet: FC<IUserCabinet> = ({ user }) => {
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
              {user.tel}
              <StyledEyeIcon src={eyeIcon} />
              <StyledUserCabinetNote>
                <StyledTextGrey>Примечание:</StyledTextGrey>
                <br />
                Просим Вас указывать действительный номер телефона для связи.
                Номер телефона используется только для связи с клиентом в целях
                подтвержения заказа товара
              </StyledUserCabinetNote>
            </StyledUserCabinetTel>
            <StyledUserCabinetAddressWrapper>
              <StyledUserCabinetSubtitle>
                Адрес и почтовый индекс
              </StyledUserCabinetSubtitle>
              <StyledTextSimple>Республика Казахстан,</StyledTextSimple>
              <StyledTextSimple>г. Алматы</StyledTextSimple>
              <StyledTextSimple>
                ул. Уличная, д. 50А, кв. 111, 7 этаж
              </StyledTextSimple>
              Почтовый индекс: {user.postIndex}
              <StyledUserCabinetNote>
                <StyledTextGrey>Примечание:</StyledTextGrey>
                <br />
                Адрес используется только для доставки курьером или опредения
                ближней почтовой точки для доставки.
              </StyledUserCabinetNote>
            </StyledUserCabinetAddressWrapper>
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledUserCabinet>
    </Container>
  );
};

export default UserCabinet;
