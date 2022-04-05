import { ChangeEvent } from 'react';

export interface ISelect {
  id: string;
  optionValue: string[];
  changeHandler?: (event: ChangeEvent<HTMLSelectElement>) => void;
}
