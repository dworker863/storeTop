import axios from 'axios';
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
