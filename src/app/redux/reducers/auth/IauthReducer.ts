export enum EAuth {
  SET_AUTH = 'SET_AUTH',
  SET_REMEMBER = 'SET_REMEMBER',
}

export interface IAuthState {
  userName: string;
  userEmail: string;
  auth: boolean;
  remember: boolean;
  errorRegistr: string;
  errorLogin: string;
}

export interface IAuth {
  userName: string;
  userEmail: string;
  auth: boolean;
  errorRegistr: string;
  errorLogin: string;
}

export interface ISetAuthAction {
  type: EAuth.SET_AUTH;
  payload: IAuth;
}

export interface ISetRememberAction {
  type: EAuth.SET_REMEMBER;
  payload: boolean;
}

export type TAuthActionTypes = ISetAuthAction | ISetRememberAction;
