import { IGood } from '../../../commonInterfaces/IGood';
import { ECart, ICartGood, ICartState, TCartActionTypes } from './ICartReducer';

const initialState: ICartState = {
  goods: [],
  sum: 0,
};

export const cart = (state = initialState, action: TCartActionTypes | any) => {
  switch (action.type) {
    case ECart.SET_CART: {
      const cartState = {
        ...state,
        goods: [...state.goods, action.payload],
        sum: [...state.goods, action.payload].reduce(
          (sum, good) => (sum += Number(good.price)),
          0,
        ),
      };

      // console.log(cartState);

      return cartState;
    }

    case ECart.SET_CART_GOODS_COUNT: {
      const customGoods = [...state.goods];

      console.log(customGoods);

      return {
        ...state,
        goods: [
          ...customGoods.map((good) =>
            good.name === action.payload.name ? action.payload : good,
          ),
        ],
      };
    }
    default:
      return state;
  }
};

export const setCart = (good: ICartGood) => ({
  type: ECart.SET_CART,
  payload: good,
});

export const setCartGoodCount = (good: IGood, goodsCount: number) => ({
  type: ECart.SET_CART_GOODS_COUNT,
  payload: { ...good, goodsCount },
});

export default cart;
