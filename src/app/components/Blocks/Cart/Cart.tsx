import { FC } from 'react';
import {
  StyledCart,
  StyledCartIcon,
  StyledCartCount,
  StyledCartWrapper,
} from './StyledCart';
import cartIcon from '../../../../assets/images/cart-icon.png';
import ContactsItem from '../../Elements/ContactsItem/ContactsItem';
import { StyledRequest } from '../Contacts/StyledContacts';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Link } from 'react-router-dom';

const Cart: FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <StyledCartWrapper>
      <Link to="/cart">
        <StyledCart>
          <StyledCartIcon src={cartIcon} alt="Корзина" />
          <StyledCartCount>
            {cart.goods.reduce((count, good) => (count += good.goodsCount), 0)}
          </StyledCartCount>
          <ContactsItem title="Ваша корзина" textFirst="В корзине нет товаров">
            <StyledRequest>Посмотреть список желаний</StyledRequest>
          </ContactsItem>
        </StyledCart>
      </Link>
    </StyledCartWrapper>
  );
};

export default Cart;
