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
import { calculateRating } from '../../../commonFunctions/commonFunctions';

const GoodsItem: FC<IGoodItem> = ({ good }) => {
  const cartGoods = useSelector((state: RootState) => state.cart.goods);
  const dispatch = useDispatch();
  const rating = calculateRating(good.rating);

  const addGoodToCart = () => {
    if (!cartGoods.some((goodItem) => goodItem.name === good.name)) {
      dispatch(
        setGoodCart({
          name: good.name,
          description: good.description,
          characteristics: good.characteristics,
          country: good.country,
          price: good.price,
          discount: good.discount,
          hit: good.hit,
          image: good.image,
          rating,
          buysCount: good.buysCount,
          goodsCount: 1,
        }),
      );
    } else {
      dispatch(
        setCartGoodCount(
          {
            name: good.name,
            description: good.description,
            characteristics: good.characteristics,
            country: good.country,
            price: good.price,
            discount: good.discount,
            hit: good.hit,
            image: good.image,
            rating,
            buysCount: good.buysCount,
            goodsCount: 0,
          },
          cartGoods.filter((goodItem) => goodItem.name === good.name)[0]
            .goodsCount + 1,
        ),
      );
    }
  };

  return (
    <StyledGoodsItem>
      {good.discount.length > 0 && (
        <StyledSticker mode="discount">Скидка {good.discount}</StyledSticker>
      )}
      {good.hit && <StyledSticker mode="hit">Хит продаж</StyledSticker>}
      <StyledGoodsItemContentWrapper>
        <Link to={`/goods/${good.name}`}>
          <StyledGoodsItemPhoto image={good.image} />
        </Link>
        <StyledGoodsItemTitle>{good.name}</StyledGoodsItemTitle>
        <StyledGoodsItemDesc>{good.description}</StyledGoodsItemDesc>
      </StyledGoodsItemContentWrapper>
      <StyledGoodsItemPriceWrapper>
        <StyledGoodsItemPrice>
          <StyledGoodsItemBlack>Купить за</StyledGoodsItemBlack>
          <br />
          <StyledGoodsItemWhite>{good.price}</StyledGoodsItemWhite>
        </StyledGoodsItemPrice>
        <StyledGoodsItemCart onClick={addGoodToCart}>
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
