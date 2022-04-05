import { FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setCartDelivery } from '../../../redux/reducers/cart/cartReducer';
import CartItem from '../../Blocks/CartItem/CartItem';
import Container from '../../Blocks/Container/Container';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import Select from '../../Elements/Select/Select';
import { ICartPage } from './ICartPage';
import {
  StyledCartPage,
  StyledCartSum,
  StyledCartTitle,
} from './StyledCartPage';

const CartPage: FC<ICartPage> = ({ goods, sum }) => {
  const dispatch = useDispatch();

  const optionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    event.target.value === 'экспресс'
      ? dispatch(setCartDelivery(2000))
      : dispatch(setCartDelivery(0));
  };

  return (
    <Container type="common">
      <StyledCartPage>
        <StyledCartTitle>Корзина</StyledCartTitle>
        {goods.map((good, index) => (
          <CartItem key={index + good.name} good={good} />
        ))}
        <Label id="#delivery" text="Способ доставки" />
        <Select
          id="delivery"
          optionValue={['экспресс', 'почтой']}
          changeHandler={optionChangeHandler}
        />
        <Label id="#payment" text="Способ оплаты" />
        <Select id="payment" optionValue={['наличными', 'банковской картой']} />
        <StyledCartSum>{sum}</StyledCartSum>
        <Button text="Оформить заказ" />
      </StyledCartPage>
    </Container>
  );
};

export default CartPage;
