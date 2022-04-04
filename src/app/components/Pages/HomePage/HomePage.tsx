import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import BannerFirst from '../../Sections/BannerFirst/BannerFirst';
import Goods from '../../Sections/Goods/Goods';
import BannerSecond from '../../Sections/BannerSecond/BannerSecond';
import Order from '../../Sections/Order/Order';
import { IHomePage } from './IHomePage';

const HomePage: FC<IHomePage> = ({ goods }) => {
  const goodsArr = [...goods.cosmetics, ...goods.electronics];

  return (
    <main>
      <Container type="common">
        <BannerFirst />
        <Goods
          title="Популярные товары"
          desc="То, что выбирают люди"
          goods={goodsArr}
          hit={true}
          sliderClass={[
            'swiper-button-prev-custom1',
            'swiper-button-next-custom1',
          ]}
        />
        <Goods
          title="Горячие скидки"
          desc="Избранные товары по новой цене"
          goods={goodsArr}
          discount={true}
          sliderClass={[
            'swiper-button-prev-custom2',
            'swiper-button-next-custom2',
          ]}
        />
        <BannerSecond />
        <Goods
          title="Свежие новинки"
          desc="Новое поступление"
          goods={goodsArr}
          sliderClass={[
            'swiper-button-prev-custom3',
            'swiper-button-next-custom3',
          ]}
        />
        <Order />
      </Container>
    </main>
  );
};

export default HomePage;
