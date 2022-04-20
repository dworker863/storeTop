import { TSearchActionTypes, ESearch, ISearchState } from './IsearchReducer';

const initialState: ISearchState = {
  value: '',
};

const search = (state = initialState, action: TSearchActionTypes | any) => {
  switch (action.type) {
    case ESearch.SET_SEARCH: {
      console.log(action.payload);

      return { value: action.payload };
    }
    default:
      return state;
  }
};

export const setSearch = (value: string) => ({
  type: ESearch.SET_SEARCH,
  payload: value,
});

export default search;
