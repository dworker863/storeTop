import { IGood } from '../../../commonInterfaces/IGood';
import { IUser } from '../../../commonInterfaces/IUser';

export interface IHomePage {
  goods: IGood[];
  user: IUser;
}
