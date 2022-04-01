import { FC } from 'react';
import { ISection } from '../../../commonInterfaces/ISection';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import SectionDesc from '../../Elements/SectionDesc/SectionDesc';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledDiscountGoods,
  StyledDiscountGoodsWrapper,
  StyledEmptyDiv,
} from './StyledDiscountGoods';

const DiscountGoods: FC<ISection> = ({ title, desc, goods }) => {
  const goodsDiscount = goods.filter((good) => !!good.discount);

  return (
    <StyledDiscountGoods>
      <SectionTitle text={title} primary={true} />
      <SectionDesc text={desc} />
      <StyledDiscountGoodsWrapper>
        {goodsDiscount.map((good) => (
          <GoodsItem
            key={good.id}
            title={good.name}
            desc={good.description}
            price={good.price}
            favorite={false}
            discount={good.discount}
            hit={good.hit}
          />
        ))}
        <StyledEmptyDiv></StyledEmptyDiv>
      </StyledDiscountGoodsWrapper>
    </StyledDiscountGoods>
  );
};

export default DiscountGoods;
