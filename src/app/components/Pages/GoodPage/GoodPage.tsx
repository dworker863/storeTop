import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../Blocks/Container/Container';
import { IGoodPage } from './IGoodPage';
import {
  StyledCategoryGoodsTitle,
  StyledCategoryGoodsWrapper,
  StyledCharacteristicsItem,
  StyledCharacteristicsTitle,
  StyledGoodBtnWrapper,
  StyledGoodCount,
  StyledGoodCountChanger,
  StyledGoodCounterWrapper,
  StyledGoodInfo,
  StyledGoodInfoWrapper,
  StyledGoodPage,
  StyledGoodPageDesc,
  StyledGoodPageDiscountPrice,
  StyledGoodPagePrice,
  StyledGoodPageSubTitle,
  StyledGoodRating,
  StyledGoodRatingIcon,
  StyledGoodRatingIconsWrapper,
  StyledGoodRatingText,
  StyledGoodRatingTextBig,
  StyledGoodSerialWrapper,
  StyledGoodStock,
  StyledGoodSubTitle,
} from './StyledGoodPage';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import Image from '../../Blocks/Image/Image';
import { StyledBlockLine } from '../../../commonStyles/StyledBlockLine';
import Button from '../../Elements/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import ratingIcon from '../../../../assets/images/rating-grey-icon.png';
import ratingPrimaryIcon from '../../../../assets/images/rating-primary-icon.png';
import {
  setCartGoodCount,
  setGoodCart,
} from '../../../redux/reducers/cart/cartReducer';
import GoodPageItem from '../../Blocks/GoodPageItem/GoodPageItem';

const GoodPage: FC<IGoodPage> = ({ goods, cart }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 800px)').matches,
  );
  const [goodCount, setGoodCount] = useState(0);

  const { goodName } = useParams();
  const dispatch = useDispatch();
  const [good] = [...goods.electronics, ...goods.cosmetics].filter(
    (good) => good.name === goodName,
  );

  const decrementGoodsCount = () => {
    goodCount > 0 && setGoodCount(goodCount - 1);
  };

  const incrementGoodsCount = () => {
    setGoodCount(goodCount + 1);
  };

  useEffect(() => {
    window
      .matchMedia('(min-width: 800px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  const addToCartClickHandler = () => {
    if (!cart.goods.some((goodItem) => goodItem.name === good.name)) {
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
          rating: good.rating,
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
            rating: good.rating,
            buysCount: good.buysCount,
          },
          goodCount > 0
            ? goodCount +
                cart.goods.filter((goodItem) => goodItem.name === good.name)[0]
                  .goodsCount
            : cart.goods.filter((goodItem) => goodItem.name === good.name)[0]
                .goodsCount + 1,
        ),
      );
    }
  };

  return (
    <Container type="common">
      <StyledGoodPage>
        <SectionTitle text={good?.name} primary={false} />
        <StyledGoodInfoWrapper>
          <div>
            <Image mode="good" buttonMode="between" image={good?.image} />
            <StyledGoodRating>
              <StyledGoodRatingIconsWrapper>
                <StyledGoodRatingIcon
                  src={ratingPrimaryIcon}
                ></StyledGoodRatingIcon>
                <StyledGoodRatingIcon
                  src={ratingPrimaryIcon}
                ></StyledGoodRatingIcon>
                <StyledGoodRatingIcon
                  src={ratingPrimaryIcon}
                ></StyledGoodRatingIcon>
                <StyledGoodRatingIcon
                  src={ratingPrimaryIcon}
                ></StyledGoodRatingIcon>
                <StyledGoodRatingIcon src={ratingIcon}></StyledGoodRatingIcon>
              </StyledGoodRatingIconsWrapper>
              <StyledGoodSubTitle>Рейтинг товара:</StyledGoodSubTitle>
              <StyledGoodRatingText>
                <StyledGoodRatingTextBig>4</StyledGoodRatingTextBig>/5
              </StyledGoodRatingText>{' '}
              (Хороший)
            </StyledGoodRating>
          </div>
          <StyledGoodInfo>
            <SectionTitle text={good?.name} primary={false} />
            <StyledGoodSerialWrapper>
              <StyledGoodSubTitle>Серийный номер: </StyledGoodSubTitle>
              <span>000001</span>
              <StyledGoodStock>В наличии</StyledGoodStock>
            </StyledGoodSerialWrapper>
            <StyledGoodPageSubTitle>Описание товара</StyledGoodPageSubTitle>
            <StyledGoodPageDesc>{good?.description}</StyledGoodPageDesc>
            <StyledBlockLine></StyledBlockLine>
            <StyledGoodPageSubTitle>
              Характеристики товара
            </StyledGoodPageSubTitle>
            <StyledGoodPageDesc>{good?.characteristics}</StyledGoodPageDesc>
            <StyledCharacteristicsItem>
              <StyledCharacteristicsTitle>Состав:</StyledCharacteristicsTitle>
              {` ${good?.country}`}
            </StyledCharacteristicsItem>
            <StyledCharacteristicsItem>
              <StyledCharacteristicsTitle>
                Технические характеристики:
              </StyledCharacteristicsTitle>
              {` ${good?.country}`}
            </StyledCharacteristicsItem>
            <StyledCharacteristicsItem>
              <StyledCharacteristicsTitle>
                Страна-производитель:
              </StyledCharacteristicsTitle>
              {` ${good?.country}`}
            </StyledCharacteristicsItem>
            <StyledBlockLine></StyledBlockLine>
            <StyledGoodPageSubTitle>Стоимость продукта</StyledGoodPageSubTitle>
            {good?.discount.length === 0 ? (
              <StyledGoodPageDiscountPrice>
                {`${good?.price} тг.`}
              </StyledGoodPageDiscountPrice>
            ) : (
              <>
                <StyledGoodPagePrice>{`${good?.price} тг.`}</StyledGoodPagePrice>
                <StyledGoodPageDiscountPrice>
                  {Number(good?.price) -
                    Number(good?.price) *
                      (Number(good?.discount.slice(0, -1)) / 100)}
                </StyledGoodPageDiscountPrice>
              </>
            )}
            {/* <StyledBlockLine></StyledBlockLine> */}
            <StyledGoodBtnWrapper>
              <StyledGoodCounterWrapper>
                <StyledGoodCount>{`${goodCount}шт.`}</StyledGoodCount>
                <StyledGoodCountChanger onClick={decrementGoodsCount}>
                  -
                </StyledGoodCountChanger>
                <StyledGoodCountChanger onClick={incrementGoodsCount}>
                  +
                </StyledGoodCountChanger>
              </StyledGoodCounterWrapper>
              <Button
                text={matches ? 'Добавить в корзину' : ''}
                clickHandler={addToCartClickHandler}
                mode="good"
              />
              <Button
                text={matches ? 'Добавить в список желаний' : ''}
                clickHandler={addToCartClickHandler}
                mode="favorite"
              />
            </StyledGoodBtnWrapper>
          </StyledGoodInfo>
        </StyledGoodInfoWrapper>
        <StyledCategoryGoodsTitle>
          Другие продукты из категории “Косметика”
        </StyledCategoryGoodsTitle>
        <StyledCategoryGoodsWrapper>
          <GoodPageItem />
          <GoodPageItem />
          <GoodPageItem />
          <GoodPageItem />
          <GoodPageItem />
        </StyledCategoryGoodsWrapper>
        <div style={{ height: '20vh' }}></div>
      </StyledGoodPage>
    </Container>
  );
};

export default GoodPage;
