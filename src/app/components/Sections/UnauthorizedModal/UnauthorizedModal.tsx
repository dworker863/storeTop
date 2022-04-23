import { FC, MouseEvent } from 'react';
import {
  StyledModal,
  StyledModalCloseButton,
} from '../../../commonStyles/StyledModal';
import Button from '../../Elements/Button/Button';
import { StyledOrderModalText } from '../OrderModal/StyledOrderModal';
import { IUnauthorizedModal } from './IUnauthorizedModal';
import { StyledUnauthorizedModal } from './StyledUnauthorizedModal';

const UnauthorizedModal: FC<IUnauthorizedModal> = ({
  active,
  buttonHandler,
  user,
  text,
}) => {
  const buttonsClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    buttonHandler(false, '');
  };

  return (
    <StyledUnauthorizedModal active={active}>
      <StyledModal active={active}>
        <StyledOrderModalText>{text}</StyledOrderModalText>
        <StyledModalCloseButton
          onClick={buttonsClickHandler}
        ></StyledModalCloseButton>
        <Button text="Закрыть" clickHandler={buttonsClickHandler} />
      </StyledModal>
    </StyledUnauthorizedModal>
  );
};

export default UnauthorizedModal;
