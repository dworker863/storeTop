import { IGood } from '../../../commonInterfaces/IGood';
import {
  ECart,
  ICartGood,
  ICartSelect,
  ICartState,
  ISetCartAction,
  ISetCartDeliveryCountAction,
  ISetCartGoodCountAction,
  ISetCartSelectAction,
  ISetGoodCartAction,
  TCartActionTypes,
} from './IcartReducer';

const initialState: ICartState = {
  goods: [],
  delivery: 2000,
  sum: 0,
  selected: { delivery: 'почтой', payment: 'наличными' },
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
            (sum, good) =>
              (sum +=
                good.discount.length === 0
                  ? Number(good.price) * good.goodsCount
                  : (Number(good.price) -
                      Number(good.price) *
                        (Number(good.discount.slice(0, -1)) / 100)) *
                    good.goodsCount),
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
            (sum, good) =>
              (sum +=
                good.discount.length === 0
                  ? Number(good.price) * good.goodsCount
                  : (Number(good.price) -
                      Number(good.price) *
                        (Number(good.discount.slice(0, -1)) / 100)) *
                    good.goodsCount),
            0,
          ) + state.delivery,
      };

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

      return {
        ...cartState,
        sum:
          [...cartState.goods].reduce(
            (sum, good) =>
              (sum +=
                good.discount.length === 0
                  ? Number(good.price) * good.goodsCount
                  : (Number(good.price) -
                      Number(good.price) *
                        (Number(good.discount.slice(0, -1)) / 100)) *
                    good.goodsCount),
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
            (sum, good) =>
              (sum +=
                good.discount.length === 0
                  ? Number(good.price) * good.goodsCount
                  : (Number(good.price) -
                      Number(good.price) *
                        (Number(good.discount.slice(0, -1)) / 100)) *
                    good.goodsCount),
            0,
          ) + cartState.delivery,
      };
    }

    case ECart.SET_CART_SELECT: {
      const cartState = {
        ...state,
        selected: { ...action.payload },
      };

      return cartState;
    }

    default:
      return state;
  }
};

export const setGoodCart = (good: ICartGood): ISetGoodCartAction => ({
  type: ECart.SET_CART_GOOD,
  payload: good,
});

export const setCartGoodCount = (
  good: ICartGood,
  goodsCount: number,
): ISetCartGoodCountAction => ({
  type: ECart.SET_CART_GOODS_COUNT,
  payload: { ...good, goodsCount },
});

export const setCart = (goods: ICartGood[]): ISetCartAction => ({
  type: ECart.SET_CART,
  payload: goods,
});

export const setCartDelivery = (
  delivery: number,
): ISetCartDeliveryCountAction => ({
  type: ECart.SET_CART_DELIVERY,
  payload: delivery,
});

export const setCartSelect = (selected: ICartSelect): ISetCartSelectAction => ({
  type: ECart.SET_CART_SELECT,
  payload: selected,
});

export default cart;
