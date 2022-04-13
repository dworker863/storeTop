export enum EAuth {
  SET_AUTH = 'SET_AUTH',
}

export interface IAuthState {
  userName: string;
  userEmail: string;
  auth: boolean;
  error: string;
}

export interface ISetAuthAction {
  type: EAuth.SET_AUTH;
  payload: IAuthState;
}

export type TAuthActionTypes = ISetAuthAction;
