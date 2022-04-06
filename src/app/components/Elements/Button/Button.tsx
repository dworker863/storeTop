import { FC } from 'react';
import { IButton } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButton> = ({ text, clickHandler }) => {
  return <StyledButton onClick={clickHandler}>{text}</StyledButton>;
};

export default Button;
