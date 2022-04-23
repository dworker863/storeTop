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
import SearchPage from './app/components/Pages/SearchPage/SearchPage';
import AuthModal from './app/components/Sections/AuthModal/AuthModal';
import RegistrationPage from './app/components/Pages/RegistrationPage/RegistarationPage';
import UserCabinet from './app/components/Pages/UserCabinet/UserCabinet';
import { getUsers } from './app/redux/reducers/users/usersReducer';
import Overlay from './app/components/Elements/Overlay/Overlay';
import CategoryPage from './app/components/Pages/CategoryPage/CategoryPage';
import OrderModal from './app/components/Sections/OrderModal/OrderModal';
import LogoutModal from './app/components/Sections/LogoutModal/LogoutModal';
import { setLoginWithToken } from './app/redux/reducers/auth/authReducer';
import EditProfilePage from './app/components/Pages/EditProfilePage/EditProfilePage';
import { calculateRating } from './app/commonFunctions/commonFunctions';
import { setSearchGoods } from './app/redux/reducers/search/searchReducer';
import { IGood } from './app/commonInterfaces/IGood';
import { IUser } from './app/commonInterfaces/IUser';
import UnauthorizedModal from './app/components/Sections/UnauthorizedModal/UnauthorizedModal';

export const OrderModalContext = createContext<any>(null);
export const LogoutModalContext = createContext<any>(null);
export const SearchFilterContext = createContext<any>(null);
export const UnauthorizedModalContext = createContext<any>(null);

function App() {
  const cart = useSelector((state: RootState) => state.cart);
  const goods = useSelector((state: RootState) => state.goods);
  const auth = useSelector((state: RootState) => state.auth);
  const users = useSelector((state: RootState) => state.users.users);
  const user: IUser = users.filter(
    (user: any) => user.email === auth.userEmail,
  )[0];
  const search = useSelector((state: RootState) => state.search);

  const goodsArr: IGood[] = [...goods.electronics, ...goods.cosmetics];

  const [authModal, setAuthModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [unauthorizedModal, setUnauthorizedModal] = useState(false);
  const [unauthorizedModalText, setUnauthorizedModalText] = useState('');
  const dispatch = useDispatch();

  const setfilterGoods = (
    startBy: string,
    inStock: boolean,
    highRating: boolean,
  ) => {
    console.log(highRating);

    let filterGoods = [];

    if (highRating) {
      filterGoods = search.searchGoods.filter((good: IGood) => {
        return calculateRating(good.rating) >= 4;
      });
      console.log(filterGoods);
    }

    if (!highRating) {
      const searchRegExp = new RegExp(`^${search.value}`);
      filterGoods = goodsArr.filter((good) => searchRegExp.test(good.name));
    }

    switch (startBy) {
      case 'rich': {
        filterGoods = [...filterGoods].sort(
          (goodFirst, goodSecond) =>
            Number(goodSecond.price) - Number(goodFirst.price),
        );

        return dispatch(setSearchGoods(filterGoods));
      }

      case 'cheap': {
        filterGoods = [...filterGoods].sort(
          (goodFirst, goodSecond) =>
            Number(goodFirst.price) - Number(goodSecond.price),
        );

        return dispatch(setSearchGoods(filterGoods));
      }

      case 'popular': {
        filterGoods = [...filterGoods].sort(
          (goodFirst, goodSecond) =>
            Number(goodSecond.buysCount) - Number(goodFirst.buysCount),
        );

        return dispatch(setSearchGoods(filterGoods));
      }

      case 'new': {
        filterGoods = [...filterGoods].sort(
          (goodFirst, goodSecond) =>
            new Date(goodSecond.createdAt).getTime() -
            new Date(goodFirst.createdAt).getTime(),
        );

        return dispatch(setSearchGoods(filterGoods));
      }

      default:
        return dispatch(setSearchGoods(filterGoods));
    }
  };

  const authButtonHandler = (mode: boolean) => {
    setAuthModal(mode);
  };

  const orderButtonHandler = (mode: boolean) => {
    setOrderModal(mode);
  };

  const logoutButtonHandler = (mode: boolean) => {
    setLogoutModal(mode);
  };

  const unauthorizedButtonHandler = (mode: boolean, text: string) => {
    setUnauthorizedModal(mode);
    setUnauthorizedModalText(text);
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
        active={authModal || orderModal || logoutModal || unauthorizedModal}
        mode={window.location.pathname === '/cart' ? 'cart' : 'common'}
      />
      <AuthModal active={authModal} buttonHandler={authButtonHandler} />
      <OrderModal active={orderModal} buttonHandler={orderButtonHandler} />
      <LogoutModal active={logoutModal} buttonHandler={logoutButtonHandler} />
      <UnauthorizedModal
        active={unauthorizedModal}
        buttonHandler={unauthorizedButtonHandler}
        user={user}
        text={unauthorizedModalText}
      />
      <LogoutModalContext.Provider value={logoutButtonHandler}>
        <SearchFilterContext.Provider value={setfilterGoods}>
          <Header authButtonHandler={authButtonHandler} cart={cart} />
        </SearchFilterContext.Provider>
      </LogoutModalContext.Provider>
      <Menu categories={Object.keys(goods)} />
      <OrderModalContext.Provider value={orderButtonHandler}>
        <UnauthorizedModalContext.Provider value={unauthorizedButtonHandler}>
          <Routes>
            <Route
              path="/"
              element={<HomePage goods={goodsArr} user={user} />}
            />
            <Route path="conditions" element={<PaymentConditionsPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="cart" element={<CartPage cart={cart} />} />
            <Route
              path="search"
              element={<SearchPage goods={search.searchGoods} user={user} />}
            />
            <Route path="registration" element={<RegistrationPage />} />
            <Route
              path="cabinet"
              element={auth ? <UserCabinet /> : <Navigate to="/" replace />}
            />
            <Route path="editprofile" element={<EditProfilePage />} />
            <Route
              path="goods/electronics"
              element={
                <CategoryPage
                  goods={goods.electronics}
                  title="Электроника"
                  user={user}
                />
              }
            />
            <Route
              path="goods/cosmetics"
              element={
                <CategoryPage
                  goods={goods.cosmetics}
                  title="Косметика"
                  user={user}
                />
              }
            />
            <Route
              path="goods/:goodName"
              element={
                <GoodPage
                  goods={goods}
                  cart={cart}
                  user={user}
                  ratingHandler={unauthorizedButtonHandler}
                />
              }
            />
          </Routes>
        </UnauthorizedModalContext.Provider>
      </OrderModalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
