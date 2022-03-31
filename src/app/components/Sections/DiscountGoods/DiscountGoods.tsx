import { FC } from 'react';
import { ISection } from '../../../commonInterfaces/ISection';
import { discountGoodsData, goodsData } from '../../../utils/staticData';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import {
  StyledDiscountGoods,
  StyledDiscountGoodsDesc,
  StyledDiscountGoodsTitle,
  StyledDiscountGoodsWrapper,
  StyledEmptyDiv,
} from './StyledDiscountGoods';

const DiscountGoods: FC<ISection> = ({ title, desc }) => {
  return (
    <StyledDiscountGoods>
      <StyledDiscountGoodsTitle>{title}</StyledDiscountGoodsTitle>
      <StyledDiscountGoodsDesc>{desc}</StyledDiscountGoodsDesc>
      <StyledDiscountGoodsWrapper>
        {discountGoodsData.map((good, index) => (
          <GoodsItem
            key={index + good.desc}
            title={good.title}
            desc={good.desc}
            price={good.price}
            favorite={false}
          />
        ))}
        <StyledEmptyDiv></StyledEmptyDiv>
      </StyledDiscountGoodsWrapper>
    </StyledDiscountGoods>
  );
};

export default DiscountGoods;
