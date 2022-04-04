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
    if (itemGood.goodsCount > 1) {
      dispatch(setCartGoodCount(good, itemGood.goodsCount - 1));
    } else {
      dispatch(setCart(cartState));
    }
  };

  return (
    <StyledCartItem>
      <StyledCartItemName>{good.name}</StyledCartItemName>
      <StyledCartItemCount>{good.goodsCount}</StyledCartItemCount>
      <StyledCartItemPrice>{good.price}</StyledCartItemPrice>
      <StyledCartItemRemoveBtn onClick={removeGoodFromCart}>
        X
      </StyledCartItemRemoveBtn>
    </StyledCartItem>
  );
};

export default CartItem;
