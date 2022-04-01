import { IGood } from '../../commonInterfaces/IGood';

export enum EGoods {
  SET_GOODS = 'SET_GOODS',
}

export interface IGoodsState {
  cosmetics: IGood[];
  electronics: IGood[];
}

export interface ISetGoodsAction {
  type: EGoods.SET_GOODS;
  payload: IGoodsState;
}

export type TGoodsActionTypes = ISetGoodsAction;
