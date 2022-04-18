export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  street: string;
  houseNumber: string;
  floor: string;
  flatNumber: string;
  postIndex: string;
  role?: 'User';
  image: any;
}
