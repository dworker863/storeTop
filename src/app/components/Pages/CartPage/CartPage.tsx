import { FC } from 'react';
import CartItem from '../../Blocks/CartItem/CartItem';
import Container from '../../Blocks/Container/Container';
import { ICartPage } from './ICartPage';
import { StyledCartPage } from './StyledCartPage';

const CartPage: FC<ICartPage> = ({ goods }) => {
  return (
    <StyledCartPage>
      <Container type="common">
        <StyledCartPage>Корзина</StyledCartPage>
        {goods.map((good) => (
          <CartItem good={good} />
        ))}
      </Container>
    </StyledCartPage>
  );
};

export default CartPage;
