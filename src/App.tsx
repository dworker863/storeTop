import Header from './app/components/Sections/Header/Header';
import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import { Route, Routes } from 'react-router-dom';
import HomePage from './app/components/Pages/HomePage/HomePage';
import CartPage from './app/components/Pages/CartPage/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/redux/store';
import Category from './app/components/Pages/Category/Category';
import Menu from './app/components/Blocks/Menu/Menu';
import { getGoods } from './app/redux/reducers/goods/goodsReducer';
import { useEffect } from 'react';
import GoodPage from './app/components/Pages/GoodPage/GoodPage';

function App() {
  const cartGoods = useSelector((state: RootState) => state.cart);
  const goods = useSelector((state: RootState) => state.goods);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      <Menu categories={Object.keys(goods)} />
      <Routes>
        <Route path="/" element={<HomePage goods={goods} />} />
        <Route path="cart" element={<CartPage goods={cartGoods.goods} />} />
        <Route
          path="goods/electronics"
          element={<Category goods={goods.electronics} title="Электроника" />}
        />
        <Route
          path="goods/cosmetics"
          element={<Category goods={goods.cosmetics} title="Косметика" />}
        />
        <Route path="goods/:goodName" element={<GoodPage goods={goods} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
