import { FC, ChangeEvent, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { OrderModalContext } from '../../../../App';
import {
  setCartDelivery,
  setCartSelect,
} from '../../../redux/reducers/cart/cartReducer';
import CartItem from '../../Blocks/CartItem/CartItem';
import Container from '../../Blocks/Container/Container';
import Button from '../../Elements/Button/Button';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { ICartPage } from './ICartPage';
import {
  StyledCartBigLine,
  StyledCartExpress,
  StyledCartFullLine,
  StyledCartGoodItem,
  StyledCartGoodItemCount,
  StyledCartGoodPrice,
  StyledCartGoodsWrapper,
  StyledCartGoodTitle,
  StyledCartIndex,
  StyledCartNote,
  StyledCartNoteText,
  StyledCartOrderInfo,
  StyledCartOrderWrapper,
  StyledCartPage,
  StyledCartPageDelivery,
  StyledCartPageDeliverySubTitle,
  StyledCartPageDeliveryTitle,
  StyledCartPageSelect,
  StyledCartPageWrapper,
  StyledCartPromo,
  StyledCartPromoBtn,
  StyledCartPromoInput,
  StyledCartPromoTitle,
  StyledCartShortLine,
  StyledCartString,
  StyledCartSum,
  StyledCartSumTitle,
  StyledCartSumWrapper,
} from './StyledCartPage';

const CartPage: FC<ICartPage> = ({ cart }) => {
  const setOrderModalActive = useContext(OrderModalContext);

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
            delivery: 'экспресс',
            payment: cart.selected.payment,
          }),
        );
        break;
      }

      case 'Доставка почтой': {
        dispatch(setCartDelivery(0));
        dispatch(
          setCartSelect({
            delivery: 'почтой',
            payment: cart.selected.payment,
          }),
        );
        break;
      }

      case 'Оплата наличными': {
        dispatch(
          setCartSelect({
            delivery: cart.selected.delivery,
            payment: 'наличными',
          }),
        );
        break;
      }

      case 'Оплата картой онлайн': {
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
        <StyledCartPageWrapper>
          <StyledCartGoodsWrapper>
            {cart.goods.map((good, index) => (
              <CartItem key={index + good.name} good={good} cart={cart} />
            ))}
          </StyledCartGoodsWrapper>
          <StyledCartPageDelivery>
            <StyledCartPageDeliveryTitle>
              Способ оплаты
            </StyledCartPageDeliveryTitle>
            <StyledCartPageSelect onChange={optionChangeHandler}>
              <option>Оплата наличными</option>
              <option>Оплата картой онлайн</option>
            </StyledCartPageSelect>

            <StyledCartNote>
              <StyledTextGrey>Примечание:</StyledTextGrey>
              <StyledCartNoteText>
                При выборе оплаты наличными, оплата производится курьеру или на
                почтовым отделении. При выборе оплаты картой, Вы будете
                перенаправлены на страницу банка-партнера.
              </StyledCartNoteText>
            </StyledCartNote>
            <StyledCartBigLine></StyledCartBigLine>
            <StyledCartPageDeliveryTitle>
              Адрес и способ доставки
            </StyledCartPageDeliveryTitle>
            <StyledCartPageDeliverySubTitle>
              Адрес и почтовый индекс
            </StyledCartPageDeliverySubTitle>
            <StyledCartString>Республика Казахстан,</StyledCartString>
            <StyledCartString>г. Алматы,</StyledCartString>
            <StyledCartString>
              ул. Уличная, д. 50А, кв. 111, 7 этаж,
            </StyledCartString>
            <StyledCartIndex>
              <StyledTextGrey>Почтовый индекс:</StyledTextGrey> 050000
            </StyledCartIndex>
            <StyledCartShortLine></StyledCartShortLine>
            <StyledCartPageSelect onChange={optionChangeHandler}>
              <option>Экспресс доставка +2000</option>
              <option selected>Доставка почтой</option>
            </StyledCartPageSelect>
            <StyledCartNote>
              <StyledTextGrey>Примечание:</StyledTextGrey>
              <StyledCartNoteText>
                При выборе оплаты наличными, оплата производится курьеру или на
                почтовым отделении. При выборе оплаты картой, Вы будете
                перенаправлены на страницу банка-партнера.
              </StyledCartNoteText>
            </StyledCartNote>
            <StyledCartPromoTitle>Есть промокод?</StyledCartPromoTitle>
            <StyledCartPromoInput type="text" />
            <StyledCartPromoBtn></StyledCartPromoBtn>
            <StyledCartShortLine></StyledCartShortLine>
            <StyledCartSumTitle>Общий итог</StyledCartSumTitle>
            <StyledCartGoodItem>
              <div>
                <StyledCartGoodTitle>
                  Название первого товара
                </StyledCartGoodTitle>
                <StyledCartGoodItemCount>Количество: 1</StyledCartGoodItemCount>
              </div>
              <StyledCartGoodPrice>30000 тг.</StyledCartGoodPrice>
            </StyledCartGoodItem>
            <StyledCartGoodItem>
              <div>
                <StyledCartGoodTitle>
                  Название второго товара
                </StyledCartGoodTitle>
                <StyledCartGoodItemCount>Количество: 1</StyledCartGoodItemCount>
              </div>
              <StyledCartGoodPrice>30000 тг.</StyledCartGoodPrice>
            </StyledCartGoodItem>
            {cart.delivery > 0 && (
              <StyledCartExpress>
                <StyledCartGoodTitle>Экспресс-доставка</StyledCartGoodTitle>
                <StyledCartGoodPrice>2000 тг.</StyledCartGoodPrice>
              </StyledCartExpress>
            )}
            <StyledCartFullLine></StyledCartFullLine>
            <StyledCartSumWrapper>
              <StyledCartPromo>Промокод не применен.</StyledCartPromo>
              <StyledCartSum>{cart.sum}</StyledCartSum>
            </StyledCartSumWrapper>
            <StyledCartFullLine></StyledCartFullLine>
            <StyledCartOrderWrapper>
              <Button text="Оформить заказ" clickHandler={orderSubmitHandler} />
              <StyledCartOrderInfo>
                подробных условиях оплаты
                <br /> можете узнать <a href="#">здесь</a>
              </StyledCartOrderInfo>
            </StyledCartOrderWrapper>
          </StyledCartPageDelivery>
          {/* <Label id="#delivery" text="Способ доставки" />
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
        <Button text="Оформить заказ" clickHandler={orderSubmitHandler} /> */}

          {/* <StyledCartRecomended>
            <StyledCartPageDeliveryTitle>
              Рекомендации для Вас
            </StyledCartPageDeliveryTitle>
            <StyledCartGoodCard>
              <GoodPageItem
                photo={cart.image}
                name={viewedGood.name}
                desc={viewedGood.description}
              />
            </StyledCartGoodCard>
          </StyledCartRecomended> */}
        </StyledCartPageWrapper>
      </StyledCartPage>
      <div style={{ height: '20vh' }}></div>
    </Container>
  );
};

export default CartPage;
