import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ISection } from '../../../commonInterfaces/ISection';
import { goodsData } from '../../../utils/staticData';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import SliderComponent from '../../Blocks/Slider/Slider';
import { StyledGoods, StyledGoodsDesc, StyledGoodsTitle } from './StyledGoods';

const Goods: FC<ISection> = ({ title, desc }) => {
  return (
    <StyledGoods>
      <StyledGoodsTitle>{title}</StyledGoodsTitle>
      <StyledGoodsDesc>{desc}</StyledGoodsDesc>
      <SliderComponent>
        {goodsData.map((good, index) => (
          <SwiperSlide>
            <GoodsItem
              key={index + good.desc}
              title={good.title}
              desc={good.desc}
              price={good.price}
              favorite={false}
            />
          </SwiperSlide>
        ))}
      </SliderComponent>
    </StyledGoods>
  );
};

export default Goods;
