import { FC } from 'react';
import { IText } from '../../../commonInterfaces/IText';
import { StyledSectionDesc } from './StyledSectionDesc';

const SectionDesc: FC<IText> = ({ text }) => {
  return <StyledSectionDesc>{text}</StyledSectionDesc>;
};

export default SectionDesc;
