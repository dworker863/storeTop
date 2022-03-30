import { FC } from 'react';
import { IContainer } from './IContainer';
import { StyledContainer } from './StyledContainer';

const Container: FC<IContainer> = ({ type, children }) => {
  return <StyledContainer type={type}>{children}</StyledContainer>;
};

export default Container;
