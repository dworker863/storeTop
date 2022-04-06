import { MouseEvent } from 'react';

export interface IButton {
  text: string;
  type?: string;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
}
