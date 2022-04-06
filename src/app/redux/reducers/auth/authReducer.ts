import { AnyAction, ThunkAction, Dispatch } from '@reduxjs/toolkit';
import {
  TAuthActionTypes,
  EAuth,
  IAuthState,
  ISetAuthAction,
  IAuthUser,
} from './IauthReducer';
import { login, registration } from '../../../api/api';
import { getUsers } from '../users/usersReducer';

const initialState: IAuthState = {
  userName: '',
  userEmail: '',
  auth: false,
};

const auth = (state = initialState, action: TAuthActionTypes | any) => {
  switch (action.type) {
    case EAuth.SET_AUTH:
      const authState = {
        ...action.payload,
        auth: action.payload.userName ? false : true,
      };
      console.log(authState);

      return authState;

    default:
      return state;
  }
};

export const setAuth = (userAuth: IAuthUser): ISetAuthAction => ({
  type: EAuth.SET_AUTH,
  payload: userAuth,
});

export const setLogin =
  (
    email: string,
    password: string,
  ): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    login(email, password).then((user) => {
      dispatch(setAuth({ userName: user.username, userEmail: user.email }));
    });
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
    registration(username, tel, email, password, role).then((user) => {
      dispatch(getUsers());
      dispatch(setAuth({ userName: user.username, userEmail: user.email }));
    });
  };

export default auth;
