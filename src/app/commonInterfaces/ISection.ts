import { IGood } from './IGood';

export interface ISection {
  goods: IGood[];
  title: string;
  desc: string;
  discount?: boolean;
  hit?: boolean;
  sliderClass: string[];
}
