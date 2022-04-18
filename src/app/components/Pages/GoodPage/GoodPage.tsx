import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../Blocks/Container/Container';
import { IGoodPage } from './IGoodPage';
import {
  StyledCharacteristicsItem,
  StyledCharacteristicsTitle,
  StyledGoodBtnWrapper,
  StyledGoodCount,
  StyledGoodCountChanger,
  StyledGoodCounterWrapper,
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
  StyledGoodSerial,
  StyledGoodSerialWrapper,
  StyledGoodStock,
} from './StyledGoodPage';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import Image from '../../Blocks/Image/Image';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledBlockLine } from '../../../commonStyles/StyledBlockLine';
import Button from '../../Elements/Button/Button';
import { useDispatch } from 'react-redux';
import ratingIcon from '../../../../assets/images/rating-grey-icon.png';
import ratingPrimaryIcon from '../../../../assets/images/rating-primary-icon.png';
import {
  setCartGoodCount,
  setGoodCart,
} from '../../../redux/reducers/cart/cartReducer';

const GoodPage: FC<IGoodPage> = ({ goods, cart }) => {
  const { goodName } = useParams();
  const dispatch = useDispatch();
  const [good] = [...goods.electronics, ...goods.cosmetics].filter(
    (good) => good.name === goodName,
  );

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
          },
          cart.goods.filter((goodItem) => goodItem.name === good.name)[0]
            .goodsCount + 1,
        ),
      );
    }
  };

  return (
    <Container type="common">
      <StyledGoodPage>
        <SectionTitle text={good?.name} primary={false} />
        <StyledInfoWrapper>
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
              <StyledGoodSerial>Рейтинг товара:</StyledGoodSerial>
              <StyledGoodRatingText>
                <StyledGoodRatingTextBig>4</StyledGoodRatingTextBig>/5
              </StyledGoodRatingText>{' '}
              (Хороший)
            </StyledGoodRating>
          </div>
          <StyledInfo>
            <SectionTitle text={good?.name} primary={false} />
            <StyledGoodSerialWrapper>
              <StyledGoodSerial>Серийный номер: </StyledGoodSerial>
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
                <StyledGoodCount>1шт.</StyledGoodCount>
                <StyledGoodCountChanger>-</StyledGoodCountChanger>
                <StyledGoodCountChanger>+</StyledGoodCountChanger>
              </StyledGoodCounterWrapper>
              <Button
                text="Добавить в корзину"
                clickHandler={addToCartClickHandler}
                mode="good"
              />
              <Button
                text="Добавить в список желаний"
                clickHandler={addToCartClickHandler}
                mode="favorite"
              />
            </StyledGoodBtnWrapper>
          </StyledInfo>
        </StyledInfoWrapper>
        <div style={{ height: '20vh' }}></div>
      </StyledGoodPage>
    </Container>
  );
};

export default GoodPage;
