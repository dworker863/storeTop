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
            <StyledCartItemCount>{good.goodsCount}</StyledCartItemCount>
            <StyledCartItemCountChanger onClick={decrementGoodsCount}>
              -
            </StyledCartItemCountChanger>
            <StyledCartItemCountChanger onClick={incrementGoodsCount}>
              +
            </StyledCartItemCountChanger>
          </StyledCartItemCountWrapper>
          <StyledCartItemPrice>{`${good.price} тг.`}</StyledCartItemPrice>
        </StyledCartItemSum>
        <StyledCartItemRemoveBtn onClick={removeGoodFromCart}>
          Удалить товар из корзины
        </StyledCartItemRemoveBtn>
      </StyledCartItemInfo>
    </StyledCartItem>
  );
};

export default CartItem;
