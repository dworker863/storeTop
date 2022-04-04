import { IGood } from './../../../commonInterfaces/IGood';
export enum ECart {
  SET_CART = 'SET_CART',
  SET_CART_GOODS_COUNT = 'SET_CART_GOODS_COUNT',
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
  sum: number;
}

export interface ISetCartAction {
  type: ECart.SET_CART;
  payload: IGood[];
}

export interface ISetCartGoodCountAction {
  type: ECart.SET_CART;
  payload: IGood[];
}

export type TCartActionTypes = ISetCartAction | ISetCartGoodCountAction;
