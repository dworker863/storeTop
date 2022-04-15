import { FC } from 'react';
import { IButton } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButton> = ({ type, text, clickHandler, simple }) => {
  return (
    <StyledButton type={type} onClick={clickHandler} simple={simple}>
      {text}
    </StyledButton>
  );
};

export default Button;
