export enum EAuth {
  SET_AUTH = 'SET_AUTH',
}

export interface IAuthState {
  userName: string;
  auth: boolean;
}

export interface ISetAuthAction {
  type: EAuth.SET_AUTH;
  payload: string;
}

export type TAuthActionTypes = ISetAuthAction;
