import { FC } from 'react';
import { ITextOrange } from './ITextOrange';
import { StyledTextOrange } from './StyledTextOrange';

const TextOrange: FC<ITextOrange> = ({ text }) => {
  return <StyledTextOrange>{text}</StyledTextOrange>;
};

export default TextOrange;
