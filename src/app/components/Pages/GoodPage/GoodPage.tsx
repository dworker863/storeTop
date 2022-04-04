import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../Blocks/Container/Container';
import { IGoodPage } from './IGoodPage';
import {
  StyledGoodPage,
  StyledGoodPageDesc,
  StyledGoodPagePrice,
  StyledGoodPageTitle,
} from './StyledGoodPage';

const GoodPage: FC<IGoodPage> = ({ goods }) => {
  const { goodName } = useParams();
  const [good] = [...goods.electronics, ...goods.cosmetics].filter(
    (good) => good.name === goodName,
  );

  return (
    <Container type="common">
      <StyledGoodPage>
        <StyledGoodPageTitle>{good.name}</StyledGoodPageTitle>
        <StyledGoodPageDesc>{good.description}</StyledGoodPageDesc>
        <StyledGoodPagePrice>{good.price}</StyledGoodPagePrice>
      </StyledGoodPage>
    </Container>
  );
};

export default GoodPage;
