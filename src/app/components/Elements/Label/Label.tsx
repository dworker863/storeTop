import { FC } from 'react';
import { ILabel } from './ILabel';
import { StyledLabel } from './StyledLabel';

const Label: FC<ILabel> = ({ id, text, simple }) => {
  return (
    <StyledLabel htmlFor={id} simple={simple || false}>
      {text}
    </StyledLabel>
  );
};

export default Label;
