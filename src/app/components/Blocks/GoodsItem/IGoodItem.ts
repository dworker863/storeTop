export interface IGoodItem {
  title: string;
  desc: string;
  price: string;
  favorite: boolean;
  discount: string;
  hit: boolean;
}

export interface IStyledSticker {
  mode?: 'discount' | 'hit';
}
