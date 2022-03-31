import { FC } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  StyledNav,
  StyledNextButton,
  StyledPrevButton,
  StyledSliderWrapper,
} from './StyledSlider';

const SwiperComponent: FC = ({ children }) => {
  return (
    <StyledSliderWrapper>
      <Swiper
        spaceBetween={21}
        slidesPerView={5}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {children}
      </Swiper>
      <StyledNav>
        <StyledPrevButton className="swiper-button-prev-custom"></StyledPrevButton>
        <StyledNextButton className="swiper-button-next-custom"></StyledNextButton>
      </StyledNav>
    </StyledSliderWrapper>
  );
};

export default SwiperComponent;
