import { MouseEvent } from 'react';

export interface IButton {
  text: string;
  type?: string;
  simple?: boolean;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledButton {
  simple?: boolean;
}
