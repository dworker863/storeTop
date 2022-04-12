import { ICartState } from './../../../redux/reducers/cart/IcartReducer';

export interface IHeader {
  cart: ICartState;
  authButtonHandler: (mode: boolean) => void;
}
