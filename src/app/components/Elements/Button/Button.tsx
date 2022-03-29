import { FC } from 'react';
import { IButton } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButton> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
