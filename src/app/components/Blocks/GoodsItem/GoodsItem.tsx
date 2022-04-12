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
import {
  setGoodCart,
  setCartGoodCount,
} from '../../../redux/reducers/cart/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../redux/store';

const GoodsItem: FC<IGoodItem> = ({
  title,
  desc,
  characteristics,
  country,
  price,
  favorite,
  image,
  discount,
  hit,
}) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const addToCartClickHandler = () => {
    if (!cart.goods.some((good) => good.name === title)) {
      dispatch(
        setGoodCart({
          name: title,
          description: desc,
          characteristics,
          country,
          price,
          discount,
          hit,
          image,
          goodsCount: 1,
        }),
      );
    } else {
      dispatch(
        setCartGoodCount(
          {
            name: title,
            description: desc,
            characteristics,
            country,
            price,
            image,
            discount,
            hit,
          },
          cart.goods.filter((good) => good.name === title)[0].goodsCount + 1,
        ),
      );
    }
  };

  return (
    <StyledGoodsItem>
      {discount.length > 0 && (
        <StyledSticker mode="discount">Скидка {discount}</StyledSticker>
      )}
      {hit && <StyledSticker mode="hit">Хит продаж</StyledSticker>}
      <StyledGoodsItemContentWrapper>
        <Link to={`/goods/${title}`}>
          <StyledGoodsItemPhoto />
        </Link>
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
