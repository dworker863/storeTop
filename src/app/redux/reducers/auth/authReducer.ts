import { AnyAction, ThunkAction, Dispatch } from '@reduxjs/toolkit';
import {
  TAuthActionTypes,
  EAuth,
  IAuthState,
  ISetAuthAction,
} from './IauthReducer';
import { login, registration } from '../../../api/api';

const initialState: IAuthState = {
  userName: '',
  auth: false,
};

const auth = (state = initialState, action: TAuthActionTypes | any) => {
  switch (action.payload) {
    case EAuth.SET_AUTH:
      return { ...action.payload };

    default:
      return state;
  }
};

export const setAuth = (userName: string): ISetAuthAction => ({
  type: EAuth.SET_AUTH,
  payload: userName,
});

export const setLogin =
  (
    email: string,
    password: string,
  ): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    console.log(11);
    login(email, password).then((user) => dispatch(setAuth(user.username)));
  };

export const setRegistration =
  (
    username: string,
    tel: string,
    email: string,
    password: string,
    role: string,
  ): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>) => {
    registration(username, tel, email, password, role).then((user) =>
      dispatch(setAuth(user.username)),
    );
  };

export default auth;
