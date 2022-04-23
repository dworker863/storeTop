import { loginWithToken } from './../../../api/api';
import { AnyAction, ThunkAction, Dispatch } from '@reduxjs/toolkit';
import {
  TAuthActionTypes,
  EAuth,
  IAuthState,
  ISetAuthAction,
  ISetRememberAction,
  IAuth,
} from './IauthReducer';
import { login, registration } from '../../../api/api';
import { getUsers } from '../users/usersReducer';
import { RootState } from '../../store';

const initialState: IAuthState = {
  userName: '',
  userEmail: '',
  auth: false,
  remember: false,
  errorRegistr: '',
  errorLogin: '',
};

const auth = (state = initialState, action: TAuthActionTypes | any) => {
  switch (action.type) {
    case EAuth.SET_AUTH: {
      const authState = {
        ...state,
        ...action.payload,
      };

      return authState;
    }

    case EAuth.SET_REMEMBER: {
      localStorage.setItem('remember', action.payload);
      console.log(localStorage.getItem('remember'));

      return {
        ...state,
        remember: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setAuth = (userAuth: IAuth): ISetAuthAction => ({
  type: EAuth.SET_AUTH,
  payload: userAuth,
});

export const setRemember = (remember: boolean): ISetRememberAction => ({
  type: EAuth.SET_REMEMBER,
  payload: remember,
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
            errorRegistr: '',
            errorLogin: '',
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
            errorRegistr: '',
            errorLogin: e.message,
          }),
        );
      });
  };

export const setLoginWithToken =
  (): ThunkAction<Promise<ISetAuthAction>, any, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): Promise<ISetAuthAction> => {
    return loginWithToken()
      .then((user) => {
        return dispatch(
          setAuth({
            userName: user.username,
            userEmail: user.email,
            auth: true,
            errorRegistr: '',
            errorLogin: '',
          }),
        );
      })
      .catch((e) => {
        return dispatch(
          setAuth({
            userName: '',
            userEmail: '',
            auth: false,
            errorRegistr: '',
            errorLogin: e.message,
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
    image: any,
  ): ThunkAction<Promise<ISetAuthAction>, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): Promise<ISetAuthAction> => {
    return registration(
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
      image,
    )
      .then((user) => {
        dispatch(getUsers());
        return dispatch(
          setAuth({
            userName: user.username,
            userEmail: user.email,
            auth: true,
            errorRegistr: '',
            errorLogin: '',
          }),
        );
      })
      .catch((e) => {
        return dispatch(
          setAuth({
            userName: '',
            userEmail: '',
            auth: false,
            errorRegistr: e.message,
            errorLogin: '',
          }),
        );
      });
  };

export default auth;
