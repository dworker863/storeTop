import { FC } from 'react';
import {
  StyledGoodPageItem,
  StyledGoodPageItemDesc,
  StyledGoodPageItemPhoto,
  StyledGoodPageItemTitle,
} from './StyledGoodPageItem';

const GoodPageItem: FC = () => {
  return (
    <StyledGoodPageItem>
      <StyledGoodPageItemPhoto></StyledGoodPageItemPhoto>
      <StyledGoodPageItemTitle>Наименование товара</StyledGoodPageItemTitle>
      <StyledGoodPageItemDesc>Дополнительное описание</StyledGoodPageItemDesc>
    </StyledGoodPageItem>
  );
};

export default GoodPageItem;
