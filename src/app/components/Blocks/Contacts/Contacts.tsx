import { FC } from 'react';
import ContactsItem from '../../Elements/ContactsItem/ContactsItem';
import { IContactsItem } from '../../Elements/ContactsItem/IContactsItem';
import { StyledContacts } from './StyledContacts';

const Contacts: FC = () => {
  const contactsData: IContactsItem[] = [
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

  return (
    <StyledContacts>
      {contactsData.map((data, index) => (
        <ContactsItem
          key={index + data.title.split(' ')[0]}
          title={data.title}
          textFirst={data.textFirst}
          textSecond={data.textSecond}
        />
      ))}
    </StyledContacts>
  );
};

export default Contacts;
