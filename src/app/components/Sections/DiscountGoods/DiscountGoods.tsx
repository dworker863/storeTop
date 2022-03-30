import { FC } from 'react';
import { goodsData } from '../../../utils/staticData';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import {
  StyledDiscountGoods,
  StyledDiscountGoodsDesc,
  StyledDiscountGoodsTitle,
  StyledDiscountGoodsWrapper,
} from './StyledDiscountGoods';

const DiscountGoods: FC = () => {
  return (
    <StyledDiscountGoods>
      <StyledDiscountGoodsTitle>Горячие ссылки</StyledDiscountGoodsTitle>
      <StyledDiscountGoodsDesc>
        Избранные товары по новой цене
      </StyledDiscountGoodsDesc>
      <StyledDiscountGoodsWrapper>
        {goodsData.map((good, index) => (
          <GoodsItem
            key={index + good.desc}
            title={good.title}
            desc={good.desc}
            price={good.price}
            favorite={false}
          />
        ))}
      </StyledDiscountGoodsWrapper>
    </StyledDiscountGoods>
  );
};

export default DiscountGoods;
