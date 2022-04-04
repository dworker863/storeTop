import { FC } from 'react';
import { ICartItem } from './ICartItem';
import {
  StyledCartItem,
  StyledCartItemCount,
  StyledCartItemName,
  StyledCartItemPrice,
} from './StyledCartItem';

const CartItem: FC<ICartItem> = ({ good }) => {
  return (
    <StyledCartItem>
      <StyledCartItemName>{good.name}</StyledCartItemName>
      <StyledCartItemCount>{good.goodsCount}</StyledCartItemCount>
      <StyledCartItemPrice>{good.price}</StyledCartItemPrice>
    </StyledCartItem>
  );
};

export default CartItem;
