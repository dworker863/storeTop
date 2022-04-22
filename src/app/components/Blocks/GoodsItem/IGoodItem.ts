import { IGood } from '../../../commonInterfaces/IGood';
import { IUser } from '../../../commonInterfaces/IUser';

export interface IGoodItem {
  good: IGood;
  user: IUser;
}

export interface IStyledSticker {
  mode?: 'discount' | 'hit';
}

export interface IStyledGoodPhoto {
  image: string;
}
