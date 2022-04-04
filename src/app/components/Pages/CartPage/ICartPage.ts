import { ICartGood } from '../../../redux/reducers/cart/ICartReducer';

export interface ICartPage {
  goods: ICartGood[];
  sum: number;
}
