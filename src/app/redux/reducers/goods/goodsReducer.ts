import { fetchGoods } from '../../../api/api';
import { AnyAction, Dispatch, ThunkAction } from '@reduxjs/toolkit';
import {
  EGoods,
  TGoodsActionTypes,
  IGoodsState,
  ISetGoodsAction,
} from './IgoodsReducer';

const initialState: IGoodsState = {
  cosmetics: [],
  electronics: [],
};

const goods = (state = initialState, action: TGoodsActionTypes | any) => {
  switch (action.type) {
    case EGoods.SET_GOODS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const setGoods = (goods: IGoodsState): ISetGoodsAction => ({
  type: EGoods.SET_GOODS,
  payload: goods,
});

export const getGoods =
  (): ThunkAction<void, IGoodsState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    fetchGoods().then((goods: IGoodsState) => dispatch(setGoods(goods)));
  };

export default goods;
