import { FC, useContext } from 'react';
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
import checkIcon from '../../../../assets/images/check-icon.png';
import {
  setGoodCart,
  setCartGoodCount,
} from '../../../redux/reducers/cart/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { calculateRating } from '../../../commonFunctions/commonFunctions';
import {
  removeFavoriteGood,
  setFavoriteGood,
} from '../../../redux/reducers/users/usersReducer';
import { UnauthorizedModalContext } from '../../../../App';

const GoodsItem: FC<IGoodItem> = ({ good, user }) => {
  const cartGoods = useSelector((state: RootState) => state.cart.goods);
  const unauthorizedModalHandler = useContext(UnauthorizedModalContext);
  const dispatch = useDispatch();
  const rating = calculateRating(good.rating);

  const addToFavoriteClickHandler = (userId: string, goodName: string) => {
    dispatch(setFavoriteGood(userId, goodName));
  };

  const removeFromFavoriteClickHandler = (userId: string, goodName: string) => {
    dispatch(removeFavoriteGood(userId, goodName));
  };

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
          <StyledGoodsItemIcon src={cartIcon} alt="Корзина" />
        </StyledGoodsItemCart>
        <StyledGoodsItemFavorite
          onClick={
            user && user.favorites?.some((goodName) => goodName === good.name)
              ? () =>
                  removeFromFavoriteClickHandler(String(user?.id), good.name)
              : () => {
                  user
                    ? addToFavoriteClickHandler(String(user?.id), good.name)
                    : unauthorizedModalHandler(
                        true,
                        'Только авторизованные пользователи могут добавлять товары в избранное',
                      );
                }
          }
          favorite={
            user && user.favorites?.some((goodName) => goodName === good.name)
          }
        >
          <StyledGoodsItemIcon
            src={
              user?.favorites?.some((goodName) => goodName === good.name)
                ? checkIcon
                : favoriteIcon
            }
            alt="Сердце"
          />
        </StyledGoodsItemFavorite>
      </StyledGoodsItemPriceWrapper>
    </StyledGoodsItem>
  );
};

export default GoodsItem;
