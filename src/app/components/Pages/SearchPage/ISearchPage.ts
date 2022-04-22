import { IUser } from '../../../commonInterfaces/IUser';
import { IGood } from './../../../commonInterfaces/IGood';

export interface ISearchPage {
  goods: IGood[];
  user: IUser;
}
