import { AnyAction, ThunkAction, Dispatch } from '@reduxjs/toolkit';
import {
  TAuthActionTypes,
  EAuth,
  IAuthState,
  ISetAuthAction,
} from './IauthReducer';
import { login, registration } from '../../../api/api';
import { getUsers } from '../users/usersReducer';
import { RootState } from '../../store';

const initialState: IAuthState = {
  userName: '',
  userEmail: '',
  auth: false,
  error: '',
};

const auth = (state = initialState, action: TAuthActionTypes | any) => {
  switch (action.type) {
    case EAuth.SET_AUTH:
      const authState = {
        ...action.payload,
      };
      console.log(authState);

      return authState;

    default:
      return state;
  }
};

export const setAuth = (userAuth: IAuthState): ISetAuthAction => ({
  type: EAuth.SET_AUTH,
  payload: userAuth,
});

export const setLogin =
  (
    email: string,
    password: string,
  ): ThunkAction<Promise<ISetAuthAction>, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): Promise<ISetAuthAction> => {
    return login(email, password)
      .then((user) => {
        return dispatch(
          setAuth({
            userName: user.username,
            userEmail: user.email,
            auth: true,
            error: '',
          }),
        );
      })
      .catch((e) => {
        console.log(e.message);

        return dispatch(
          setAuth({
            userName: '',
            userEmail: '',
            auth: false,
            error: e.message,
          }),
        );
      });
  };

export const setRegistration =
  (
    username: string,
    email: string,
    password: string,
    phone: string,
    city: string,
    street: string,
    houseNumber: string,
    floor: string,
    flatNumber: string,
    postIndex: string,
    role: string,
  ): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>) => {
    registration(
      username,
      email,
      password,
      phone,
      city,
      street,
      houseNumber,
      floor,
      flatNumber,
      postIndex,
      role,
    )
      .then((user) => {
        dispatch(getUsers());
        dispatch(
          setAuth({
            userName: user.username,
            userEmail: user.email,
            auth: true,
            error: '',
          }),
        );
      })
      .catch((e) => {
        dispatch(
          setAuth({
            userName: '',
            userEmail: '',
            auth: false,
            error: e.message,
          }),
        );
      });
  };

export default auth;
