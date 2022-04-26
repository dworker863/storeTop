import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCart,
  setCartGoodCount,
} from '../../../redux/reducers/cart/cartReducer';
import { ICartItem } from './ICartItem';
import {
  StyledCartItem,
  StyledCartItemCount,
  StyledCartItemCountChanger,
  StyledCartItemCountWrapper,
  StyledCartItemDesc,
  StyledCartItemInfo,
  StyledCartItemName,
  StyledCartItemPhoto,
  StyledCartItemPrice,
  StyledCartItemRemoveBtn,
  StyledCartItemSerialNumber,
  StyledCartItemSum,
} from './StyledCartItem';

const CartItem: FC<ICartItem> = ({ good, cart }) => {
  const dispatch = useDispatch();

  const [itemGood] = cart.goods.filter((item) => item.name === good.name);
  const cartState = cart.goods.filter((item) => item.name !== good.name);

  const removeGoodFromCart = () => {
    dispatch(setCart(cartState));
  };

  const decrementGoodsCount = () => {
    dispatch(setCartGoodCount(good, itemGood.goodsCount - 1));
  };

  const incrementGoodsCount = () => {
    dispatch(setCartGoodCount(good, itemGood.goodsCount + 1));
  };

  return (
    <StyledCartItem>
      <StyledCartItemPhoto>
        <img src={good.image} alt="" />
      </StyledCartItemPhoto>
      <StyledCartItemInfo>
        <StyledCartItemName>{good.name}</StyledCartItemName>
        <StyledCartItemSerialNumber>{good.name}</StyledCartItemSerialNumber>
        <StyledCartItemDesc>{good.description}</StyledCartItemDesc>
        <StyledCartItemSum>
          <StyledCartItemCountWrapper>
            <StyledCartItemCount>{`1шт.`}</StyledCartItemCount>
            <StyledCartItemCountChanger onClick={decrementGoodsCount}>
              -
            </StyledCartItemCountChanger>
            <StyledCartItemCountChanger onClick={incrementGoodsCount}>
              +
            </StyledCartItemCountChanger>
          </StyledCartItemCountWrapper>
          <StyledCartItemPrice>{`${good.price} тг.`}</StyledCartItemPrice>
        </StyledCartItemSum>
        <StyledCartItemRemoveBtn>
          Удалить товар из корзины
        </StyledCartItemRemoveBtn>
      </StyledCartItemInfo>
      {/* <StyledCartItemName>{good.name}</StyledCartItemName>
      <StyledCartItemCounter onClick={decrementGoodsCount}>
        {itemGood.goodsCount > 0 && '-'}
      </StyledCartItemCounter>
      <StyledCartItemCount>{good.goodsCount}</StyledCartItemCount>
      <StyledCartItemCounter onClick={incrementGoodsCount}>
        +
      </StyledCartItemCounter>
      {good.discount.length === 0 ? (
        <StyledCartItemPrice>{good.price}</StyledCartItemPrice>
      ) : (
        <>
          <StyledCartItemDiscountPrice>
            {good.price}
          </StyledCartItemDiscountPrice>
          <StyledCartItemPrice>
            {Number(good.price) -
              Number(good.price) * (Number(good.discount.slice(0, -1)) / 100)}
          </StyledCartItemPrice>
        </>
      )}
      <StyledCartItemRemoveBtn onClick={removeGoodFromCart}>
        X
      </StyledCartItemRemoveBtn> */}
    </StyledCartItem>
  );
};

export default CartItem;
