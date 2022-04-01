import Header from './app/components/Sections/Header/Header';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from './app/commonStyles/theme';
import Menu from './app/components/Blocks/Menu/Menu';
import Goods from './app/components/Sections/Goods/Goods';
import Container from './app/components/Blocks/Container/Container';
import DiscountGoods from './app/components/Sections/DiscountGoods/DiscountGoods';
import Order from './app/components/Sections/Order/Order';
import BannerFirst from './app/components/Sections/BannerFirst/BannerFirst';
import BannerSecond from './app/components/Sections/BannerSecond/BannerSecond';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from './app/redux/reducers/goodsReducer';
import { useEffect } from 'react';
import { RootState } from './app/redux/store';

function App() {
  const goods = useSelector((state: RootState) => state.goods);
  const goodsArr = [...goods.cosmetics, ...goods.electronics];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      <main>
        <Menu />
        <Container type="common">
          <BannerFirst />
          <Goods
            title="Популярные товары"
            desc="То, что выбирают люди"
            goods={goodsArr}
          />
          <DiscountGoods
            title="Горячие скидки"
            desc="Избранные товары по новой цене"
            goods={goodsArr}
          />
          <BannerSecond />
          <Goods
            title="Свежие новинки"
            desc="Новое поступление"
            goods={goodsArr}
          />
          <Order />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
