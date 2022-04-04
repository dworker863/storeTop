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
import { ISlider } from './ISlider';

const SwiperComponent: FC<ISlider> = ({ children, sliderClass }) => {
  return (
    <StyledSliderWrapper>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          prevEl: `.${sliderClass[0]}`,
          nextEl: `.${sliderClass[1]}`,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          576: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          992: {
            spaceBetween: 16,
            slidesPerView: 4,
            centeredSlides: false,
          },
          1200: {
            spaceBetween: 0,
            slidesPerView: 5,
            initialSlide: 3,
            centeredSlides: false,
          },
          1400: {
            spaceBetween: 21,
            slidesPerView: 5,
            initialSlide: 3,
            centeredSlides: false,
          },
        }}
      >
        {children}
      </Swiper>
      <StyledNav>
        <StyledPrevButton
          className={'swiper-button-prev-custom ' + sliderClass[0]}
        ></StyledPrevButton>
        <StyledNextButton
          className={'swiper-button-next-custom ' + sliderClass[1]}
        ></StyledNextButton>
      </StyledNav>
    </StyledSliderWrapper>
  );
};

export default SwiperComponent;
