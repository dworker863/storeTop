import { MouseEvent } from 'react';

export interface IButton {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  mode?: string;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
  favorite?: boolean;
}

export interface IStyledButton {
  mode?: string;
  favorite?: boolean;
}
