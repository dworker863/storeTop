import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCart,
  setCartGoodCount,
} from '../../../redux/reducers/cart/cartReducer';
import { RootState } from '../../../redux/store';
import { ICartItem } from './ICartItem';
import {
  StyledCartItem,
  StyledCartItemCount,
  StyledCartItemCounter,
  StyledCartItemName,
  StyledCartItemPrice,
  StyledCartItemRemoveBtn,
} from './StyledCartItem';

const CartItem: FC<ICartItem> = ({ good }) => {
  const cart = useSelector((state: RootState) => state.cart);
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
        -
      </StyledCartItemCounter>
      <StyledCartItemCount>{good.goodsCount}</StyledCartItemCount>
      <StyledCartItemCounter onClick={incrementGoodsCount}>
        +
      </StyledCartItemCounter>
      <StyledCartItemPrice>{good.price}</StyledCartItemPrice>
      <StyledCartItemRemoveBtn onClick={removeGoodFromCart}>
        X
      </StyledCartItemRemoveBtn>
    </StyledCartItem>
  );
};

export default CartItem;
