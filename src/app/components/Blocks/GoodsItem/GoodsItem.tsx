import { FC } from 'react';
import { IGoodItem } from './IGoodItem';
import {
  StyledGoodsItem,
  StyledGoodsItemBlack,
  StyledGoodsItemContentWrapper,
  StyledGoodsItemDesc,
  StyledGoodsItemFavorite,
  StyledGoodsItemFavoriteIcon,
  StyledGoodsItemPhoto,
  StyledGoodsItemPrice,
  StyledGoodsItemPriceWrapper,
  StyledGoodsItemTitle,
  StyledGoodsItemWhite,
  StyledSticker,
} from './StyledGoodsItem';
import favoriteIcon from '../../../../assets/images/favorite-icon.png';
import { useDispatch } from 'react-redux';
import { setCart } from '../../../redux/reducers/cart/cartReducer';
import { IGood } from '../../../commonInterfaces/IGood';

const GoodsItem: FC<IGoodItem> = ({
  title,
  desc,
  price,
  favorite,
  discount,
  hit,
}) => {
  const dispatch = useDispatch();

  const goodClickHandler = (good: IGood): void => {
    dispatch(setCart(good));
  };

  return (
    <StyledGoodsItem
      onClick={() =>
        goodClickHandler({
          name: title,
          description: desc,
          price,
          discount,
          hit,
        })
      }
    >
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
        <StyledGoodsItemFavorite>
          <StyledGoodsItemFavoriteIcon src={favoriteIcon} alt="Сердце" />
        </StyledGoodsItemFavorite>
      </StyledGoodsItemPriceWrapper>
    </StyledGoodsItem>
  );
};

export default GoodsItem;
