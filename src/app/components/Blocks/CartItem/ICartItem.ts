import {
  ICartGood,
  ICartState,
} from '../../../redux/reducers/cart/IcartReducer';

export interface ICartItem {
  good: ICartGood;
  cart: ICartState;
}
