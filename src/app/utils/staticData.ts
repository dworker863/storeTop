import { IContactsItem } from '../components/Elements/ContactsItem/IContactsItem';

export const contactsData: IContactsItem[] = [
  {
    title: 'График работы',
    textFirst: 'Пн-Пт - с 09:00 до 17:00',
    textSecond: 'Сб-Вс - выходной',
  },
  {
    title: 'Телефоны для связи',
    textFirst: '+7 (747) 684 13 07',
    textSecond: '+7 (771) 909 00 20',
  },
  {
    title: 'Прием заказов онлайн',
    textFirst: 'Круглосуточно, обработка в рабочее время.',
  },
];

export const navData: any[] = [
  ['/', 'О магазине'],
  ['conditions', 'Условия оплаты и доставки'],
  ['contacts', 'контактная информация'],
  ['reviews', 'отзывы покупателей'],
];

export const cabinetButtonsText: string[] = [
  'Изменить изображение',
  'X Удалить',
];

export const registrationButtonsText: string[] = [
  'Добавить изображение профиля',
];

export const phoneRegExp =
  /^\+[1-9]{1}\s[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/;
