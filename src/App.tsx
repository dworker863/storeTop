import Header from './app/components/Sections/Header/Header';
import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import { Route, Routes } from 'react-router-dom';
import HomePage from './app/components/Pages/HomePage/HomePage';
import CartPage from './app/components/Pages/CartPage/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/redux/store';
import Category from './app/components/Pages/CategoryPage/CategoryPage';
import Menu from './app/components/Blocks/Menu/Menu';
import { getGoods } from './app/redux/reducers/goods/goodsReducer';
import { useEffect, useState } from 'react';
import GoodPage from './app/components/Pages/GoodPage/GoodPage';
import PaymentConditionsPage from './app/components/Pages/PaymentConditionsPage/PaymentConditionsPage';
import ContactsPage from './app/components/Pages/ContactsPage/ContactsPage';
import ReviewsPage from './app/components/Pages/ReviewsPage/ReviewsPage';
import { IGood } from './app/commonInterfaces/IGood';
import SearchPage from './app/components/Pages/SearchPage/SearchPage';
import AuthModal from './app/components/Sections/AuthModal/AuthModal';
import RegistrationPage from './app/components/Pages/RegistrationPage/RegistarationPage';
import UserCabinet from './app/components/Pages/UserCabinet/UserCabinet';
import { getUsers } from './app/redux/reducers/users/usersReducer';
import { IUser } from './app/commonInterfaces/IUser';
import Overlay from './app/components/Elements/Overlay/Overlay';

function App() {
  const cart = useSelector((state: RootState) => state.cart);
  const goods = useSelector((state: RootState) => state.goods);
  const users: IUser[] = useSelector((state: RootState) => state.users.users);
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);
  const goodsArr = [...goods.electronics, ...goods.cosmetics];
  const userCabinet = users.filter((user) => user.email === userEmail)[0];
  const dispatch = useDispatch();
  const [authModal, setAuthModal] = useState(false);

  const searchStr = useSelector((state: RootState) => state.search.value);
  const searchRegExp = new RegExp(`^${searchStr}`);
  const searchGoods = searchStr.length
    ? goodsArr.filter((good: IGood) => searchRegExp.test(good.name))
    : [];

  const authButtonHandler = (mode: boolean) => {
    setAuthModal(mode);
  };

  useEffect(() => {
    dispatch(getGoods());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ThemeProvider theme={commonTheme}>
      <Overlay active={authModal} />
      <AuthModal active={authModal} authButtonHandler={authButtonHandler} />
      <Header authButtonHandler={authButtonHandler} />
      <Menu categories={Object.keys(goods)} />
      <Routes>
        <Route path="/" element={<HomePage goods={goods} />} />
        <Route path="conditions" element={<PaymentConditionsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route
          path="cart"
          element={<CartPage goods={cart.goods} sum={cart.sum} />}
        />
        <Route path="search" element={<SearchPage goods={searchGoods} />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="cabinet" element={<UserCabinet user={userCabinet} />} />
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
