import { FC } from 'react';
import { IContactsItem } from './IContactsItem';
import {
  StyledContactsItem,
  StyledContactsItemText,
  StyledContactsItemTitle,
  StyledTextGrey,
} from './StyledContactsItem';

const ContactsItem: FC<IContactsItem> = ({
  title,
  textFirst,
  textSecond,
  children,
  textCustom,
}) => {
  return (
    <StyledContactsItem>
      <StyledContactsItemTitle>{title}</StyledContactsItemTitle>
      {textCustom ? (
        <StyledContactsItemText>
          <StyledTextGrey>{textFirst.slice(0, 6)}</StyledTextGrey>
          {textFirst.slice(6)}
        </StyledContactsItemText>
      ) : (
        <StyledContactsItemText>{textFirst}</StyledContactsItemText>
      )}
      {textCustom ? (
        <StyledContactsItemText>
          <StyledTextGrey>{textSecond?.slice(0, 6)}</StyledTextGrey>
          {textSecond?.slice(6)}
        </StyledContactsItemText>
      ) : (
        <StyledContactsItemText>{textSecond}</StyledContactsItemText>
      )}
      {children}
    </StyledContactsItem>
  );
};

export default ContactsItem;
