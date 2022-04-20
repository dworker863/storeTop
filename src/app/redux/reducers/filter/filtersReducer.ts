import { IGood } from '../../../commonInterfaces/IGood';
import {
  IFilters,
  EFilters,
  ISetFilterGoodsAction,
  TFiltersActionTypes,
} from './IfiltersReducer';

const initialState: IFilters = {
  filterGoods: [],
};

const filters = (state = initialState, action: TFiltersActionTypes | any) => {
  switch (action.type) {
    case EFilters.SET_FILTERS: {
      console.log(action.payload);
      return { filterGoods: action.payload };
    }

    default:
      return state;
  }
};

export const setFilterGoods = (goods: IGood[]): ISetFilterGoodsAction => ({
  type: EFilters.SET_FILTERS,
  payload: goods,
});

export default filters;
