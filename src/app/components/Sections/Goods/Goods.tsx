import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ISection } from '../../../commonInterfaces/ISection';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import SliderComponent from '../../Blocks/Slider/Slider';
import SectionDesc from '../../Elements/SectionDesc/SectionDesc';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { StyledGoods } from './StyledGoods';

const Goods: FC<ISection> = ({
  title,
  desc,
  goods,
  user,
  discount,
  hit,
  sliderClass,
}) => {
  const goodsDiscount = goods.filter((good) => !!good.discount);
  const goodsHit = goods.filter((good) => good.hit);

  let goodsToMap;

  if (discount === undefined && hit === undefined) {
    goodsToMap = goods;
  } else if (hit) {
    goodsToMap = goodsHit;
  } else {
    goodsToMap = goodsDiscount;
  }

  return (
    <StyledGoods>
      <SectionTitle text={title} primary={false} />
      <SectionDesc text={desc} />
      <SliderComponent sliderClass={sliderClass}>
        {goodsToMap.length &&
          goodsToMap.map((good, index) => (
            <SwiperSlide key={index + good.name}>
              <GoodsItem good={good} user={user} />
            </SwiperSlide>
          ))}
      </SliderComponent>
    </StyledGoods>
  );
};

export default Goods;
