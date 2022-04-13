import { FC, MouseEvent } from 'react';
import { IModal } from '../../../commonInterfaces/IModal';
import {
  StyledModal,
  StyledModalCloseButton,
} from '../../../commonStyles/StyledModal';
import Button from '../../Elements/Button/Button';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledOrderModalText,
  StyledOrderModalWrapper,
} from './StyledOrderModal';

const OrderModal: FC<IModal> = ({ active, buttonHandler }) => {
  const buttonsClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    buttonHandler(false);
  };

  return (
    <StyledOrderModalWrapper>
      <StyledModal active={active}>
        <SectionTitle text="Спасибо за заявку!" primary={false} />
        <StyledOrderModalText>
          Операторы свяжутся с Вами в ближайшее время
        </StyledOrderModalText>
        <StyledModalCloseButton
          onClick={buttonsClickHandler}
        ></StyledModalCloseButton>
        <Button text="Закрыть" clickHandler={buttonsClickHandler} />
      </StyledModal>
    </StyledOrderModalWrapper>
  );
};

export default OrderModal;
