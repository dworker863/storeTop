import { FC } from 'react';
import CartItem from '../../Blocks/CartItem/CartItem';
import Container from '../../Blocks/Container/Container';
import { ICartPage } from './ICartPage';
import {
  StyledCartPage,
  StyledCartSum,
  StyledCartTitle,
} from './StyledCartPage';

const CartPage: FC<ICartPage> = ({ goods, sum }) => {
  return (
    <Container type="common">
      <StyledCartPage>
        <StyledCartTitle>Корзина</StyledCartTitle>
        {goods.map((good, index) => (
          <CartItem key={index + good.name} good={good} />
        ))}
        <StyledCartSum>{sum}</StyledCartSum>
      </StyledCartPage>
    </Container>
  );
};

export default CartPage;
