import { FC, MouseEvent, useState } from 'react';
import Container from '../../Blocks/Container/Container';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import {
  StyledUserCabinet,
  StyledUserCabinetAddressWrapper,
  StyledUserCabinetDate,
  StyledUserCabinetEditButton,
  StyledUserCabinetEmail,
  StyledUserCabinetName,
  StyledUserCabinetSubtitle,
  StyledUserCabinetTel,
} from './StyledUserCabinet';
import eyeIcon from '../../../../assets/images/eye-icon.png';
import UserAvatar from '../../Blocks/UserAvatar/UserAvatar';
import { months } from '../../../utils/staticData';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import { StyledTextSimple } from '../../../commonStyles/StyledTextSimple';
import Note from '../../Elements/Note/Note';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { StyledEyeIcon } from '../../../commonStyles/StyledEyeIcon';
import { useNavigate } from 'react-router-dom';

const UserCabinet: FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);
  const [showPhone, setShowPhone] = useState(false);
  const user = users.filter((user: any) => user.email === userEmail)[0];
  const dateArr = String(new Date(user.createdAt)).split(' ');
  const navigate = useNavigate();

  const eyeIconMouseDownHandler = (event: MouseEvent<HTMLImageElement>) => {
    setShowPhone(true);
  };

  const eyeIconMouseUpHandler = (event: MouseEvent<HTMLImageElement>) => {
    setShowPhone(false);
  };

  const editProfileButtonHandler = () => {
    navigate('/editprofile');
  };

  return (
    <Container type="common">
      <StyledUserCabinet>
        <SectionTitle text="Личный кабинет" primary={false} />
        <StyledInfoWrapper>
          <UserAvatar mode="between" image={user.image} />

          <StyledInfo>
            <StyledUserCabinetEditButton onClick={editProfileButtonHandler}>
              Изменить или редактировать данные
            </StyledUserCabinetEditButton>
            <StyledUserCabinetName>{user.username}</StyledUserCabinetName>
            <StyledUserCabinetDate>
              <TextOrange text="Дата регистрации на сайте: " />
              <span>{`${dateArr[2]} ${months[dateArr[1].toLowerCase()]} ${
                dateArr[3]
              } г.`}</span>
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
              {showPhone ? user.phone : `+7 (7XX) XXX X${user.phone.slice(-4)}`}
              <StyledEyeIcon
                position="static"
                src={eyeIcon}
                onMouseDown={eyeIconMouseDownHandler}
                onMouseUp={eyeIconMouseUpHandler}
              />
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
