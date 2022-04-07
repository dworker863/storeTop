import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import Button from '../../Elements/Button/Button';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import { IUserCabinet } from './IUserCabainet';
import {
  StyledUserCabinet,
  StyledUserCabinetAddress,
  StyledUserCabinetAddressWrapper,
  StyledUserCabinetDate,
  StyledUserCabinetEmail,
  StyledUserCabinetInfo,
  StyledUserCabinetInfoWrapper,
  StyledUserCabinetName,
  StyledUserCabinetNote,
  StyledUserCabinetPhoto,
  StyledUserCabinetPhotoWrapper,
  StyledUserCabinetSubtitle,
  StyledUserCabinetTel,
} from './StyledUserCabinet';

const UserCabinet: FC<IUserCabinet> = ({ user }) => {
  return (
    <Container type="common">
      <StyledUserCabinet>
        <SectionTitle text="Личный кабинет" primary={false} />
        <StyledUserCabinetInfoWrapper>
          <StyledUserCabinetPhotoWrapper>
            <StyledUserCabinetPhoto></StyledUserCabinetPhoto>
            <Button text="Изменить изображение" />
            <Button text="X Удалить" />
          </StyledUserCabinetPhotoWrapper>

          <StyledUserCabinetInfo>
            <StyledUserCabinetName>{user.username}</StyledUserCabinetName>
            <StyledUserCabinetDate>
              <TextOrange text="Дата регистрации на сайте:" /> 20 апреля 2022 г.
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
              Республика Казахстан,
              <br />
              <StyledUserCabinetAddress>г. Алматы</StyledUserCabinetAddress>
              <StyledUserCabinetAddress>
                ул. Уличная, д. 50А, кв. 111, 7 этаж
              </StyledUserCabinetAddress>
              Почтовый индекс: {user.postIndex}
              <StyledUserCabinetNote>
                <StyledTextGrey>Примечание:</StyledTextGrey>
                <br />
                Адрес используется только для доставки курьером или опредения
                ближней почтовой точки для доставки.
              </StyledUserCabinetNote>
            </StyledUserCabinetAddressWrapper>
          </StyledUserCabinetInfo>
        </StyledUserCabinetInfoWrapper>
      </StyledUserCabinet>
    </Container>
  );
};

export default UserCabinet;
