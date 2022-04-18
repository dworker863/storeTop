import { FC } from 'react';
import { IButton } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButton> = ({ type, text, clickHandler, mode }) => {
  return (
    <StyledButton type={type} onClick={clickHandler} mode={mode}>
      {text}
    </StyledButton>
  );
};

export default Button;
