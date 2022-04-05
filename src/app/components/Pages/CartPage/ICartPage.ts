import { ICartGood } from '../../../redux/reducers/cart/IcartReducer';

export interface ICartPage {
  goods: ICartGood[];
  sum: number;
}
