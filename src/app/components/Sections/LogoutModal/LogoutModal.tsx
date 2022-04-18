import { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IModal } from '../../../commonInterfaces/IModal';
import {
  StyledModal,
  StyledModalCloseButton,
} from '../../../commonStyles/StyledModal';
import { setAuth } from '../../../redux/reducers/auth/authReducer';
import Button from '../../Elements/Button/Button';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledLogoutModalButtonWrapper,
  StyledLogoutModalText,
  StyledLogoutModalWrapper,
} from './StyledLogoutModal';

const LogoutModal: FC<IModal> = ({ active, buttonHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonsClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    buttonHandler(false);
  };

  const logoutClickHandler = () => {
    const path = window.location.pathname;
    dispatch(setAuth({ userName: '', userEmail: '', auth: false, error: '' }));
    if (path === '/cabinet' || path === '/editprofile') {
      navigate('/');
    }
    buttonHandler(false);
  };

  return (
    <StyledLogoutModalWrapper>
      <StyledModal active={active}>
        <SectionTitle text=" " primary={false} />
        <StyledLogoutModalText>
          Вы действительно хотите выйти из учетной записи?
        </StyledLogoutModalText>
        <StyledModalCloseButton
          onClick={buttonsClickHandler}
        ></StyledModalCloseButton>
        <StyledLogoutModalButtonWrapper>
          <Button text="Да" clickHandler={logoutClickHandler} />
          <Button text="Отмена" clickHandler={buttonsClickHandler} />
        </StyledLogoutModalButtonWrapper>
      </StyledModal>
    </StyledLogoutModalWrapper>
  );
};

export default LogoutModal;
