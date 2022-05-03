import { FC, ChangeEvent, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { OrderModalContext } from '../../../../App';
import {
  setCartDelivery,
  setCartSelect,
} from '../../../redux/reducers/cart/cartReducer';
import AuthCartDelivery from '../../Blocks/AuthСartDelivery/AuthCartDelivery';
import CartItem from '../../Blocks/CartItem/CartItem';
import Container from '../../Blocks/Container/Container';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { ICartPage } from './ICartPage';
import {
  StyledCartGoodsWrapper,
  StyledCartPage,
  StyledCartPageWrapper,
} from './StyledCartPage';

const CartPage: FC<ICartPage> = ({ cart }) => {
  const setOrderModalActive = useContext(OrderModalContext);

  console.log(cart.selected.delivery);

  const dispatch = useDispatch();

  const orderSubmitHandler = () => {
    setOrderModalActive(true);
  };

  const optionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case 'Экспресс доставка +2000': {
        dispatch(setCartDelivery(2000));
        dispatch(
          setCartSelect({
            delivery: 'Экспресс доставка +2000',
            payment: cart.selected.payment,
          }),
        );
        break;
      }

      case 'Доставка почтой': {
        dispatch(setCartDelivery(0));
        dispatch(
          setCartSelect({
            delivery: 'Доставка почтой',
            payment: cart.selected.payment,
          }),
        );
        break;
      }

      case 'Оплата наличными': {
        dispatch(
          setCartSelect({
            delivery: cart.selected.delivery,
            payment: 'Оплата наличными',
          }),
        );
        break;
      }

      case 'Оплата картой онлайн': {
        dispatch(
          setCartSelect({
            delivery: cart.selected.delivery,
            payment: 'Оплата картой онлайн',
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
        <StyledCartPageWrapper>
          <StyledCartGoodsWrapper>
            {cart.goods.map((good, index) => (
              <CartItem key={index + good.name} good={good} cart={cart} />
            ))}
          </StyledCartGoodsWrapper>
          {cart.goods.length > 0 ? (
            <AuthCartDelivery
              cart={cart}
              changeHandler={optionChangeHandler}
              submitHandler={orderSubmitHandler}
            />
          ) : (
            'Добавьте товар в корзину'
          )}
        </StyledCartPageWrapper>
      </StyledCartPage>
      <div style={{ height: '20vh' }}></div>
    </Container>
  );
};

export default CartPage;
