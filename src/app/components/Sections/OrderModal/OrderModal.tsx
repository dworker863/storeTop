import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IModal } from '../../../commonInterfaces/IModal';
import {
  StyledModal,
  StyledModalCloseButton,
} from '../../../commonStyles/StyledModal';
import { setCart } from '../../../redux/reducers/cart/cartReducer';
import { RootState } from '../../../redux/store';
import Button from '../../Elements/Button/Button';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledOrderModalText,
  StyledOrderModalWrapper,
} from './StyledOrderModal';

const OrderModal: FC<IModal> = ({ active, buttonHandler }) => {
  const cartGoods = useSelector((state: RootState) => state.cart.goods);
  const dispatch = useDispatch();

  const buttonsClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(setCart([]));
    buttonHandler(false);
  };

  return (
    <StyledOrderModalWrapper>
      <StyledModal active={active}>
        <SectionTitle
          text={
            cartGoods.length === 0 && window.location.pathname === '/cart'
              ? ''
              : 'Спасибо за заявку!'
          }
          primary={false}
        />
        <StyledOrderModalText>
          {cartGoods.length === 0 && window.location.pathname === '/cart'
            ? 'Добавьте товары в корзину'
            : 'Операторы свяжутся с Вами в ближайшее время'}
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
