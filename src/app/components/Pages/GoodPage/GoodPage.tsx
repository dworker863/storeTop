import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../Blocks/Container/Container';
import { IGoodPage } from './IGoodPage';
import {
  StyledGoodPage,
  StyledGoodPageDesc,
  StyledGoodPagePrice,
  StyledGoodPageSubTitle,
} from './StyledGoodPage';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import UserAvatar from '../../Blocks/UserAvatar/UserAvatar';
import { StyledInfoWrapper } from '../../../commonStyles/StyledInfoWrapper';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import { StyledBlockLine } from '../../../commonInterfaces/StyledBlockLine';
import Button from '../../Elements/Button/Button';

const GoodPage: FC<IGoodPage> = ({ goods }) => {
  const { goodName } = useParams();
  const [good] = [...goods.electronics, ...goods.cosmetics].filter(
    (good) => good.name === goodName,
  );
  console.log(good);
  console.log(good.characteristics);

  return (
    <Container type="common">
      <StyledGoodPage>
        <SectionTitle text={good.name} primary={false} />
        <StyledInfoWrapper>
          <UserAvatar mode="between" />
          <StyledInfo>
            <SectionTitle text={good.name} primary={false} />
            <StyledGoodPageSubTitle>Описание товара</StyledGoodPageSubTitle>
            <StyledGoodPageDesc>{good.description}</StyledGoodPageDesc>
            <StyledBlockLine></StyledBlockLine>
            <StyledGoodPageSubTitle>
              Характеристики товара
            </StyledGoodPageSubTitle>
            <StyledGoodPageDesc>{good.characteristics}</StyledGoodPageDesc>
            <StyledBlockLine></StyledBlockLine>

            <StyledGoodPageSubTitle>Стоимость продукта</StyledGoodPageSubTitle>
            <StyledGoodPagePrice>{good.price}</StyledGoodPagePrice>
            <StyledBlockLine></StyledBlockLine>
            <Button text="Добавить в корзину" />
          </StyledInfo>
        </StyledInfoWrapper>
        <div style={{ height: '20vh' }}></div>
      </StyledGoodPage>
    </Container>
  );
};

export default GoodPage;
