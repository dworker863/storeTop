import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cart from './reducers/cart/cartReducer';
import goods from './reducers/goods/goodsReducer';

export const store = configureStore({
  reducer: {
    goods,
    cart,
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
