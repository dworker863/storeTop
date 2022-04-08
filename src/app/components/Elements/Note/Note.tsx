import { FC } from 'react';
import { StyledNote } from './StyledNote';

const Note: FC = ({ children }) => {
  return <StyledNote>{children}</StyledNote>;
};

export default Note;
