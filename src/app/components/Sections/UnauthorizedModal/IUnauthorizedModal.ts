import { IUser } from '../../../commonInterfaces/IUser';

export interface IUnauthorizedModal {
  active: boolean;
  buttonHandler: (mode: boolean, text: string) => void;
  user: IUser;
  text: string;
}

export interface IStyledOrderModalWrapper {
  active: boolean;
}
