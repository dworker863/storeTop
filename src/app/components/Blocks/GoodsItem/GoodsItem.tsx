import { FC } from 'react';
import { IGood } from './IGood';
import {
  StyledGoodsItem,
  StyledGoodsItemBlack,
  StyledGoodsItemContentWrapper,
  StyledGoodsItemDesc,
  StyledGoodsItemFavorite,
  StyledGoodsItemFavoriteIcon,
  StyledGoodsItemPhoto,
  StyledGoodsItemPrice,
  StyledGoodsItemPriceWrapper,
  StyledGoodsItemTitle,
  StyledGoodsItemWhite,
} from './StyledGoodsItem';
import favoriteIcon from '../../../../assets/images/favorite-icon.png';

const GoodsItem: FC<IGood> = ({ title, desc, price, favorite }) => {
  return (
    <StyledGoodsItem>
      <StyledGoodsItemContentWrapper>
        <StyledGoodsItemPhoto />
        <StyledGoodsItemTitle>{title}</StyledGoodsItemTitle>
        <StyledGoodsItemDesc>{desc}</StyledGoodsItemDesc>
      </StyledGoodsItemContentWrapper>
      <StyledGoodsItemPriceWrapper>
        <StyledGoodsItemPrice>
          <StyledGoodsItemBlack>Купить за</StyledGoodsItemBlack>
          <br />
          <StyledGoodsItemWhite>{price}</StyledGoodsItemWhite>
        </StyledGoodsItemPrice>
        <StyledGoodsItemFavorite>
          <StyledGoodsItemFavoriteIcon src={favoriteIcon} alt="Сердце" />
        </StyledGoodsItemFavorite>
      </StyledGoodsItemPriceWrapper>
    </StyledGoodsItem>
  );
};

export default GoodsItem;
