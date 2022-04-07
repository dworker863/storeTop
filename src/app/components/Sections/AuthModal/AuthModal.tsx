import { FC, MouseEvent, useEffect, useRef } from 'react';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { IAuthModal } from './IAuthModal';
import { StyledAuthModal } from './StyledAuthModal';

const AuthModal: FC<IAuthModal> = ({ active, authButtonHandler }) => {
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

  return (
    <StyledAuthModal ref={modal} active={active}>
      <SectionTitle text="Вход пользователя" primary={false} />
      <FormAuth authButtonHandler={authButtonHandler} />
    </StyledAuthModal>
  );
};

export default AuthModal;
