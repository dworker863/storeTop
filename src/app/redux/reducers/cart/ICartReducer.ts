export enum ECart {
  SET_CART = 'SET_CART',
  SET_CART_GOOD = 'SET_CART_GOOD',
  SET_CART_GOODS_COUNT = 'SET_CART_GOODS_COUNT',
  SET_CART_DELIVERY = 'SET_CART_DELIVERY',
}

export interface ICartGood {
  name: string;
  description: string;
  price: string;
  discount: string;
  hit: boolean;
  goodsCount: number;
}

export interface ICartState {
  goods: ICartGood[];
  delivery: number;
  sum: number;
}

export interface ISetGoodCartAction {
  type: ECart.SET_CART_GOOD;
  payload: ICartGood[];
}

export interface ISetCartGoodCountAction {
  type: ECart.SET_CART_GOOD;
  payload: ICartGood[];
}

export interface ISetCartDeliveryCountAction {
  type: ECart.SET_CART_GOOD;
  payload: number;
}

export type TCartActionTypes =
  | ISetGoodCartAction
  | ISetCartGoodCountAction
  | ISetCartDeliveryCountAction;
