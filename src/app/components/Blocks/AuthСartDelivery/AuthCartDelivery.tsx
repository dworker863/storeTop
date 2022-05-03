import { FC } from 'react';
import Button from '../../Elements/Button/Button';
import { StyledTextGrey } from '../../Elements/ContactsItem/StyledContactsItem';
import Select from '../../Elements/Select/Select';
import { IAuthCartDeliveryState } from './IAuthCartDelivery';
import {
  StyledCartBigLine,
  StyledCartExpress,
  StyledCartFullLine,
  StyledCartGoodItem,
  StyledCartGoodItemCount,
  StyledCartGoodPrice,
  StyledCartGoodTitle,
  StyledCartIndex,
  StyledCartNote,
  StyledCartNoteText,
  StyledCartOrderInfo,
  StyledCartOrderWrapper,
  StyledCartPageDelivery,
  StyledCartPageDeliverySubTitle,
  StyledCartPageDeliveryTitle,
  StyledCartPromo,
  StyledCartPromoBtn,
  StyledCartPromoInput,
  StyledCartPromoTitle,
  StyledCartShortLine,
  StyledCartString,
  StyledCartSum,
  StyledCartSumTitle,
  StyledCartSumWrapper,
} from './StyledAuthCartDelivery';

const AuthCartDelivery: FC<IAuthCartDeliveryState> = ({
  cart,
  changeHandler,
  submitHandler,
}) => {
  return (
    <StyledCartPageDelivery>
      <StyledCartPageDeliveryTitle>Способ оплаты</StyledCartPageDeliveryTitle>
      <Select
        id="delivery"
        optionValue={['Оплата наличными', 'Оплата картой онлайн']}
        selected={cart.selected.payment}
        changeHandler={changeHandler}
      />
      <StyledCartNote>
        <StyledTextGrey>Примечание:</StyledTextGrey>
        <StyledCartNoteText>
          При выборе оплаты наличными, оплата производится курьеру или на
          почтовым отделении. При выборе оплаты картой, Вы будете перенаправлены
          на страницу банка-партнера.
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
      <StyledCartString>ул. Уличная, д. 50А, кв. 111, 7 этаж,</StyledCartString>
      <StyledCartIndex>
        <StyledTextGrey>Почтовый индекс:</StyledTextGrey> 050000
      </StyledCartIndex>
      <StyledCartShortLine></StyledCartShortLine>
      <Select
        id="delivery"
        optionValue={['Экспресс доставка +2000', 'Доставка почтой']}
        selected={cart.selected.delivery}
        changeHandler={changeHandler}
      />
      <StyledCartNote>
        <StyledTextGrey>Примечание:</StyledTextGrey>
        <StyledCartNoteText>
          При выборе оплаты наличными, оплата производится курьеру или на
          почтовым отделении. При выборе оплаты картой, Вы будете перенаправлены
          на страницу банка-партнера.
        </StyledCartNoteText>
      </StyledCartNote>
      <StyledCartPromoTitle>Есть промокод?</StyledCartPromoTitle>
      <StyledCartPromoInput type="text" />
      <StyledCartPromoBtn></StyledCartPromoBtn>
      <StyledCartShortLine></StyledCartShortLine>
      <StyledCartSumTitle>Общий итог</StyledCartSumTitle>
      {cart.goods.map((good, index) => (
        <StyledCartGoodItem key={good.name + index}>
          <div>
            <StyledCartGoodTitle>{good.name}</StyledCartGoodTitle>
            <StyledCartGoodItemCount>
              {`Количество: ${good.goodsCount}`}
            </StyledCartGoodItemCount>
          </div>
          <StyledCartGoodPrice>{`${
            Number(good.price) * good.goodsCount
          } тг.`}</StyledCartGoodPrice>
        </StyledCartGoodItem>
      ))}
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
        <Button text="Оформить заказ" clickHandler={submitHandler} />
        <StyledCartOrderInfo>
          подробных условиях оплаты
          <br /> можете узнать <a href="#">здесь</a>
        </StyledCartOrderInfo>
      </StyledCartOrderWrapper>
    </StyledCartPageDelivery>
  );
};

export default AuthCartDelivery;
