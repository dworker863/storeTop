import { FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCartDelivery,
  setCartSelect,
} from '../../../redux/reducers/cart/cartReducer';
import CartItem from '../../Blocks/CartItem/CartItem';
import Container from '../../Blocks/Container/Container';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import Select from '../../Elements/Select/Select';
import { ICartPage } from './ICartPage';
import { StyledCartPage, StyledCartSum } from './StyledCartPage';

const CartPage: FC<ICartPage> = ({ cart }) => {
  const dispatch = useDispatch();

  const optionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case 'экспресс': {
        dispatch(setCartDelivery(2000));
        dispatch(
          setCartSelect({
            delivery: 'экспресс',
            payment: cart.selected.payment,
          }),
        );
        break;
      }

      case 'почтой': {
        dispatch(setCartDelivery(0));
        dispatch(
          setCartSelect({
            delivery: 'почтой',
            payment: cart.selected.payment,
          }),
        );
        break;
      }

      case 'наличными': {
        dispatch(
          setCartSelect({
            delivery: cart.selected.delivery,
            payment: 'почтой',
          }),
        );
        break;
      }

      case 'банковской картой': {
        dispatch(
          setCartSelect({
            delivery: cart.selected.delivery,
            payment: 'банковской картой',
          }),
        );
        break;
      }

      default:
        return;
    }
  };

  return (
    <Container type="common">
      <StyledCartPage>
        <SectionTitle text="Корзина" primary={false} margin />
        {cart.goods.map((good, index) => (
          <CartItem key={index + good.name} good={good} cart={cart} />
        ))}
        <Label id="#delivery" text="Способ доставки" />
        <Select
          selected={cart.selected.delivery}
          id="delivery"
          optionValue={['экспресс', 'почтой']}
          changeHandler={optionChangeHandler}
        />
        <Label id="#payment" text="Способ оплаты" />
        <Select
          selected={cart.selected.payment}
          id="payment"
          optionValue={['наличными', 'банковской картой']}
        />
        <StyledCartSum>{cart.sum}</StyledCartSum>
        <Button text="Оформить заказ" />
      </StyledCartPage>
    </Container>
  );
};

export default CartPage;
