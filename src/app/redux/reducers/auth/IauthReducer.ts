export enum EAuth {
  SET_AUTH = 'SET_AUTH',
  SET_REMEMBER = 'SET_REMEMBER',
  SET_USER_IMAGE = 'SET_USER_IMAGE',
}

export interface IAuthState {
  userName: string;
  userEmail: string;
  auth: boolean;
  remember: boolean;
  error: string;
}

export interface IAuth {
  userName: string;
  userEmail: string;
  auth: boolean;
  error: string;
}

export interface ISetAuthAction {
  type: EAuth.SET_AUTH;
  payload: IAuth;
}

export interface ISetRememberAction {
  type: EAuth.SET_REMEMBER;
  payload: boolean;
}

export interface ISetUserImage {
  type: EAuth.SET_USER_IMAGE;
  payload: any;
}

export type TAuthActionTypes =
  | ISetAuthAction
  | ISetRememberAction
  | ISetUserImage;
