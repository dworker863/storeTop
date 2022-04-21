import { IUser } from './../../../commonInterfaces/IUser';
import { addGoodToViewed, fetchUsers, updateUser } from './../../../api/api';
import { ThunkAction, AnyAction, Dispatch } from '@reduxjs/toolkit';
import {
  IUsersState,
  TUsersActionTypes,
  EUsers,
  ISetUsersAction,
} from './IusersReducer';

const initialState: IUsersState = {
  users: [],
};

const users = (state = initialState, action: TUsersActionTypes | any) => {
  switch (action.type) {
    case EUsers.SET_USERS:
      return { users: action.payload };

    default:
      return state;
  }
};

export const setUsers = (users: IUser[]): ISetUsersAction => ({
  type: EUsers.SET_USERS,
  payload: users,
});

export const getUsers =
  (): ThunkAction<void, IUsersState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    fetchUsers().then((users: any) => {
      dispatch(setUsers(users));
    });
  };

export const updateUserInfo =
  (user: IUser): ThunkAction<void, IUsersState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): any => {
    updateUser(user).then((users) => {
      console.log(users);
      dispatch(setUsers(users));
    });
  };

export const setViewedGood =
  (
    email: string,
    goodName: string,
  ): ThunkAction<void, IUsersState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    addGoodToViewed(email, goodName).then((res) => {
      dispatch(getUsers());
    });
  };

export default users;
