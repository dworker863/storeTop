import { FC } from 'react';
import { ISectionTitle } from './ISectionTitle';
import { StyledSectionTitle } from './StyledSectionTitle';

const SectionTitle: FC<ISectionTitle> = ({ text, primary, margin }) => {
  return (
    <StyledSectionTitle primary={primary} margin={margin}>
      {text}
    </StyledSectionTitle>
  );
};

export default SectionTitle;
