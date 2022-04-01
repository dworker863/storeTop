import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import goods from './reducers/goodsReducer';

export const store = configureStore({
  reducer: {
    goods,
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
