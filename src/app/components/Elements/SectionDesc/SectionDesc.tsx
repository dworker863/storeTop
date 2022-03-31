import { FC } from 'react';
import { ISectionDesc } from './ISectionDesc';
import { StyledSectionDesc } from './StyledSectionDesc';

const SectionDesc: FC<ISectionDesc> = ({ text }) => {
  return <StyledSectionDesc>{text}</StyledSectionDesc>;
};

export default SectionDesc;
