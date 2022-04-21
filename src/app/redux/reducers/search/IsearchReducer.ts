import { IGood } from './../../../commonInterfaces/IGood';
export enum ESearch {
  SET_SEARCH_STRING = 'SET_SEARCH_STRING',
  SET_SEARCH_GOODS = 'SET_SEARCH_GOODS',
}

export interface ISearchState {
  value: string;
  searchGoods: IGood[];
}

export interface ISetSearchAction {
  type: ESearch.SET_SEARCH_STRING;
  payload: string;
}

export interface ISetSearchGoods {
  type: ESearch.SET_SEARCH_GOODS;
  payload: IGood[];
}

export type TSearchActionTypes = ISetSearchAction | ISetSearchGoods;
