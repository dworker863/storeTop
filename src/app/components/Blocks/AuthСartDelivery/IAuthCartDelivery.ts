import { ChangeEvent, MouseEvent } from 'react';
import { ICartState } from './../../../redux/reducers/cart/IcartReducer';

export interface IAuthCartDeliveryState {
  cart: ICartState;
  changeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
  submitHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}
