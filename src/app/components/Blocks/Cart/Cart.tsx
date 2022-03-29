import { FC } from 'react';
import { StyledCart, StyledCartIcon } from './StyledCart';
import cartIcon from '../../../../assets/images/cart-icon.png';
import ContactsItem from '../../Elements/ContactsItem/ContactsItem';

const Cart: FC = () => {
  return (
    <StyledCart>
      <StyledCartIcon src={cartIcon} alt="Корзина" />
      <ContactsItem
        title="Ваша корзина"
        textFirst="В корзине нет товаров"
        textSecond="Посмотреть список желаний"
      />
    </StyledCart>
  );
};

export default Cart;
