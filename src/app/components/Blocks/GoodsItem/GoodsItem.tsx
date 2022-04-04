import { FC } from 'react';
import { IGoodItem } from './IGoodItem';
import {
  StyledGoodsItem,
  StyledGoodsItemBlack,
  StyledGoodsItemCart,
  StyledGoodsItemContentWrapper,
  StyledGoodsItemDesc,
  StyledGoodsItemFavorite,
  StyledGoodsItemIcon,
  StyledGoodsItemPhoto,
  StyledGoodsItemPrice,
  StyledGoodsItemPriceWrapper,
  StyledGoodsItemTitle,
  StyledGoodsItemWhite,
  StyledSticker,
} from './StyledGoodsItem';
import favoriteIcon from '../../../../assets/images/favorite-icon.png';
import cartIcon from '../../../../assets/images/cart-icon.png';
import { setCart } from '../../../redux/reducers/cart/cartReducer';
import { useDispatch } from 'react-redux';

const GoodsItem: FC<IGoodItem> = ({
  title,
  desc,
  price,
  favorite,
  discount,
  hit,
}) => {
  const dispatch = useDispatch();

  const addToCartClickHandler = () => {
    dispatch(setCart({ name: title, description: desc, price, discount, hit }));
  };

  return (
    <StyledGoodsItem>
      {discount.length > 0 && (
        <StyledSticker mode="discount">Скидка {discount}</StyledSticker>
      )}
      {hit && <StyledSticker mode="hit">Хит продаж</StyledSticker>}
      <StyledGoodsItemContentWrapper>
        <StyledGoodsItemPhoto />
        <StyledGoodsItemTitle>{title}</StyledGoodsItemTitle>
        <StyledGoodsItemDesc>{desc}</StyledGoodsItemDesc>
      </StyledGoodsItemContentWrapper>
      <StyledGoodsItemPriceWrapper>
        <StyledGoodsItemPrice>
          <StyledGoodsItemBlack>Купить за</StyledGoodsItemBlack>
          <br />
          <StyledGoodsItemWhite>{price}</StyledGoodsItemWhite>
        </StyledGoodsItemPrice>
        <StyledGoodsItemCart onClick={addToCartClickHandler}>
          <StyledGoodsItemIcon src={cartIcon} alt="Сердце" />
        </StyledGoodsItemCart>
        <StyledGoodsItemFavorite>
          <StyledGoodsItemIcon src={favoriteIcon} alt="Сердце" />
        </StyledGoodsItemFavorite>
      </StyledGoodsItemPriceWrapper>
    </StyledGoodsItem>
  );
};

export default GoodsItem;
