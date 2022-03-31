import { FC } from 'react';
import { ILabel } from './ILabel';
import { StyledLabel } from './StyledLabel';

const Label: FC<ILabel> = ({ id, text }) => {
  return <StyledLabel htmlFor={id}>{text}</StyledLabel>;
};

export default Label;
