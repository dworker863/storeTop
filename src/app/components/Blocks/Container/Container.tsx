import { FC } from 'react';
import { IContainer } from './IContainer';
import { StyledContainer } from './StyledContainer';

const Container: FC<IContainer> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
