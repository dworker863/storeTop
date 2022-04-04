import { FC } from 'react';
import { StyledCart, StyledCartIcon, StyledCartCount } from './StyledCart';
import cartIcon from '../../../../assets/images/cart-icon.png';
import ContactsItem from '../../Elements/ContactsItem/ContactsItem';
import { StyledRequest } from '../Contacts/StyledContacts';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const Cart: FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <StyledCart>
      <StyledCartIcon src={cartIcon} alt="Корзина" />
      <StyledCartCount>
        {cart.goods.reduce((count, good) => (count += good.goodsCount), 0)}
      </StyledCartCount>
      <ContactsItem title="Ваша корзина" textFirst="В корзине нет товаров">
        <StyledRequest>Посмотреть список желаний</StyledRequest>
      </ContactsItem>
    </StyledCart>
  );
};

export default Cart;
