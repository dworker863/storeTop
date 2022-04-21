import { FC } from 'react';
import { IGoodPageItem } from './IGoodPageItem';
import {
  StyledGoodPageItem,
  StyledGoodPageItemDesc,
  StyledGoodPageItemPhoto,
  StyledGoodPageItemTitle,
} from './StyledGoodPageItem';

const GoodPageItem: FC<IGoodPageItem> = ({ photo, name, desc }) => {
  console.log(name);

  return (
    <StyledGoodPageItem>
      <StyledGoodPageItemPhoto image={photo}></StyledGoodPageItemPhoto>
      <StyledGoodPageItemTitle>{name}</StyledGoodPageItemTitle>
      <StyledGoodPageItemDesc>{desc}</StyledGoodPageItemDesc>
    </StyledGoodPageItem>
  );
};

export default GoodPageItem;
