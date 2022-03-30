import { FC } from 'react';
import { goodsData } from '../../../utils/staticData';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import {
  StyledPopularGoods,
  StyledPopularGoodsDesc,
  StyledPopularGoodsTitle,
  StyledPopularGoodsWrapper,
} from './StyledPopularGoods';

const PopularGoods: FC = () => {
  return (
    <StyledPopularGoods>
      <StyledPopularGoodsTitle>Популярные товары</StyledPopularGoodsTitle>
      <StyledPopularGoodsDesc>То, что выбирают люди</StyledPopularGoodsDesc>
      <StyledPopularGoodsWrapper>
        {goodsData.map((good, index) => (
          <GoodsItem
            key={index + good.desc}
            title={good.title}
            desc={good.desc}
            price={good.price}
            favorite={false}
          />
        ))}
      </StyledPopularGoodsWrapper>
    </StyledPopularGoods>
  );
};

export default PopularGoods;
