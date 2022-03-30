import { ReactNode } from 'react';

export interface IContainer {
  type: 'header' | 'common';
  children?: ReactNode;
}

export interface IStyledContainer {
  type: 'header' | 'common';
}
