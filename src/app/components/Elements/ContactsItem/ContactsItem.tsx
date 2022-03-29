import { FC } from 'react';
import { IContactsItem } from './IContactsItem';
import {
  StyledContactsItem,
  StyledContactsItemText,
  StyledContactsItemTitle,
} from './StyledContactsItem';

const ContactsItem: FC<IContactsItem> = ({ title, textFirst, textSecond }) => {
  return (
    <StyledContactsItem>
      <StyledContactsItemTitle>{title}</StyledContactsItemTitle>
      <StyledContactsItemText>{textFirst}</StyledContactsItemText>
      <StyledContactsItemText>{textSecond}</StyledContactsItemText>
    </StyledContactsItem>
  );
};

export default ContactsItem;
