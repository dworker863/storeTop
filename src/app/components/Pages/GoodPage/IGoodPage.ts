import { IUser } from '../../../commonInterfaces/IUser';
import { ICartState } from './../../../redux/reducers/cart/IcartReducer';
import { IGoodsState } from './../../../redux/reducers/goods/IgoodsReducer';

export interface IGoodPage {
  goods: IGoodsState;
  cart: ICartState;
  user: IUser;
  ratingHandler: (mode: boolean) => void;
}
