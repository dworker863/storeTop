import { IUsersState } from './../redux/reducers/users/IusersReducer';
import axios from 'axios';
import { IUser } from '../commonInterfaces/IUser';
import { IGoodsState } from '../redux/reducers/goods/IgoodsReducer';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const fetchGoods = (): Promise<IGoodsState> => {
  return instance.get('goods').then((res) => {
    return res.data;
  });
};

export const fetchUsers = (): Promise<IUsersState> => {
  return instance.get('users').then((res) => {
    return res.data;
  });
};

export const login = (email: string, password: string): Promise<IUser> => {
  return instance.post('auth/login', { email, password }).then((res) => {
    localStorage.setItem('token', res.data.token);
    return res.data.dataValues;
  });
};

export const registration = (
  username: string,
  tel: string,
  email: string,
  password: string,
  role: string,
): Promise<IUser> => {
  return instance
    .post('auth/registration', {
      username,
      tel,
      email,
      password,
      role,
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      return res.data.dataValues;
    });
};
