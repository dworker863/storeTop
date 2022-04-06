import axios from 'axios';
import { IUser } from '../commonInterfaces/IUser';
import { IGoodsState } from '../redux/reducers/goods/IgoodsReducer';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const fetchGoods = (): Promise<IGoodsState> => {
  return instance.get('goods').then((res) => {
    console.log();
    return res.data;
  });
};

export const login = (email: string, password: string): Promise<IUser> => {
  return instance.post('auth/login', { email, password }).then((res) => {
    console.log(res.data);
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
