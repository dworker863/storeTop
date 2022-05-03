import { IAuthState } from '../../../redux/reducers/auth/IauthReducer';
import { ICartState } from '../../../redux/reducers/cart/IcartReducer';

export interface ICartPage {
  cart: ICartState;
  auth: IAuthState;
}
