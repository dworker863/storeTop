import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { goodsData } from '../../../utils/staticData';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import SliderComponent from '../../Blocks/Slider/Slider';
import {
  StyledPopularGoods,
  StyledPopularGoodsDesc,
  StyledPopularGoodsTitle,
} from './StyledPopularGoods';

const PopularGoods: FC = () => {
  return (
    <StyledPopularGoods>
      <StyledPopularGoodsTitle>Популярные товары</StyledPopularGoodsTitle>
      <StyledPopularGoodsDesc>То, что выбирают люди</StyledPopularGoodsDesc>
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
    </StyledPopularGoods>
  );
};

export default PopularGoods;
