import { IGood } from '../../../commonInterfaces/IGood';
import { ECart, ICartGood, ICartState, TCartActionTypes } from './IcartReducer';

const initialState: ICartState = {
  goods: [],
  delivery: 2000,
  sum: 0,
};

type NewType = TCartActionTypes;

export const cart = (state = initialState, action: NewType | any) => {
  switch (action.type) {
    case ECart.SET_CART: {
      const cartState = {
        ...state,
        goods: [...action.payload],
      };

      return {
        ...cartState,
        sum:
          cartState.goods.reduce(
            (sum, good) => (sum += Number(good.price) * good.goodsCount),
            0,
          ) + cartState.delivery,
      };
    }

    case ECart.SET_CART_GOOD: {
      const cartState = {
        ...state,
        goods: [...state.goods, action.payload],
        sum:
          [...state.goods, action.payload].reduce(
            (sum, good) => (sum += Number(good.price) * good.goodsCount),
            0,
          ) + state.delivery,
      };

      console.log(state.sum);

      return cartState;
    }

    case ECart.SET_CART_GOODS_COUNT: {
      const cartGoods = [...state.goods];

      const cartState = {
        ...state,
        goods: [
          ...cartGoods.map((good) =>
            good.name === action.payload.name ? action.payload : good,
          ),
        ],
      };

      console.log(state.sum);

      return {
        ...cartState,
        sum:
          [...cartState.goods].reduce(
            (sum, good) => (sum += Number(good.price) * good.goodsCount),
            0,
          ) + cartState.delivery,
      };
    }

    case ECart.SET_CART_DELIVERY: {
      const cartState = {
        ...state,
        delivery: action.payload,
      };

      return {
        ...cartState,
        sum:
          cartState.goods.reduce(
            (sum, good) => (sum += Number(good.price) * good.goodsCount),
            0,
          ) + cartState.delivery,
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

export const setCartDelivery = (delivery: number) => ({
  type: ECart.SET_CART_DELIVERY,
  payload: delivery,
});

export default cart;
