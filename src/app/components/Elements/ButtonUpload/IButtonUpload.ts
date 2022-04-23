import { ChangeEvent } from 'react';

export interface IButtonUpload {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  mode?: 'registration' | 'edit' | 'profile' | 'good';
}
