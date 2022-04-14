import Header from './app/components/Sections/Header/Header';
import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './app/components/Pages/HomePage/HomePage';
import CartPage from './app/components/Pages/CartPage/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/redux/store';
import Menu from './app/components/Blocks/Menu/Menu';
import { getGoods } from './app/redux/reducers/goods/goodsReducer';
import { createContext, useEffect, useState } from 'react';
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
import Overlay from './app/components/Elements/Overlay/Overlay';
import CategoryPage from './app/components/Pages/CategoryPage/CategoryPage';
import OrderModal from './app/components/Sections/OrderModal/OrderModal';
import LogoutModal from './app/components/Sections/LogoutModal/LogoutModal';
import { loginWithToken } from './app/api/api';
import { setLoginWithToken } from './app/redux/reducers/auth/authReducer';

export const OrderModalContext = createContext<any>(null);
export const LogoutModalContext = createContext<any>(null);

function App() {
  const cart = useSelector((state: RootState) => state.cart);
  const goods = useSelector((state: RootState) => state.goods);
  const auth = useSelector((state: RootState) => state.auth.auth);
  const searchStr = useSelector((state: RootState) => state.search.value);
  const goodsArr = [...goods.electronics, ...goods.cosmetics];

  const [authModal, setAuthModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const dispatch = useDispatch();

  const searchRegExp = new RegExp(`^${searchStr}`);
  const searchGoods = searchStr.length
    ? goodsArr.filter((good: IGood) => searchRegExp.test(good.name))
    : [];

  const authButtonHandler = (mode: boolean) => {
    setAuthModal(mode);
  };

  const orderButtonHandler = (mode: boolean) => {
    setOrderModal(mode);
  };

  const logoutButtonHandler = (mode: boolean) => {
    setLogoutModal(mode);
  };

  useEffect(() => {
    if (localStorage.getItem('remember') === 'true') {
      dispatch(setLoginWithToken());
    }
    dispatch(getGoods());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ThemeProvider theme={commonTheme}>
      <Overlay
        active={authModal || orderModal || logoutModal}
        mode={window.location.pathname === '/cart' ? 'cart' : 'common'}
      />
      <AuthModal active={authModal} buttonHandler={authButtonHandler} />
      <OrderModal active={orderModal} buttonHandler={orderButtonHandler} />
      <LogoutModal active={logoutModal} buttonHandler={logoutButtonHandler} />
      <LogoutModalContext.Provider value={logoutButtonHandler}>
        <Header authButtonHandler={authButtonHandler} cart={cart} />
      </LogoutModalContext.Provider>
      <Menu categories={Object.keys(goods)} />
      <OrderModalContext.Provider value={orderButtonHandler}>
        <Routes>
          <Route path="/" element={<HomePage goods={goodsArr} />} />
          <Route path="conditions" element={<PaymentConditionsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="cart" element={<CartPage cart={cart} />} />
          <Route path="search" element={<SearchPage goods={searchGoods} />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route
            path="cabinet"
            element={auth ? <UserCabinet /> : <Navigate to="/" replace />}
          />
          <Route
            path="goods/electronics"
            element={
              <CategoryPage goods={goods.electronics} title="Электроника" />
            }
          />
          <Route
            path="goods/cosmetics"
            element={<CategoryPage goods={goods.cosmetics} title="Косметика" />}
          />
          <Route
            path="goods/:goodName"
            element={<GoodPage goods={goods} cart={cart} />}
          />
        </Routes>
      </OrderModalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
