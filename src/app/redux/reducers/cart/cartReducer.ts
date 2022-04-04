import { EGoods } from '../goods/IgoodsReducer';
import { IGood } from './../../../commonInterfaces/IGood';
import { ECart, ICartState, TCartActionTypes } from './ICartReducer';

const initialState: ICartState = {
  goods: [],
  sum: '0',
};

export const cart = (state = initialState, action: TCartActionTypes | any) => {
  switch (action.type) {
    case ECart.SET_CART:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const setCart = (good: IGood) => ({
  type: EGoods.SET_GOODS,
  payload: good,
});

export default cart;
