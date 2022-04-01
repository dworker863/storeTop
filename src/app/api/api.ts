import { IGoodsState } from './../redux/reducers/IgoodsReducer';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const fetchGoods = (): Promise<IGoodsState> => {
  return instance.get('goods').then((res) => {
    console.log();
    return res.data;
  });
};
