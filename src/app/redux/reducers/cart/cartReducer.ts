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
        goods: [...action.payload],
      };

      return {
        ...cartState,
        sum: cartState.goods.reduce(
          (sum, good) => (sum += Number(good.price) * good.goodsCount),
          0,
        ),
      };
    }

    case ECart.SET_CART_GOOD: {
      const cartState = {
        ...state,
        goods: [...state.goods, action.payload],
        sum: [...state.goods, action.payload].reduce(
          (sum, good) => (sum += Number(good.price) * good.goodsCount),
          0,
        ),
      };

      console.log(state.sum);

      return cartState;
    }

    case ECart.SET_CART_GOODS_COUNT: {
      const customGoods = [...state.goods];

      const customState = {
        ...state,
        goods: [
          ...customGoods.map((good) =>
            good.name === action.payload.name ? action.payload : good,
          ),
        ],
      };

      console.log(state.sum);

      return {
        ...customState,
        sum: [...customState.goods].reduce(
          (sum, good) => (sum += Number(good.price) * good.goodsCount),
          0,
        ),
      };
    }

    default:
      return state;
  }
};

export const setGoodCart = (good: ICartGood) => ({
  type: ECart.SET_CART_GOOD,
  payload: good,
});

export const setCartGoodCount = (good: IGood, goodsCount: number) => ({
  type: ECart.SET_CART_GOODS_COUNT,
  payload: { ...good, goodsCount },
});

export const setCart = (goods: ICartGood[]) => ({
  type: ECart.SET_CART,
  payload: goods,
});

export default cart;
