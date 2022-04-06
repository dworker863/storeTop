import { FC } from 'react';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { IAuthModal } from './IAuthModal';
import { StyledAuthModal } from './StyledAuthModal';

const AuthModal: FC<IAuthModal> = ({ active, authButtonHandler }) => {
  return (
    <StyledAuthModal active={active}>
      <SectionTitle text="Авторизация" primary={false} />
      <FormAuth authButtonHandler={authButtonHandler} />
    </StyledAuthModal>
  );
};

export default AuthModal;
