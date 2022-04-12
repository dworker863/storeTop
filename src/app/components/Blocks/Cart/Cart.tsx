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
import { Link } from 'react-router-dom';
import { ICartGood } from '../../../redux/reducers/cart/IcartReducer';
import { ICart } from './ICart';

const Cart: FC<ICart> = ({ cart }) => {
  const goods = cart.goods;

  return (
    <StyledCartWrapper>
      <Link to="/cart">
        <StyledCart>
          <StyledCartIcon src={cartIcon} alt="Корзина" />
          <StyledCartCount>
            {goods.reduce(
              (count: number, good: ICartGood) => (count += good.goodsCount),
              0,
            )}
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
