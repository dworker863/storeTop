import { MouseEvent } from 'react';

export interface IAuthModal {
  active: boolean;
  authButtonHandler: (mode: boolean) => void;
}

export interface IStyledAuthModal {
  active: boolean;
  ref: any;
}

export interface IStyledAuthModalCloseButton {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}
