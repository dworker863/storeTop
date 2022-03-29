import { FC } from 'react';
import { contactsData } from '../../../utils/staticData';
import ContactsItem from '../../Elements/ContactsItem/ContactsItem';
import { StyledContacts, StyledRequest } from './StyledContacts';

const Contacts: FC = () => {
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
      <StyledRequest>Оставить заявку на звонок</StyledRequest>
    </StyledContacts>
  );
};

export default Contacts;
