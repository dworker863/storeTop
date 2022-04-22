import { IGood } from './IGood';
import { IUser } from './IUser';

export interface ISection {
  goods: IGood[];
  user: IUser;
  title: string;
  desc: string;
  discount?: boolean;
  hit?: boolean;
  sliderClass: string[];
}
