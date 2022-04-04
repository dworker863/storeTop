import { IGood } from './../../../commonInterfaces/IGood';
import { ECart, ICartState, TCartActionTypes } from './ICartReducer';

const initialState: ICartState = {
  goods: [],
  sum: 0,
};

export const cart = (state = initialState, action: TCartActionTypes | any) => {
  switch (action.type) {
    case ECart.SET_CART:
      const cartState = {
        ...state,
        goods: [...state.goods, action.payload],
        sum: [...state.goods, action.payload].reduce(
          (sum, good) => (sum += Number(good.price)),
          0,
        ),
      };

      console.log(cartState);

      return cartState;

    default:
      return state;
  }
};

export const setCart = (good: IGood) => ({
  type: ECart.SET_CART,
  payload: good,
});

export default cart;
