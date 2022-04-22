import { FC } from 'react';
import { IButton } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButton> = ({ type, text, clickHandler, mode, favorite }) => {
  return (
    <StyledButton
      type={type}
      onClick={clickHandler}
      mode={mode}
      favorite={favorite}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
