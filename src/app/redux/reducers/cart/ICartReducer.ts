export enum ECart {
  SET_CART = 'SET_CART',
  SET_CART_GOOD = 'SET_CART_GOOD',
  SET_CART_GOODS_COUNT = 'SET_CART_GOODS_COUNT',
  SET_CART_DELIVERY = 'SET_CART_DELIVERY',
  SET_CART_SELECT = 'SET_CART_SELECT',
}

export interface ICartGood {
  name: string;
  description: string;
  characteristics: string;
  country: string;
  price: string;
  discount: string;
  hit: boolean;
  image: any;
  goodsCount: number;
}

export interface ICartSelect {
  delivery: string;
  payment: string;
}

export interface ICartState {
  goods: ICartGood[];
  delivery: number;
  sum: number;
  selected: ICartSelect;
}

export interface ISetCartAction {
  type: ECart.SET_CART;
  payload: ICartGood[];
}

export interface ISetGoodCartAction {
  type: ECart.SET_CART_GOOD;
  payload: ICartGood;
}

export interface ISetCartGoodCountAction {
  type: ECart.SET_CART_GOODS_COUNT;
  payload: ICartGood;
}

export interface ISetCartDeliveryCountAction {
  type: ECart.SET_CART_DELIVERY;
  payload: number;
}

export interface ISetCartSelectAction {
  type: ECart.SET_CART_SELECT;
  payload: ICartSelect;
}

export type TCartActionTypes =
  | ISetCartAction
  | ISetGoodCartAction
  | ISetCartGoodCountAction
  | ISetCartDeliveryCountAction
  | ISetCartSelectAction;
