import { IUser } from '../../../commonInterfaces/IUser';

export interface IUnauthorizedModal {
  active: boolean;
  buttonHandler: (mode: boolean) => void;
  user: IUser;
}
