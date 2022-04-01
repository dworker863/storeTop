import { ReactNode } from 'react';
export interface IContactsItem {
  title: string;
  textFirst: string;
  textSecond?: string;
  children?: ReactNode;
  textCustom?: boolean;
}
