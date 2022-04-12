export interface IGoodItem {
  title: string;
  desc: string;
  characteristics: string;
  country: string;
  price: string;
  favorite: boolean;
  image: any;
  discount: string;
  hit: boolean;
}

export interface IStyledSticker {
  mode?: 'discount' | 'hit';
}
