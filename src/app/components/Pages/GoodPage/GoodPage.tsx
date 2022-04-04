import { FC } from 'react';
import { IGoodPage } from './IGoodPage';
import {
  StyledGoodPage,
  StyledGoodPageDesc,
  StyledGoodPagePrice,
  StyledGoodPageTitle,
} from './StyledGoodPage';

const GoodPage: FC<IGoodPage> = ({ good }) => {
  return (
    <StyledGoodPage>
      <StyledGoodPageTitle>{good.name}</StyledGoodPageTitle>
      <StyledGoodPageDesc>{good.description}</StyledGoodPageDesc>
      <StyledGoodPagePrice>{good.price}</StyledGoodPagePrice>
    </StyledGoodPage>
  );
};

export default GoodPage;
