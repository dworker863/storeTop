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
  StyledCartItemCounter,
  StyledCartItemDiscountPrice,
  StyledCartItemName,
  StyledCartItemPrice,
  StyledCartItemRemoveBtn,
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
      <StyledCartItemName>{good.name}</StyledCartItemName>
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
      </StyledCartItemRemoveBtn>
    </StyledCartItem>
  );
};

export default CartItem;
