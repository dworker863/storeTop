export enum EAuth {
  SET_AUTH = 'SET_AUTH',
}

export interface IAuthState {
  userName: string;
  userEmail: string;
  auth: boolean;
}

export interface IAuthUser {
  userName: string;
  userEmail: string;
}

export interface ISetAuthAction {
  type: EAuth.SET_AUTH;
  payload: IAuthUser;
}

export type TAuthActionTypes = ISetAuthAction;
