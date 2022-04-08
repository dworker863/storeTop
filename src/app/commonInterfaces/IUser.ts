export interface IUser {
  username: string;
  email: string;
  phone: string;
  city: string;
  street: string;
  houseNumber: string;
  floor: string;
  flatNumber: string;
  postIndex: string;
  role?: 'User';
}
