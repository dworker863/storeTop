import { FC, MouseEvent, useEffect, useRef } from 'react';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledModal,
  StyledModalCloseButton,
} from '../../../commonStyles/StyledModal';
import { IModal } from '../../../commonInterfaces/IModal';
import { StyledAuthModal } from './StyledAuthModal';

const AuthModal: FC<IModal> = ({ active, buttonHandler }) => {
  const modal = useRef(null);

  useEffect(() => {
    const handleClickOutside = (ref: any, event: MouseEvent<HTMLElement>) => {
      if (ref.current && !ref.current.contains(event.target)) {
        buttonHandler(false);
      }
    };

    document.addEventListener('mousedown', (event: any) =>
      handleClickOutside(modal, event),
    );
    return () => {
      document.removeEventListener('mousedown', (event: any) =>
        handleClickOutside(modal, event),
      );
    };
  }, [buttonHandler, modal]);

  const closeButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    buttonHandler(false);
  };

  return (
    <StyledAuthModal>
      <StyledModal ref={modal} active={active}>
        <StyledModalCloseButton
          onClick={closeButtonClickHandler}
        ></StyledModalCloseButton>
        <SectionTitle text="Вход пользователя" primary={false} />
        <FormAuth authButtonHandler={buttonHandler} />
      </StyledModal>
    </StyledAuthModal>
  );
};

export default AuthModal;
