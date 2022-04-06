import { IUser } from '../../../commonInterfaces/IUser';

export enum EUsers {
  SET_USERS = 'SET_USERS',
}

export interface IUsersState {
  users: IUser[];
}

export interface ISetUsersAction {
  type: EUsers.SET_USERS;
  payload: IUser[];
}

export type TUsersActionTypes = ISetUsersAction;
