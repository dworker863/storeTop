import { IGood } from '../../../commonInterfaces/IGood';

export enum EFilters {
  SET_FILTERS = 'SET_FILTERS',
}

export interface IFilters {
  filterGoods: IGood[];
}

export interface ISetFilterGoodsAction {
  type: EFilters.SET_FILTERS;
  payload: IGood[];
}

export type TFiltersActionTypes = ISetFilterGoodsAction;
