import { FC } from 'react';
import { IButton } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButton> = ({ text, clickHandler, simple }) => {
  return (
    <StyledButton onClick={clickHandler} simple={simple}>
      {text}
    </StyledButton>
  );
};

export default Button;
