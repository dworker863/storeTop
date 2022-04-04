import { FC } from 'react';
import CartItem from '../../Blocks/CartItem/CartItem';
import { ICartPage } from './ICartPage';
import { StyledCartPage } from './StyledCartPage';

const CartPage: FC<ICartPage> = ({ goods }) => {
  return (
    <StyledCartPage>
      <StyledCartPage>Корзина</StyledCartPage>
      {goods.map((good) => (
        <CartItem good={good} />
      ))}
    </StyledCartPage>
  );
};

export default CartPage;
