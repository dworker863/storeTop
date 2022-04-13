import { MouseEvent } from 'react';

export interface IModal {
  active: boolean;
  buttonHandler: (mode: boolean) => void;
}

export interface IStyledModal {
  active: boolean;
  ref?: any;
}

export interface IStyledModalCloseButton {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
