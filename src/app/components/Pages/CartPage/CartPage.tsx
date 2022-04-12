import { FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCartDelivery,
  setCartSelect,
} from '../../../redux/reducers/cart/cartReducer';
import { RootState } from '../../../redux/store';
import CartItem from '../../Blocks/CartItem/CartItem';
import Container from '../../Blocks/Container/Container';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import Select from '../../Elements/Select/Select';
import { ICartPage } from './ICartPage';
import { StyledCartPage, StyledCartSum } from './StyledCartPage';

const CartPage: FC<ICartPage> = ({ goods, sum }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.cart.selected);

  const optionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case 'экспресс': {
        dispatch(setCartDelivery(2000));
        dispatch(
          setCartSelect({ delivery: 'экспресс', payment: selected.payment }),
        );
        break;
      }

      case 'почтой': {
        dispatch(setCartDelivery(0));
        dispatch(
          setCartSelect({
            delivery: 'почтой',
            payment: selected.payment,
          }),
        );
        break;
      }

      case 'наличными': {
        dispatch(
          setCartSelect({ delivery: selected.delivery, payment: 'почтой' }),
        );
        break;
      }

      case 'банковской картой': {
        dispatch(
          setCartSelect({
            delivery: selected.delivery,
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
        {goods.map((good, index) => (
          <CartItem key={index + good.name} good={good} />
        ))}
        <Label id="#delivery" text="Способ доставки" />
        <Select
          selected={selected.delivery}
          id="delivery"
          optionValue={['экспресс', 'почтой']}
          changeHandler={optionChangeHandler}
        />
        <Label id="#payment" text="Способ оплаты" />
        <Select
          selected={selected.payment}
          id="payment"
          optionValue={['наличными', 'банковской картой']}
        />
        <StyledCartSum>{sum}</StyledCartSum>
        <Button text="Оформить заказ" />
      </StyledCartPage>
    </Container>
  );
};

export default CartPage;
