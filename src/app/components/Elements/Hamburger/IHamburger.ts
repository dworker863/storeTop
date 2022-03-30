import { MouseEvent } from 'react';

export interface IHamburgerProps {
  hamburgerActive: boolean;
  clickHandler: (event: MouseEvent<HTMLDivElement>) => void;
}
