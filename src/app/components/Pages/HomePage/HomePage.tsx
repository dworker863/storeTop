import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import BannerFirst from '../../Sections/BannerFirst/BannerFirst';
import Goods from '../../Sections/Goods/Goods';
import BannerSecond from '../../Sections/BannerSecond/BannerSecond';
import Order from '../../Sections/Order/Order';
import { IGoods } from '../../../commonInterfaces/IGoods';

const HomePage: FC<IGoods> = ({ goods }) => {
  return (
    <main>
      <Container type="common">
        <BannerFirst />
        <Goods
          title="Популярные товары"
          desc="То, что выбирают люди"
          goods={goods}
          hit={true}
          sliderClass={[
            'swiper-button-prev-custom1',
            'swiper-button-next-custom1',
          ]}
        />
        <Goods
          title="Горячие скидки"
          desc="Избранные товары по новой цене"
          goods={goods}
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
          goods={goods}
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
