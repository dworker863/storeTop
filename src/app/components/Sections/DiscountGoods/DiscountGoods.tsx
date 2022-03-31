import { FC } from 'react';
import { ISection } from '../../../commonInterfaces/ISection';
import { discountGoodsData } from '../../../utils/staticData';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import SectionDesc from '../../Elements/SectionDesc/SectionDesc';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledDiscountGoods,
  StyledDiscountGoodsWrapper,
  StyledEmptyDiv,
} from './StyledDiscountGoods';

const DiscountGoods: FC<ISection> = ({ title, desc }) => {
  return (
    <StyledDiscountGoods>
      <SectionTitle text={title} primary={true} />
      <SectionDesc text={desc} />
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
