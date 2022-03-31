import { FC } from 'react';
import { ISectionTitle } from './ISectionTitle';
import { StyledSectionTitle } from './StyledSectionTitle';

const SectionTitle: FC<ISectionTitle> = ({ text, primary }) => {
  return <StyledSectionTitle primary={primary}>{text}</StyledSectionTitle>;
};

export default SectionTitle;
