import { FC } from 'react';
import { IText } from '../../../commonInterfaces/IText';
import { StyledTextOrange } from './StyledTextOrange';

const TextOrange: FC<IText> = ({ text }) => {
  return <StyledTextOrange>{text}</StyledTextOrange>;
};

export default TextOrange;
