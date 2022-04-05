export enum ESearch {
  SET_SEARCH = 'SET_SEARCH',
}

export interface ISearchState {
  value: string;
}

export interface ISetSearchAction {
  type: ESearch.SET_SEARCH;
  payload: string;
}

export type TSearchActionTypes = ISetSearchAction;
