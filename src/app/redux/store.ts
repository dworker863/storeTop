import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './reducers/auth/authReducer';
import cart from './reducers/cart/cartReducer';
import goods from './reducers/goods/goodsReducer';
import search from './reducers/search/searchReducer';
import users from './reducers/users/usersReducer';

export const store = configureStore({
  reducer: {
    goods,
    cart,
    search,
    auth,
    users,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
