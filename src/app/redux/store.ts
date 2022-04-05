import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cart from './reducers/cart/cartReducer';
import goods from './reducers/goods/goodsReducer';
import search from './reducers/search/searchReducer';

export const store = configureStore({
  reducer: {
    goods,
    cart,
    search,
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
