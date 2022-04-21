import { IGood } from '../../../commonInterfaces/IGood';
import {
  TSearchActionTypes,
  ESearch,
  ISearchState,
  ISetSearchGoods,
} from './IsearchReducer';

const initialState: ISearchState = {
  value: '',
  searchGoods: [],
};

const search = (state = initialState, action: TSearchActionTypes | any) => {
  switch (action.type) {
    case ESearch.SET_SEARCH_STRING: {
      console.log(action.payload);

      return { ...state, value: action.payload };
    }

    case ESearch.SET_SEARCH_GOODS: {
      console.log(action.payload);

      return { ...state, searchGoods: action.payload };
    }

    default:
      return state;
  }
};

export const setSearchString = (value: string) => ({
  type: ESearch.SET_SEARCH_STRING,
  payload: value,
});

export const setSearchGoods = (goods: IGood[]): ISetSearchGoods => ({
  type: ESearch.SET_SEARCH_GOODS,
  payload: goods,
});

export default search;
