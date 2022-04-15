import { MouseEvent } from 'react';

export interface IButton {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  simple?: boolean;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledButton {
  simple?: boolean;
}
