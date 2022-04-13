import { FC, MouseEvent, useEffect, useRef } from 'react';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledModal,
  StyledModalCloseButton,
} from '../../../commonStyles/StyledModal';
import { IModal } from '../../../commonInterfaces/IModal';

const AuthModal: FC<IModal> = ({ active, authButtonHandler }) => {
  const modal = useRef(null);

  useEffect(() => {
    const handleClickOutside = (ref: any, event: MouseEvent<HTMLElement>) => {
      if (ref.current && !ref.current.contains(event.target)) {
        authButtonHandler(false);
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
  }, [authButtonHandler, modal]);

  const closeButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    authButtonHandler(false);
  };

  return (
    <StyledModal ref={modal} active={active}>
      <StyledModalCloseButton
        onClick={closeButtonClickHandler}
      ></StyledModalCloseButton>
      <SectionTitle text="Вход пользователя" primary={false} />
      <FormAuth authButtonHandler={authButtonHandler} />
    </StyledModal>
  );
};

export default AuthModal;
