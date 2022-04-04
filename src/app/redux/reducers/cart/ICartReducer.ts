export enum ECart {
  SET_CART_GOOD = 'SET_CART_GOOD',
  SET_CART_GOODS_COUNT = 'SET_CART_GOODS_COUNT',
  SET_CART = 'SET_CART',
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

export interface ISetGoodCartAction {
  type: ECart.SET_CART_GOOD;
  payload: ICartGood[];
}

export interface ISetCartGoodCountAction {
  type: ECart.SET_CART_GOOD;
  payload: ICartGood[];
}

export type TCartActionTypes = ISetGoodCartAction | ISetCartGoodCountAction;
