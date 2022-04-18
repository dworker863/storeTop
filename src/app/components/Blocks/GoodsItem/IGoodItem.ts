import { IGood } from '../../../commonInterfaces/IGood';

export interface IGoodItem {
  good: IGood;
}

export interface IStyledSticker {
  mode?: 'discount' | 'hit';
}

export interface IStyledGoodPhoto {
  image: string;
}
