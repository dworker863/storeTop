import { ChangeEvent } from 'react';

export interface IInput {
  id?: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inline?: boolean;
}

export interface IStyledInput {
  inline: boolean;
  width?: string;
}
