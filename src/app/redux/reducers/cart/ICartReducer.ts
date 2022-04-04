import { IGood } from './../../../commonInterfaces/IGood';
export enum ECart {
  SET_CART = 'SET_CART',
}

export interface ICartState {
  goods: IGood[];
  sum: number;
}

export interface ISetCartAction {
  type: ECart.SET_CART;
  payload: IGood[];
}

export type TCartActionTypes = ISetCartAction;
