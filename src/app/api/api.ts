import { IUsersState } from './../redux/reducers/users/IusersReducer';
import axios from 'axios';
import { IUser } from '../commonInterfaces/IUser';
import { IGoodsState } from '../redux/reducers/goods/IgoodsReducer';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const fetchGoods = (): Promise<IGoodsState> => {
  return instance.get('goods').then((res) => {
    return res.data;
  });
};

export const fetchUsers = (): Promise<IUsersState> => {
  return instance.get('users').then((res) => {
    return res.data;
  });
};

export const login = (email: string, password: string): Promise<IUser> => {
  return instance
    .post('auth/login', { email, password })
    .then((res: any) => {
      localStorage.setItem('token', res.data.token);
      return res.data.dataValues;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};

export const loginWithToken = (): Promise<IUser> => {
  return instance
    .get('auth', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};

export const registration = (
  username: string,
  email: string,
  password: string,
  phone: string,
  city: string,
  street: string,
  houseNumber: string,
  floor: string,
  flatNumber: string,
  postIndex: string,
  role: string,
  image: any,
): Promise<IUser> => {
  const formData = new FormData();
  formData.append('image', image, image.name);
  const user = {
    username,
    email,
    password,
    phone,
    city,
    street,
    houseNumber,
    floor,
    flatNumber,
    postIndex,
    role,
  };

  for (let key in user) {
    formData.append(key, user[key as keyof typeof user]);
  }

  return instance
    .post('auth/registration', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      return res.data.dataValues;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};

export const updateUser = (user: IUser) => {
  console.log(user.image.name);

  const formData = new FormData();
  formData.append('image', user.image, user.image.name);

  for (let key in user) {
    if (key !== 'image') {
      formData.append(key, user[key as keyof typeof user]);
    }
  }

  return instance
    .put(`users/${user.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};
